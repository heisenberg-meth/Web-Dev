const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2025, 9, 8, 0, 0, 0);
const years = futureDate.getFullYear();
let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const days = futureDate.getDay();
const date = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveaway.textContent = `Giveaway Ends on ${weekday} ${date} ${month} ${years} ${hours} ${minutes} am`;
const futureTime = futureDate.getTime();

function getRemaindingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log(t);
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return `0${item}`;
    } else {
      return item;
    }
  }
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h3 class="expired">This is expired Unaku venum na ne sekram vanthu vaangirukanum da funda</h3>`;
  }
}
let countdown = setInterval(getRemaindingTime, 1000);
