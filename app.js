// app.js
const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello World</title>
        </head>
        <body>
            <h1>Hello World!</h1>
            <img src="/hello-world.png" alt="Hello World Image" />
        </body>
        </html>
    `);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
