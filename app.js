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
            max-width: 1000px;
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
        .menu-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
        }
        .menu-item {
            background-color: #fff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .menu-item img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        .menu-item-content {
            padding: 1rem;
        }
        .menu-item h3 {
            margin: 0 0 0.5rem;
        }
        .menu-item p {
            margin: 0;
            color: #666;
        }
        footer {
            background-color: #3c2f2f;
            color: #fff;
            text-align: center;
            padding: 1rem;
            margin-top: 2rem;
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
        
        <section id="menu">
            <h2>Our Coffee Menu</h2>
            <div class="menu-grid">
                <div class="menu-item">
                    <img src="/_43ec8d67-394f-4d22-8695-8725e564c7e3.jpg" alt="Espresso">
                    <div class="menu-item-content">
                        <h3>Classic Espresso</h3>
                        <p>Rich and intense shot of pure coffee goodness</p>
                    </div>
                </div>
                <div class="menu-item">
                    <img src="/_adcec9ea-21cb-4015-84d8-7251b2f5c2ac.jpg" alt="Cappuccino">
                    <div class="menu-item-content">
                        <h3>Creamy Cappuccino</h3>
                        <p>Espresso with steamed milk and a generous layer of foam</p>
                    </div>
                </div>
                <div class="menu-item">
                    <img src="/_78f96312-8e78-41d7-b507-92ac13eef3db.jpg" alt="Latte">
                    <div class="menu-item-content">
                        <h3>Smooth Latte</h3>
                        <p>Espresso with steamed milk and a light layer of foam</p>
                    </div>
                </div>
                <div class="menu-item">
                    <img src="/_ef4b0193-edcd-4b14-90c7-e77686c39f5f.jpg" alt="Mocha">
                    <div class="menu-item-content">
                        <h3>Chocolate Mocha</h3>
                        <p>Espresso with steamed milk, chocolate, and whipped cream</p>
                    </div>
                </div>
            </div>
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
