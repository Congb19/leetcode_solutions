//
// Created by Congb on 2019/9/26.
//

#include <iostream>
#include <string>
#include <stack>
#include <vector>
#define ture true

using namespace std;
int longestOnes(vector<int>& A, int K) {
    int r=0;
    int z=0;
    int max=0;
    vector<int> B = A;
    //思路1 遍历每一个从1开始的（或者开头的0）开始的数组，每出现第K+1个0前面就停下计数。
//    for (int i = 0; i < A.size(); ++i) {
//        for (int j = i; j < A.size(); ++j) {
//            if (z==K+1) {
//                max=r>max?r:max;
//                max--;
//                r=0;
//                z=0;
//                break;
//            }
//            if (A[j]==1) {
//                r++; //cout<<"r++,r="<<r<<endl;
//            }
//            else if (A[j]==0) {
//                r++; z++;//cout<<"i="<<i<<"j="<<j<<" r++,r="<<r<<" z++;z="<<z<<endl;
//            }
//        }
//    }
    //思路2 直接复制一个数组 变三个1 然后算长度。这个方法超时了。太暴力了。
    //test
//    B[0]=1;
//    for (int i = 0; i < A.size(); ++i) {
//        cout<<A[i]<<" ";
//    }
//    cout<<"asize"<<A.size()<<endl;
//    for (int i = 0; i < B.size(); ++i) {
//        cout<<B[i]<<" ";
//    }
//    cout<<"\nbsize"<<B.size()<<endl;
    //go
//    for (int i = 0; i < B.size(); ++i) {
//        //找到从i开始的前三个0，置1。
//        for (int j = i; j < B.size(); ++j) {
//            if (B[j]==0) {
//                if (z<K) {
//                    z++;
//                    B[j]=1;
//                }
//                else {
//                    z=0;
//                    break;
//                }
//            }
//            else if (B[j]=1) {
//                continue;
//            }
//        }
//        //一轮变完，看一下最长的1子串长度，记录在max里。
//        //先输出康康
////        cout<<"\n i="<<i<<endl;
////        for (int i = 0; i < B.size(); ++i) {
////            cout<<B[i]<<" ";
////        }
//        for (int k = 0; k < B.size(); ++k) {
//            if (B[k]==1)
//            for (int j = k; j < B.size(); ++j) {
//                if (B[j]==1) {
//                    r++;
//                    max=r>max?r:max;
////                    cout<<"r++,r="<<r<<" max="<<max<<endl;
//                    if (j==B.size()-1) r=0;
//                }
//                else {
//                    r=0;
//                    break;
//                }
//            }
//        }
//        //重置！
//        B=A;
//    }

    //思路3
    int q=0, e=0;
    for (int i = 0; i < A.size(); ++i) {
        q=i;
        for (int j = i; j < A.size(); ++j) {
            if (z>K) break;
            if (A[j]==0) {
                z++;

            }

        }

    }









    return max;
}
int main() {
    vector<int> A = {1,1,1,0,0,0,1,1,1,1,0};
    int K = 2;
    cout << longestOnes(A, K) << endl;
    return 0;
}

//0011
//1010
//1001