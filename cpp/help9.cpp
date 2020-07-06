#include <algorithm>
#include <iostream>
#include <string>
using namespace std;
static bool cmp(char a, char b) {
	return a - b;
}
string mySort(string a) {
	for (size_t i = 0; i < a.length(); i++) {
		for (size_t j = 0; j < a.length() - 1 - i; j++) {
			if (a[j] > a[j + 1]) swap(a[j], a[j + 1]);
		}
	}
	return a;
}
bool solve(string a, string b) {
	bool res = false;
	if (a.length() != b.length()) return false;
	// cout << mySort(a) << " " << mySort(b) << endl;
	res = mySort(a) == mySort(b);
	return res;
}
int main() {
	string a, b;
	cin >> a >> b;
	if (solve(a, b))
		cout << "true" << endl;
	else
		cout << "false" << endl;
	system("pause");
	return 0;
}
