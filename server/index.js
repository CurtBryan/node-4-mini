require("dotenv").config();
const express = require("express");
const session = require("express-session");
let { SERVER_PORT, SESSION_SECRET } = process.env;
const app = express();
const { getAllMessages, createMessage, history } = require("./messagesCtrl");
app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60
    }
  })
);
app.get("/api/messages", getAllMessages);
app.get("/api/messages/history", history);
app.post("/api/messages", createMessage);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
});
