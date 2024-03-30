// Sample product data (you can replace this with your actual product data)
const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Smartphone', price: 599 },
    { id: 3, name: 'Tablet', price: 299 },
    // Add more products as needed
];

document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products');
    const cartItemsContainer = document.getElementById('cart-items');
    const checkoutBtn = document.getElementById('checkout-btn');

// Display products
products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product');
    productCard.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button class="add-to-cart" data-id="${product.id}">
            <img src="./icons/cart.png" alt="Add to Cart"> Add to Cart
        </button>`;
    productsContainer.appendChild(productCard);
});

    // Add event listener for Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Add item to cart
    function addToCart(event) {
        const productId = parseInt(event.target.dataset.id);
        const product = products.find(p => p.id === productId);
        const cartItem = document.createElement('li');
        cartItem.textContent = `${product.name} - $${product.price}`;
        cartItemsContainer.appendChild(cartItem);
    }

    // Checkout
    checkoutBtn.addEventListener('click', () => {
        alert('Checkout functionality is not implemented yet!');
    });
});
