/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    if (numCourses===1) {
        return true;
    }
    let flags=new Array(numCourses);
    flags.fill(0);
    let dfs = (i) => {
        if (flags[i]===-1) return true;
        if (flags[i]===1) return false;
        flags[i]=1;
        for (let j=0; j<prerequisites.length; j++) {
            if (prerequisites[j][0]===i) {
                if(!dfs(prerequisites[j][1])) return false;
            }
        }
        flags[i]=-1;
        return true;
    }
    for (let i=0;i<numCourses;i++) {
        if ( !dfs(i) ) return false;
    }
    return true;
};
let numCourses = 2;
let prerequisites = [[1,0],[0,1]];
console.log(canFinish(numCourses, prerequisites));