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
	void bb(vector<int>& res, int d) {
		if (d >= res.size())
			res.push_back(value);
		else
			res[d] = res[d] > value ? res[d] : value;
		if (leftSubT) leftSubT->bb(res, d + 1);
		if (rightSubT) rightSubT->bb(res, d + 1);
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
void solve(TNode bt) {
	vector<int> res;
	bt.bb(res, 0);
	for (int i = 0; i < res.size(); i++) {
		cout << res[i] << " ";
	}
	cout << endl;
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
	solve(*root);
	system("pause");
	return 0;
}