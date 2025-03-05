`use strict`;

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});
