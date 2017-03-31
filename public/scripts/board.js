var Bubbleshoot = window.Bubbleshoot || {};
Bubbleshoot.Board = (function($){
  const NUM_ROWS = 9;
  const NUM_COLS = 32;
  let Board = function() {
    let that = this;
    let rows = createLayout();
    this.getRows = function() {
      return rows;
    };
    return this;
  };
  let createLayout = function() {
    let rows = [];
    for(let i = 0; i < NUM_ROWS; i++) {
      let row = [];
      let startCol = i%2 == 0 ? 1 : 0;
      for (let j = startCol; j < NUM_COLS; j+=2) {
        let bubble = Bubbleshoot.Bubble.create(i,j);
        row[j] = bubble;
      };
      rows.push(row);
    };
    return rows;
   };
  return Board;
})($);
