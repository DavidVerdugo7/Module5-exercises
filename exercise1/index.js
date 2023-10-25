const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello World!  Server 0 working on port 3000");
});

app.listen(port, () => {
  console.log(`Example app listeningat server0 http://localhost:${port}`);
});
// app.use("/", express.static("public"));
