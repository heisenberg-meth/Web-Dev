const hex = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

function changecolor() {
    let hashtag = "#"
    for(i=0; i<6;i++){
        hashtag += hex[colorchange()];
    }
    document.body.style.backgroundColor = hashtag
    color.textContent = hashtag
}
function colorchange() {
  return Math.floor(Math.random() * hex.length);
}