const savedLang = localStorage.getItem('lang') || 'de';

// Вычисляем базовый путь (работает и локально, и на GitHub Pages)
const basePath = window.location.pathname.split('/').slice(0, 2).join('/');

i18next
  .use(i18nextHttpBackend)
  .init({
    lng: savedLang,
    fallbackLng: 'de',
    debug: true,
    backend: {
      loadPath: `${basePath}/i18n/index-{{lng}}.json`
    }
  }, function(err, t) {
    updateContent();
  });

function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(function(elem) {
    const key = elem.getAttribute('data-i18n');
    elem.innerHTML = i18next.t(key);
  });
}

function changeLanguage(lang) {
  localStorage.setItem('lang', lang);
  i18next.changeLanguage(lang, updateContent);
}
