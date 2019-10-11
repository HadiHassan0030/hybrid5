// Hadi Dahir Hassan
// dahi0030
// dahi0030@algonquinlive.com
// 09/08/2019

document.addEventListener("DOMContentLoaded", init);

function init() {
    function randomNum() {
        let min = 100;
        let max = 500;
        let genNum = Math.floor(Math.random() * (max - min) + min);
        return "https://picsum.photos/id/" + genNum + "/200/300";
    }

    function changeImage() {
        let img = document.createElement("img");
        img.src = randomNum();
        img.alt = "New Image!";
        document.querySelector("main").appendChild(img);

        document.body.addEventListener("click", () => {
            img.src = randomNum();
        });

        img.addEventListener("error", () => {
            alert('"No image could be loaded. Please click again."');
            img.src = randomNum();
        });
    }

    changeImage();
}