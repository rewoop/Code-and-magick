'use strict';

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

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
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

var barColor = function (ctx, names) {
  if (names === 'Вы') {
    return (ctx.fillStyle = 'rgba(255, 0, 0, 1)');
  } else {
    return (ctx.fillStyle = 'hsl(240, ' + randomColor(0, 100) + '%, 50%)');
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', TEXT_X, TEXT_GAP);
  ctx.fillText('Список результатов: ', TEXT_X, TEXT_GAP + (GAP * 2));

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var barHeight = (150 * times[i]) / maxTime;
    statColor(ctx, '#000');
    ctx.fillText(names[i], CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, TEXT_Y);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, TEXT_Y - barHeight - (GAP * 3));
    barColor(ctx, names[i]);
    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, TEXT_Y - GAP - barHeight, BAR_WIDTH, barHeight);
  }
};
