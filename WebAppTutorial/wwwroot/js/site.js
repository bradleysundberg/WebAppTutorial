document.addEventListener('DOMContentLoaded', () => {
    const heading = document.getElementById('animated-heading');

    function fadeEffect() {
        let opacity = 1;
        let fadingOut = true;

        setInterval(() => {
            if (fadingOut) {
                opacity -= 0.02;
                if (opacity <= 0.3) fadingOut = false;
            } else {
                opacity += 0.02;
                if (opacity >= 1) fadingOut = true;
            }
            heading.style.opacity = opacity;
        }, 50);
    }

    fadeEffect();
});