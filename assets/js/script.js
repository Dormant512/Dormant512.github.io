
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

function toggleMobileMenu() {
    let checkBox = document.getElementById("mob-menu");
    let menu = document.getElementById("menu-to-show");
    let content = document.getElementById("content-to-show");

    if (checkBox.checked) {
        menu.style.display = "block";
        content.style.display = "none";
    } else {
        menu.style.display = "none";
        content.style.display = "block";
    }
}

document.addEventListener("keydown", function(event) {
    if (document.getElementById("post-prev") && event.ctrlKey && event.key == "ArrowLeft") {
        document.getElementById("post-prev").click();
    }

    if (document.getElementById("post-next") && event.ctrlKey && event.key == "ArrowRight") {
        document.getElementById("post-next").click();
    }
});
