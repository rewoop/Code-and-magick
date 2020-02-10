'use strict';

(function () {
  var setupHero = document.querySelector('.setup');
  var userNameInput = setupHero.querySelector('.setup-user-name');
  var wizardCoatColor = setupHero.querySelector('.wizard-coat');
  var wizardEyesColor = setupHero.querySelector('.wizard-eyes');
  var fireballColor = setupHero.querySelector('.setup-fireball-wrap');
  var coatColorInput = setupHero.querySelector('input[name=coat-color]');
  var eyesColorInput = setupHero.querySelector('input[name=eyes-color]');
  var fireballColorInput = setupHero.querySelector('input[name=fireball-color]');

  var getRandomArrayElem = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  wizardCoatColor.addEventListener('click', function () {
    var color = getRandomArrayElem(window.createWizards.COAT_COLORS_ARR);
    wizardCoatColor.style.fill = color;
    coatColorInput.value = color;
  });
  wizardEyesColor.addEventListener('click', function () {
    var color = getRandomArrayElem(window.createWizards.EYES_COLORS_ARR);
    wizardEyesColor.style.fill = color;
    eyesColorInput.value = color;
  });
  fireballColor.addEventListener('click', function () {
    var color = getRandomArrayElem(window.createWizards.FIREBALL_COLORS_ARR);
    fireballColor.style.background = color;
    fireballColorInput.value = color;
  });
})();
