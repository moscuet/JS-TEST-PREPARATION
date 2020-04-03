

// == 01 == a triangle Write a loop that makes seven calls to console.log to output the following triangle:
// solution:    == for loop ==
let content =''
for(let i=0; i<7 ; i++){
    content += '#'
    console.log(content)
}

//  == while loop ==
content =''
let i=0
while(i<7){
    content+='#'
    console.log(content)
    i++
}
// == do while loop ==

content =''
i=0
do {
    content+='#'
    console.log(content)
    i++
}
while( i<7)

//  == 02  ==  FizzBuzz Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"for numbers divisible by only one of those).


// solution:
 let j =1
while(j<101){
  if(j%3===0){
    console.log('Fizz')
      if(j%5===0){
          console.log('FizzBuzz')
      }     
  }
  else if(j%5===0){
      console.log('Buzz')
  }
  else{
      console.log(i)
  }
    j++
}


// == 03 == Maximum: Math.max returns its largest argument. We can build something like that now. Write a function findMax that takes three arguments and returns their maxiumum. Without method Math.max method.

function findMax (a,b,c){
    let max= a;
    b-max>0? max=b : max=max
    c-max>0? max=c : max=max
    console.log(max)
}
findMax(0, -10,-2)
// alternate way for unlimited input
function findMaxNumber(...args)  {
    maxNum=0
args.forEach( (arg)=>{
 if(arg>maxNum){
     maxNum=arg
 }
})
return maxNum
}
console.log(findMaxNumber(1,2,4,23,4)) // 23

// == 04 == Reversing an array Arrays have a reverse method which changes the array by inverting the order in which its elements appear. For this exercise, write a function, reverseArray. The reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. Without reverse method.

function reverseArray(arr) {
   newArray = []
   for(a of arr){
       newArray.unshift(a)
   }
console.log(newArray)
}
reverseArray(['A','B', 'C'])


// == 05 == Modifying an array Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and returns the array. If the array length is less than five it return ‘item not found’.


let arrA = ["Avocado", "Tomato", "Potato","Mango", "Lemon","Carrot"]
let arrB = ["Google", "Facebook","Apple", "Amazon"]
let arrC = ["Google", "Facebook","Apple", "Amazon","Microsoft",  "IBM"]
function modifyArray(arr){
    console.log
    if(arr.length>=5){
        arr[4] = arr[4].toUpperCase()
        return arr
    }
    else {
        return 'Item Not Found'
    }
}

console.log(modifyArray(arrA)) //["Avocado", "Tomato", "Potato", "Mango", "LEMON", "Carrot"]
console.log(modifyArray(arrB)) // 'Item Not Found'
console.log(modifyArray(arrC)) // ["Google", "Facebook", "Apple", "Amazon", "MICROSOFT", "IBM"]


// == 6 == Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique


const generateRandomNumber = () => Math.floor(Math.random()*10)

const generateUniqueNumbers = (n=7) =>{
   let randomNumbers = []
   for(i=0; randomNumbers.length<n;i++ ){
     let randomNumber = generateRandomNumber()
   
     if(!randomNumbers.includes(randomNumber)){
        randomNumbers.push(randomNumber)
     }   
   } return randomNumbers
}
console.log(generateUniqueNumbers())


// == 7 ==  Write a funch which takes any number of arguments and return the sum of the arguments

function sumMuliple (){      // for arrow function : const sumMuliple = (...arguments) => {
    let sum=0
    for(i=0; i<arguments.length; i++){
        sum+=arguments[i]
    }
    return sum
}
console.log(sumMuliple(3,4,2)) //9

// ==  08  == Write a function which removes items from the middle of an array and replace with three items. 

const removeMiddleItem = (targetArr, ...replacingItems) => {  
    
        if(targetArr.length%2===1){
            let middleItemIndex =  (targetArr.length+1)/2-1
            targetArr.splice(middleItemIndex,1,...replacingItems)
        }
        else{
            let middleItemIndex = targetArr.length/2-1
            targetArr.splice(middleItemIndex,2,...replacingItems)
        }
        return targetArr
}

let targetArr = [1,2,5,7]
console.log(removeMiddleItem(targetArr, 99,66)) // [1, 99, 66, 7]


// == 09 ==  Calculate the total annual income of the person by extracting the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

const str = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let incomes =str.match(/\d+/g).map(income => Number(income)) //
let totalIncome = incomes.reduce((total,num)=>total+num,0)
console.log(totalIncome) //30,000

// ==  10  ==  Create a function that takes two strings and returns true if the first argument ends with the second argument; otherewise return false . Take two strings as arguments. Determine if second string matches ending of first string. Return boolean value.
let str1 = 'hello I am Rahman'
const stringMatching = (str1, str2) => {
const firstStrTail =  str1.substr(str1.length-str2.length, str2.length)
      return firstStrTail === str2  
}
console.log(stringMatching(str1, 'Rahman'))// true
console.log(stringMatching("integration", "tio")) // false