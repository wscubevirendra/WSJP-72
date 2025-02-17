const http = require('http');
const { json } = require('stream/consumers');
const url = require("url")


//http://localhost:5000/users?name=%22hitesh%22

//http://localhost:5000---Domain
// /users ----pathname
//?name=%22hitesh%22  ----Query
const category = [
    {
        name: "Mobile Phone",
        slug: "mobile-phone"
    },
    {
        name: "Laptops",
        slug: "laptops"
    },
    {
        name: "Tablets",
        slug: "tablets"
    },
    {
        name: "Smart Watches",
        slug: "smart-watches"
    },
    {
        name: "Headphones",
        slug: "headphones"
    },
    {
        name: "Cameras",
        slug: "cameras"
    },
    {
        name: "Gaming Consoles",
        slug: "gaming-consoles"
    }
]

const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        category: "Mobile Phone",
        price: 999,
        slug: "iphone-15-pro",
        stock: 15,
        rating: 4.8,
        image: "iphone-15-pro.jpg"
    },
    {
        id: 2,
        name: "Samsung Galaxy S23 Ultra",
        category: "Mobile Phone",
        price: 1199,
        slug: "samsung-galaxy-s23-ultra",
        stock: 10,
        rating: 4.7,
        image: "samsung-galaxy-s23-ultra.jpg"
    },
    {
        id: 3,
        name: "MacBook Air M2",
        category: "Laptops",
        price: 1299,
        slug: "macbook-air-m2",
        stock: 8,
        rating: 4.9,
        image: "macbook-air-m2.jpg"
    },
    {
        id: 4,
        name: "Dell XPS 13",
        category: "Laptops",
        price: 1099,
        slug: "dell-xps-13",
        stock: 12,
        rating: 4.6,
        image: "dell-xps-13.jpg"
    },
    {
        id: 5,
        name: "iPad Pro 12.9",
        category: "Tablets",
        price: 1099,
        slug: "ipad-pro-12-9",
        stock: 20,
        rating: 4.8,
        image: "ipad-pro-12-9.jpg"
    },
    {
        id: 6,
        name: "Sony WH-1000XM5",
        category: "Headphones",
        price: 399,
        slug: "sony-wh-1000xm5",
        stock: 30,
        rating: 4.7,
        image: "sony-wh-1000xm5.jpg"
    }
]


const colors = [
    { name: "Red", hex: "#FF0000", slug: "red" },
    { name: "Blue", hex: "#0000FF", slug: "blue" },
    { name: "Green", hex: "#008000", slug: "green" },
    { name: "Yellow", hex: "#FFFF00", slug: "yellow" },
    { name: "Black", hex: "#000000", slug: "black" }
]

const server = http.createServer(
    (req, res) => {
        const urlParse = url.parse(req.url)
        console.log(urlParse.pathname)
        if (urlParse.pathname == "/category") {
            res.end(JSON.stringify(category))
        } else if (urlParse.pathname == "/product") {
            res.end(JSON.stringify(products))
        } else if (urlParse.pathname == "/colors") {
            res.end(JSON.stringify(colors))
        } else {
            res.end("404")
        }


    }
)

server.listen(
    5000,
    () => {
        console.log("server started")
    }
)