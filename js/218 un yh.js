/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
function cover(j,tmp) {
    if (tmp[0]===j[0]&&tmp[1]===j[2]) return false;
    if (tmp[0]>=j[0]&&tmp[0]<=j[1]&&tmp[1]<=j[2]) return true;
    else return false;
}
function cover2(j,tmp) {
    if (tmp[0]>=j[0]&&tmp[0]<j[1]) return true;
    else return false;
}
var getSkyline = function(buildings) {
    if (buildings.length===0) return [];
    let maxh=buildings[0][2], maxr=buildings[0][1];
    //思路1 对每一个左上角，进行判断 如果被盖住了则取右边，没被盖住则就是天际线。右下角同理
    let res=new Array();
    for (let i=0;i<buildings.length;i++) {
        let tmp=[buildings[i][0], buildings[i][2]];
        let flag=false;
        for (let j=0;j<buildings.length;j++) {
            if(j===i) {
                continue;
            }
            if (cover(buildings[j],tmp)) {
                // console.log(i,j,buildings[i][2],buildings[j][2]);
                flag=true;
                if (buildings[i][1]>buildings[j][1]&&buildings[i][2]!==buildings[j][2]) {
                    // console.log("luchu");
                    tmp[0]=buildings[j][1];
                    // console.log(tmp);
                    res.push(tmp);
                }
            }

        }
        if (!flag) res.push(tmp);




    }
    for (let i=0;i<buildings.length;i++) {
        let tmp=[buildings[i][1], 0]
        let flag=true;
        for (let j=0;j<buildings.length;j++) {
            if(j===i) {
                continue;
            }
            // console.log(i,j);
            if (cover2(buildings[j],tmp)) {
                // console.log(j,"cover",i)
                flag=false;
            }
        }
        if (flag) res.push(tmp);
        flag=true;
    }
    //排序、清理重复元素
    res.sort((a,b)=>{return a[0]-b[0]});
    let arr=[];
    arr.push(res[0]);
    for(let i = 1; i < res.length; i++){
        if(res[i][0]!==res[i-1][0]||res[i][0]!==res[i-1][0]){
            arr.push(res[i]);
        }
    }
    return arr;
};



let buildings =[[2,4,70],[3,8,30],[6,100,41],[7,15,70],[10,30,102],[15,25,76],[60,80,91],[70,90,72],[85,120,59]];
console.log(getSkyline(buildings));