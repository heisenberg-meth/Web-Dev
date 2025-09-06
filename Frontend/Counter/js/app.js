let num = document.querySelector("#value");

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