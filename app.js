const noBtn = document.querySelector("#noBtn");
const noBtn1 = document.querySelector("#noBtn1");
let num = 0;

function noBtnFunc() {
    noBtn.style.display = "none";
    noBtn1.style.display = "block";
    switch (num) {
        case 0:
            noBtn1.style.display = "block";
            noBtn1.style.width = "180px";
            noBtn1.style.left = "600px";
            noBtn1.style.top = "300px";
            break;
        case 1:
            noBtn1.style.left = "400px";
            noBtn1.style.top = "400px";
            break;
        case 2:
            noBtn1.style.left = "800px";
            noBtn1.style.top = "150px";
            break;
        case 3:
            noBtn1.style.left = "900px";
            noBtn1.style.top = "500px";
            break;
        case 4:
            noBtn1.style.left = "100px";
            noBtn1.style.top = "700px";
            break;
        case 5:
            noBtn1.style.left = "300px";
            noBtn1.style.top = "60px";
            break;
        case 6:
            noBtn1.style.left = "900px";
            noBtn1.style.top = "500px";
            break;
        case 7:
            noBtn.style.display = "block"
            noBtn1.style.display = "none";
            num = 0;
            break;
    }
    num++;
}