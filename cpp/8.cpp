//
// Created by Congb on 2019/9/28.
//

#include <iostream>
#include <string>
#include <stack>
#include <vector>
#include <cmath>
#include <algorithm>
#include <sstream>
#define ture true

using namespace std;

int myAtoi(string str)
{
    long long res = 0;
    long long lx = 0; //0:wufuhao  1:+  2:-
    long long start = 0, l = 1;
    string tres = "";

    //寻找第一个有效符号，如果第一个就无效直接return0；
    for (long long i = 0; i < str.length(); ++i)
    {
        if (str[i] == ' ')
        {
            cout << "space.\n";
            continue;
        }
        if (str[i] != '+' && str[i] != '-' && !(str[i] >= '0' && str[i] <= '9'))
        {
            cout << "i=" << i << "deshihou  diyigejiuwuxiao   gg\n";
            return 0;
        }
        if (str[i] == '+')
        {
            start = i;
            lx = 1;
            break;
        }
        else if (str[i] == '-')
        {
            start = i;
            lx = 2;
            break;
        }
        else if ((str[i] >= '0' && str[i] <= '9'))
        {
            start = i;
            lx = 0;
            break;
        }
    }

    //找长度，如果有符号且长度只有1，也return0；
    cout << "lx:" << lx << endl;
    for (long long j = start + 1; j < str.length(); ++j)
    {
        if (!(str[j] >= '0' && str[j] <= '9'))
        {
            break;
        }
        l++;
    }
    if (lx != 0 && l == 1)
        return 0;
    cout << "start at:" << start << " l=" << l << endl;

    //根据开始位置和长度，裁剪出有效数字并转换。
    if (lx == 0)
    {
        tres = str.substr(start, l);
    }
    else
    {
        tres = str.substr(start + 1, l - 1);
    }
    cout << "tres: " << tres << endl;
    stringstream ss;
    ss << tres;
    ss >> res;

    if (lx == 2)
        res = -res;
    cout << "res: " << res << endl;
    if (abs(res) <= 2147483647 || res == -2147483648)
    {
        cout << "fanweinei.正常输出\n";
        return res;
    }
    else if (res > 0)
        return 2147483647;
    else if (res < 0)
        return -2147483648;

    return res;
}

int main()
{
    string s = "  0000000000012345678";
    int k = 123;
    cout << myAtoi(s) << endl;
    return 0;
}
