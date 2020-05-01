'use strict';

(function quadrants() {
  window.quadrants = (x, y) => {
    if (x > 0 && y > 0) {
      return 1;
    }

    if (x < 0 && y > 0) {
      return 2;
    }

    if (x < 0 && y < 0) {
      return 3;
    }

    if (x > 0 && y < 0) {
      return 4;
    }

    return 0;
  };
}());
