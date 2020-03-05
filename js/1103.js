/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    //Ë¼Â·1 ±©Á¦
    let res=[...Array(num_people)].map(()=>0);
    // console.log(res)
    let k=1;
    while (candies>0) {
        for (let i=1;i<=num_people;i++) {
            if (candies>=k) {
                res[i-1]+=k;
                candies-=k;
            }
            else {
                res[i-1]+=candies;
                candies=0;
            }
            k++;
            if (candies<=0) break;
        }
    }
    return res;
};
let n=10, m=3;
console.log(distributeCandies(n, m));