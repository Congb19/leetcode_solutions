#include <algorithm>
#include <iostream>
#include <string>
#include <tr1/unordered_map>
#include <vector>
using namespace std;
static bool cmp(const pair< char, int >& p1, const pair< char, int >& p2) {
	return p1.second > p2.second;
}
string solve(string a) {
	string res = "";
	tr1::unordered_map< char, int > map;
	for (size_t i = 0; i < a.length(); i++) {
		if (map[a[i]])
			map[a[i]]++;
		else
			map[a[i]] = 1;
	}
	vector< pair< char, int > > v(map.begin(), map.end());
	sort(v.begin(), v.end(), cmp);
	res.reserve(a.capacity());
	for (int i = 0; i < v.size(); ++i) {
		for (int j = 0; j < v.at(i).second; ++j)
			res.push_back(v.at(i).first);
	}
	return res;
}

int main() {
	string a;
	cin >> a;
	cout << solve(a) << endl;
	system("pause");
	return 0;
}
