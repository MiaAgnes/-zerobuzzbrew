"use strict"
document.addEventListener("DOMContentLoaded", function () {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsContainer = document.querySelector(".listCard");
  const totalPriceElement = document.querySelector(".total-price");
  const cartCountElement = document.querySelector(".quantity");

  // Function to update the cart count in the navbar
  function updateCartCount() {
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCountElement) {
      cartCountElement.textContent = totalItems;
    }
  }

  // Function to calculate and update the total price
  function updateTotalPrice() {
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      totalPriceElement.textContent = total.toFixed(2) + " DKK";
  }

  // Function to display cart items
  function displayCart() {
      cartItemsContainer.innerHTML = ""; // Clear previous items

      if (cart.length === 0) {
          cartItemsContainer.innerHTML = "<p>Din kurv er tom</p>";
          updateTotalPrice();
          return;
      }
  cart.forEach((item, index) => {
         // Debugging: Check if quantity is defined
       if (item.quantity === undefined) {
        console.error(`Item at index ${index} has undefined quantity:`, item);
        item.quantity = 1; // Ensure default quantity
      }

        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <div class="cart-item-info">
               <img src="${item.img || 'img/default-image.png'}" alt="${item.name}" width="100">
                <p>${item.name} - ${item.price.toFixed(2)} DKK</p>
                
                <p>Quantity: <span class="item-quantity">${item.quantity}</span></p>
           <div class="cart-item-buttons">
            <button class="remove-item" data-index="${index}">-</button>
           <button class="reset-item" onclick="resetCart('product');">0</button>
            <button class="add-item" data-index="${index}">+</button>
         </div>
          </div>
        `;
          cartItemsContainer.appendChild(cartItem);
      });
      
      updateTotalPrice();
  }

  document.body.addEventListener("click", function (event) {
    let index = event.target.getAttribute("data-index");
    if (index !== null) {
      index = parseInt(index); // Convert to number
    }
    if (event.target.classList.contains("add-to-cart")) {
      let product = {
        id: event.target.getAttribute("data-id"),
        name: event.target.getAttribute("data-name"),
        price: parseFloat(event.target.getAttribute("data-price")),
        img: event.target.getAttribute("data-img"),
        quantity: 1, // Start with 1 quantity
      };

      let existingProduct = cart.find((p) => p.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push(product);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      displayCart();
    }
    if (event.target.classList.contains("remove-item")) {
        if (cart[index].quantity > 1) {
          cart[index].quantity -= 1;
        } else {
          cart.splice(index, 1);
        }
  
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        displayCart();
      }
      if (event.target.classList.contains("reset-item")) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        displayCart();
      }
  
      if (event.target.classList.contains("add-item")) {
        cart[index].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        displayCart();
      }
    });
  
    // Initialize cart display when the page loads
    updateCartCount();
    displayCart();
  });
  