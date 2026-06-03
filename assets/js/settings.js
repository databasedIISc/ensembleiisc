document.addEventListener('DOMContentLoaded', function() {
    const glowToggle = document.querySelector('#glow-toggle');
    const qualityToggle = document.querySelector('#quality-toggle');

    // Load Settings
    const savedGlowSetting = localStorage.getItem('glowEnabled');
    const savedQualitySetting = localStorage.getItem('qualityMode');

    if (savedGlowSetting !== null) {
        glowToggle.checked = JSON.parse(savedGlowSetting);
        document.body.classList.toggle('glow-enabled', glowToggle.checked);
    }

    if (savedQualitySetting !== null) {
        qualityToggle.checked = JSON.parse(savedQualitySetting);
        document.body.classList.toggle('quality-mode', qualityToggle.checked);
    }

    // Save Settings on toggles
    glowToggle.addEventListener('change', function() {
        document.body.classList.toggle('glow-enabled', this.checked);
        localStorage.setItem('glowEnabled', this.checked);
    });

    qualityToggle.addEventListener('change', function() {
        document.body.classList.toggle('quality-mode', this.checked);
        localStorage.setItem('qualityMode', this.checked);
    });

    
});