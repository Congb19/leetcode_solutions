/**
 * initialize your data structure here.
 */
var MinStack = function() {
    data=[...Array()];
    help=[...Array()];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    data.push(x);
    if (help.length===0||x<=help[help.length-1]) {
        help.push(x);
    }
    else {
        help.push(help[help.length-1]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (data.length>0) {
        data.pop();
        help.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (data.length>0) {
        return data[data.length-1];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (help.length>0) {
        return help[help.length-1];
    }
};


// Your MinStack object will be instantiated and called as such:
var obj = new MinStack()
obj.push(x);obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()
