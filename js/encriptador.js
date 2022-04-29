/*
`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`

- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. 
*/

function encriptador() {

    let inputText = document.querySelector(".input-texto").value;

    let testMin = regexMin.test(inputText);
    let testAcc = regexAccent.test(inputText);

    if(!testMin || testAcc){
        alert("Recuerde, solo minusculas y sin acentos!")
    }else {
        let resultado = [];

        for (let i = 0; i < inputText.length; i++){
    
            let inputLetter = inputText[i];
    
            if (inputLetter == "a"){
                resultado.push("ai");
            } else if(inputLetter == "e"){
                resultado.push("enter");
            } else if(inputLetter == "i") {
                resultado.push("imes");
            } else if(inputLetter == "o"){
                resultado.push("ober");
            } else if(inputLetter == "u"){
                resultado.push("ufat");
            } else {
                resultado.push(inputLetter);
            }
        }
    
        muneco.style.display = "none";
        cartelRectangle.style.display = "none";
        outputText.style.display = "block";
        copyButton.style.display = "block";
    
        return outputText.innerHTML = resultado.join("");
    }
}

buttonEncriptar.addEventListener('click', encriptador);