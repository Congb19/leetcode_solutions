#include <iostream>
#include <string>
#include <stack>
#include <vector>
#include <cmath>
#include <algorithm>
#include <sstream>
#define ture true

using namespace std;
string intToRoman(int num) {
    string res="";
    vector<string> t;
    char a[7]={'I','V','X','L','C','D','M'};
    // 思路1 递归返回叠加 感觉不是很好
    if (num>=1000) {
        for (int i = 0; i < 4; ++i) {

        }
    }
    else if(num>=100) {

    }
    else if (num>10) {

    }
    else {

    }
    //思路2 直接除法，看末尾，分情况加数字即可

    return res;
}

int main() {
    string s="ab";
    int k=3998;
    vector<int> h={1,8,6,2,5,4,8,3,7};
    cout << intToRoman(k) << endl;
    return 0;
}
