const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
    ("sk_test_51HfCNqL2Pqwa8uX1HyGC4nHh4TQdmVuPiUTn2c7BpxWO956H4koI8II1tfxam8JITJloZBE2YEJSnhB4BEsCNtcC004242skt0");


// API

// App Config
const app = express();

// Middleware
app.use(cors({
    origin: true
}));

app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello world!!!!!"));

app.post("/payments/create", async (request, response) => {

    const total = request.query.total;

    console.log("Payment Request Received BOOM!!!", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})

// Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-5b9a6/us-central1/api