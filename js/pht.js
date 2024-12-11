const images = ["../img/pht-1.png", "../img/pht-2.png", "../img/pht-3.png", "../img/pht-4.png", "../img/pht-5.png", "../img/pht-6.png"];
document.addEventListener("mousemove", (e) => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const image = document.createElement("img");
    image.src = randomImage;
    image.classList.add("dump");
    image.style.zIndex = "2";
    image.style.top = `${e.clientY-200}px`;
    image.style.left = `${e.clientX-200}px`;
    document.body.appendChild(image);

    setTimeout(() => {
        image.style.transform = "scale(0.5)";
        setTimeout(() => image.remove(), 500);
    }, 20);
});