/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res=0;
    //˼·1 �ȷָ�����-����С
    // for (let i=1;i<prices.length;i++) {
    //     let min=prices[0], max=prices[i];
    //     for (let j=0;j<i;j++){
    //         if (prices[j]<min) min=prices[j];
    //     }
    //     for (let j=i;j<prices.length;j++) {
    //         if (prices[j]>max) max=prices[j];
    //     }
    //     if (max-min>res) res=max-min;
    // }
    //˼·2 һ�α���
    // let min=prices[0], max=prices[prices.length];
    // for (let i=1;i<prices.length;i++) {
    //     if (prices[i]<min) min=prices[i];
    //     else if (prices[i]-min>res) res=prices[i]-min;
    // }
    //˼·3 dp

    return res;
};
let nums = [7,1,5,3,6,4], k=2;
console.log(maxProfit(nums));