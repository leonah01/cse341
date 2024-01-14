const express = require("express");

const mongodb = require("./data/database");
const app = express();

app.use("/", require("./routes"));

const port = 3000;

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
