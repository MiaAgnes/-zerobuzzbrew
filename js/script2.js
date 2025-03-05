document.addEventListener("DOMContentLoaded", function () {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function updateCartCount() {
    document.querySelector(".quantity").textContent = cart.length;
  }

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function () {
      let productId = this.getAttribute("id");
      let productName = this.getAttribute("name");
      let productPrice = this.getAttribute("price");

      let product = {
        id: productId,
        name: productName,
        price: parseFloat(productPrice),
				img:img ="${image}",
      };

      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
    });
  });

  updateCartCount();
});

