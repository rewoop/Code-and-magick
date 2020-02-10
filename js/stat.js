'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var TEXT_X = 120;
  var TEXT_Y = 260;
  var TEXT_GAP = 30;
  var GAP = 10;
  var BAR_GAP = 50;
  var BAR_WIDTH = 40;
  var SATURATION_MIN = 0;
  var SATURATION_MAX = 100;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var headerText = function (ctx, text, x, y) {
    return (ctx.fillText(text, x, y));
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  var randomColor = function (min, max) {
    return Math.random() * (max - min) + min;
  };

  var statColor = function (ctx, color) {
    return (ctx.fillStyle = color);
  };

  var statText = function (ctx, names, times, barHeight, index) {
    statColor(ctx, '#000');
    ctx.fillText(names, CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * index, TEXT_Y);
    ctx.fillText(Math.round(times), CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * index, TEXT_Y - barHeight - TEXT_GAP);
  };

  var barColor = function (ctx, names) {
    if (names === 'Вы') {
      return (ctx.fillStyle = 'rgba(255, 0, 0, 1)');
    } else {
      return (ctx.fillStyle = 'hsl(240, ' + randomColor(SATURATION_MIN, SATURATION_MAX) + '%, 50%)');
    }
  };

  var barRender = function (ctx, names, barHeight, index) {
    barColor(ctx, names);
    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * index, TEXT_Y - GAP - barHeight, BAR_WIDTH, barHeight);
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    headerText(ctx, 'Ура вы победили!', TEXT_X, TEXT_GAP);
    headerText(ctx, 'Список результатов: ', TEXT_X, BAR_GAP);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      var barHeight = ((CLOUD_X + BAR_GAP) * times[i]) / maxTime;
      statText(ctx, names[i], times[i], barHeight, i);
      barRender(ctx, names[i], barHeight, i);
    }
  };
})();
