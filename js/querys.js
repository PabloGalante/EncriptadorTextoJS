/* Query Selector for JS Scripts */

const buttonEncriptar = document.querySelector(".boton-encriptar");
const buttonDesencriptar = document.querySelector(".boton-desencriptar");
const muneco = document.querySelector(".muneco");
const cartelRectangle = document.querySelector(".cartel-rectangulo");
const outputText = document.querySelector(".output-texto");
const copyButton = document.querySelector(".cartel-copiar");

const regexMin = /^[a-z]+$/g;
//new RegExp("[a-z]");
const regexAccent = new RegExp("[\u00C0-\u00FF]");