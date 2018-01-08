var hamburger = document.querySelector(".page-header__btn--hamburger");
var navigation = document.querySelector(".page-nav");
var closeBtn = document.querySelector(".page-header__btn--close");

hamburger.addEventListener("click", function(event1) {
   event1.preventDefault();
   navigation.classList.add("page-header__show-btn");
   hamburger.classList.add("page-header__close-btn");
   closeBtn.classList.add("page-header__show-btn");
});

closeBtn.addEventListener("click", function(event2) {
    event2.preventDefault();
    navigation.classList.remove("page-header__show-btn");
    closeBtn.classList.remove("page-header__show-btn")
    hamburger.classList.remove("page-header__close-btn");
});