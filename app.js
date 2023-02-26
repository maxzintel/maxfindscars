const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();

// Bodyparser Middleware for signup data parsing
app.use(bodyParser.urlencoded({ extended: true }));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

const options = {
  method: 'POST',
  url: `https://api.beehiiv.com/v2/publications/${process.env.beehiivPubID}/subscriptions`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.beehiivKey}`,
  },
  json: true,
};

// Signup Route
app.post('/signup', (req, res) => {
  const { email } = req.body;

  // Make sure fields are filled.
  if (!email) {
    res.redirect('/fail.html');
    return;
  }

  options.body = {
    publication_id: `${process.env.beehiivPubID}`,
    email: email,
    reactivate_existing: false,
    send_welcome_email: false,
    utm_source: 'website',
    utm_campaign: 'maxfindscars',
    utm_medium: 'organic',
  };

  request(options, (error, response, body) => {
    if (error) {
      console.log(error);
      console.log('Request Failed with Above Error.');
      res.redirect('/fail.html');
    } else {
      if (body.data.status === 'validating') {
        console.log('Your email address is validating...');
        checkStatus(body.data.id, res);
      } else if (body.data.status === 'active') {
        console.log('Your subscription is active! You will be receiving emails soon!');
        res.redirect('/success.html');
      } else {
        res.redirect('/fail.html');
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
      console.log('Request Failed with Above Error.');
      res.redirect('/fail.html');
    } else if (body && body.data && body.data.status) {
      const status = body.data.status;
      if (status === 'validating') {
        // If the status is still 'validating', wait 2 seconds and make another request
        setTimeout(() => {
          checkStatus(id, res);
        }, 2000);
      } else if (status === 'active') {
        // If the status is 'active', redirect the user to the success page
        console.log('Your subscription is active! You will be receiving emails soon!');
        res.redirect('/success.html');
      } else {
        console.log('Request Failed for an Unknown Reason.');
        res.redirect('/fail.html');
      }
    }
  });
}

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on ${PORT}`));