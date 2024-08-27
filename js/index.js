function encriptar()
{
let textoDesencriptado=  document.getElementById("texto1").value;//texto ingresado
let texto2 = document.getElementById("texto2");//texto final
let imagen = document.getElementById("imagenPrincipal")
let parrafo1 = document.getElementById("textoImagen1");
let parrafo2 = document.getElementById("textoImagen2");
let btonCopiar = document.getElementById("copiar");
if(textoDesencriptado.length != 0)
{
    let textoEncriptado = textoDesencriptado
 
 .replace(/e/gi, "enter")
 .replace(/i/gi, "imes")
 .replace(/a/gi, "ai")
 .replace(/o/gi, "ober")
 .replace(/u/gi, "ufat")
    
    let resultado = textoEncriptado;
 
   let limpiarTexto1= document.getElementById("texto1");//captura el text area 1 
   limpiarTexto1.value = ""; //remplaza su valor por vacio   


    texto2.value = resultado;

    texto2.style.display="block";
    btonCopiar.style.display="block";
    imagen.style.display = "none";
    parrafo1.style.display = "none";
    parrafo2.style.display = "none";
}else{
    alert("INGRESE UN TEXTO PARA DESENCRIPTAR")
}
}



function copiar() {

    let textarea = document.getElementById("texto2");
    textarea.select();   
    textarea.setSelectionRange(0, textarea.value.length);
    document.execCommand("copy");
}

function desencriptar()
{

    let textoDesencriptado=  document.getElementById("texto1").value;//texto ingresado
    let texto2 = document.getElementById("texto2");//texto final
    let imagen = document.getElementById("imagenPrincipal")
    let parrafo1 = document.getElementById("textoImagen1");
    let parrafo2 = document.getElementById("textoImagen2");
    let btonCopiar = document.getElementById("copiar");
    if(textoDesencriptado.length != 0)
    {
        let textoEncriptado = textoDesencriptado
     .replace(/enter/gi, "e")
     .replace(/imes/gi, "i")
     .replace(/ai/gi, "a")
     .replace(/ober/gi, "o")
     .replace(/ufat/gi, "u");
        
        let resultado = textoEncriptado;
        texto2.value = resultado;
    
        texto2.style.display="block";
        btonCopiar.style.display="block";
        imagen.style.display = "none";
        parrafo1.style.display = "none";
        parrafo2.style.display = "none";
    }
       
}