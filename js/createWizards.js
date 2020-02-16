'use strict';

(function () {
  var MAX_SIMILAR_WIZARD_COUNT = 4;
  var DEBOUNCE_TIMEOUT = 500;

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarListElement = document.querySelector('.setup-similar-list');
  var setupSimilarBlock = document.querySelector('.setup-similar');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var render = function (wizard) {
    var takeCount = wizard.length > MAX_SIMILAR_WIZARD_COUNT ? MAX_SIMILAR_WIZARD_COUNT : wizard.length;
    similarListElement.innerHTML = '';
    for (var i = 0; i < takeCount; i++) {
      similarListElement.appendChild(renderWizard(wizard[i]));
    }
    setupSimilarBlock.classList.remove('hidden');
  };

  var wizards = [];
  var coatColor = '';
  var eyesColor = '';
  var lastTimeout;

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var updateWizards = function () {
    render(wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
      }
      return rankDiff;
    }));
  };

  var debounce = function (functionDebounce, timeout) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(function () {
      functionDebounce();
    }, timeout);
  };

  window.customizeWizard.wizard.onEyesChange = function (color) {
    eyesColor = color;
    debounce(updateWizards, DEBOUNCE_TIMEOUT);
  };

  window.customizeWizard.wizard.onCoatChange = function (color) {
    coatColor = color;
    debounce(updateWizards, DEBOUNCE_TIMEOUT);
  };

  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
    setupSimilarBlock.classList.add('hidden');
  };

  window.createWizards = {
    errorHandler: errorHandler
  };

  window.backend.load(successHandler, errorHandler);
})();
