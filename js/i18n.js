const savedLang = localStorage.getItem('lang') || 'de';

i18next
  .use(i18nextHttpBackend)
  .init({
    lng: savedLang,
    fallbackLng: 'de',
    debug: true,
    backend: {
      loadPath: 'loadPath: './i18n/index-{{lng}}.json'
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
