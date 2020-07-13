/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
	//对象模拟哈希表 过
	const map = {};
	const res = [];
	for (const num1 of nums1) {
		if (map[num1]) {
			map[num1]++;
		} else {
			map[num1] = 1;
		}
	}
	for (const num2 of nums2) {
		const val = map[num2];
		if (val > 0) {
			res.push(num2);
			map[num2]--;
		}
	}
	return res;
	//辣鸡
	// var res = new Array();
	// if (nums1.length == 0 || nums2.length == 0) return res;
	// nums1 = nums1.sort(sequence);
	// nums2 = nums2.sort(sequence);
	// console.log(nums1);
	// console.log(nums2);
	// var j = 0;
	// var k = 0;
	// for (var i = 0; i < nums1.length; i++) {
	// 	console.log("i=", i, "j=", j);
	// 	if (j == nums2.length) {
	// 		// console.log("boom");
	// 		break;
	// 	}
	// 	if (nums1[i] == nums2[j]) {
	// 		res[k] = nums1[i];
	// 		k++;
	// 		j++;
	// 	} else {
	// 		if (nums1[i] < nums2[j]) {
	// 			continue;
	// 		} else {
	// 			if (j == nums2.length - 1) break;
	// 			while (nums2[j] < nums1[i]) {
	// 				if (j == nums2.length - 1) break;
	// 				j++;
	// 			}
	// 			// if(j==nums2.length) break;
	// 			i--;
	// 		}
	// 	}
	// }
	// return res;
};

var nums1 = [4, 9, 5],
	nums2 = [9, 4, 9, 8, 4];
(nums1 = [
	61,
	24,
	20,
	58,
	95,
	53,
	17,
	32,
	45,
	85,
	70,
	20,
	83,
	62,
	35,
	89,
	5,
	95,
	12,
	86,
	58,
	77,
	30,
	64,
	46,
	13,
	5,
	92,
	67,
	40,
	20,
	38,
	31,
	18,
	89,
	85,
	7,
	30,
	67,
	34,
	62,
	35,
	47,
	98,
	3,
	41,
	53,
	26,
	66,
	40,
	54,
	44,
	57,
	46,
	70,
	60,
	4,
	63,
	82,
	42,
	65,
	59,
	17,
	98,
	29,
	72,
	1,
	96,
	82,
	66,
	98,
	6,
	92,
	31,
	43,
	81,
	88,
	60,
	10,
	55,
	66,
	82,
	0,
	79,
	11,
	81,
]),
	(nums2 = [
		5,
		25,
		4,
		39,
		57,
		49,
		93,
		79,
		7,
		8,
		49,
		89,
		2,
		7,
		73,
		88,
		45,
		15,
		34,
		92,
		84,
		38,
		85,
		34,
		16,
		6,
		99,
		0,
		2,
		36,
		68,
		52,
		73,
		50,
		77,
		44,
		61,
		48,
	]);

var num = 9;
console.log(intersect(nums1, nums2));
console.log("test ", -2147483648 <= 1);
