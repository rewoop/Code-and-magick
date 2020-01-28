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

var random = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var wizard = [
  {
    name: firstName[random(0, firstName.length)] + ' ' + secondName[random(0, secondName.length)],
    coatColor: coatColorArr[random(0, coatColorArr.length)],
    eyesColor: eyesColorArr[random(0, eyesColorArr.length - 1)]
  },
  {
    name: firstName[random(0, firstName.length)] + ' ' + secondName[random(0, secondName.length)],
    coatColor: coatColorArr[random(0, coatColorArr.length)],
    eyesColor: eyesColorArr[random(0, eyesColorArr.length - 1)]
  },
  {
    name: firstName[random(0, firstName.length)] + ' ' + secondName[random(0, secondName.length)],
    coatColor: coatColorArr[random(0, coatColorArr.length)],
    eyesColor: eyesColorArr[random(0, eyesColorArr.length - 1)]
  },
  {
    name: firstName[random(0, firstName.length)] + ' ' + secondName[random(0, secondName.length)],
    coatColor: coatColorArr[random(0, coatColorArr.length)],
    eyesColor: eyesColorArr[random(0, eyesColorArr.length - 1)]
  }
];

var renderWizard = function (wizardPar) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardPar.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardPar.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardPar.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizard.length; i++) {
  fragment.appendChild(renderWizard(wizard[i]));
}
similarListElement.appendChild(fragment);

setupHero.querySelector('.setup-similar').classList.remove('hidden');

// var arrayElem1 = ['raz', 'dva', 'tri'];
// var arrayElem2 = ['lala', 'dada', 'nana'];
// var arrayElem3 = ['blue', 'green', 'red'];
//
// var getRandomArrayElem = function (array) {
//   return array[Math.floor(Math.random() * array.length)];
// };
//
// var renderObject = function (number, slogan, color) {
//   return {
//     number: getRandomArrayElem(number),
//     slogan: getRandomArrayElem(slogan),
//     color: getRandomArrayElem(color)
//   };
// };
//
// var arrayObjects = [];
//
// for (var i = 0; i < 3; i++) {
//   arrayObjects.push(renderObject(arrayElem1, arrayElem2, arrayElem3));
// };
//
// console.log(arrayObjects);
