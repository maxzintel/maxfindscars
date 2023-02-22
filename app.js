const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();

// Bodyparser Middleware for signup data parsing
app.use(bodyParser.urlencoded({extended: true}));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Signup Route
// https://hey.us11.list-manage.com/subscribe/post-json?u=ebda97567f9c04aacd51a54c1&amp;id=0426556e3c&amp;f_id=00c999e0f0
app.post('/signup', (req, res) => {
  const { email } = req.body;

  // Make sure fields are filled.
  if(!email) {
    res.redirect('/fail.html');
    return
  }

  // Construct request data
  // via https://mailchimp.com/developer/marketing/api/list-activity/
  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed'
      }
    ]
  }

  // turn data into a string and call it postData
  const postData = JSON.stringify(data);

  // server prefix = data center. If in the US it looks like us1 or us12 or similar
  const options = {
    url: `https://${process.env.dataCenter}.api.mailchimp.com/3.0/lists/${process.env.listID}`,
    method: 'POST',
    headers: {
      Authorization: `auth ${process.env.apiKey}`
    },
    body: postData
  }

  request(options, (err, response, body) => {
    if(err) {
      console.log(err);
      res.redirect('/fail.html')
    } else {
      if(response.statusCode === 200) {
        res.redirect('/success.html')
      } else {
        res.redirect('/fail.html')
      }
    }
  });
});

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on ${PORT}`));