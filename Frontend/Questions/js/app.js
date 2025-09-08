const qnatxt = document.querySelectorAll(".question");

qnatxt.forEach(function (question) {
  const btns = question.querySelector(".question-btn");
  btns.addEventListener("click", function () {
    qnatxt.forEach(function (items) {
      if (items !== question) {
        items.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});