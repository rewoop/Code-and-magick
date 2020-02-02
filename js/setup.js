'use strict';

var setupHero = document.querySelector('.setup');
var openButton = document.querySelector('.setup-open');
var closeButton = setupHero.querySelector('.setup-close');
var userNameInput = setupHero.querySelector('.setup-user-name');
var wizardCoatColor = setupHero.querySelector('.wizard-coat');
var wizardEyesColor = setupHero.querySelector('.wizard-eyes');
var fireballColor = setupHero.querySelector('.setup-fireball-wrap');
var coatColorInput = setupHero.querySelector('input[name=coat-color]');
var eyesColorInput = setupHero.querySelector('input[name=eyes-color]');
var fireballColorInput = setupHero.querySelector('input[name=fireball-color]');
setupHero.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS_ARR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS_ARR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS_ARR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

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

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < MIN_NAME_LENGTH) {
    target.setCustomValidity('Имя должно состоять минимум из ' + MIN_NAME_LENGTH + '-х символов');
  } else if (target.value.length > MAX_NAME_LENGTH) {
    target.setCustomValidity('Имя должно состоять максимум из ' + MAX_NAME_LENGTH + '-ти символов');
  } else {
    target.setCustomValidity('');
  }
});

wizardCoatColor.addEventListener('click', function () {
  var color = getRandomArrayElem(COAT_COLORS_ARR);
  wizardCoatColor.style.fill = color;
  coatColorInput.value = color;
});
wizardEyesColor.addEventListener('click', function () {
  var color = getRandomArrayElem(EYES_COLORS_ARR);
  wizardEyesColor.style.fill = color;
  eyesColorInput.value = color;
});
fireballColor.addEventListener('click', function () {
  var color = getRandomArrayElem(FIREBALL_COLORS_ARR);
  fireballColor.style.background = color;
  fireballColorInput.value = color;
});
