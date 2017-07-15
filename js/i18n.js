$(function() {
  jqueryI18next.init(i18next, $, {
    tName: 't', // --> appends $.t = i18next.t
    i18nName: 'i18n', // --> appends $.i18n = i18next
    handleName: 'localize', // --> appends $(selector).localize(opts);
    selectorAttr: 'data-i18n', // selector for translating elements
    targetAttr: 'i18n-target', // data-() attribute to grab target element to translate (if diffrent then itself)
    optionsAttr: 'i18n-options', // data-() attribute that contains options, will load/set if useOptionsAttr = true
    useOptionsAttr: false, // see optionsAttr
    parseDefaultValueFromContent: true, // parses default values from content ele.val or ele.text,
  });

  i18next
    .use(window.i18nextXHRBackend) // or any other backend implementation
    .use(window.i18nextBrowserLanguageDetector) // or any other backend implementation
    .init({
      load: ['es'],
      preload: ['es'],
      fallbackLng: 'es',
      joinArrays: ' ',
      backend: {
        // path where resources get loaded from
        loadPath: 'locales/{{lng}}.json',
      },
      detection: {
        // order and from where user language should be detected
        order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],

        // keys or params to lookup language from
        lookupQuerystring: 'lng',
        lookupCookie: 'i18next',
        lookupLocalStorage: 'i18nextLng',

        // cache user language on
        caches: ['localStorage', 'cookie'],

        // optional expire and domain for set cookie
        cookieMinutes: 10,
        cookieDomain: 'cubaconf',

        // optional htmlTag with lang attribute, the default is:
        htmlTag: document.documentElement,

        debug: true
      }
    }, function() {
      $('[data-i18n]').localize();
      $('.languages a:contains(' + i18next.language.substring(0, 2) + ')').addClass('active');
    });
});
