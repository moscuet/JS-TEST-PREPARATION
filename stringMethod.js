//===============================  string_to_array  string to array =====================
string_to_array = function (str) {
    str=str.replace(/[^\w\s]/gi, '') //here ^ carat is for negation \w for [a-zA-Z0-9_] word characters and \s for space /[]/gi for global
    return str.trim().split(" ");
};
console.log(string_to_array("Robin Singh."));//["Robin", "Singh"]