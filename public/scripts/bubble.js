var Bubbleshoot = window.Bubbleshoot || {};
Bubbleshoot.Bubble = (function($){
  let Bubble = function(row, color, type, sprite) {
    let that = this; // that is now referencing this Bubble class, i think?
    this.getType = function(){
      return type;
    };
    this.getSprite = function() {
      return sprite;
    };
    this.getColor = function(){
      return color;
    };
    this.getRow = function(){
      return row;
    };
    this.getCoords = function() {
      let coords = {
        left: that.getColor() * Bubbleshoot.ui.BUBBLE_DIMS/2 + Bubbleshoot.ui.BUBBLE_DIMS/2,
        top: that.getRow() * Bubbleshoot.ui.ROW_HEIGHT + Bubbleshoot.ui.BUBBLE_DIMS/2
      };
      return coords;
    };
  };
    Bubble.create = function(rowNum, colorNum, type) {
      if (type === undefined) {
        type = Math.floor(Math.random() * 4); // choose # between 0 - 1 and mult by 4 to set bubble type
      }
      let sprite = $(document.createElement('div'));
      sprite.addClass('bubble');
      sprite.addClass('bubble-' + type);
      let bubble = new Bubble(rowNum, colorNum, type, sprite);
      return bubble;
    };
    return Bubble;
})($);
