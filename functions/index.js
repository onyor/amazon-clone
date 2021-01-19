const functions = require('firebase-functions');

const express = require('express');

const cors = require('cors');

const stripe = require('stripe')(
  'sk_test_51IB8mNC5bWYCFDjdangwTmxukrQ2I9CpWRP6MFtANPoAhhV9IeLu4RPnKpzbttyoLbJAu2bEp4FZQ2wrOHX9LsVi00hiZd53mH'
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challange-5f62a/us-central1/api
