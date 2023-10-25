const express = require("express");
const app = express();
const port = 80;
app.get("/", (req, res) => {
  res.send("Server 2 working on port 80");
});

app.listen(port, () => {
  console.log(`Example app listeningat server1 http://localhost:${port}`);
});
