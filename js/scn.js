const is = document.querySelectorAll('.scene');

is.forEach((img) => {
    img.addEventListener('click', () => {
        const pairedP = img.nextElementSibling;

        if (pairedP && pairedP.classList.contains('p')) {

            if (pairedP.style.display === '' || pairedP.style.display === 'none') {
                pairedP.style.display = 'block';
            }

            pairedP.addEventListener('click', () => {
                pairedP.style.display = 'none';
            });
        }
    });
});