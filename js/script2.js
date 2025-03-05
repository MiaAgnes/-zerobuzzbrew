"use strict"
document.addEventListener("DOMContentLoaded", function () {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsContainer = document.querySelector(".listCard");
  const totalPriceElement = document.querySelector(".total-price");

  // Function to update the cart count in the navbar
  function updateCartCount() {
    document.querySelector(".quantity").textContent = cart.length;
  }
 // Function to update the total price
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function () {
      let productId = this.getAttribute("id");
      let productName = this.getAttribute("name");
      let productPrice = this.getAttribute("price");
      let productImg = this.getAttribute("img");
      let product = {
        id: productId,
        name: productName,
        price: parseFloat(productPrice),
				img: productImg || "img/default-image.png",
      };

      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
    });
  });

  updateCartCount();
});
