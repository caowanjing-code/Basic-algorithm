// JavaScript 提供了 Math.max 和Math.min 函数返回一组数中的最大值
// Math.max([A[B,C....]])
// Math.min([A[B,C....]])


// apply方法
// Math.max.apply()


// ES6拓展运算符
// Math.max(...xxx)

// eval
// let arr = [1, 2, 3, 5, 8, 9]
// let max = eval('Math.max('+ arr +')') // => Math.max(1, 2, 3, 5, 8, 9)
// console.log(max) // 9

// for 循环寻找最大数
let arr=[1,2,3,4,5,6,6,6,8];
let res=arr[0]
for(let i=1; i<arr.length;i++){
res=Math.max(res,arr[i])
}
console.log(res);

// 排序选择
// 升序排列
let array=[1,2,3,4,2,3,7,13,7,10,21,4,5];
array.sort(function(a,b){
    return a-b
})

console.log(array[array.length-1]);