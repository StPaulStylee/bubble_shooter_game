$(function (){
  const game = new Bubbleshoot.Game();
  // game.init();
  console.log(game);
});

var Bubbleshoot = window.Bubbleshoot || {};
Bubbleshoot.Game = (function($){
  let Game = function() {
    this.init = () => {
      $('.but-start-game').bind('click', startGame);
    };
    let startGame = function () {
      $('.but-start-game').unbind('click');
      Bubbleshoot.ui.hideDialog();
    };
  };
  return Game;
})($);
