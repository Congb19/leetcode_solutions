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
    // ˼·1 �ݹ鷵�ص��� �о����Ǻܺ�
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
    //˼·2 ֱ�ӳ�������ĩβ������������ּ���

    return res;
}

int main() {
    string s="ab";
    int k=3998;
    vector<int> h={1,8,6,2,5,4,8,3,7};
    cout << intToRoman(k) << endl;
    return 0;
}
