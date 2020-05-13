#include <algorithm>
#include <iostream>
#include <string>
using namespace std;
class student {
public:
	student() : a(0), b(0), t(0), f(3), ff(1){};
	int num;
	int a;
	int b;
	int t;	 //达到饭的时间
	int f;	 // 1ok  2paidui  0likai  3haimeilai
	int ff;	 //没用别管
};
int main() {
	int T;
	while (cin >> T) {
		student stu[1001];
		int length = 0, n;
		for (int i = 0; i < T; i++) {
			cin >> n;
			for (int j = 0; j < n; j++) {
				cin >> stu[j].a >> stu[j].b;
				stu[j].num = j;
				if (stu[j].a < stu[j].b) {
					stu[j].f  = 0;
					stu[j].t  = 0;
					stu[j].ff = 0;
				}
			}
			int time, k = 0, q;
			//时间流逝
			for (time = 1; time < 5001; time++) {
				//来排队
				while (stu[k].a == time && k < n) {
					// cout<<"第"<<time<<"分钟初，第"<<stu[k].num<<"个同学来排队了\n";
					stu[k].f = 2;
					k++;
				}
				//打饭
				for (q = 0; q < n; q++) {
					if (stu[q].f == 2 && stu[q].b >= time) {
						stu[q].f = 1;
						stu[q].t = time;
						// cout<<"第"<<stu[q].num<<"个同学打到了饭。在第"<<time<<"分钟的末尾\n";
						break;
					}
				}
				//等
				for (q = 0; q < n; q++) {
					//在这一分钟末没打到饭 + 等不下去了 的话
					if (stu[q].f == 2 && stu[q].b <= time) {
						stu[q].f = 0;
						// cout<<"第"<<time<<"分钟末没打到饭，第"<<stu[q].num<<"个同学溜了\n";
					}
				}
			}
			//输出
			for (int j = 0; j < n; j++) {
				if (stu[j].f == 1) {
					if (j != 0) cout << " ";
					cout << stu[j].t;
				}
				else {
					if (j != 0) cout << " ";
					cout << 0;
				}
			}
			if (i != T - 1) cout << endl;
		}
	}
	return 0;
}
/*
2
2
1 3
1 4
3
1 5
1 1
2 3

*/

/*
1
4
1 1
1 1
3 4
3 4

*/
