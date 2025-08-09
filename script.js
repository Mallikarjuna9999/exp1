const products = [
    { id: 1, name: "T-Shirt", price: 500, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQNJIFzdwR0muFodhvOu9SzwEthG5yIxVffoIZEkzE89VUphspcTtWgnxHlQQUlJMu-tDk_o7QE8WRkUBDT6MoGqMqpxXv1h8_XYFJ6PtIwlIQ8ol-EMO4i" },
    { id: 2, name: "Jeans", price: 1200, image: "https://jimmyluxury.in/cdn/shop/files/IMG_7020.jpg?v=1749016690" },
    { id: 3, name: "Sneakers", price: 2500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9e4wLBlcLIEbNN83It7sn3USZDb3aUNDnnQ&s" },
    { id: 4, name: "Watch", price: 1500, image: "https://images-cdn.ubuy.qa/65635920a51038204e5b7555-basumiu-mens-sports-watches-waterproof.jpg" }
];

let cart = [];

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");
const cartSection = document.getElementById("cart-section");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// Render products
function displayProducts() {
    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(div);
    });
}

// Add product to cart
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    cartCount.textContent = cart.length;
    updateCart();
}

// Update cart UI
function updateCart() {
    cartSection.classList.remove("hidden");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    cartTotal.textContent = total;
}

displayProducts();
