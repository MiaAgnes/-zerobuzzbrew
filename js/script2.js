document.addEventListener("DOMContentLoaded", function () {
  let cart = JSON.parse(localStorage.getItem("cart"));

  function updateCartCount() {
    document.querySelector(".quantity").textContent = cart.reduce((total, item) => total + item.quantity, 0);
  }

  function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      product.quantity = 1;
      cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  }

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
        img: productImg,
      };

      addToCart(product);

    });
  });
  updateCartCount();
});




