document
  .querySelector(".navigation__burger")
  .addEventListener("click", function() {
    document
      .querySelector(".navigation__burger-span")
      .classList.toggle("active");

    document.querySelector(".nav__burger").classList.toggle("nav-active");
  });
