//
// Created by Congb on 2019/9/25.
//
#include <iostream>
#include <string>
#define ture true

using namespace std;

int numJewelsInStones(string J, string S) {
    int jl=J.length(), sl=S.length(), r=0;
    for(int p=0; p<sl; p++) {
        for(int q=0; q<jl; q++) {
            if(S[p]==J[q]) {
                r++;
                break;
            }
        }
    }
    return r;
}

int main() {
    cout << numJewelsInStones("aA", "aAAbbbb");
    return 0;
}
