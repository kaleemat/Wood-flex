let toggler = document.querySelector(".navbar-toggler-icon");
let navList = document.querySelector(".navList");

toggler.addEventListener("click", function () {
  navList.classList.add("hide");
});
aboutMe.classList.remove("hide");
