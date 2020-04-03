// ====================================  find maximum number   from multiple number/input as arguments ============

function findMaxNumber(...args)  {
    maxNum=0
args.forEach( (arg)=>{
 if(arg>maxNum){
     maxNum=arg
 }
})
return maxNum
}

// ====================================     unique numbers Array  ==================================== 

const generateUniqueNumbers = (n=7) =>{
    const generateRandomNumber = () => Math.floor(Math.random()*10)
    let randomNumbers = []
    for(i=0; randomNumbers.length<n;i++ ){
      let randomNumber = generateRandomNumber()
    
      if(!randomNumbers.includes(randomNumber)){
         randomNumbers.push(randomNumber)
      }   
    } return randomNumbers
 }


 //  variable in Regular Expression : 


 // ====================================  word repeating in a string / counting word  most used word / word repea / most frequent ==================================== 
 const countWord = (para, word) => {
    if(para.includes(word)){
        const count= (para.match(new RegExp(word, "g"))).length
     return ` "${word}" is presents ${count} times in the string.`
    }
    else{
        return ' word can not be found in the string'
    }
}


//  ====================================  Data type of each element of an array  ==================================== 
const checkDatatTypes = array => {
    return arr.map( element => typeof(element) )
}



// ====================================      Quadric equation    ==================================== 

const solveQuadratic = (a,b,c) => {
    let solution
    if(a===0){
        const x = -c/b
        return ` If 'a' is 0 , equation is not quadric but a linear equation. solution for this linear equation is {${x}}`
    }
 const d = b*b-4*a*c //discriminant
 if(d===0) return ` This Quadric equation has only one solution: {${-b/2/a}}`
 if(d>0)  return ` This Quadric equation has two solution: {${(-b + Math.sqrt(d) )/(2*a)} ${(-b - Math.sqrt(d) )/(2*a)}}`
 else {
     return 'this equation has no real solution'
 }
}

//====================================   Prime Number check   ====================


const isPrime = (n) => {
    if(n>1){
        if(n===2||n===3) return true
        let isPrime=true
        let m = Math.floor(Math.sqrt(n)) // number upto which need to be checked
        for(let i=2 ; i<=m ; i++)  if( n%i===0)isPrime=false
        return isPrime
    }
    else return false   
}
console.log('prime',isPrime(99))
// primes in a range 
const rangeOfPrimes = (startNum,endNum) => {
    const primes = []
    for( i=startNum; i<=endNum; i++){
        if( isPrime(i) )primes.push(i)     
    }
    return {primes: primes, count: primes.length}
}
console.log(rangeOfPrimes(1,19))


//====================================   check empty parameter   ====================================  
const isEmpty = pram => {
    switch(typeof(pram)){
        case 'string'  : return pram.trim().length===0? true: false
        break 
        case  'object' :
            return Object.entries(pram).length === 0? true:false 
        break         
        default:return false
    }
}
// case 'boolean' : return false
        // break
        // case 'number'  : return false
        // break


//====================================  count Palindrome Words  ==================================== 

// checking if a word is Palindrome 
const  isPalindrome = str =>{
    str= str.trim()
   let revStr = reverse(str)
  return (str.toLowerCase() ===revStr.toLowerCase())
}

// counting   Palindrome in an array or sentence
        const reverse = str => {
            let result =''
            for(let i=str.length-1; i>=0 ; i--){
                result += str[i]
            }
            return result
        }      
const countPalindrowWords = arr => {
    let count = 0
    if(typeof(arr)==='string'){
        arr=arr.replace(/[^\w\s]/gi, '')
        arr=arr.trim().split(" ")
    }
        arr.forEach( a =>{
        let reverseA = reverse(a)  // reverse is afunction from qsn-05
        if( a.toLowerCase() ===reverseA.toLowerCase()) count++       
        })
        return count
    }

//==================================== Signup Login   ==================================== 
let users = []
let user = []
const signUp = user => {
    let isNameExist = false
    let isEmailExist = false
    let isIdExist = false
       users.forEach( us => {
           if(us.username===user.username) isNameExist = true
           if(us.email===user.email) isEmailExist = true
           if(us._id===user._id) isIdExist = true        
       })
       if(isNameExist) return ` User name '${user.username}' already exist`
       if(isEmailExist) return ` Email ${user.email} already exist`
       if(isIdExist) return ` ID ${user._id} already exist`
       users.push(user)
       return users
   }

   const Login = (name,email,pass) => {
    let isNameExist = false
    let isEmailExist = false
    let isPassExist = false
       users.forEach( us => {
           if(us.username===name) isNameExist = true
           if(us.email===email) isEmailExist = true
           if(us.password===pass) isPassExist = true        
       })
     return (isNameExist && isEmailExist && isPassExist)? `Allowed to Signin`: ` Login information is not correct`
   }


   //==========================================  cleaning /  clean text / remove special character from text ================

   const cleanText = str => str.replace(/[^\w\s.?!]/gi, '') //here ^ carat is for negation \w for [a-zA-Z0-9_] word characters and \s for space /[]/gi for global


   //===============================  string_to_array  string to array =====================
   // str.trim().split(" ")
   // clean and convert to array:
