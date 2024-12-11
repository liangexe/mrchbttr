document.addEventListener('DOMContentLoaded', () => {
    const mainScreen = document.querySelector('.start-end');
    const gameScreen = document.querySelector('.ntv-game');
    const mainStartBtn = document.querySelector('.mainBtn-sc');
    const gameGyoDon = document.querySelector('.left .gyoDon');
    const lineText = document.querySelector('.line-sc');
    const operatorText = document.querySelector('.op-sc');
    const diceBtn = document.querySelector('.dice');
    const diceNum = document.querySelector('.diceNum');
    const mainDesc = document.querySelector('.main-desc');

    let currentScene = 0;
    let successCount = 0;  // 성공한 횟수 세기

    const scenes = [
        {
            text: '~고등학교 입학 면접 보는 날~<br/><br/>학교에 택시를 타고 도착했는데 멀미를 해서<br/>속이 너무 안 좋다...<br/>아침에는 죽을 먹었어.'
        },
        {
            text: '~대학교 입학 면접 보는 날~<br/><br/>학교로 가려는데 너무 얇게 입었어.<br/>너무 춥다...<br/>나는 피곤한 상태야.'
        }
    ];

    // 게임 시작
    mainStartBtn.addEventListener('click', () => {
        mainScreen.style.display = 'none';
        gameScreen.style.display = 'flex';

        currentScene = 0; // 게임 화면 초기화
        successCount = 0;  // 성공 횟수 초기화
        resetGame();
    });

    function resetGame() {
        operatorText.innerHTML = scenes[currentScene].text;
        gameGyoDon.style.backgroundImage = '';
        lineText.textContent = '';
        diceNum.textContent = '';
    }

    diceBtn.addEventListener('click', () => {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        diceNum.textContent = randomNum;

        let isSuccess = false;  // 성공 여부 추적

        if (randomNum === 1) {
            lineText.textContent = '대성공, 합격입니다.';
            isSuccess = true;
        } else if (randomNum >= 2 && randomNum <= 10) {
            lineText.textContent = '극단적 성공, 합격입니다.';
            isSuccess = true;
        } else if (randomNum >= 11 && randomNum <= 25) {
            lineText.textContent = '어려운 성공, 합격입니다.';
            isSuccess = true;
        } else if (randomNum >= 26 && randomNum <= 50) {
            lineText.textContent = '보통 성공, 합격입니다.';
            isSuccess = true;
        } else if (randomNum >= 51 && randomNum <= 94) {
            lineText.textContent = '실패, 불합격입니다.';
            setTimeout(() => location.reload(), 2500);
            return;
        } else if (randomNum >= 96 && randomNum <= 100) {
            lineText.textContent = '대실패, 불합격입니다.';
            setTimeout(() => location.reload(), 2500);
            return;
        }

        // 성공했을 때만 성공 횟수 더하기
        if (isSuccess) {
            successCount++;
        }

        // 성공 두 번이면 최종 화면으로 바꾸기
        if (successCount === 2) {
            setTimeout(() => {
                gameScreen.style.display = 'none';
                mainScreen.style.display = 'block';
                mainDesc.textContent = '합격을 축하드립니다.';
                mainScreen.querySelector('.gyoDon').style.backgroundImage = 'url(../img/ntv-c1.png)';
                mainStartBtn.textContent = '다시 하기';
            }, 5000);
        } else if (isSuccess) {
            setTimeout(() => {
                currentScene++;
                resetGame();
            }, 2500);
        }
    });
});