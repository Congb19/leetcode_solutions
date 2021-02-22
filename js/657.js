/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let lr = 0,
    ud = 0;
  for (let i = 0; i < moves.length; i++) {
    switch (moves.charAt(i)) {
      case "U":
        ud++;
        break;
      case "D":
        ud--;
        break;
      case "L":
        lr++;
        break;
      case "R":
        lr--;
        break;
      default:
        break;
    }
  }
  return !lr && !ud;
};
