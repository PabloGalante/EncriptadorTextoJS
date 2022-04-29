/* Regex Validator */

const regexMin = /[^a-z ]/;
const regexAccent = /[\u00C0-\u00FF]/;

function validadorMin(input){
    return regexMin.test(input);
}

function validadorAcc(input){
    return regexAccent.test(input);
}