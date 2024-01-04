const heading = document.querySelector('.heading');
const headingText = 'Please Meet Our Team';
let i = 0;

const typing = () => {
    if (i < headingText.length) {
        heading.innerHTML += headingText.charAt(i);
        i++;
        setTimeout(typing, 150);
    }
};

typing();

