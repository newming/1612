// var filtered = [12, 5, 8, 130, 44].filter(function (value, index, array) {
//   return value >= 10;
// });
// filtered is [12, 130, 44]



// let numbers = [1, 5, 10, 15];
// let roots = numbers.map( item => `<p>${item}</p>`);
// console.log(roots, numbers);


// let arr = [1,5,8,45]
// arr.forEach(item => {console.log(item)} )
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// var obj = {name: 'newming', age: 4566};
// for (var pro in obj) {
//   console.log(pro);
// }
// let names = Object.keys(obj)
// console.log(names);


let arr = [
  {name: 'newmiaang', age: 445, id: 1454121564},
  {name: 'newmisssng', age: 425, id: 145445564},
  {name: 'newmingaa', age: 485, id: 145564},
  {name: 'newming33', age: 445, id: 1454564}
]
let index = arr.findIndex( item => item.age === 485 )
console.log(index);

// import {str as ccc ,obj} from './test';
// import test from './test';
// console.log(test,ccc,obj);

// let arr = [1,2,3];
// let arr1 = [1,2,3,8];
// let arr2 = [1,2,3,6];
//
// var arr3 = [...arr,55,...arr1,...arr2];
// console.log(arr3);

// let obj = { a: { b: 1 } };
// let { ...x } = { a: { b: 1 } };
// // obj.a.b = 2;
// // x.a.b // 2
// console.log(x);

// let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// x // 1
// y // 2
// z // { a: 3, b: 4 }

// //将所有参数相加的函数
// function add(...x){
//     return x.reduce((m,n)=>m+n);
// }
// //传递任意个数的参数
// console.log(add(1,2,3));//输出：6
// console.log(add(1,2,3,4,5));//输出：15

// let aaa = [0, 1, 2, 3, 4].reduce(function(acc, cur) {
//   // console.log(acc, cur);
//   //  0  1   1
//   //  1  2   2
//   //  2  3   3
//   //  3  4   4
//   return cur
// });
//
// console.log(aaa);

// let arr = [12,885,56,45];
//
// let max = arr.reduce(function (acc, cur) {
//   // 12  885    885
//   // 885  56    885
//   // 885  45    885
//   let max = acc > cur ? acc : cur
//   return max
// })
// console.log(max);
