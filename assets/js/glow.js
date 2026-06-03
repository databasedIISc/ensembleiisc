document.addEventListener('DOMContentLoaded', function() {
const qualityToggle = document.querySelector('#quality-toggle');

function qualityMode() {
if (document.body.classList.contains('quality-mode')) {
    document.querySelectorAll('.glow-card').forEach(card => {
        let scanlines = document.createElement('div');
        scanlines.classList.add('scanlines');
        let hoverGlow = document.createElement('div');
        hoverGlow.classList.add('hover-glow');
        card.prepend(hoverGlow);
        card.prepend(scanlines);
    });
    
    document.querySelectorAll('*:has(> .hover-glow)').forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
    
            element.style.setProperty('--mouse-x', `${x}px`);
            element.style.setProperty('--mouse-y', `${y}px`);
        });
    });
} else {
    document.querySelectorAll('.scanlines').forEach(el => el.remove());
    document.querySelectorAll('.hover-glow').forEach(el => el.remove());
}
}

if (qualityToggle.checked) {
    qualityMode();
}

qualityToggle.addEventListener('change', qualityMode);


});

