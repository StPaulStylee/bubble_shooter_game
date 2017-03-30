$(function (){
  const game = new Bubbleshoot.Game();
  game.init();
  console.log(game);
});

var Bubbleshoot = window.Bubbleshoot || {};
Bubbleshoot.Game = (function($){
  let Game = function() {
    let currentBubble;
    this.init = function () {
      $('.but-start-game').bind('click', startGame);
    };
    let startGame = function () {
      $('.but-start-game').unbind('click');
      Bubbleshoot.ui.hideDialog();
      currentBubble = getNextBubble();
      $('#game').bind('click', clickGameScreen)
    };
    let getNextBubble = function() {
      let bubble = Bubbleshoot.Bubble.create();
      bubble.getSprite().addClass('current-bubble');
      $('#board').append(bubble.getSprite());
      return bubble;
    };
    let clickGameScreen = function(e) {
      let angle = Bubbleshoot.ui. getBubbleAngle(currentBubble.getSprite(),e);
    }
  };
  return Game;
})($);
