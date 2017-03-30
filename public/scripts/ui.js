var Bubbleshoot = window.Bubbleshoot || {};
Bubbleshoot.ui = (function($){
  let ui = {
    BUBBLE_DIMS: 44,
    init: function() {

    },
    hideDialog: function(){
      $('.dialog').fadeOut(300);
    },
    getMouseCoords: function(e) {
      let coords = {x: e.pageX, y: e.pageY};
      return coords;
    },
    getBubbleCoords: function(bubble) {
      let bubbleCoords = bubble.position();
      bubbleCoords.left += ui.BUBBLE_DIMS/2;
      bubbleCoords.top += ui.BUBBLE_DIMS/2;
      return bubbleCoords;
    },
    getBubbleAngle: function(bubble, e) {
      let mouseCoords = ui.getMouseCoords(e);
      let bubbleCoords = ui.getBubbleCoords(bubble);
      let gameCoords = $('#game').position();
      let boardLeft = 120;
      let angle = Math.atan((mouseCoords.x - bubbleCoords.left - boardLeft)
                  / (bubbleCoords.top + gameCoords.top - mouseCoords.y));
      if(mouseCoords.y > bubbleCoords.top + gameCoords.top) {
        angle += Math.PI;
      }
      return angle;
    },
    fireBubble: function(bubble, coords, duration) {
      bubble.getSprite().animate({
        left: coords.x - ui.BUBBLE_DIMS/2,
        top: coords.y - ui.BUBBLE_DIMS/2,
      },
      {
        duration: duration,
        easing: 'linear'
      });
    }
  };
  return ui;
})($);
