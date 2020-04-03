// ==  01  ==  a) A weight of an object is different on different planet and it is calculated as w = mg. Write a function which calculate the weight of an object. It takes mass and gravity as a parameter. If the gravity is not given assume it is earth and the the approximate gravity of the earth is 10 m/s2. A weight of a 100 kg object on different planets is as follows:





// ==  01  ==  b) Write a function which takes mass of an object and name of a planet and it returns the weight of the object in the planet. Different gravities in m/s2:


const weightOfObject = (mass,planet) => {
     let g = 10
    planet = planet.toLowerCase()
    console.log(planet)
     switch(planet){
        case 'jupiter': g=25
            break
        case 'sun' :  g=274     
            break        
        case 'earth' : g=9.79
            break
        case '' :  g=8.87
            break
        case 'mars' : g=3.71
            break    
        case 'moon' : g=1.62
            break
        default: g=10
     }
    
    const weight = mass*g
    return weight   
}
console.log(weightOfObject(123,'mars'))//456.3


// == 02 == Write a function called cleanText. The function takes raw text as a parameter and returns the clean text.

const str = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const cleanText = str => str.replace(/[^\w\s.?!]/gi, '')
  
console.log(cleanText(str))// I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher!?

//  ==  03  == After cleaning the text in the sentence from question number 2 you will get the following text. Count the number of words in this text. Don't include words with only one letter.



const countNonsingleLetterWord = text => {
    const cleanedText = cleanText(str)
    const textToArry = cleanedText.trim().split(" ")
    const modifiedText = textToArry.filter( word => word.length!==1)
    return modifiedText.length
}
console.log(countNonsingleLetterWord(str))


// == 04 ==  How many words were used to construct this sentence. Now, don't exclude one letter words

// remove special character then convert array and count\

//  == 05  == Create a function called countOnlyMainWords which count verbs which main importance in the sentence. The function return an object with keys words which is going to be array of main words and count, the number of main words.

const supportWords = ['i', 'my', 'me', 'mine', 'myself', 'you', 'yours', 'yourself', 'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself', 'it', 'its', 'itself', 'we', 'us', 'our', 'ours', 'ouselves','they', 'them', 'themselves', 'be', 'been', 'being', 'am','is', 'was','are', 'were', 'do','does', 'did', 'done', 'has', 'have', 'had', 'will', 'would', 'can', 'could', 'may', 'might', 'shall', 'should', 'and', 'but', 'than', 'the', 'an','as', 'a', 'any', 'to', 'if', 'in', 'into','there', 'this', 'that', 'those', 'more', 'most', 'many', 'much', 'less', 'for', 'by', 'of', 'at', 'on','or','not','how','who', 'what', 'which', 'whose','when','why', 'where', 'so', 'also'];
const countOnlyMainWords = () =>{
    const cleanedText = str.replace(/[^\w\s]/gi, '')
    const newArry = cleanedText.trim().split(" ")
    const filteredArray = newArry.filter( arr => supportWords.indexOf(arr.toLowerCase())===-1)   
    return {words:filteredArray, count: filteredArray.length}
}
console.log(countOnlyMainWords())


// == 06  ==  Write a function called headAndTail which find the head or tail of the array. Head is the first five elements in the array and similarly tail is the last five elements in the array. First, check the array has more than five elements if not return the array itself. And, also check if the parameter passed is an array if not return an appropriate feedback.



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
console.log(headAndTail([1,2,3,4,4,7,8,3,5], 'tail'))//[4, 4, 7, 8, 3]


// ==  07  ==  Write a function called stat, it takes only an array as a parameter and calculates mean, median, mode and range from students JavaScript test array.  

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

//  ==  08  ==  a. arrayOfRgbColors
const arrayOfRgbColors = (n )=> {
    const randomNum = () => Math.floor(Math.random()*256)
    const rgb = () => `rgb(${randomNum()},${randomNum()},${randomNum()})`
    const rgbSet = []
    for(i=0; i<n ; i++)rgbSet.push(rgb())     
    return rgbSet
}

//  ==  08  == b. arrayOfHexaColors:

const arrayOfHexaColors = (n) => {
    const char = '0123456789abcdefghigjklnopqrstuvwxyz'
    const i = () => char[Math.floor(Math.random()*char.length)] // choosing random charcter from the string 
    const hexaColor = () => `#${i()}${i()}${i()}${i()}${i()}${i()}`
    let hexaColors = []
    for( let i=0; i<n; i++) hexaColors.push(hexaColor())   
    return hexaColors
}

//==  09  ==  arrayOfHexaOrRgb
const arrayOfHexaOrRgb = (n,type) => {      //type = 'rgb' or 'hexa'
    if(type==='rgb') return (arrayOfRgbColors(n))
    if(type==='hexa') return (arrayOfHexaColors(n))
    return `please check input pattern, for example: arrayOfHexaOrRgb(5,'rgb') or arrayOfHexaOrRgb(4,'hexa')`
}

// == 10  ==== On this data folder there are two speech transcripts. Use the supportWords array to exclude which are not that much relevance for the message of the speech.
// melina_trump_speech
const importantWords = (speech)=> {
    let cleanSpeech = speech.replace(` —`,'').replace(/[^a-zA-Z0-9\s]/gi, '') 
    let arr= cleanSpeech.trim().split(" ");
    const filteredArray = arr.filter( a=> supportWords.indexOf(a.toLowerCase())===-1) // array of important words
    console.log(filteredArray)
    const arraySet = new Set(filteredArray) // set of important words
    const wordsCountArray =[]
    arraySet.forEach( a => {
      let count = filteredArray.filter( ar => ar===a).length
      wordsCountArray.push({word:a,count})
    })
    wordsCountArray.sort((a,b)=>b.count-a.count)
    const mostUsedWords = wordsCountArray.splice(0,10)
    const mostUsedWordArray = mostUsedWords.map( word => word.word)
    return mostUsedWordArray
}
console.log(importantWords(melina_trump_speech))
