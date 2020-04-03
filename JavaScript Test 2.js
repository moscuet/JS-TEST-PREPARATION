// ==  01  ==   Write a function which count the number of occurrence of words in a paragraph or a sentence.The function countWords takes a paragraph and two words as parameters. It compare which word is most frequently occurred in the paragraph

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';


let countWords = (para, word1, word2) => {
    if(para.includes(word1) && para.includes(word2)){
        const count1 = (para.match(new RegExp(word1, "g"))).length
    const count2 = (para.match(new RegExp(word2, "g"))).length
    if(count1>count2) return ` "${word1}" is more frequent than "${word2}" .`
    else if(count2>count1) return ` "${word2}" is more frequent than "${word2}" .`
    }
    else{
        return ' either one or both words can not be found in the string'
    }
}
console.log(countWords(paragraph,'love','else'))// "love" is more frequent than "else"


// == 02 ==  Write a function which takes an array parameter and returns an array of the data types of each item

const checkDatatTypes = array => {
    return arr.map( element => typeof(element) )
}
const arr = ['Asabeneh', 100, true, null, undefined, {job:'teaching'}]
console.log(checkDatatTypes(arr))// ["string", "number", "boolean", "object", "undefined", "object"]


// ==  03  == Create a function which filter ages greater than 18.

const agesGreaterEighteen = ages => {     
    filteredAge=[]                 // without using filter method
    ages.forEach(element => {
       if( element>18)filteredAge.push(element)
    });
    return filteredAge
}
const ages = [35, 33, 17, 18, 15, 22, 16, 20];
console.log(agesGreaterEighteen(ages)) // [35, 30, 22, 20]
console.log(ages.filter( age => age>18)) // using filter method: [35, 30, 22, 20]


// ==  04  ==  Write a function which calculate the average age of the group.

const averageAge = (ages) =>{
    const sumOfAges = ages.reduce( (total,age) => total+age,0)
    return sumOfAges/ages.length
}
console.log(averageAge(ages)) //22



// ==  05  ==  Write a function named shuffle, it takes an array parameter and it returns a shuffled array

const shuffle = arr => {
    let newArray=[]
    let indexSet=[]
    for(i=0; indexSet.length<arr.length; i++){
        let randomIndex= Math.floor(Math.random()*arr.length)
        if(!indexSet.includes(randomIndex)){
            indexSet.push(randomIndex)
            newArray.push(arr[randomIndex])        
       } 
       /*alternate
       let element = arr[randomIndex]
       if (newArray.indexOf(element) === -1) {
        shuffledArray.push(element);
      }
      */

       
    }
    return newArray   
}
console.log(shuffle([1,7,4,2,8])) // i.e,  [7, 1, 2, 8, 4] 



// ==  06  == Write a function which can generate a random Finnish car code

const genCarPlateNum = () =>{
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const ll=letters.length // 26 can be used instead of ll
    const numbers = '0123456789'
    const nl=numbers.length // // 10 can be used instead of nl
    const Index = (n) => Math.floor(Math.random()*n)
    const letterpart= letters[Index(ll)]+letters[Index(ll)]+letters[Index(ll)]
    const numberPart = numbers[Index(nl)].toString()+numbers[Index(nl)].toString()+numbers[Index(nl)].toString()
   return `${letterpart}-${numberPart}`
}
console.log(genCarPlateNum()) // i.e, ZCA-221


// == 07  ==  The following shopping cart has four products. Create an addProduct, removeProduct ,editProduct , removeAll functions to modify the shopping cart

const shoppingCart = ['Milk','Coffee','Tea', 'Honey'];
const addProduct = product => shoppingCart.push(product)
const editProduct = (index,editedProduct) => shoppingCart[index]=editedProduct
const removeProduct = index => shoppingCart.splice(index,1)

addProduct('Medicine') // console.log(shoppingCart) > ["Milk", "Coffee", "Tea", "Honey", "Medicine"]
editProduct(3,'Book') //console.log(shoppingCart) > ["Milk", "Coffee", "Tea", "Book", "Medicine"]
removeProduct(2) // /console.log(shoppingCart) > ["Milk", "Coffee", "Book", "Medicine"]



// ==  08  == The following todoList has three tasks. Create an addTask, removeTask, editTask, toggleTask, toggleAll, removeAll functions to modify the todoList.

const todoList = [
    {
        task:'Prepare JS Test',
        time:'4/3/2019 8:30',
        completed:true
        
    },
    {
        task:'Give JS Test',
        time:'4/3/2019 10:00',
        completed:false
        
    },
    {
        task:'Assess Test Result',
        time:'4/3/2019 1:00',
        completed:false
        
    }]
    
    const task = {
        task:'Explain soluation of Test Result',
        time:'10/3/2019 1:00',
        completed:false
    }


const addTask  = (task) => todoList.push(task)  
const removeTask = (index) => todoList.splice(index,1)
const editTask = (index, editedTask) => todoList.splice(index,1, editedTask)
const toggleTask = () => {}
const toggleAll = () => {}
const removeAll = () => {}


//== 09 == Write a function which check if items of an array are unique?

let ABC = [ 1,2,4,5,2]
const checkUnique = (arr) => {
    const set =new Set(arr); 
    if(arr.length>set.size) return 'true'
    return false 
}
console.log(checkUnique(ABC))

// ==  10 ==  Write a function which filter users who has scoresGreaterThan85, Write a function which addUser to the user array only if the user does not exist. Write a function which addUserSkill which can add skill to a user only if the user exist. Write a function which editUser if the user exist in the users array.
const users = [
{
	name:'Brook', 
	scores:75,
	skills:['HTM', 'CSS', 'JS'],
	age:16
},
{
	name:'Alex', 
	scores:80,
	skills:['HTM', 'CSS', 'JS'],
	age:18
}, 
{
	name:'David', 
	scores:75,
	skills:['HTM', 'CSS'],
	age:22
}, 
{
	name:'John', 
	scores:85,
	skills:['HTM'],
	age:25
},
{
	name:'Sara',
	scores:95,
	skills:['HTM', 'CSS', 'JS'],
	age: 26
},
{
	name:'Martha', 
	scores:80,
	skills:['HTM', 'CSS', 'JS'],
	age:18
},
{
	name:'Thomas',
	scores:90,
	skills:['HTM', 'CSS', 'JS'],
	age:20
}
];

const user = {
	name:'rahman',
	scores:91,
	skills:['HTM', 'CSS', 'JS'],
	age:32
}

 const scoresGreaterThan85 = (users) => users.filter( user => user.scores>85)

 const adduser = (user) => {
     let isUserExist=false 
     users.forEach(us => {
         if(us.name===user.name) isUserExist=true
     })
    if(!isUserExist) return  users.push(user)
 }

 const addSkill = (userName,newSkill) => {
    users.forEach(user => {
        if(user.name===userName) {
            user.skills.push(newSkill)
        }
    })
 }

 const EditUser = (userName,EditedUser) => {   
    users.forEach((user,index) => {
        if(user.name===userName) {
            users[index]=EditedUser
        }
    })   
 }

 