//
// Created by Congb on 2019/9/26.
//

#include <iostream>
#include <string>
#include <stack>
#include <vector>
#define ture true

using namespace std;

int uniqueMorseRepresentations(vector<string>& words) {
    vector<string> A = {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
    //a=97
    vector<string> trans(words.size());
    int result=0;
    // 1 翻译words的每一个词，存到trans里。
    for (int i = 0; i < words.size(); ++i) {
        for (int j = 0; j < words[i].length(); ++j) {
            trans[i]+=A[words[i][j]-'a'];
        }
        for (int k = 0; k < i; ++k) {
            if (trans[k]==trans[i]) trans[i]="cf";
        }
    }
    // 2 判断重复。
//    for (int k = 0; k < trans.size()-1; ++k) {
//        for (int i = k+1; i < trans.size(); ++i) {
//            if (trans[i]==trans[k]) trans[i]="cf";
//        }
//    }
    for (int l = 0; l < words.size(); ++l) {
//        cout<<trans[l]<<" ";
        if (trans[l]!="cf") result++;
    }

//    cout<<endl;
    return result;
}

int main() {
    //string A[26] = {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
    vector<string> words = {"gin", "zen", "gig", "msg"};
    cout << uniqueMorseRepresentations(words) << endl;
    return 0;
}
