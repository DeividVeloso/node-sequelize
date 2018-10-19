const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./model");

const app = express();
const PORT = 6000;

const booksRoutes = require("./routes/books");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

app.use("/api", booksRoutes);

app.use("/", (req, res, next) => {
  res.status(200).json(req.body);
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
