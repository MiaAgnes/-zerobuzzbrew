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

document.addEventListener('DOMContentLoaded', function() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const listCard = document.querySelector('.listCard');
  const totalPriceSpan = document.querySelector('.total-price');
  let totalPrice = 0;

  function updateCart() {
    listCard.innerHTML = '';
    totalPrice = 0;
    totalPriceSpan.innerHTML = ''; // Clear previous content
    cart.forEach((item, index) => {
      const itemElement = document.createElement('div');
      itemElement.innerHTML = `
        <img src="${item.img}" alt="${item.name}" style="width: 90px; height: auto;">
        ${item.name} - ${item.price} DKK
        <button class="remove-from-cart" data-index="${index}" style="width: 20px; height: 20px;">-</button>
        ${item.quantity}
        <button class="add-to-cart" data-index="${index}" style="width: 20px; height: 20px;">+</button>
      `;
      listCard.appendChild(itemElement);
      totalPrice += item.price * item.quantity;

      // Append item name and price to totalPriceSpan
      const itemInfo = document.createElement('div');
      itemInfo.textContent = `${item.name} - ${item.price} DKK x ${item.quantity}`;
      totalPriceSpan.appendChild(itemInfo);
    });

    // Append total price to totalPriceSpan
    const totalPriceInfo = document.createElement('div');
    totalPriceInfo.textContent = `Total: ${totalPrice} DKK`;
    totalPriceSpan.appendChild(totalPriceInfo);

    // Store total price in localStorage
    localStorage.setItem('totalPrice', totalPrice);
  }

  listCard.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-from-cart')) {
      const index = event.target.getAttribute('data-index');
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else {
        cart.splice(index, 1);
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCart();
    } else if (event.target.classList.contains('add-to-cart')) {
      const index = event.target.getAttribute('data-index');
      cart[index].quantity += 1;
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCart();
    }
  });

  updateCart();
});