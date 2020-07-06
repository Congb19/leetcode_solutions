#include <iostream>
#include <sstream>
#include <vector>
using namespace std;
class TNode {
public:
	int value;
	TNode* leftSubT;
	TNode* rightSubT;
	TNode() {
		value	  = 0;
		leftSubT  = NULL;
		rightSubT = NULL;
	};
	TNode(int x) {
		value	  = x;
		leftSubT  = NULL;
		rightSubT = NULL;
	};
	bool isLeaf() {
		if (leftSubT == NULL && rightSubT == NULL) return true;
		return false;
	}
	void dd(int& res, vector<int>& tmp) {
		tmp.push_back(value);
		if (isLeaf()) {
			int j = 1, t = 0;
			for (int i = tmp.size() - 1; i >= 0; i--) {
				t += tmp[i] * j;
				j *= 10;
			}
			res += t;
			// cout << "this turn t=" << t << endl;
		}
		else {
			if (leftSubT) leftSubT->dd(res, tmp);
			if (rightSubT) rightSubT->dd(res, tmp);
		}
		tmp.pop_back();
	}
};
TNode* create(vector<int> arr, int start) {
	if (arr[start] == -1) return NULL;
	TNode* res = new TNode(arr[start]);
	int lnode = start * 2 + 1, rnode = start * 2 + 2;
	if (lnode > arr.size() - 1)
		res->leftSubT = NULL;
	else
		res->leftSubT = create(arr, lnode);
	if (rnode > arr.size() - 1)
		res->rightSubT = NULL;
	else
		res->rightSubT = create(arr, rnode);
	return res;
}
int solve(TNode bt) {
	int res = 0;
	vector<int> tmp;
	bt.dd(res, tmp);
	return res;
}
int main() {
	string w;
	string k[10000];
	vector<int> nodes;
	int s = 0;
	getline(cin, w);
	for (int i = 0; i < w.length(); i++) {
		if (w[i] == ' ' || i == w.length() - 1) {
			if (i == w.length() - 1) k[s] += w[i];
			if (k[s] == "null")
				nodes.push_back(-1);
			else {
				stringstream ss;
				int t;
				ss << k[s];
				ss >> t;
				nodes.push_back(t);
			}
			s++;
			continue;
		}
		k[s] += w[i];
	}
	TNode* root = create(nodes, 0);
	cout << solve(*root) << endl;
	system("pause");
	return 0;
}