//改自java版本，不过由于js不能swap，所以思路仅供参考
//要实现的话js需要在swap调用的地方手写一下swap

let array = [1, 2, 5, 4, 3];
/**
 * 堆排序的主要入口方法，共两步。
 */
function sort() {
	/*
	 *  第一步：将数组堆化
	 *  beginIndex = 第一个非叶子节点。
	 *  从第一个非叶子节点开始即可。无需从最后一个叶子节点开始。
	 *  叶子节点可以看作已符合堆要求的节点，根节点就是它自己且自己以下值为最大。
	 */
	let len = array.length - 1;
	let beginIndex = (len - 1) >> 1;
	for (let i = beginIndex; i >= 0; i--) maxHeapify(i, len);
	/*
	 * 第二步：对堆化数据排序
	 * 每次都是移出最顶层的根节点A[0]，与最尾部节点位置调换，同时遍历长度 - 1。
	 * 然后从新整理被换到根节点的末尾元素，使其符合堆的特性。
	 * 直至未排序的堆长度为 0。
	 */
	for (let i = len; i > 0; i--) {
		swap(0, i);
		maxHeapify(0, i - 1);
	}
}

function swap(i, j) {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

/**
 * 调整索引为 index 处的数据，使其符合堆的特性。
 *
 * @param index 需要堆化处理的数据的索引
 * @param len 未排序的堆（数组）的长度
 */
function maxHeapify(index, len) {
	let li = (index << 1) + 1; // 左子节点索引
	let ri = li + 1; // 右子节点索引
	let cMax = li; // 子节点值最大索引，默认左子节点。
	if (li > len) return; // 左子节点索引超出计算范围，直接返回。
	if (ri <= len && array[ri] > array[li])
		// 先判断左右子节点，哪个较大。
		cMax = ri;
	if (array[cMax] > array[index]) {
		//若“<”这是从大到小
		swap(cMax, index); // 如果父节点被子节点调换，
		maxHeapify(cMax, len); // 则需要继续判断换下后的父节点是否符合堆的特性。
	}
}