string_to_array = function (str) {
    str = str.replace(/[^\w\s]/gi, '') 
    return str.trim().split(" ");
};
console.log(string_to_array("Robin Singh."));//["Robin", "Singh"]




// ===================================   counting verb   counting mainwords  excluding words excluding selected  ======

const countOnlyMainWords = () =>{
    const cleanedText = str.replace(/[^\w\s]/gi, '')
    const newArry = cleanedText.trim().split(" ")
    const filteredArray = newArry.filter( arr => supportWords.indexOf(arr.toLowerCase())===-1)   
    return {words:filteredArray, count: filteredArray.length}
}
console.log(countOnlyMainWords())

// =================================== print head or tail of an array start end headPart tailPart ====================
const headAndTail = (arr,headTail) => {
    if(typeof(arr)==='object'){
        if(arr.length !==undefined){
           if(arr.length<=5) return arr
           if(headTail==='head') return arr.splice(0,5)
           else if(headTail==='tail') return arr.splice(arr.length-6,5)
           else return ` please choose head or tail`
        }
    else return  JSON.stringify (arr) +`is not an array but object`
    }
    else return JSON.stringify (arr)+`is not an array `
  
}


//  ================================= Array sort ascending descending   ========
arr.sort(function(a, b){return a-b}) //ascending
arr.sort(function(a, b){return b-a}) // descending

//========================== array to set  array convert to set ====
const set =new Set(arr); 

//========================== mean, median, mode, range  ===================

const stat= (arr,headTail) => {
    if(typeof(arr)==='object'){
        if(arr.length !==undefined){
            let mean, median
            arr.sort(function(a, b){return a-b})
            //mean
            const sum = arr.reduce( (total,curValue) => total+=curValue,0)
            mean = sum/arr.length
            //median
            if(arr.length%2===1) median = arr[(arr.length+1)/2]
            else median = (arr[arr.length/2] + arr[arr.length/2+1])/2           
            //mode
            const arrSet =new Set(arr); 
             let modeCount =0
             let mode=[]
            arrSet.forEach( a =>{
               let count = arr.filter( ar => ar===a).length
                if(count>modeCount){
                    modeCount=count
                    mode=[a]
                }
                else if(count===modeCount) mode.push(a)     // multiple mode checking
            })            
            //range
            let range = Math.max(...arr)-Math.min(...arr)
        return ` Mean: ${mean}, Median: ${median}, Mode: ${mode}, Range: ${range}`
        }
    else return  JSON.stringify (arr) +`is not an array but object`
    }
    else return JSON.stringify (arr)+`is not an array ` 
}
console.log(stat([1,4,9,5,5,3,2,2,5,3,3]))



//  ========================   rgb generator rgb color generator  ====================

const arrayOfRgbColors = (n )=> {
    const randomNum = () => Math.floor(Math.random()*256)
    const rgb = () => `rgb(${randomNum()},${randomNum()},${randomNum()})`
    const rgbSet = []
    for(i=0; i<n ; i++)rgbSet.push(rgb())  
    return rgbSet
}
console.log(arrayOfRgbColors(3)) // ["rgb(8,93,8)", "rgb(103,145,63)", "rgb(156,171,157)"]


//  ============================  hexacolor generator
const arrayOfHexaColors = (n) => {
    const char = '0123456789abcdefghigjklnopqrstuvwxyz'
    const i = () => char[Math.floor(Math.random()*char.length)] // choosing random charcter from the string 
    const hexaColor = () => `#${i()}${i()}${i()}${i()}${i()}${i()}`
    let hexaColors = []
    for( let i=0; i<6; i++){
        hexaColors.push(hexaColor())
    }
  return hexaColors
}
//================================= rgb or hexa or rgb

const arrayOfHexaOrRgb = (n,type) => {      //type = 'rgb' or 'hexa'
    if(type==='rgb') return (arrayOfRgbColors(n))
    if(type==='hexa') return (arrayOfHexaColors(n))
    return `please check input pattern, for example: arrayOfHexaOrRgb(5,'rgb') or arrayOfHexaOrRgb(4,'hexa')`
}

//========================= compare two arrays compare arrays =============

const checkSimilarity = (firstWords, secondWords) => {
    const commonWords = [];
    for (firstWord of firstWords) {
      for (secondWord of secondWords) {
        if (firstWord === secondWord) {
          commonWords.push(firstWord);
        }
      }
    }
    return commonWords;
  };
  