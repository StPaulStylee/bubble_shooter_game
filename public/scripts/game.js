$(function (){
  const game = new Bubbleshoot.Game();
  game.init();
  console.log(game);
});

var Bubbleshoot = window.Bubbleshoot || {};
Bubbleshoot.Game = (function($){
  let Game = function() {
    let currentBubble;
    let board;
    this.init = function () {
      $('.but-start-game').bind('click', startGame);
    };
    let startGame = function () {
      $('.but-start-game').unbind('click');
      Bubbleshoot.ui.hideDialog();
      currentBubble = getNextBubble();
      board = new Bubbleshoot.Board();
      Bubbleshoot.ui.drawBoard(board);
      $('#game').bind('click', clickGameScreen)
    };
    let getNextBubble = function() {
      let bubble = Bubbleshoot.Bubble.create();
      bubble.getSprite().addClass('current-bubble');
      $('#board').append(bubble.getSprite());
      return bubble;
    };
    let clickGameScreen = function(e) {
      $('#game').unbind('click');
      let angle = Bubbleshoot.ui.getBubbleAngle(currentBubble.getSprite(),e);
      let duration = 750;
      let distance = 1000;
      let distX = Math.sin(angle) * distance;
      let distY = Math.cos(angle) * distance;
      let bubbleCoords = Bubbleshoot.ui.getBubbleCoords(currentBubble.getSprite());
      let coords = {
        x: bubbleCoords.left + distX,
        y: bubbleCoords.top - distY
      };
      Bubbleshoot.ui.fireBubble(currentBubble, coords, duration);
    };
  };
  return Game;
})($);
