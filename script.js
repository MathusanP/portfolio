const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
      autoplay: {
        delay: 5000, // Autoplay delay in milliseconds
      },
  
      // If you need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    });
  });