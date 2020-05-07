#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
#define ture true

using namespace std;

static int comp(string a, string b)
{
    return a.compare(b) > 0;
}

string makeLargestSpecial(string S)
{
    string res = "";
    int zeros = 0, left = 0;
    vector<string> ss;
    int n = S.length();
    for (size_t i = 0; i < n; i++)
    {
        if (S[i] == '1')
            zeros++;
        else
            zeros--;
        if (zeros == 0)
        {
            string tmp = "1" + makeLargestSpecial(S.substr(left + 1, i - left)) + "0";
            ss.push_back(tmp);
            left = i + 1;
        }
    }
    sort(ss.begin(), ss.end(), comp);
    for (size_t i = 0; i < ss.size(); i++)
    {
        //cout << ss[i] << endl;
        res += ss[i];
    }
    //cout << "res:" << res << endl;
    return res;
}

int main()
{
    string s = "11011000";
    cout << makeLargestSpecial(s) << endl;
    system("pause");
    return 0;
}
