document.addEventListener('DOMContentLoaded', function () {
  const navbarLinks = document.querySelectorAll('.navbar a');
  const sections = document.querySelectorAll('.section-page');


  document.addEventListener('scroll', function () {
    const currentSection = window.scrollY;

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 20;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');


      if (
        currentSection >= sectionTop &&
        currentSection < sectionTop + sectionHeight
      ) {
        navbarLinks.forEach(function (navbarLink) {
          navbarLink.classList.remove('active');
        });


        // document.querySelector('.navbar a[href="#'+ sectionId +'"]').classList.add('active');
        document.querySelector('.navbar a[href="#'+sectionId+'"]').classList.add('active')
      }
    });
  });
});

// document.getElementsByClassName('nav-link').addEventListener('click', function () {
//     console.log()
// })