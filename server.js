//server.js
const express = require("express");
const bodyParser = require("body-parser");
const { sendEmail } = require("./mail");

const app = express();
const port = process.env.PORT || 3007;

// Parse application/json
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/email-send", async (req, res) => {
  try {
    await sendEmail();
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    res.status(500).send("Error occurred: " + error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
