console.log('Conected test4')

// ==  01 == Create a function which solve quadratic equation ax2 + bx + c = 0. A quadratic equation may have one, two or no solution. The function should return a set of the solution(s)


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

//  == 02  ==  Create a function called isPrime which check if a number is prime or not.

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

// ==  03  ==  Write a function rangeOfPrimes. It takes two parameters, a starting number and an ending number . The function returns an object with properties primes and count. The primes value is an array of prime numbers and count value is the number of prime numbers in the array


const rangeOfPrimes = (startNum,endNum) => {
    const primes = []
    for( i=startNum; i<=endNum; i++){
        if( isPrime(i) )primes.push(i)     
    }
    return {primes: primes, count: primes.length}

}
console.log(rangeOfPrimes(1,19))



// ==  04  ===  Create a function called isEmpty which check if the parameter is empty. If the parameter is empty, it returns true else it returns false.

const isEmpty = pram => {
    switch(typeof(pram)){
        case 'string'  : return pram.trim().length===0? true: false
        break 
        case  'object' :
            return Object.entries(pram).length === 0? true:false 
        break         
        default:return false
        // case 'boolean' : return false
        // break
        // case 'number'  : return false
        // break
    }
}
console.log(isEmpty('  ')) // true
console.log(isEmpty('')) // true 
console.log(isEmpty('Abc')) // false
console.log('[]',isEmpty([])) // true
console.log('html',isEmpty(['HTML', 'CSS', 'JS']) )// false;
console.log(isEmpty({})) //true
console.log('name',isEmpty({name:'Asabeneh', age:200})) //false
console.log(isEmpty(8)) //false



// ==  05  == a. Create a function called reverse which take a parameter and it returns the reverse of the parameter. Don't use the built in reverse method.`


// reverse array and string without using method
const reverse = str => {
    let result =''
    for(let i=str.length-1; i>=0 ; i--){
        result += str[i]
    }
    return result
}


//  == 05  == b. Create a function called isPalindrome which check if a parameter is a palindrome or not. Use the function from a to reverse words.

const  isPalindrome = str =>{
    str= str.trim()
   let revStr = reverse(str)
  return (str.toLowerCase() ===revStr.toLowerCase())
}

//console.log('isPalindrome:'+isPalindrome('anna'))

//  == 06 ==  Create a function called countPalindrowWords which counts the number of palindrome words in the palindoromeWords array or in any array.

const words = [
    'Anna',
    'Asa',
    'Civic',
    'common',
    'Kayak',
    'Level',
    'Madam',
    'Mom',
    'Noon ',
    'Rotor',
    'Sagas ',
    'Solar',
    'Stats',
    'Tenet ',
    'Wow'
  ];
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

 
  // ==  07  == Count the number of palindrome words in the following sentence.

  const sentence ='He met his mom at noon and she was watching an epsoide of the begninging of her Solos. Her tenet helped her to level up her stats. After that he went to kayak driving Civic Honda.'
//console.log('count',countPalindrowWords(sentence))
console.log(countPalindrowWords(sentence))//08


//Data for qsn 8-10
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'17/05/2019 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'17/05/2019 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'17/05/2019 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'17/05/2019 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'17/05/2019 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
        {
          _id: 'eedfcf',
          name: 'mobile phone',
          description: 'Huawei Honor',
          price: 200,
          ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
          ],
          likes: []
        },
        {
          _id: 'aegfal',
          name: 'Laptop',
          description: 'MacPro: System Darwin',
          price: 2500,
          ratings: [],
          likes: ['fg12cy']
        },
        {
          _id: 'hedfcg',
          name: 'TV',
          description: 'Smart TV:Procaster',
          price: 400,
          ratings: [{ userId: 'fg12cy', rate: 5 }],
          likes: ['fg12cy']
        }
      ];


      // == 08  ==  Imagine you are getting the above users collection from a MongoDB database.

//a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

const user =  {
    _id: 'ghdercc',
    username: 'Thomass',
    email: 'thomass@thomas.com',
    password: '123333',
    createdAt:'17/05/2019 10:00 AM',
    isLoggedIn: false
}

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
console.log(signUp(user))

//b. Create a function called signIn which allows user to sign in to the application


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
   console.log(Login('Brook','brook@brook.com','123111'))



// ==  09  == The products array has three elements and each of them has six properties.

//a. Create a function called rateProduct which rates the product




//b. Create a function called averageRating which calculate the average rating of a product



// ===  10  == Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.



