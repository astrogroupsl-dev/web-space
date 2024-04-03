// Initialize an empty cart
let cart = [];

// Function to handle add to cart button click
function handleAddToCartButtonClick() {
    document.querySelectorAll('.donation-card-input-button').forEach((button, index) => {
        button.addEventListener('click', function() {
            let amountInput = document.querySelectorAll('.donation-card-input-number')[index];
            addToCart(button.parentNode.querySelector('h2').innerText, parseFloat(amountInput.value));
            amountInput.value = ''; // Reset input field after adding to cart
            updateCartDisplay(); // Update cart display after adding item
            updateCheckoutSummary(); // Update checkout summary after adding item
        });
    });
}

// Add event listener after DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    handleAddToCartButtonClick(); // Call the function to handle add to cart button click
});

// Function to add a donation to the cart
function addToCart(title, amount) {
    if (amount <= 0) {
        alert('Enter a donation amount before add to cart');
        return;
    }
    let donation = {
        title: title,
        amount: amount,
        selected: false
    };
    cart.push(donation);
}

// Function to select/deselect a donation
function toggleDonationSelection(index) {
    cart[index].selected = !cart[index].selected;
}

// Function to delete selected donations
function deleteSelectedDonations() {
    cart = cart.filter(donation => !donation.selected);
}

// Function to checkout
function checkout() {
    let total = 0;
    cart.forEach(donation => {
        if (donation.selected) {
            total += donation.amount;
        }
    });
    if (total > 0) {
        alert('Proceeding to payment process...');
        // Proceed with the payment process here
    } else {
        alert('No donations selected for checkout');
    }
}

// Function to handle cart button click
document.getElementById('cart-button').addEventListener('click', function() {
    document.getElementById('cart-window').style.display = 'block';
});

// Function to update cart display
function updateCartDisplay() {
    let orderSummary = document.getElementById('order-summary');
    orderSummary.innerHTML = ''; // Clear previous content
    cart.forEach((donation, index) => {
        let donationItem = document.createElement('div');
        donationItem.innerHTML = `<p>${donation.title}: $${donation.amount.toFixed(2)}</p><input type="checkbox" onchange="toggleDonationSelection(${index})" ${donation.selected ? 'checked' : ''}>`;
        orderSummary.appendChild(donationItem);
    });
}

// Function to update checkout summary
function updateCheckoutSummary() {
    let checkoutSummary = document.getElementById('checkout-summary');
    let total = cart.reduce((acc, donation) => acc + (donation.selected ? donation.amount : 0), 0);
    checkoutSummary.innerHTML = `<p>Total: $${total.toFixed(2)}</p><button onclick="checkout()">Checkout</button>`;
}

// Update cart and checkout summary initially
updateCartDisplay();
updateCheckoutSummary();
