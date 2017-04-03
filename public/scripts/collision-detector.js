var Bubbleshoot = window.Bubbleshoot || {};
Bubbleshoot.CollisionDetector = (function($){
  let CollisionDetector = {
    findIntersection: (currentBubble, board, angle) => {
      let rows = board.getRows();
      let collision = null;
      let position = currentBubble.getSprite().position();
      let start = {
        left: position.left + Bubbleshoot.ui.BUBBLE_DIMS/2,
        top: position.top + Bubbleshoot.ui.BUBBLE_DIMS/2
      };
      let dx = Math.sin(angle);
      let dy = -Math.cos(angle);
      for(let i = 0; i < rows.length; i++) {
        let row = rows[i];
        for(let j = 0; j < row.length; j++) {
          let bubble = row[j];
          if (bubble) {
            let coords = bubble.getCoords();
            let distToBubble = {
              x: start.left - coords.left,
              y: start.top - coords.top
            };
            let t = dx * distToBubble.x + dy * distToBubble.y;
            let ex = -t * dx + start.left;
            let ey = -t * dy + start.top;
            let distEC = Math.sqrt((ex - coords.left) * (ex - coords.left) +
                         (ey - coords.top) * (ey - coords.top));
            if (distEC < Bubbleshoot.ui.BUBBLE_DIMS * Bubbleshoot.ui.BUBBLE_DIMS - distEC * distEC) {
              let dt = Math.sqrt(Bubbleshoot.ui.BUBBLE_DIMS * Bubbleshoot.ui.BUBBLE_DIMS - distEC * distEC);
              let offset1 = {
                x: (t - dt) * dx,
                y: -(t - dt) * dy
              };
              let offset2 = {
                x: (t + dt) * dx,
                y: -(t + dt) * dy
              };
              let distToCollision1 = Math.sqrt(offset1.x * offset1.x + offset1.y * offset1.y);
              let distToCollision2 = Math.sqrt(offset2.x * offset2.x + offset2.y * offset2.y);
              if (distToCollision1 < distToCollision2) {
                let distToCollision = distToCollision1;
                let dest = {
                  x: offset1.x + start.left,
                  y: offset1.y + start.top
                };
              } else {
                let distToCollision = distToCollision2;
                let dest = {
                  x: offset2.x + start.left,
                  y: offset2.y + start.top
                };
              }
              if (!collision || collision.distToCollision > distToCollision) {
                collision = {
                  bubble: bubble,
                  distToCollsion: distToCollsion,
                  coords: dest
                };
              };
            };
          };
        };
      };
      return collision;
    }
  };
})($);
