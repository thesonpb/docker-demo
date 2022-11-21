const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "hello world" });
});

const port = process.env.PORT || 8080;

app.listen(port, (port) => console.log(`App listening on port ${port}`));
