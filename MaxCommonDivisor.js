// 求2个数的最大公约数
// 欧几里德算法
//基本思想是采用辗转相除的方法，用大的数去除以小的那个数，然后再用小的数去除以的得到的余数，一直这样递归下去， 直到余数为0时，最后的被除数就是两个数的最大公约数。
function MaxCommonDivisor(a,b){
if(b===0)
return a;

// 递归调用
return MaxCommonDivisor(b,a%b);
}

// 求2个数的最小公倍数
// 思路是2个数相乘，然后再除以他们最大的公约数
function getMinCommonMultiple(a,b){
    return a*b/getMinCommonMultiple(a,b);
}