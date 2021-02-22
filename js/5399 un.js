/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
var largestNumber = function (cost, target) {
  let res = "0";
  let n = cost.length;
  if (n < 1) return "0";
  // let min = cost[0],
  // 	nums = 0,
  // 	minid = 0;
  // for (let i = 0; i < n; i++) {
  // 	if (cost[i] <= min) {
  // 		min = cost[i];
  // 		minid = i;
  // 	}
  // }
  // if (target % min == 0) {
  // 	let ttt = "";
  // 	let numsb = target / min;
  // 	while (numsb--) {
  // 		ttt += (minid + 1).toString();
  // 	}
  // 	return ttt;
  // }

  // dfs
  let reses = [...Array()];
  let tmp = [...Array()];
  let dd = (c, t) => {
    // console.log("now c t:", c, t);
    if (t == 0) {
      // console.log("got!", tmp);
      reses.push([...tmp]);
      return;
    } else if (t < 0) {
      return;
    } else {
      for (let i = 0; i < c.length; i++) {
        tmp.push(i);
        dd(c, t - c[i]);
        tmp.pop();
      }
    }
  };
  dd(cost, target);
  // console.log(reses);
  for (let i = 0; i < reses.length; i++) {
    reses[i].sort((a, b) => b - a);
    reses[i].forEach((element, index, array) => {
      reses[i][index]++;
    });
    let tmp = parseInt(reses[i].join(""));
    // console.log(tmp);
    if (tmp > parseInt(res)) {
      res = tmp.toString();
    }
  }
  //pass
  // let ys = target % min;
  // nums = Math.floor(target / min);
  // // console.log(min, minid, nums);
  // while (nums > 0) {
  // 	// console.log("nums now=", nums);
  // 	for (let i = n - 1; i >= 0; i--) {
  // 		if (ys % cost[i] == 0) {
  // 			let numsb = ys / cost[i];
  // 			if (i > minid) {
  // 				while (numsb--) {
  // 					res += (i + 1).toString();
  // 				}
  // 				while (nums--) {
  // 					res += (minid + 1).toString();
  // 				}
  // 			} else {
  // 				while (nums--) {
  // 					res += (minid + 1).toString();
  // 				}
  // 				while (numsb--) {
  // 					res += (i + 1).toString();
  // 				}
  // 			}
  // 			break;
  // 		}
  // 	}
  // 	nums--;
  // 	ys += min;
  // }
  if (res == "") return "0";
  return res;
};
console.log(largestNumber([5, 4, 4, 5, 5, 5, 5, 5, 5], 39));
