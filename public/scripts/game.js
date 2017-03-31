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
    let numBubbles;
    const MAX_BUBBLES = 70;
    this.init = function () {
      $('.but-start-game').bind('click', startGame);
    };
    let startGame = function () {
      $('.but-start-game').unbind('click');
      numBubbles = MAX_BUBBLES; // the amount of fireable bubbles per game
      Bubbleshoot.ui.hideDialog();
      currentBubble = getNextBubble();
      board = new Bubbleshoot.Board();
      Bubbleshoot.ui.drawBoard(board);
      $('#game').bind('click', clickGameScreen);
    };
    let getNextBubble = function() {
      let bubble = Bubbleshoot.Bubble.create();
      bubble.getSprite().addClass('current-bubble');
      $('#board').append(bubble.getSprite());
      Bubbleshoot.ui.drawBubblesRemaining(numBubbles);
      numBubbles--;
      return bubble;
    };
    let clickGameScreen = function(e) {
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
        currentBubble = getNextBubble();
    };
  };
  return Game;
})($);
