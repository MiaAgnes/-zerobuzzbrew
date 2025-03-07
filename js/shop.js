`use strict`;

document.addEventListener('DOMContentLoaded', function() {
   document.querySelectorAll('.produkt-card').forEach(function(card) {
     card.addEventListener('click', function(event) {
       if (!event.target.closest('.add-to-cart')) {
         window.location.href = card.getAttribute('data-url');
       }
     });
   });
 });