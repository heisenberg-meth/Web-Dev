const video = document.querySelector(".video-container");
const btn = document.querySelector(".switch-btn");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.toggle("slide");
    video.pause();
  } else {
    btn.classList.toggle("slide");
    video.play();
  }
});

window.addEventListener("load", function () {
  preloader.classList.toggle("hide-preloader");
});