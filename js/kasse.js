




// gør så når man trykker på checkboxen hjem-chek viser det eller fjener det mugligheder for hvor du kan hente tingene. 
document.getElementById('hjem-chekbox').addEventListener('change', function() {
    const hjemSections = [
        'dao1-section',
        'dao2-section',
        'gls-section',
        'post-section'
    ];

    hjemSections.forEach(sectionId => {
        document.getElementById(sectionId).style.display = this.checked ? 'block' : 'none';
    });
});

// Initial state
const hjemSections = [
    'dao1-section',
    'dao2-section',
    'gls-section',
    'post-section'
];

hjemSections.forEach(sectionId => {
    document.getElementById(sectionId).style.display = document.getElementById('hjem-chekbox').checked ? 'block' : 'none';
});


// gør så når man trykker på checkboxen hent-chek viser det eller fjener det mugligheder for hvor du kan hente tingene. 
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
});



