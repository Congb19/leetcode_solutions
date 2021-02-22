import "common/hash.js";
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (head === null) return null;
  let hash = [...Array()];
  function j(a, b) {
    this.a = a;
    this.b = b;
  }
  let dd = (node, id) => {
    if (node === null) return;
    hash.push(new j(node, new Node(node.val)));
    dd(node.next, id + 1);
  };
  dd(head, 0);
  // console.log(hash);
  for (let i = 0; i < hash.length; i++) {
    if (i < hash.length - 1) hash[i].b.next = hash[i + 1].b;
    for (let j = 0; j < hash.length; j++) {
      if (hash[j].a === hash[i].a.random) {
        hash[i].b.random = hash[j].b;
        break;
      }
    }
  }
  return hash[0].b;
};
