/**
 * @param {string} address
 * @return {string}
 */

var defangIPaddr = function(address) {
    let arr = address.split(".");
    let arrl = arr.length;
    let k=arr[0];

    for (let i =1 ;i< arrl; i++) {
        k+="[.]";
        k+=arr[i];
    }
    // console.log(arr);
    // console.log(k);
    return k;
};

console.log(defangIPaddr(address = "255.100.50.0"))
