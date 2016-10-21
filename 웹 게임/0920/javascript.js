 let arr=[1,2,3,4,5]        //배열 리터럴
let obj ={
  'x' : 1,
  'y' : 2
} //  연관배열(map, table), Dictionary
//객체 리터럴
let str ="abc"  // 리터럴 literal

console.log(arr)
console.log(obj)
console.log(str)

가비지 컬렉터(GC)
obj = null


//
// let obj = new.Object()
// obj.x =1
// obj.y =2

//
// obj['x']
// obj.x  //1
//
//
//
//
// for (var variable in arr) {
//   if (arr.hasOwnProperty(variable)) {
//     console.log(variable);
//
//   }
// }
//
// for (var variable in obj) {
//   if (obj.hasOwnProperty(variable)) {            //검색
//       console.log(variable);
//       obj[variable]
//
//   }
// }


// for (variable of arr) {
// console.log(variable)
// }
//
//
// //
//

//
// function varTest() {
//     var x=1
//     if(true) {
//         var x=2
//         console.log(x)
//   }
//   console.log(x)
// }
//
// function letTest() {
//     let x=1
//     if(true) {
//       let  x=2
//         console.log(x)
//   }
//   console.log(x)
//
// }
//
//
// varTest()
//
// letTest()
