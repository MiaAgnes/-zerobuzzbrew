document.addEventListener("DOMContentLoaded", function () {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItems = document.querySelector(".listCard");
  const totalPrice = document.querySelector(".total-price");

  function displayCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      let cartItem = document.createElement("div");
      cartItem.innerHTML = `
      img
        <p>${item.name} - ${item.price} DKK</p>
        <button class="remove-item" data-index="${index}">Remove</button>
        <button class="add-item" data-index="${index}">Add</button>
      `;
      cartItems.appendChild(cartItem);
      total += item.price;
    });

    totalPrice.textContent = total.toFixed(2);
    console.log("Total Price:", total);
  }

  cartItems.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-item")) {
      let index = event.target.getAttribute("data-index");
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      displayCart();
    }
  });

  displayCart();
});
