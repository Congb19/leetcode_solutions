// Definition for a Node.
function Node(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  console.log(root);

  let res = [];
  let list = [];
  let curr = root;
  let prevNode, head;
  while (res.length || curr) {
    while (curr) {
      res.push(curr);
      curr = curr.left;
    }
    let item = res.pop();
    if (item.right) curr = item.right;
    if (!prevNode) {
      prevNode = item;
      head = prevNode;
    } else {
      prevNode.right = item;
      item.left = prevNode;
      prevNode = prevNode.right;
      // console.log(prevNode.val)
    }
  }
  head.left = prevNode;
  prevNode.right = head;
  return head;
};

let node1 = new Node(1, null, null);
let node3 = new Node(3, null, null);
let node5 = new Node(5, null, null);
let node2 = new Node(2, node1, node3);
let node4 = new Node(4, node2, node5);
console.log(treeToDoublyList(node4).right);
