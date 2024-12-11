const title = document.querySelector('.title');
const typ = document.querySelector('.typ');
const zzz = document.querySelector('.zzz');
const ply = document.querySelector('.ply');
const vid = document.querySelector('.vid');
const pht = document.querySelector('.pht');
const vhs = document.querySelector('.vhs');
const scn = document.querySelector('.scn');
const yys = document.querySelector('.yys');
const ntv = document.querySelector('.ntv');

let clickCount = 0;

title.addEventListener('click', () => {
    clickCount = (clickCount + 1) % 3;

    if (clickCount === 1) {
        title.style.left = '10%';
        title.style.top = '80%';

        typ.style.left = '40%';
        typ.style.top = '55%';
        typ.style.zIndex = '4';

        zzz.style.left = '49%';
        zzz.style.top = '22%';
        zzz.style.zIndex = '7';

        ply.style.left = '40%';
        ply.style.top = '2%';
        ply.style.zIndex = '9';

        vid.style.left = '65%';
        vid.style.top = '57%';
        vid.style.zIndex = '3';

        pht.style.left = '6%';
        pht.style.top = '35%';
        pht.style.zIndex = '5';

        vhs.style.left = '24%';
        vhs.style.top = '25%';
        vhs.style.zIndex = '1';

        scn.style.left = '70%';
        scn.style.top = '33%';
        scn.style.zIndex = '8';

        yys.style.left = '72%';
        yys.style.top = '7%';
        yys.style.zIndex = '6';

        ntv.style.left = '15%';
        ntv.style.top = '5%';
        ntv.style.zIndex = '9';

    } else if (clickCount === 2) {
        title.style.left = '80%';
        title.style.top = '45%';
        title.style.rotate = '90deg';

        typ.style.left = '63%';
        typ.style.top = '10%';
        typ.style.zIndex = '9';

        zzz.style.left = '68%';
        zzz.style.top = '55%';
        zzz.style.zIndex = '7';

        ply.style.left = '40%';
        ply.style.top = '70%';
        ply.style.zIndex = '9';

        vid.style.left = '5%';
        vid.style.top = '55%';
        vid.style.zIndex = '3';

        pht.style.left = '24%';
        pht.style.top = '57%';
        pht.style.zIndex = '5';

        vhs.style.left = '10%';
        vhs.style.top = '10%';
        vhs.style.zIndex = '1';

        scn.style.left = '35%';
        scn.style.top = '2%';
        scn.style.zIndex = '8';

        yys.style.left = '50%';
        yys.style.top = '30%';
        yys.style.zIndex = '6';

        ntv.style.left = '35%';
        ntv.style.top = '32%';
        ntv.style.zIndex = '8';

    } else {
        title.style.left = null;
        title.style.top = null;
        title.style.rotate = null;

        typ.style.left = null;
        typ.style.top = null;
        typ.style.zIndex = null;

        zzz.style.left = null;
        zzz.style.top = null;
        zzz.style.zIndex = null;

        ply.style.left = null;
        ply.style.top = null;
        ply.style.zIndex = null;

        vid.style.left = null;
        vid.style.top = null;
        vid.style.zIndex = null;

        pht.style.left = null;
        pht.style.top = null;
        pht.style.zIndex = null;

        vhs.style.left = null;
        vhs.style.top = null;
        vhs.style.zIndex = null;

        scn.style.left = null;
        scn.style.top = null;
        scn.style.zIndex = null;

        yys.style.left = null;
        yys.style.top = null;
        yys.style.zIndex = null;

        ntv.style.left = null;
        ntv.style.top = null;
        ntv.style.zIndex = null;
    }
});