const burger = document.getElementById("menu");
const navbar = document.getElementsByClassName("nav")[0];
const close = document.getElementById("close");

burger.addEventListener("click", function () {
  navbar.style.display = "block";
  burger.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", function () {
  navbar.style.display = "none";
  burger.style.display = "block";
  close.style.display = "none";
});
