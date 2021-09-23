// 递归实现数组扁平化
function falttenArray(array){
    if(!Array.isArray(array))return;
    let result=[];

    result=array.reduce(function(pre,item){

        // 判断元素是否为数组，如果是就递归调用，不是就把它加入数组中。
        return pre.concat(array.isArray(item)?falttenArray(item):item);
    },[]);
    return result;
}