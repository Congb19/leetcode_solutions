/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (root===null) return [];
    let deep=0;
    let dd=(p, d)=> {
        if (p===null) return;
        if (d>deep) deep=d;
        dd(p.left, d+1);
        dd(p.right, d+1);
    }
    let dd2=(p, d)=> {
        if (p===null) return;
        dd2(p.left, d+1);
        res[d].push(p.val);
        // console.log("push to ", d, p.val);
        dd2(p.right, d+1);
    }
    dd(root, 0);
    // console.log(deep);
    let res=[...Array(deep+1)].map(()=>[...Array()]);
    dd2(root, 0);
    for (let i=0;i<res.length;i++) {
        if (i%2===1) res[i]=res[i].reverse();
    }
    return res;
};