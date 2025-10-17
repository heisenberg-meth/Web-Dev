const buttons = document.querySelectorAll(".coursebtn");
const contents = document.querySelectorAll(".content");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.currentTarget.dataset.id;
    buttons.forEach((b) => b.classList.remove("btnactive"));
    e.currentTarget.classList.add("btnactive");
    contents.forEach((c) => c.classList.remove("active"));
    const selected = document.getElementById(id);
    if (selected) selected.classList.add("active");
  });
});
