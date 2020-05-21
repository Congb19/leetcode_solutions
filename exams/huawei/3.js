let map = [...Array()];
let lines = [...Array()];
while ((line = readline())) {
	//搜索回溯看看 可能会超时
	lines.push(line);
	lines.push(readline());
	lines.push(readline());
	lines.push(readline());
	lines.push(readline());
	lines.push(readline());
	lines.push(readline());
	lines.push(readline());
	lines.push(readline());
	lines.forEach((element, index, array) => {
		lines[index] = element.substr(1, 17);
		map.push(lines[index].split(","));
	});
	// print("size:" + map.length.toString() + " " + map[0].length.toString());
	//go
	let zeros = [...Array()];
	map.forEach((e1, i, array) => {
		map[i].forEach((e2, j, array) => {
			if (e2 === "0") {
				zeros.push([i.toString(), j.toString()]);
			}
		});
	});
	//contain = 在i j位置能不能填t
	let contain = (i, j, t) => {
		for (let p = 0; p < 9; p++) {
			if (map[i][p] === t) return true;
			if (map[p][j] === t) return true;
		}
		let r = Math.floor(i / 3);
		let c = Math.floor(j / 3);
		for (let p = r * 3; p < r * 3 + 3; p++) {
			for (let q = c * 3; q < c * 3 + 3; q++) {
				if (map[p][q] === t) return true;
			}
		}
		return false;
	};
	let flag = false;
	let dd = (i, j, t) => {
		for (let p = 1; p <= 9; p++) {
			if (!contain(i, j, p.toString())) {
				//假设填上p，继续
				map[i][j] = p.toString();
				//填满了
				if (t + 1 === zeros.length) {
					flag = true;
					return true;
				}
				//继续假设性地填，如果后续出现了问题，就回溯
				if (!dd(zeros[t + 1][0], zeros[t + 1][1], t + 1)) {
					map[i][j] = "0";
				}
			}
		}
		//1到9里面找不着能填的，说明前面出问题了
		if (!flag) {
			// print("boom, " + (t + 1).toString());
			return false;
		}
		return true;
	};
	dd(zeros[0][0], zeros[0][1], 0);
	//output
	map.forEach((element) => {
		let tmp = "";
		tmp = element.join(",");
		print("{" + tmp + "}");
	});
	lines = [...Array()];
	map = [...Array()];
}
