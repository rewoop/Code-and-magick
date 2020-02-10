'use strict';

(function () {
  var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS_ARR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS_ARR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS_ARR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarListElement = document.querySelector('.setup-similar-list');

  var getRandomArrayElem = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var getWizard = function (name, surename, coat, eyes) {
    return {
      name: getRandomArrayElem(name) + ' ' + getRandomArrayElem(surename),
      coatColor: getRandomArrayElem(coat),
      eyesColor: getRandomArrayElem(eyes)
    };
  };

  var wizards = [];

  for (var i = 0; i < 4; i++) {
    wizards.push(getWizard(FIRST_NAMES, SECOND_NAMES, COAT_COLORS_ARR, EYES_COLORS_ARR));
  }

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var createWizards = function () {
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < wizards.length; j++) {
      fragment.appendChild(renderWizard(wizards[j]));
    }
    return similarListElement.appendChild(fragment);
  };

  createWizards();

  window.createWizards = {
    COAT_COLORS_ARR: COAT_COLORS_ARR,
    EYES_COLORS_ARR: EYES_COLORS_ARR,
    FIREBALL_COLORS_ARR: FIREBALL_COLORS_ARR
  };
})();
