document.getElementById('hent-chekbox').addEventListener('change', function() {
    const hentSections = [
        'dao1-hent-section',
        'dao2-hent-section',
        'gls-hent-section',
        'post-hent-section'
    ];

    hentSections.forEach(sectionId => {
        document.getElementById(sectionId).style.display = this.checked ? 'block' : 'none';
    });
});

// Initial state
const hentSections = [
    'dao1-hent-section',
    'dao2-hent-section',
    'gls-hent-section',
    'post-hent-section'
];

hentSections.forEach(sectionId => {
    document.getElementById(sectionId).style.display = document.getElementById('hent-chekbox').checked ? 'block' : 'none';