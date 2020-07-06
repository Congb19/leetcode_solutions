/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
	let max = 0;
	let res = [...Array(candies.length)];
	for (let i = 0; i < candies.length; i++) {
		if (candies[i] > max) max = candies[i];
	}
	for (let i = 0; i < candies.length; i++) {
		res[i] = candies[i] + extraCandies >= max;
	}
	return res;
};
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
