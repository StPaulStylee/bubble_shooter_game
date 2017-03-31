var Bubbleshoot = window.Bubbleshoot || {};
Bubbleshoot.Bubble = (function($){
  let Bubble = function(sprite, type, color, row) {
    let that = this; // that is now referencing this Bubble class, i think?
    this.getType = () => type;
    this.getSprite = function() {
      return sprite;
    };
    this.getColor = () => color;
    this.getRow = () => row;
    };
    Bubble.create = function(rowNum, colNum, type) {
      if (type === undefined) {
        type = Math.floor(Math.random() * 4); // choose # between 0 - 1 and mult by 4 to set bubble type
      }
      let sprite = $(document.createElement('div'));
      sprite.addClass('bubble');
      sprite.addClass('bubble-' + type);
      let bubble = new Bubble(rowNum, colNum, type, sprite);
      return bubble;
    };
    return Bubble;
})($);
