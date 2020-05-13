#include <iostream>
using namespace std;

int main() {
	int	 row, col;
	char matrix[1000][1000];
	cin >> row >> col;
	for (int i = 0; i < row; i++) {
		for (int j = 0; j < col; j++) {
			cin >> matrix[i][j];
		}
	}

	int resLength = 0;
	for (int i = 0; i < row; i++) {
		for (int j = 0; j < col; j++) {
			int length1 = 1, length2 = 1;
			if (matrix[i][j] == 'A') {
				for (int k = j + 1; k < col; k++) {
					if (matrix[i][k] == 'A') {
						length1++;
					}
					else {
						break;
					}
				}

				for (int k = i + 1; k < row; k++) {
					if (matrix[k][j] == 'A') {
						length2++;
					}
					else {
						break;
					}
				}
				int length;
				if (length1 > length2) {
					length = length2;
				}
				else {
					length = length1;
				}
				bool flag = true;
				for (int k = i + 1; k < i + length - 1; k++) {
					for (int l = j + 1; l < j + length - 1; l++) {
						if (matrix[j][i] != 'A') {
							flag = false;
							break;
						}
					}
				}

				if (flag && length > resLength) {
					resLength = length;
				}
			}
		}
	}

	cout << resLength << endl;
	for (int i = 0; i < resLength; i++) {
		for (int j = 0; j < resLength; j++) {
			cout << 'A' << ' ';
		}
		cout << endl;
	}

	return 0;
}
