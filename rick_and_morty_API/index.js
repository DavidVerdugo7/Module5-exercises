const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const rmRoutes = require("./Routes/rmRoutes");

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.static(path.join(__dirname, "public"), {
    "Content-Type": "application/json",
  })
);

app.use(express.json());

app.use("/api", rmRoutes);

app.listen(port, () => {
  console.log(`Port listening at http://localhost:${port}`);
});
