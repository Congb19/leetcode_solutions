/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root===null) return root;
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
        res[d].push(p);
        // console.log("push to ", d, p.val);
        dd2(p.right, d+1);
    }
    dd(root, 0);
    let res=[...Array(deep+1)].map(()=>[...Array()]);
    dd2(root, 0);
    for (let i = 0; i < res.length; i++) {
        for (let j = 0; j < res[i].length-1; j++) {
            res[i][j].next=res[i][j+1];
        }
    }
    return res[0][0];
};
