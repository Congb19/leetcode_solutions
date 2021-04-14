/**
 * Initialize your data structure here.
 */
function Node(zm, end) {
  this.zm = zm;
  this.children = {};
  if (end !== null) this.end = end;
  else this.end = false;
}
var Trie = function () {
  this.root = new Node('root', false);
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let l = word.length;
  let node = this.root;
  for (let i = 0; i < l; i++) {
    let end = false;
    if (i == l - 1) end = true;
    if (node.children[word.charAt(i)]) {
      node = node.children[word.charAt(i)];
      if (i == l - 1) node.end = end;
    }
    else {
      node.children[word.charAt(i)] = new Node(word.charAt(i), end);
      node = node.children[word.charAt(i)];
    }
  }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let l = word.length;
  let node = this.root;
  for (let i = 0; i < l; i++) {
    if (node.children[word.charAt(i)]) {
      node = node.children[word.charAt(i)];
      if (i == l - 1) return node.end;
    }
    else return false;
  }
  return true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let l = prefix.length;
  let node = this.root;
  for (let i = 0; i < l; i++) {
    if (node.children[prefix.charAt(i)]) {
      node = node.children[prefix.charAt(i)];
    }
    else return false;
  }
  return true;
};

var word = "apple";
var prefix = "app";
var obj = new Trie()

obj.insert("app")
obj.insert("apple")
var param_2 = obj.search("app")
var param_3 = obj.startsWith(prefix)
console.log(obj, param_2, param_3)
