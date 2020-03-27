//
// Created by Congb19 on 2019/9/27.
//

#include <iostream>
#include <string>
#include <stack>
#include <vector>
#define ture true

using namespace std;

int main()
{
    long long T, n, res = 0;
    long long a[30000], tmp[3];
    while (cin >> T)
    {
        for (size_t i = 0; i < T; i++)
        {
            cin >> a[i];
        }
        long long l = 0, r = 0;
        cin >> n;
        for (size_t i = 0; i < n; i++)
        {
            cin >> tmp[0] >> tmp[1] >> tmp[2];

            // if (i == 0 && a[0] == tmp[2])
            // {
            // 	res++;
            // }
            // while (r < tmp[1] - 1)
            // {
            // 	r++;
            // 	if (a[r] == tmp[2])
            // 	{
            // 		res++;
            // 	}
            // }
            // while (r > tmp[1] - 1)
            // {
            // 	r--;
            // 	if (a[r + 1] == tmp[2])
            // 	{
            // 		res--;
            // 	}
            // }
            // while (l < tmp[0] - 1)
            // {
            // 	l++;
            // 	if (a[l - 1] == tmp[2])
            // 	{
            // 		res--;
            // 	}
            // }
            // while (l > tmp[0] - 1)
            // {
            // 	l--;
            // 	if (a[l] == tmp[2])
            // 	{
            // 		res++;
            // 	}
            // }
            cout << res << endl;
            res = 0;
        }
    }
    return 0;
}
