// Carousel script:

let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

  // Find all dots
  const dots = document.querySelectorAll('.dot');

  dots.forEach(dot => {
    dot.addEventListener('click', function (e) {
      // Close all other popups
      document.querySelectorAll('.popup.active').forEach(popup => {
        if (!dot.contains(popup)) {
          popup.classList.remove('active');
        }
      });

      // Toggle this popup
      const popup = dot.querySelector('.popup');
      popup.classList.toggle('active');

      // Prevent click from bubbling if needed
      e.stopPropagation();
    });
  });

  // Optional: close popups when clicking outside
  document.addEventListener('click', function () {
    document.querySelectorAll('.popup.active').forEach(popup => {
      popup.classList.remove('active');
    });
  });
  