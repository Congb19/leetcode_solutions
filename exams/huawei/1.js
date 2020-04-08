// A+B1
while ((line = readline())) {
	//题意：输出N的1次方到L次方的和
	let linex = line.split(" ");
	if (linex[0] === "0" && linex[1] === "0") break;
	let N = parseInt(linex[0]),
		L = parseInt(linex[1]);
	let res = 0;
	for (let i = 1; i <= L; i++) {
		res += Math.pow(N, i);
		if (res > 1000000007) res = res % 1000000007;
	}
	print(res);
}
