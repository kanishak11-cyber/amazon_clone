const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

// API

// ~API config
const app = express();
// ~middlewares
app.use(cors({origin: true}));
app.use(express.json());
// ~routes
app.get("/", (request, response) => response.status(200).send("Hello World!"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment request received for amount: ", total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// http://localhost:5001/clone-3d278/us-central1/api
exports.api = functions.https.onRequest(app);
