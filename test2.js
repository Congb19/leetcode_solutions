while ((line = readline())) {
	var lines = line.split(" ");
	var a = parseInt(lines[0]);
	let arr = [...Array(a + 1)];
	arr[0] = 1;
	arr[1] = 1;
	if (a < 2) {
		print(1);
	} else {
		for (let i = 2; i <= a; i++) {
			arr[i] = arr[i - 1] + arr[i - 2];
		}
		print(arr[a]);
	}
}
