document.addEventListener('DOMContentLoaded', () => {
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

  // Cookie banner management
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
