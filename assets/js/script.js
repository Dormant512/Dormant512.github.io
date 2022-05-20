
function resizeContent() {
    let emFrameWidth = window.innerWidth / 16;
    // let emCardWidth = document.getElementsByClassName("post-card")[0] / 16;
    let num = Math.floor(emFrameWidth / 24);

    if ((num * 24 + 1) / num > 0.8) {
        num -= 1;
    }

    if (num < 1) {
        num = 1;
    }

    let res = num * 24.2 + 1;

    let container = document.getElementById("content-box");
    
    container.style.width = String(res) + "em";

    // console.log(`${emFrameWidth} into ${res}`);
}

