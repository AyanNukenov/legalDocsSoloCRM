(function () {
  var LANGS = ['kk', 'ru', 'en'];
  var LABELS = { kk: 'ҚАЗ', ru: 'РУС', en: 'ENG' };
  var KEY = 'soloCrmLang';

  function getLang() {
    var saved = localStorage.getItem(KEY);
    return LANGS.indexOf(saved) !== -1 ? saved : 'kk';
  }

  function showLang(lang) {
    var blocks = document.querySelectorAll('.lang-block');
    for (var i = 0; i < blocks.length; i++) {
      blocks[i].classList.toggle('active', blocks[i].getAttribute('data-lang') === lang);
    }
    var btns = document.querySelectorAll('.lang-btn');
    for (var j = 0; j < btns.length; j++) {
      btns[j].classList.toggle('active', btns[j].getAttribute('data-lang') === lang);
    }
    document.documentElement.lang = lang === 'kk' ? 'kk' : lang === 'en' ? 'en' : 'ru';
  }

  function renderSwitcher() {
    var containers = document.querySelectorAll('.lang-switcher');
    for (var i = 0; i < containers.length; i++) {
      containers[i].innerHTML = '';
      for (var j = 0; j < LANGS.length; j++) {
        var btn = document.createElement('button');
        btn.className = 'lang-btn';
        btn.setAttribute('data-lang', LANGS[j]);
        btn.textContent = LABELS[LANGS[j]];
        btn.addEventListener('click', (function (l) {
          return function () {
            localStorage.setItem(KEY, l);
            showLang(l);
          };
        })(LANGS[j]));
        containers[i].appendChild(btn);
      }
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderSwitcher();
    showLang(getLang());
    var yr = new Date().getFullYear();
    document.querySelectorAll('.js-year').forEach(function (el) { el.textContent = yr; });
  });
})();
