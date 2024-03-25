document.addEventListener('DOMContentLoaded', () => {
  const carouselSlide = document.querySelector('.carousel-slide');
  const images = document.querySelectorAll('.carousel-slide img');
  let counter = 1;
  const size = images[0].clientWidth;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;

  const changeSlide = (increment) => {
    if (counter >= images.length - 1 && increment > 0) return;
    if (counter <= 0 && increment < 0) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter += increment;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  };

  document.querySelector('.next-btn').addEventListener('click', () => changeSlide(1));
  document.querySelector('.prev-btn').addEventListener('click', () => changeSlide(-1));

  carouselSlide.addEventListener('transitionend', () => {
    if (images[counter].id === 'last-clone') {
      carouselSlide.style.transition = 'none';
      counter = images.length - 2;
      carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
    if (images[counter].id === 'first-clone') {
      carouselSlide.style.transition = 'none';
      counter = images.length - counter;
      carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
  });
});


  document.getElementById('JsDasarBtn').addEventListener('click', function() {
    window.location.href = "jsdasar.html";
});

document.getElementById('FormBtn').addEventListener('click', function() {
    window.location.href = "form.html";
});

document.getElementById('Dom').addEventListener('click', function() {
  window.location.href = "landingdom/landingdom.html";
});

document.getElementById('ApiBtn').addEventListener('click', function() {
  window.location.href = "tugas8/produkapi.html";
});

document.getElementById('ArrayBtn').addEventListener('click', function() {
  window.location.href = "tugas8/produkarray.html";
});

document.getElementById('ResponsiveBtn').addEventListener('click', function() {
  window.location.href = "tugas9/produk/produkapi.html";
});

document.getElementById('LoginBtn').addEventListener('click', function() {
  window.location.href = "tugas9/login/index.html";
});
