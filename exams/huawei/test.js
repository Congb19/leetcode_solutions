//STRING1
while ((line = readline())) {
	let hash = new Map();
	let arr = line.split("");
	let n = line.length;
	let k = 0;
	for (let i = 0; i < n - k; i++) {
		if (hash.get(arr[i]) != null) {
			k++;
			arr.splice(i, 1);
			i--;
		} else {
			hash.set(arr[i], 1);
		}
	}
	let res = "";
	res += arr.join("");
	print(res);
}
