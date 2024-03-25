document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(n) {
      slides[currentSlide].classList.remove('active');
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
    }

    document.getElementById('nextBtn').addEventListener('click', function() {
      showSlide(currentSlide + 1);
    });

    document.getElementById('prevBtn').addEventListener('click', function() {
      showSlide(currentSlide - 1);
    });

    // Automatic slideshow
    setInterval(() => {
      showSlide(currentSlide + 1);
    }, 3000); // Change slide every 3 seconds
});
