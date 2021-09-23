// tostring 方法实现数组的扁平化
function flatArr(array){
    // split 数组变成字符串,改变了元素的类型

    // map()方法按照原始数组元素顺序依次处理元素。
    return array.toString().split(",").map(function(item){
        return +item;
    })
}