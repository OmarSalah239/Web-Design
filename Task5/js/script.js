// Function return a boolean if a number is devisible by 10
const isDivisibleByTen = (number) =>{
  if (number%10 == 0) {
    return true
  } else {
    return false
  }
}
let num1 = 400
let num2 = 15
console.log(isDivisibleByTen(num1),isDivisibleByTen(num2));
// Function to find max number in array
const findMax = (array)=>{
  let max = array[0]
  array.forEach(element => {
    if (element>max) {
      max = element
    }
    else{
      max = max
    }
  });
  return max
}
let arr1 = [2,5,10,500,700,40]
console.log(findMax(arr1));
// Reverse Array Function
const reverseArray = (array) =>{
  let temp = []
  for (let index = array.length-1; index >=0 ; index--) {
    temp.push(array[index])
  }
  return temp
}
let arr2 = [1,2,3,4,5]
console.log(reverseArray(arr2));


