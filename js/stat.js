'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 100;
var TEXT_Y = 260;
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

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_Y + GAP, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_Y, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов: ', 120, 50);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var barHeight = (150 * times[i]) / maxTime;

    if (names[i] === 'Вы') {
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, TEXT_Y);
      ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, TEXT_Y - barHeight - (GAP * 3));
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, TEXT_Y - GAP - barHeight, BAR_WIDTH, barHeight);
    } else {
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, TEXT_Y);
      ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, TEXT_Y - barHeight - (GAP * 3));
      ctx.fillStyle = 'hsl(240, ' + Math.random() * (100 - 0) + 0 + '%, 50%)';
      ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, TEXT_Y - GAP - barHeight, BAR_WIDTH, barHeight);
    }
  }
};
