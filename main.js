const toggle = document.querySelector(".my-toggles");
const myBody = document.getElementById("dark-mode");
const grid1 = document.querySelectorAll(".grid-item-1");
const grid2 = document.querySelectorAll(".grid-item-2");
toggle.addEventListener("click", (e) => {
  toggle.classList.toggle("active");
});

toggle.addEventListener("click", (e) => {
  myBody.classList.toggle("white-mode");

  grid1.forEach((item) => {
    item.classList.toggle("white-mode");
  });

  grid2.forEach((item) => {
    item.classList.toggle("white-mode");
  });
});
