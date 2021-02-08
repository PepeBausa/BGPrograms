const express = require('express');
const app = express();

const port = process.env.port || 80;
app.listen(port, () => {
    console.log("Sever console log.")
});