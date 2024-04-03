// Define an array to store cart items
var cartItems = [];

function addToCart(cardId, amount) {
    // Find the donation card element
    var card = document.getElementById("donation-card-" + cardId);
    
    // Create a new cart item object
    var newItem = {
        id: cardId,
        title: card.querySelector(".card-title").innerText,
        amount: amount
    };
    
    // Add the item to the cartItems array
    cartItems.push(newItem);
    
    // Update the cart display
    updateCartDisplay();
}

function updateCartDisplay() {
    var cartContainer = document.getElementById("cart");
    
    // Clear the cart container
    cartContainer.innerHTML = "";
    
    // Check if there are items in the cart
    if (cartItems.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        // Loop through each item in the cartItems array
        cartItems.forEach(function(item) {
            // Create HTML elements for displaying the item
            var itemElement = document.createElement("div");
            itemElement.innerHTML = "<p><strong>" + item.title + "</strong> - Amount: $" + item.amount + "</p>";
            cartContainer.appendChild(itemElement);
        });
    }
}

function toggleCart() {
    var cart = document.getElementById("cart");
    var toggleButton = document.getElementById("toggleCart-button");
    if (cart.style.display === "none") {
        cart.style.display = "block";
        toggleButton.innerHTML = "Close Cart";
    } else {
        cart.style.display = "none";
        toggleButton.innerHTML = "Show Cart";
    }
}
