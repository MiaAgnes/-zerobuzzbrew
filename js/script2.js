document.addEventListener("DOMContentLoaded", function () {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

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

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function () {
      let productId = this.getAttribute("id");
      let productName = this.getAttribute("name");
      let productPrice = this.getAttribute("data-price");
      let productImg = this.getAttribute("data-img");

      let product = {
        id: productId,
        name: productName,
        price: parseFloat(productPrice),
        img: productImg,
      };

      addToCart(product);
      scrollToTop(); // Call scrollToTop after adding the product to the cart
    });
  });

  updateCartCount();
});