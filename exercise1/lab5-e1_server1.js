const express = require("express");
const app = express();
const port = 4000;
app.get("/", (req, res) => {
  res.send("Server 1 working on port 4000");
});

app.listen(port, () => {
  console.log(`Example app listeningat server1 http://localhost:${port}`);
});
