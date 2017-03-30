var Bubbleshoot = window.Bubbleshoot || {};
Bubbleshoot.Bubble = (function($){
  let Bubble = function(sprite) {
    let that = this; // do I really need this line of code?
    this.getSprite = function() {
      return sprite;
      }
    };
    Bubble.create = function() {
      let sprite = $(document.createElement('div'));
      sprite.addClass('bubble');
      sprite.addClass('bubble-0');
      let bubble = new Bubble(sprite);
      return bubble;
    };
    return Bubble;
})($);
