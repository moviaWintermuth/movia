document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".services__item-menu");
    const allServiceLists = document.querySelectorAll(".services__ul");
    const allImages = document.querySelectorAll(".services__img");

    menuItems.forEach((item) => {
      item.addEventListener("click", function () {
        const currentUl = this.nextElementSibling;
        const currentImg = this.querySelector(".services__img");
  
        const isActive = currentUl.classList.contains("active");
  
        allServiceLists.forEach((ul) => ul.classList.remove("active"));
        allImages.forEach((img) => img.classList.remove("active"));
  
        if (!isActive) {
          currentUl.classList.add("active");
          currentImg.classList.add("active");
        };
      });
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScrollTo(this.getAttribute('href'));
      });
    });
    
    function smoothScrollTo(hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - (window.innerHeight / 2.5) + (targetElement.offsetHeight / 2);
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
    
    window.addEventListener('load', () => {
      if (window.location.hash) {
        setTimeout(() => {
          smoothScrollTo(window.location.hash);
        }, 100);
      }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('cookie-banner');
    const consent = localStorage.getItem('cookie_consent');

    if (!consent) {
      banner.style.display = 'flex';
    }

    document.getElementById('accept-cookies').addEventListener('click', () => {
      localStorage.setItem('cookie_consent', 'accepted');
      banner.style.display = 'none';
    });

    document.getElementById('reject-cookies').addEventListener('click', () => {
      localStorage.setItem('cookie_consent', 'rejected');
      banner.style.display = 'none';
    });
  });


  