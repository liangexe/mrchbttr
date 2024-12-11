
let main = document.getElementById('main-vhs');
let obj = document.querySelector('.move-vhs');


mv = {
    x: 500,
    y: 500,
    width: obj.offsetWidth,
    height: obj.offsetHeight,
    dx : Math.random() * 5 - 2,
    dy : Math.random() * 5 - 2,
}

function move() {

    requestAnimationFrame(move);

    if (mv.x + mv.width >= main.offsetWidth || mv.x <= 0) mv.dx *= -1;
    if (mv.y + mv.height >= main.offsetHeight || mv.y <= 0) mv.dy *= -1;

    mv.x += mv.dx
    mv.y += mv.dy

    obj.style.left = mv.x + 'px';
    obj.style.top = mv.y + 'px';
}

move();


const v1 = document.querySelector('.vhs1');
const v2 = document.querySelector('.vhs2');

main.addEventListener('click', () => {
    if (v1.style.opacity === '0') {
        v1.style.opacity = '1';
        v2.style.opacity = '0';
    } else {
        v1.style.opacity = '0';
        v2.style.opacity = '1';
    }
});
