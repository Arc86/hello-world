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
    <title>Brew Haven Coffee</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5e5d5;
        }
        header {
            background-color: #3c2f2f;
            color: #fff;
            text-align: center;
            padding: 1rem;
        }
        nav {
            background-color: #6f4e37;
            padding: 0.5rem;
        }
        nav ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
        }
        nav ul li {
            margin: 0 1rem;
        }
        nav ul li a {
            color: #fff;
            text-decoration: none;
        }
        main {
            max-width: 800px;
            margin: 2rem auto;
            padding: 0 1rem;
        }
        .hero {
            text-align: center;
            margin-bottom: 2rem;
        }
        .cta-button {
            display: inline-block;
            background-color: #6f4e37;
            color: #fff;
            padding: 0.5rem 1rem;
            text-decoration: none;
            border-radius: 5px;
        }
        footer {
            background-color: #3c2f2f;
            color: #fff;
            text-align: center;
            padding: 1rem;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>
    <header>
        <h1>Brew Haven Coffee</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <main>
        <section class="hero">
            <h2>Welcome to Brew Haven</h2>
            <p>Discover the perfect blend of flavor and ambiance</p>
            <a href="#menu" class="cta-button">View Our Menu</a>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Brew Haven Coffee. All rights reserved.</p>
    </footer>
</body>
</html>
    `);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
