var Bubbleshoot = window.Bubbleshoot || {};
Bubbleshoot.ui = (function($){
  let ui = {
    BUBBLE_DIMS: 44,
    ROW_HEIGHT: 40,
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
    },
    drawBoard: function(board) {
      let rows = board.getRows();
      let gameArea = $('#board');
      for(let i = 0; i < rows.length; i++) {
        let row = rows[i];
        for(let j = 0; j < row.length; j++) {
          let bubble = row[j];
          if(bubble) {
            let sprite = bubble.getSprite();
            gameArea.append(sprite);
            let left = j * ui.BUBBLE_DIMS/2;
            let top = i * ui.ROW_HEIGHT;
            sprite.css({
              left: left,
              top: top
            });
          };
        };
      };
    },
    drawBubblesRemaining: numBubbles => {
      $('#bubbles-remaining').text(numBubbles);
    }
  };
  return ui;
})($);
