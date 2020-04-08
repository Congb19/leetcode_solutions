while ((line = readline())) {
	let linex = line.split("-");
	let getType = (s) => {
		//0王炸4炸弹 1个子2对子5顺子3三个
		let cards = s.split(" ");
		if (cards[0] == "joker" || cards[0] == "JOKER") {
			return 0;
		} else {
			return cards.length;
		}
	};
	let trans = (s) => {
		let res = 0;
		if ((s >= "3" && s <= "9") || s == "10") {
			res = parseInt(s);
		} else {
			switch (s) {
				case "J":
					res = 11;
					break;
				case "Q":
					res = 12;
					break;
				case "K":
					res = 13;
					break;
				case "A":
					res = 14;
					break;
				case "2":
					res = 15;
					break;
				case "joker":
					res = 16;
					break;
				case "JOKER":
					res = 17;
					break;
				default:
					break;
			}
		}
		return res;
	};
	let compare = (s1, s2) => {
		let res1 = trans(s1),
			res2 = trans(s2);
		return res1 > res2;
	};
	if (getType(linex[0]) === 0) {
		//0王炸
		print(linex[0]);
	} else if (getType(linex[1]) === 0) {
		//1王炸
		print(linex[1]);
	} else if (getType(linex[0]) === 4) {
		if (getType(linex[1]) === 4) {
			//01都是炸弹
			print(
				compare(linex[0].split(" ")[0], linex[1].split(" ")[0])
					? linex[0]
					: linex[1]
			);
		} else {
			//0炸
			print(linex[0]);
		}
	} else if (getType(linex[1]) === 4) {
		//1炸
		print(linex[1]);
	} else if (getType(linex[0]) !== getType(linex[1])) {
		print("ERROR");
	} else {
		//对比第一张牌
		print(
			compare(linex[0].split(" ")[0], linex[1].split(" ")[0])
				? linex[0]
				: linex[1]
		);
	}
}
