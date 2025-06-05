const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector("ul");
let menuOpen = false;

hamburger.addEventListener("click", () => {
  if (menuOpen == false) {
    navlinks.style.display = "block";
    menuOpen = true;
  } else {
    navlinks.style.display = "none";
    menuOpen = false;
  }
});

let slideIndex = 0;
slideshows();

function slideshows() {
  let i;
  let slides = document.getElementsByClassName("fade");
  console.log(slides);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(slideshows, 2000); //2-sec
}
