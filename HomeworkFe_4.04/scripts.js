// Task 1

// let arr = [1,3,5,4,3];
// let arr1 = [2,1,5,6,3];
// let array = [];
// for(let i = 0;i < arr.length;i++){
// for(let j = 0;j < arr1.length;j++){
// if(arr[i]===arr1[j]){
//  array.push(arr[i])
// };
// };
// };
// console.log(array);


// Task 2

// function number(num){
//   let obj = {}
//   for(let i = 0;i <= num;i++){
//   obj[i]= i
//   };
//   return obj;
//   };
//   console.log(number(5));


// Task 3

// function number(num){
// let arr = []
// for(let i = 0;i <= num;i++){
// arr.push(i)
// }
// return arr
// }
// console.log(number(5))


// Task 4

// function array(num,str){
// let arr = [];
// for(let i = 0;i < num;i++){
// arr[i]= str;
// }
// return arr;
// }
// console.log(array(3,“dog”))

// Task 5

// function reverse(str){
//   let string = '';
// for(let i = str.length-1;i >= 0;i--){
// string  +=str[i]
// };
// return string
// };
// console.log(reverse(‘reverse’));


// Task 6

// function polindrom(pol){
// let polStr = “”;
// for(let i = pol.length-1;i >=0;i-- ){
// polStr+=pol[i]
// };
// if(pol === polStr){
//   return true;
// }else {
//   return false
// };
// };
// console.log(polindrom(‘gogd’));


// Task 7

const object = [
    {
        name: 'Sheep',
        price: 1000,
    },
    {
        name: 'Goat',
        price: 2000,
    },
    {
        name: 'Cow',
        price: 5000,
    },
    {
        name: 'Donkey',
        price: 3000,
    },
];
  function maxValue(){
    let max = 0;
    let max1;
for(let i = 0;i < object.length;i++){
  if(object[i].price > max){
    max = object[i].price
    max1 = object[i]
  };
};
return max1
  };
  console.log(maxValue());
maxValue();


