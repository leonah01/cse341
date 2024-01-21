const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./data/database");
const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  next();
});
app.use("/", require("./routes"));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(process.env.PORT || port, () => {
      console.log(
        "Database is listening and node Running on port " +
          (process.env.PORT || 3000)
      );
    });
  }
});
