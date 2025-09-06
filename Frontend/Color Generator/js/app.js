const hex = ["#444444", "#a34ed3", "#ed554f", "#aed513"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

function changecolor() {
  let hashtag = hex[colorchange()];
  document.body.style.backgroundColor = hashtag;
  color.textContent = hashtag;
}
function colorchange() {
  return Math.floor(Math.random() * hex.length);
}