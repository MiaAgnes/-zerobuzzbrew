document.getElementById('hjem-chekbox').addEventListener('change', function() {
    document.getElementById('hjem-section').style.display = this.checked ? 'block' : 'none';
});

document.getElementById('hent-chekbox').addEventListener('change', function() {
    document.getElementById('hent-section').style.display = this.checked ? 'block' : 'none';
});

// Initial state
document.getElementById('hjem-section').style.display = document.getElementById('hjem-chekbox').checked ? 'block' : 'none';
document.getElementById('hent-section').style.display = document.getElementById('hent-chekbox').checked ? 'block' : 'none';