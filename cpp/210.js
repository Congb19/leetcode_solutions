/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    //思路2 入度
    let res= new Array(numCourses);
    let k=0;
    if (numCourses===1) {
        return [0];
    }
    let rd=new Array(numCourses);
    rd.fill(0);
    for (let i=0; i<prerequisites.length;i++) {
        rd[prerequisites[i][0]]++;
    }
    let flag=true;
    while (flag) {
        let p=k;
        for (let i=0; i<numCourses; i++) {
            // console.log(rd, i, k);
            if (rd[i]===0) {
                // res.push(i);
                res[k]=i;
                rd[i]--;
                k++;
                for (let j=0;j<prerequisites.length;j++) {
                    if (prerequisites[j][1]===i) {
                        rd[prerequisites[j][0]]--;
                    }
                }
            }
        }
        if (p===k) flag=false;
    }
    if (k<numCourses) return [];
    else return res;
};
let numCourses = 2;
let prerequisites = [[0,1]];
console.log(findOrder(numCourses, prerequisites));