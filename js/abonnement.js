"use strict"


document.addEventListener('DOMContentLoaded', () => {
    const addToCartsButtons = document.querySelectorAll('.add-to-cart');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    

    addToCartsButtons.forEach(button =>{
        button.addEventListener('click', () => {
            const itemName = button.getAttribute('data-item-name');
            const itemPrice = button.getAttribute('data-item-price');
    
            const newItem = {name: itemName, price: itemPrice};
    
            cart.push(newItem);
    
            localStorage.setItem('cart', JSON.stringify(cart))
        })
    })

})

