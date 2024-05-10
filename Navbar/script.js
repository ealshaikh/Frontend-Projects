const iocnBtn = document.querySelector('.nav-toggle');
const links = document.querySelector(".links");

iocnBtn.addEventListener("click", function () {
    links.classList.toggle("show-links");
  });