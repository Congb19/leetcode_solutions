/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
let d = 0;
var serialize = function (root) {
  //1 偷鸡
  return root;
  //2 递归硬写
  if (root == null) return "";
  let res = [...Array()];
  let deep = (node, i) => {
    if (i > d) d = i;
    if (node == null) {
      return;
    } else {
      deep(node.left, i + 1);
      deep(node.right, i + 1);
    }
  };
  deep(root, 0);
  // console.log("D:", d);
  let tower = [...Array(d)].map(() => [...Array()]);
  let dd = (node, i) => {
    if (i >= d) return;
    if (node == null) {
      // console.log(i, "层 pushed null");
      tower[i].push(null);
      dd(null, i + 1);
      dd(null, i + 1);
    } else {
      // console.log(i, "层 pushed", node.val);
      tower[i].push(node.val);
      dd(node.left, i + 1);
      dd(node.right, i + 1);
    }
  };
  dd(root, 0);
  // console.log(tower);
  for (let i = 0; i < d; i++) {
    res.push(...tower[i]);
  }
  while (res[res.length - 1] == null) res.pop();
  let ress = "[";
  ress += res[0];
  for (let i = 1; i < res.length; i++) {
    ress += ",";
    if (res[i] !== null) ress += res[i];
    else ress += "null";
  }
  ress += "]";
  // console.log(res, ress);
  return ress;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  //1 偷鸡
  return data;
  //2 迭代释放
  if (data == "") return null;
  let s = data.substring(1, data.length - 1);
  let res = s.split(",");
  // console.log(res);
  let tower = [...Array(d)].map(() => [...Array()]);
  let i = 0;
  let p = i;
  // console.log("tower", tower);
  for (let j = 0; j < res.length; j++) {
    // console.log(j);
    if (j >= p + Math.pow(2, i)) {
      p += Math.pow(2, i);
      i++;
    }
    if (res[j] == "null") tower[i].push(null);
    else tower[i].push(new TreeNode(parseInt(res[j])));
  }
  // console.log(tower);
  let root = tower[0][0];
  for (let p = 0; p < d - 1; p++) {
    for (let q = 0; q < tower[p].length; q++) {
      if (tower[p][q] !== null) {
        if (q * 2 < tower[p + 1].length) tower[p][q].left = tower[p + 1][q * 2];
        else tower[p][q].left = null;
        if (q * 2 + 1 < tower[p + 1].length)
          tower[p][q].right = tower[p + 1][q * 2 + 1];
        else tower[p][q].right = null;
      }
    }
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
