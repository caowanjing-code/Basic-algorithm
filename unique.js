// 数组去重方法
// 最基本的去重方法
//思路：定义一个新数组，并存放原数组的第一个元素，然后将元素组一一和新数组的元素对比，若不同则存放在新数组中。
function unique(arr){
    　　var res = [arr[0]];
    　　for(var i=1;i<arr.length;i++){
    　　　　var repeat = false;
    　　　　for(var j=0;j<res.length;j++){
    　　　　　　if(arr[i] == res[j]){
    　　　　　　　　repeat = true;
    　　　　　　　　break;
    　　　　　　}
    　　　　}
    　　　　if(!repeat){
    　　　　　　res.push(arr[i]);
    　　　　}
    　　}
    　　return res;
    }

// 先排序再去重
function unique(arr){
    // sort() 方法用于对数组的元素进行排序。
    var arr2=arr.sort();
    var res=[arr2[0]];
    for(var i=1;i<arr2.length;i++){
        if(arr2[i]!==res[res.length-1]){
            res.push(arr2[i]);
        }
    }
    return res;
}


// 利用对象属性去重
// 思路：每次取出原数组的元素，然后在对象中访问整个属性，如果它存在就说明重复
function unique(arr){
    var res=[];
    var json={};
    for(var i=0;i<arr.length;i++){
        if(!json[arr[i]]){
            res.push(arr[i]);
            json[arr[i]]=1;
        }
    }
    return res;
}


// 利用下标查询
function unique(arr){
    var newArr=[arr[0]];
    for(var i=1;i<arr.length;i++){
        if(newArr.indexOf(arr[i]==-1)){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


// ES6的写法
var unique = (a) => [...new Set(a)]


// 如果利用map的话是
function unique(arr){
    const seen=new Map();
    // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
    return arr.filter((a)=>!seen.has(a)&&seen.set(a,1));
}