const express = require("express");
const cors = require("cors")
const app = express();
const port = 8000;

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`)
})