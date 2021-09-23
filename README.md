# Basic-algorithm
Basic algorithm
# 基础算法



## 数组扁平化

思路：递归调用再用concat连接

```js
// 递归实现数组扁平化
function falttenArray(array){
    if(!Array.isArray(array))return;
    let result=[];

    
//reduce() 方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始缩减，最终为一个
//值。
    result=array.reduce(function(pre,item){

        // 判断元素是否为数组，如果是就递归调用，不是就把它加入数组中。
        
        //concat() 方法用于连接两个或多个数组。
        return pre.concat(array.isArray(item)?falttenArray(item):item);
    },[]);
    return result;
}
```



toString()方法实现数组扁平化

```js
// tostring 方法实现数组的扁平化
function flatArr(array){
    // split 数组变成字符串,改变了元素的类型

    // map()方法按照原始数组元素顺序依次处理元素。
    return array.toString().split(",").map(function(item){
        return +item;
    })
}
```

