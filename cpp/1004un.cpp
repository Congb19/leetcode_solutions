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
    //˼·1 ����ÿһ����1��ʼ�ģ����߿�ͷ��0����ʼ�����飬ÿ���ֵ�K+1��0ǰ���ͣ�¼�����
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
    //˼·2 ֱ�Ӹ���һ������ ������1 Ȼ���㳤�ȡ����������ʱ�ˡ�̫�����ˡ�
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
//        //�ҵ���i��ʼ��ǰ����0����1��
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
//        //һ�ֱ��꣬��һ�����1�Ӵ����ȣ���¼��max�
//        //���������
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
//        //���ã�
//        B=A;
//    }

    //˼·3
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