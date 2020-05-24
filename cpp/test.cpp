#include <iostream>
#include <sstream>
#include <string>
#include <vector>
#define ture true

using namespace std;
// 1.1.1.1 => 0x1010101
unsigned int GetIntAddr(string addr) {
	unsigned int res;
	string tmp = "";
	vector<string> adds;
	vector<int> iadds;
	for (size_t i = 0; i < addr.length(); i++) {
		if (addr[i] == '.' || i == addr.length() - 1) {
			adds.push_back(tmp);
			tmp = "";
		}
		else {
			tmp += addr[i];
		}
	}
	// adds每一项都先转成二进制字符串，补上八位，拼在一起然后转成数字
	for (size_t i = 0; i < adds.size(); i++) {
		int tmp;
		stringstream k;
		k << adds[i];
		k >> tmp;
		string stmp = "";
		while (tmp > 0) {
			stringstream p;
			string tmp2;
			p << tmp % 2;
			p >> tmp2;
			stmp += tmp2;
			tmp /= 2;
		}
		if (stmp.length() < 8) {
			for (size_t i = 0; i < 8 - stmp.length(); i++) {
				stmp += "0";
			}
		}
		stmp.reserve();
	}
	return res;
}
int main() {
	cout << GetIntAddr("1.1.1.1") << endl;
	system("pause");
	return 0;
}
