'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  var setupHero = document.querySelector('.setup');
  var openButton = document.querySelector('.setup-open');
  var closeButton = setupHero.querySelector('.setup-close');
  var userNameInput = setupHero.querySelector('.setup-user-name');

  setupHero.querySelector('.setup-similar').classList.remove('hidden');

  var escapeKeydownHandler = function (evt) {
    if (evt.key === ESC_KEY) {
      closeButtonClickHandler();
    }
  };

  var openButtonClickHandler = function () {
    setupHero.classList.remove('hidden');
    document.addEventListener('keydown', escapeKeydownHandler);
  };

  var closeButtonClickHandler = function () {
    setupHero.classList.add('hidden');
    document.removeEventListener('keydown', escapeKeydownHandler);
  };

  openButton.addEventListener('click', openButtonClickHandler);
  openButton.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      openButtonClickHandler();
    }
  });

  closeButton.addEventListener('click', closeButtonClickHandler);
  closeButton.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      closeButtonClickHandler();
    }
  });

  userNameInput.addEventListener('focus', function () {
    document.removeEventListener('keydown', escapeKeydownHandler);
  });
  userNameInput.addEventListener('blur', function () {
    document.addEventListener('keydown', escapeKeydownHandler);
  });

  var form = document.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.load(new FormData(form), function () {
      setupHero.classList.add('hidden');
    });
    evt.preventDefault();
  });
})();
