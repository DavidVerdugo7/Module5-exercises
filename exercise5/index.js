const express = require("express");
const app = express();
const port = 3000;

const calculatorRouter = require("./routes/calculatorRoutes");

app.use("/", express.static("public"));
app.use("/calculator", calculatorRouter);

app.listen(port, () => {
  console.log(`Port listening at http:localhost:${port}`);
});
