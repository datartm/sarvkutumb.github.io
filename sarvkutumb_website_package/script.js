const textElement = document.getElementById('animated-text');
const phrases = ['Empowering Talent', 'Enabling Innovation', 'Building Future Solutions'];
let i = 0, j = 0, currentPhrase = '', isDeleting = false;

function typeEffect() {
    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase = phrases[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            currentPhrase = phrases[i].substring(0, j--);
        }
        textElement.innerHTML = currentPhrase;
        if (!isDeleting && j > phrases[i].length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            i++;
            if (i >= phrases.length) i = 0;
        }
        setTimeout(typeEffect, isDeleting ? 50 : 150);
    }
}
typeEffect();