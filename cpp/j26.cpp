class Solution {
public:
	bool isSubStructure(TreeNode* A, TreeNode* B) {
		if (!B) return false;
		stack< TreeNode* > st;
		TreeNode* Pa = A;
		TreeNode* Pb = B;
		st.push(Pa);
		while (!st.empty()) {
			TreeNode* temp = st.top();
			st.pop();
			if (temp && (temp->val == Pb->val)) {
				if (Judge(temp, Pb)) { return true; }
			}
			if (temp->right) st.push(temp->right);
			if (temp->left) st.push(temp->left);
		}
		return false;
	}

	bool Judge(TreeNode* pa, TreeNode* pb) {
		stack< TreeNode* > sta;
		stack< TreeNode* > stb;

		sta.push(pa);
		stb.push(pb);

		while (!sta.empty() && !stb.empty()) {
			TreeNode* a = sta.top();
			sta.pop();
			TreeNode* b = stb.top();
			stb.pop();

			if (a->val == b->val) {
				if (b->left) {
					if (a->left) {
						if (a->left->val == b->left->val) {
							sta.push(a->left);
							stb.push(b->left);
						}
						else {
							return false;
						}
					}
					else {
						return false;
					}
				}

				if (b->right) {
					if (a->right) {
						if (a->right->val == b->right->val) {
							sta.push(a->right);
							stb.push(b->right);
						}
						else {
							return false;
						}
					}
					else {
						return false;
					}
				}
			}
		}
		return true;
	}
};
