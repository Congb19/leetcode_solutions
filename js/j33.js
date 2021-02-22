/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  if (postorder.length <= 1) return true;
  let sub1 = [...Array()],
    sub2 = [...Array()];
  let res1 = false,
    res2 = false;
  let p = 0;
  let flag = false;
  for (let i = 0; i < postorder.length - 1; i++) {
    if (!flag && postorder[i] > postorder[postorder.length - 1]) {
      flag = true;
      p = i;
    }
    if (flag && postorder[i] < postorder[postorder.length - 1]) return false;
    if (!flag && i == postorder.length - 2) p = postorder.length - 1;
  }
  sub1 = postorder.slice(0, p);
  sub2 = postorder.slice(p, postorder.length - 1);
  console.log(sub1, sub2);
  res1 = verifyPostorder(sub1);
  res2 = verifyPostorder(sub2);
  return res1 && res2;
};
