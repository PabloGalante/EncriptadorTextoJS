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

function desencriptador() {

    let inputText = input.value;

    const testMin = validadorMin(inputText);
    const testAcc = validadorAcc(inputText);

    if(testMin || testAcc){
        alert("Recuerde, solo minusculas y sin acentos!");
    }else {
        let resultado = [];

        for (let i = 0; i < inputText.length; i++){

            let inputLetter = inputText[i];

            if (inputLetter == "a"){
                resultado.push("a");
                i += 1;
            } else if(inputLetter == "e"){
                resultado.push("e");
                i += 4;
            } else if(inputLetter == "i") {
                resultado.push("i");
                i += 3;
            } else if(inputLetter == "o"){
                resultado.push("o");
                i += 3;
            } else if(inputLetter == "u"){
                resultado.push("u");
                i += 3;
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

buttonDesencriptar.addEventListener('click', desencriptador);