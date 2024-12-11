
function magnify(imgClass, zoom) {
    const img = document.querySelector(`.${imgClass}`);
    const lens = document.createElement("DIV");

    img.onload = function () {
        img.parentElement.appendChild(lens);
        lens.style.position = "absolute";
        lens.style.border = "2px solid #9058FF";
        lens.style.cursor = "none";
        lens.style.width = "150px";
        lens.style.height = "150px";
        lens.style.backgroundImage = `url('${img.src}')`;
        lens.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;
        lens.style.borderRadius = "50%";
        lens.style.zIndex = "2";
        lens.addEventListener("mousemove", moveLens);
        img.addEventListener("mousemove", moveLens);
    };

    function moveLens(e) {
        const pos = getCursorPos(e);
        let x = pos.x;
        let y = pos.y;

        if (x > img.width - lens.offsetWidth / zoom) {
            x = img.width - lens.offsetWidth / zoom;
        }
        if (x < lens.offsetWidth / zoom) {
            x = lens.offsetWidth / zoom;
        }
        if (y > img.height - lens.offsetHeight / zoom) {
            y = img.height - lens.offsetHeight / zoom;
        }
        if (y < lens.offsetHeight / zoom) {
            y = lens.offsetHeight / zoom;
        }

        lens.style.left = x - lens.offsetWidth / 2 + "px";
        lens.style.top = y - lens.offsetHeight / 2 + "px";
        lens.style.backgroundPosition = `-${(x * zoom - lens.offsetWidth / 2)}px -${(y * zoom - lens.offsetHeight / 2)}px`;
    }

    function getCursorPos(e) {
        const rect = img.getBoundingClientRect();

        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        return {x: x, y: y};
    }
}


magnify("yys-bg", 2);
