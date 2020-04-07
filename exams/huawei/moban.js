// A+B1
while ((line = readline())) {
	let linex = line.split(" ");
	print(parseInt(linex[0]) + parseInt(linex[1]));
}
// A+B2
while ((line = readline())) {
	let lines = [...Array(parseInt(line))];
	lines.forEach((element) => {
		element = readline();
		let linex = element.split(" ");

		print(parseInt(linex[0]) + parseInt(linex[1]));
	});
}
// A+B3
while ((line = readline())) {
	let linex = line.split(" ");
	if (linex[0] === "0" && linex[1] === "0") break;
	print(parseInt(linex[0]) + parseInt(linex[1]));
}
// A+B4
while ((line = readline())) {
	let linex = line.split(" ");
	if (linex[0] === "0") break;
	let res = 0;
	linex.forEach((element, index, array) => {
		if (index !== 0) {
			res += parseInt(element);
		}
	});
	print(res);
	res = 0;
}
// A+B5
while ((line = readline())) {
	let lines = [...Array(parseInt(line))];
	lines.forEach((element) => {
		element = readline();
		let linex = element.split(" ");
		let res = 0;
		linex.forEach((element, index, array) => {
			if (index !== 0) {
				res += parseInt(element);
			}
		});
		print(res);
		res = 0;
	});
}
// A+B6
while ((line = readline())) {
	let linex = line.split(" ");
	let res = 0;
	linex.forEach((element, index, array) => {
		if (index !== 0) {
			res += parseInt(element);
		}
	});
	print(res);
	res = 0;
}
// A+B7
while ((line = readline())) {
	let linex = line.split(" ");
	let res = 0;
	linex.forEach((element, index, array) => {
		res += parseInt(element);
	});
	print(res);
	res = 0;
}
//STRING1
while ((line = readline())) {
	if (line !== "0") {
		let strs = readline();
		let linex = strs.split(" ");
		linex.sort();
		let res = "";
		res = linex.join(" ");
		print(res);
	}
}
// STRING2
while ((line = readline())) {
	let linex = line.split(" ");
	linex.sort();
	let res = "";
	res = linex.join(" ");
	print(res);
}
// STRING3
while ((line = readline())) {
	let linex = line.split(",");
	linex.sort();
	let res = "";
	res = linex.join(",");
	print(res);
}
