const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51HfCNqL2Pqwa8uX1HyGC4nHh4TQdmVuPiUTn2c7BpxWO956H4koI8II1tfxam8JITJloZBE2YEJSnhB4BEsCNtcC004242skt0"
)

// API Key from Stripe WebSite above.

// App Config
const app = express();

// Middleware
app.use(cors({
    origin: true
}));
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("Hello world!!!"))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total
    console.log("Payment Requested Received BOOM!!!", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen Command
exports.api = functions.https.onRequest(app);