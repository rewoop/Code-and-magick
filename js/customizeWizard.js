'use strict';

(function () {
  var COAT_COLORS_ARR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS_ARR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS_ARR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var DEFAULT_FIREBALL_VALUE = '#ee4830';

  var setupHero = document.querySelector('.setup');
  var wizardCoatColor = setupHero.querySelector('.wizard-coat');
  var wizardEyesColor = setupHero.querySelector('.wizard-eyes');
  var fireballColor = setupHero.querySelector('.setup-fireball-wrap');
  var coatColorInput = setupHero.querySelector('input[name=coat-color]');
  var eyesColorInput = setupHero.querySelector('input[name=eyes-color]');
  var fireballColorInput = setupHero.querySelector('input[name=fireball-color]');

  fireballColorInput.value = DEFAULT_FIREBALL_VALUE;
  var wizard = {
    onCoatChange: function () {},
    onEyesChange: function () {}
  };

  var getRandomArrayElem = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  wizardCoatColor.addEventListener('click', function () {
    var color = getRandomArrayElem(COAT_COLORS_ARR);
    wizardCoatColor.style.fill = color;
    coatColorInput.value = color;
    wizard.onCoatChange(color);
  });
  wizardEyesColor.addEventListener('click', function () {
    var color = getRandomArrayElem(EYES_COLORS_ARR);
    wizardEyesColor.style.fill = color;
    eyesColorInput.value = color;
    wizard.onEyesChange(color);
  });
  fireballColor.addEventListener('click', function () {
    var color = getRandomArrayElem(FIREBALL_COLORS_ARR);
    fireballColor.style.background = color;
    fireballColorInput.value = color;
  });

  window.customizeWizard = {
    setupHero: setupHero,
    wizard: wizard
  };
})();
