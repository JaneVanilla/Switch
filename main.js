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

//slider

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider__mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}