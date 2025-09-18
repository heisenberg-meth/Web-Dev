const hex = ["#029412", "#092354", "#981324", "#918263"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
  const a = hex[Math.floor(Math.random() * hex.length)];
  document.body.style.backgroundColor = a;
  color.textContent = a;
});