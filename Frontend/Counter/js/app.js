let num = document.querySelector("#value");
let btnincrease = document.querySelector(".btnincrease");
let btnreset = document.querySelector("#resetbtn");
let btndecrease = document.querySelector(".btndecrease");

let counter = 0;

function increseCounter() {
  counter++;
  num.textContent = counter;
  if (counter>0) {
    document.body.style.color = "green"
  }
}
function decreseCounter() {
  counter--;
  num.textContent = counter;
   if (counter<0) {
    document.body.style.color = "red"
  }
}
function resetCounter() {
  counter = 0;
  num.textContent = counter;
   if (counter===0) {
    document.body.style.color = "blue"
  }
}