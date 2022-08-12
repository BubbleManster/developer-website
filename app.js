const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/css"));


app.set("views", "./src/views");
app.set("view engine", "ejs");

const indexRouter = require("./src/routes/index");
const socialRouter = require("./src/routes/social");

app.use("/", indexRouter);
app.use("/social", socialRouter);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
