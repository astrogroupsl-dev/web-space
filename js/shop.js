// Define an array to store cart items
var cartItems = [];

function addToCart(cardId, amount) {
    var card = document.getElementById("donation-card-" + cardId);
    var newItem = {
        id: cardId,
        title: card.querySelector(".card-title").innerText,
        amount: amount
    };
    cartItems.push(newItem);
    updateCartDisplay();
}

function updateCartDisplay() {
    var cartContainer = document.getElementById("cart");
    var cleanCartButton = document.getElementById("clearCart-button");
    var checkoutCartButton = document.getElementById("checkoutCart-button");

    cartContainer.innerHTML = "";
    if (cartItems.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        cleanCartButton.style.display = "none";
        checkoutCartButton.style.display = "none";
    } else {
        cartItems.forEach(function(item) {
            var itemElement = document.createElement("div");
            itemElement.innerHTML = "<p><strong>" + item.title + "</strong> - Amount: $" + item.amount + "</p>";
            cartContainer.appendChild(itemElement);
        });
    }
}

function clearCart() {
    cartItems = [];
    updateCartDisplay();
}

function checkoutCart() {
    window.location.href = "./checkout.html";
}

function toggleCart() {
    var cartContainer = document.getElementById("cartContainer");
    var cart = document.getElementById("cart");
    var toggleButton = document.getElementById("toggleCart-button");
    var cleanCartButton = document.getElementById("clearCart-button");
    var checkoutCartButton = document.getElementById("checkoutCart-button");

    if (cart.style.display === "none") {
        cart.style.display = "block";
        cartContainer.style.width = "auto";
        cartContainer.style.backgroundColor = "#ffffffff";
        toggleButton.innerHTML = "Close Cart";
        if (cartItems.length > 0) {
            cleanCartButton.style.display = "block";
            checkoutCartButton.style.display = "block";
        }

    } else {
        cart.style.display = "none";
        cartContainer.style.width = "fit-content";
        cartContainer.style.backgroundColor = "#ffffff00";
        toggleButton.innerHTML = "Show Cart";
        if (cartItems.length == 0) {
            cleanCartButton.style.display = "none";
            checkoutCartButton.style.display = "none";
        }
    }
}
