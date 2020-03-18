/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    // let ii = (x, y, rec) => {
    //     if (x>rec[0]&&x<rec[2]&&y>rec[1]&&y<rec[3]) return true;
    //     return false;
    // }
    // if (ii(rec1[0], rec1[1], rec2)) return true;
    // if (ii(rec1[2], rec1[1], rec2)) return true;
    // if (ii(rec1[0], rec1[3], rec2)) return true;
    // if (ii(rec1[2], rec1[3], rec2)) return true;
    // if (ii(rec2[0], rec2[1], rec1)) return true;
    // if (ii(rec2[2], rec2[1], rec1)) return true;
    // if (ii(rec2[0], rec2[3], rec1)) return true;
    // if (ii(rec2[2], rec2[3], rec1)) return true;
    // return false;
    if (rec1[0]>=rec2[2]||rec1[2]<=rec2[0]||rec1[1]>=rec2[3]||rec1[3]<=rec2[1]) return false;
    return true;
};
console.log(isRectangleOverlap([7,8,13,15], [10,8,12,20]));