const color = document.querySelector(".color");
const btn = document.querySelector(".btn");
const hex = ["a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
btn.addEventListener("click", function () {
  let a = "#";
  for (i = 0; i < 6; i++) {
    a += hex[Math.floor(Math.random() * hex.length)];
  }
  document.body.style.backgroundColor = a;
  color.textContent = a;
});