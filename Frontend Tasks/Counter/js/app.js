const increaseBtn = document.querySelector(".increase");
const resetBtn = document.querySelector(".reset");
const decreaseBtn = document.querySelector(".decrease");
let value = document.querySelector("#value");

let counter = 0;
increaseBtn.addEventListener("click", function () {
  counter++;
  value.textContent = counter;
});
resetBtn.addEventListener("click",function(){
    counter = 0
    value.textContent = counter;
})
decreaseBtn.addEventListener("click",function(){
    counter--;
    value.textContent = counter;
})