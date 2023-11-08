const express = require("express");
const app = express();
const port = 3000;

//this is swagger code to import
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//this is swagger code to import

const calculatorRouter = require("./routes/calculatorRoutes");

app.use("/", express.static("public"));
app.use("/calculator", calculatorRouter);

app.listen(port, () => {
  console.log(`Port listening at http:localhost:${port}`);
});
