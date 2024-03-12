const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userOption = document.getElementById("user-option");
const computerOption = document.getElementById("computer-option");
const results = document.getElementById("results");


const array = ["Rock", "Paper", "Scissors"];

const random= () => array[Math.floor(Math.random() * array.length)];

rock.addEventListener("click", e =>{
    let computer = random();
    userOption.innerHTML = array[0];
    computerOption.innerHTML = computer;
    if (computer === array[0]) {
        results.innerHTML = "Draw";
    } else if (computer === array[1]) {
        results.innerHTML = "You've lost";
    } else {
        results.innerHTML = "You've won"
    }
})
paper.addEventListener("click", e =>{
    let computer = random();
    userOption.innerHTML = array[1];
    computerOption.innerHTML = computer;
    if (computer === array[0]) {
        results.innerHTML = "You've won";
    } else if (computer === array[1]) {
        results.innerHTML = "Draw";
    } else {
        results.innerHTML = "You've lost"
    }
})
scissors.addEventListener("click", e =>{
    let computer = random();
    userOption.innerHTML = array[2];
    computerOption.innerHTML = computer;
    if (computer === array[0]) {
        results.innerHTML = "You've lost";
    } else if (computer === array[1]) {
        results.innerHTML = "You've won";
    } else {
        results.innerHTML = "Draw"
    }
})

