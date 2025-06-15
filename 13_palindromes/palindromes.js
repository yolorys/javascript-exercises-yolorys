const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-zA-Z0-9\s]/g, "");
    str = str.replaceAll(" ", "");

    let backward = "";
    for (let i = str.length - 1; i >= 0; i--){
        backward += str[i];
    }

    return str == backward;
};


// Do not edit below this line
module.exports = palindromes;
