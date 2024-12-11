document.addEventListener("DOMContentLoaded", () => {
    const vidSections = document.querySelectorAll(".vid-scr");
    const firstVideo = vidSections[0].querySelector("video");

    // 첫번째 영상만 클릭 후 음소거 해제 재생 가능하게
    firstVideo.addEventListener("click", () => {
        firstVideo.muted = false;
        firstVideo.play().catch((error) => {
            console.log("Play failed: ", error);
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const video = entry.target.querySelector("video");

            if (entry.isIntersecting) {
                video.muted = false;
                video.play();
            } else {
                video.muted = true;
                video.pause();
                video.currentTime = 0;
            }
        });
    }, {
        root: null, // 화면 가로세로 전체 기준
        threshold: 0.5,
    });

    vidSections.forEach((section) => observer.observe(section));
});