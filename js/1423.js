/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  // 正常dfs  超时
  // let dd = (cards, times, point) => {
  // 	// console.log('now cards:', cards);
  // 	if (times == 0) return 0;
  // 	else {
  // 		let t1 = cards[0] + dd(cards.slice(1, cards.length), times - 1, cards[0]);
  // 		let t2 =
  // 			cards[cards.length - 1] +
  // 			dd(
  // 				cards.slice(0, cards.length - 1),
  // 				times - 1,
  // 				cards[cards.length - 1]
  // 			);
  // 		return t1 > t2 ? t1 : t2;
  // 	}
  // };
  // let res = dd(cardPoints, k, 0);
  // return res;
  //逆向思维 选取中心最小的length-k个元素，排除掉即可
  let res = 0,
    t = 0,
    all = 0,
    l = cardPoints.length;
  for (let i = 0; i < l - k; i++) {
    res += cardPoints[i];
  }
  t = all = res;
  for (let i = l - k; i < l; i++) {
    // console.log(t);
    all += cardPoints[i];
    t += cardPoints[i];
    t -= cardPoints[i - (l - k)];
    res = res < t ? res : t;
  }
  return all - res;
};
console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
