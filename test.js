//removing special character
const str = "abc's test#s";
console.log(str.replace(/[^a-zA-Z ]/g, ""));