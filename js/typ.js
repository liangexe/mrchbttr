document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.typ-btn').addEventListener('click', () => {
        const inputText = document.querySelector('.filled').value.trim();
        const bookF = document.querySelector('.fr');
        const bookL = document.querySelector('.le');

        if (inputText === "인생은 탐구하면서 살아가는 것이 아니라, 살아가면서 탐구하는 것이다. 실수는 되풀이된다.") {
            bookF.style.backgroundImage = 'url(../img/typ-1-1.jpeg)';
            bookF.style.left = '12%';
            bookL.style.backgroundImage = 'url(../img/typ-1-2.jpeg)';
            bookL.style.top = '-2.6%';
            bookL.style.height = '90%';
        } else if (inputText === "겨울이 찾아와 그의 얼굴에는 파리한 빛, 거부한다면 필멸의 천성을 저버리는 짓.") {
            bookF.style.backgroundImage = 'url(../img/typ-2-1.jpeg)';
            bookF.style.left = '9%';
            bookL.style.backgroundImage = 'url(../img/typ-2-2.jpeg)';
            bookL.style.top = '-3.1%';
            bookL.style.left = '-0.5%';
            bookL.style.height = '102.5%';
        } else if (inputText === "어쩌다가 어찌해도 더 붙들거나 사랑과 죽음이 거대한 물질이 되는 최초의 형태를 보고만 것이다") {
            bookF.style.backgroundImage = 'url(../img/typ-3-1.jpeg)';
            bookF.style.left = '6.4%';
            bookL.style.backgroundImage = 'url(../img/typ-3-2.jpeg)';
            bookL.style.top = '-3.6%';
            bookL.style.height = '105%';
        }
    });
});