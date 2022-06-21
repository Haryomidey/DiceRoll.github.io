const removeDrop = document.getElementById("drop-btn");
const dropDown = document.querySelector(".drop-down");
const playerWin = document.querySelector(".drop-p");

const image_1 = document.querySelector("#image-1");
const image_2 = document.querySelector("#image-2");
let Player_1Score = document.querySelector(".para");
let Player_2Score = document.querySelector(".para-2");
const player_1_Btn = document.getElementById("btn-1");
const player_2_Btn = document.getElementById("btn-2");

let images = [
    "images/dice-six-faces-one.png",
    "images/dice-six-faces-two.png",
    "images/dice-six-faces-three.png",
    "images/dice-six-faces-four.png",
    "images/dice-six-faces-five.png",
    "images/dice-six-faces-six.png"
]

player_1_Btn.addEventListener("click", function () {
    image_1.classList.add("shake");
    setTimeout(function () {
        image_1.classList.remove("shake");
    },
        1000);
    const valueOne = Math.floor((Math.random() * 6));
    image_1.setAttribute("src", images[valueOne])
    Player_1Score.textContent = `Player 1 rolled: ${valueOne + 1}`;
    Player_2Score.textContent = "";
})

player_2_Btn.addEventListener("click", function () {
    image_2.classList.add("shake");
    setTimeout(function () {
        image_2.classList.remove("shake");
    },
        1000);
    const valueTwo = Math.floor((Math.random() * 6));
    image_2.setAttribute("src", images[valueTwo])
    Player_2Score.textContent = `Player 2 rolled: ${valueTwo + 1}`;
    Player_1Score.textContent = "";
})
removeDrop.addEventListener("click", function () {
    dropDown.classList.remove("drop-active")
})


