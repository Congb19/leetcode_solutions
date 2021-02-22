/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
function TreeNode(val, has) {
  this.val = val;
  this.has = has;
  this.sons = [...Array()];
}
var minTime = function (n, edges, hasApple) {
  let nodes = [...Array()];
  let res = 0;
  for (let i = 0; i < n; i++) {
    nodes.push(new TreeNode(i, hasApple[i]));
  }
  edges.sort((a, b) => {
    return a[0] - b[0];
  });
  // console.log(edges);
  edges.forEach((element) => {
    nodes[element[0]].sons.push(nodes[element[1]]);
  });
  // console.log(nodes);
  //has = 我的儿子们有没有苹果
  let has = (node) => {
    if (node == null) return false;
    let h = false;
    for (let i = 0; i < node.sons.length; i++) {
      if ((node.sons[i] && node.sons[i].has) || has(node.sons[i])) h = true;
    }
    return h;
  };
  //test = 深度检测，我每个儿子如果有则+2
  let test = (node) => {
    for (let i = 0; i < node.sons.length; i++) {
      if ((node.sons[i] && node.sons[i].has) || has(node.sons[i])) {
        // console.log("has!", node.sons[i].val);
        res += 2;
        test(node.sons[i]);
      }
    }
  };
  let p = nodes[0];
  test(p);
  return res;
};
let n = 4,
  edges = [
    [0, 1],
    [1, 2],
    [0, 3],
  ],
  hasApple = [true, true, true, true];
console.log(minTime(n, edges, hasApple));
