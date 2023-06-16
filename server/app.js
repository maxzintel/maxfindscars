const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      frameSrc: ["'self'", 'www.youtube.com'], // Allow iFrames from YouTube
    },
  })
);

const allowedOrigins = [
  'https://maxfindscars.com',
  'https://www.maxfindscars.com'
];

if (process.env.NODE_ENV !== 'production') {
  allowedOrigins.push('http://localhost:3000');
}

const corsOptions = {
  origin: allowedOrigins,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));


// Bodyparser Middleware for signup data parsing
app.use(bodyParser.json());

// Static folder
app.set('views', path.join(__dirname, 'client', 'public', 'views'));
app.use(express.static(path.join(__dirname, 'client', 'public')));

const options = {
  method: 'POST',
  url: `https://api.beehiiv.com/v2/publications/${process.env.beehiivPubID}/subscriptions`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.beehiivKey}`,
  },
  json: true,
};

const get_recentposts = {
  method: 'GET',
  url: `https://api.beehiiv.com/v2/publications/${process.env.beehiivPubID}/posts`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.beehiivKey}`,
  },
  qs: {
    // To do only show delivered posts on site.
    status: 'confirmed',
    platform: 'both'
  },
  json: true,
}

// get posts
app.get('/recentposts', async (req, res) => {
  let currentPage = 1;
  let totalPages;
  let allPosts = [];

  do {
    const currentPagePosts = await new Promise((resolve, reject) => {
      request(
        {
          ...get_recentposts,
          qs: {
            ...get_recentposts.qs,
            page: currentPage,
          },
        },
        (error, response, body) => {
          if (error) {
            reject(error);
          }
          resolve(body);
        }
      );
    });

    totalPages = currentPagePosts.total_pages;
    allPosts = allPosts.concat(currentPagePosts.data);
    currentPage++;
  } while (currentPage <= totalPages);

  // Sort the posts array by publish_date in descending order
  const sortedPosts = allPosts.sort((a, b) => b.publish_date - a.publish_date);

  // Get the most recent 3 posts
  const recentPosts = sortedPosts.slice(0, 3);

  // Return the recentPosts data as a JSON object
  res.json({ posts: recentPosts });
});


app.get('/api/posts/:slug/:postId', (req, res) => {
  console.log('request parameters:', req.params);
  console.log(req.params.slug);
  console.log(req.params.postId);

  const slug = req.params.slug;
  const postId = req.params.postId;
  const get_post = {
    method: 'GET',
    // Don't think we have access to postId properly here yet.
    url: `https://api.beehiiv.com/v2/publications/${process.env.beehiivPubID}/posts/${postId}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.beehiivKey}`,
    },
    qs: {
      status: 'confirmed',
      platform: 'both',
      'expand[]': 'free_web_content',
    },
    json: true,
  };

  request(get_post, (error, response, body) => {
    if (error) {
      res.sendStatus(400);
      throw new Error(error);
    } else {
      console.log(body.data);
      const post = body.data
      // const post = body.data.find((post) => post.slug === slug);
      if (post && post.slug === slug) {
        res.json({ post: post });
      } else {
        res.sendStatus(404);
      }
    }
  });
});


// Signup Route
app.post('/signup', (req, res) => {
  const { email, utm_source, utm_campaign, utm_medium } = req.body;

  // Make sure fields are filled.
  if (!email) {
    res.sendStatus(400);
    return;
  }

  options.body = {
    publication_id: `${process.env.beehiivPubID}`,
    email: email,
    reactivate_existing: false,
    send_welcome_email: true,
    utm_source: utm_source,
    utm_campaign: utm_campaign,
    utm_medium: utm_medium,
  };

  request(options, (error, response, body) => {
    if (error) {
      console.log(error);
      console.log('Request Failed with Above Error.');
      res.sendStatus(400);
    } else {
      if (body.data.status === 'validating') {
        console.log('Your email address is validating...');
        checkStatus(body.data.id, res);
      } else if (body.data.status === 'active') {
        res.sendStatus(200);
      } else {
        res.sendStatus(400);
        console.log('Request Failed for an Unknown Reason.');
      }
      console.log(body);
    }
  });
});

function checkStatus(id, res) {
  const options = {
    method: 'GET',
    url: `https://api.beehiiv.com/v2/publications/${process.env.beehiivPubID}/subscriptions/${id}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.beehiivKey}`,
    },
    json: true,
  };

  // make an API request to check the subscription status
  request(options, (error, response, body) => {
    if (error) {
      console.log(error);
      res.sendStatus(400);
    } else if (body && body.data && body.data.status) {
      const status = body.data.status;
      if (status === 'validating') {
        // If the status is still 'validating', wait 2 seconds and make another request
        setTimeout(() => {
          checkStatus(id, res);
        }, 2000);
      } else if (status === 'active') {
        // If the status is 'active', redirect the user to the success page
        res.sendStatus(200);
      } else {
        console.log('Request Failed for an Unknown Reason.');
        res.sendStatus(400);
      }
    }
  });
}

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('*', (req, res, next) => {
  if (
    req.originalUrl.startsWith('/api/') ||
    req.originalUrl.startsWith('/recentposts') ||
    req.originalUrl.startsWith('/signup')
  ) {
    // If the request starts with '/api/', '/recentposts', or '/signup', proceed to the next middleware
    next();
  } else {
    // Otherwise, serve the React app's index.html file
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  }
});



const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on ${PORT}`));
