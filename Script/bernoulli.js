let button = document.getElementById("submit");
let number = document.getElementById("number");
let result = document.getElementById("result");

button.addEventListener("click",calculateBernoulliNumber,false);

function calculateBernoulliNumber() {
    
    result.innerHTML = number.value 
}