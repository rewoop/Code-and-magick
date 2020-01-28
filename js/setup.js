'use strict';

var setupHero = document.querySelector('.setup');
setupHero.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var secondName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColorArr = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColorArr = ['black', 'red', 'blue', 'yellow', 'green'];

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

var wizard = [];

for (var i = 0; i < 4; i++) {
  wizard.push(getWizard(firstName, secondName, coatColorArr, eyesColorArr));
}

var renderWizard = function (wizardPar) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardPar.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardPar.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardPar.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizard.length; j++) {
  fragment.appendChild(renderWizard(wizard[j]));
}
similarListElement.appendChild(fragment);

setupHero.querySelector('.setup-similar').classList.remove('hidden');
