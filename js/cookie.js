document.addEventListener('DOMContentLoaded', () => {
  const cookieStatus = localStorage.getItem('cookieConsent');

  if (cookieStatus === 'accepted' || cookieStatus === 'declined') {
    return; // Уже выбрано — не показываем баннер
  }

  // Создаём баннер
  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.innerHTML = `
    <div class="icon">🍪</div>
    <h3>Cookie-Hinweis</h3>
    <p>
      Diese Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern und bestimmte Funktionen bereitzustellen. Mit der Nutzung unserer Seite stimmen Sie der Verwendung von Cookies gemäß unserer Datenschutzerklärung zu.
    </p>
    <div class="cookie-buttons">
      <button class="accept">Alles bestätigen</button>
      <button class="decline">Nicht akzeptieren</button>
      <button class="secondary readmore">Weiter lesen</button>
    </div>
  `;
  
  document.body.appendChild(banner);

  // Обработчики
  banner.querySelector('.accept').onclick = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    banner.remove();
  };

  banner.querySelector('.decline').onclick = () => {
    localStorage.setItem('cookieConsent', 'declined');
    banner.remove();
  };

  banner.querySelector('.readmore').onclick = () => {
    window.location.href = '../pages/Datenschutzerklärung.html';
  };
});