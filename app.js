

/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión 
encriptada también devolver una palabra encriptada para su versión original.


*/
var textoOriginal = [];
var arrayEncriptado = [];
let textoEncriptado = [];
var cd = 0;


function encriptar() {

    limpiarAnterior();

    var formulario = document.getElementById('formularioCampo').value;
    textoOriginal = Array.from(formulario);
    var tamanoTexto = 0;
    var letraActual = "";
    var iteracion = 0;
    tamanoTexto = formulario.length;

    while(iteracion < tamanoTexto){
        letraActual = textoOriginal[iteracion];
        if(letraActual == 'a'){
            arrayEncriptado[iteracion] = 'ai';
        }
        else if(letraActual == 'e'){
            arrayEncriptado[iteracion] = 'enter'
        }

        else if(letraActual == 'i'){
            arrayEncriptado[iteracion] = 'imes'
        }
        
        else if(letraActual == 'o'){
            arrayEncriptado[iteracion] = 'ober'
            }
            
        else if(letraActual == 'u'){
            arrayEncriptado[iteracion] = 'ufat'
            }
    
        else{
            arrayEncriptado[iteracion] = letraActual;
        }
        iteracion++;
    }
   textoEncriptado = arrayEncriptado.join('');

   document.getElementById('textoEncriptado').innerHTML = textoEncriptado;
   noHayNada(); 
}

function desencriptar() {
    var formulario = document.getElementById('formularioCampo').value;
    textoEncriptado = Array.from(formulario);

    textoOriginal = textoEncriptado.join('').replace(/ai/g, 'a').replace(/enter/g,'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    document.getElementById('textoEncriptado').innerHTML = textoOriginal;

    noHayNada(); 
}



function noHayNada() {
if(textoEncriptado.length != 0){
    document.getElementById('noEncontrado').style.display = 'none';
    document.getElementById('resultadoEncriptar').style.display = 'block';
    document.getElementById('botonCopiar').style.display = 'block';
    document.getElementById('ingreseAqui').style.display = 'none';
    console.log('tamano distinto de 0')

}
else{
    document.getElementById('noEncontrado').style.display = 'flex';
    document.getElementById('resultadoEncriptar').style.display = 'none';
    document.getElementById('botonCopiar').style.display = 'none';
    document.getElementById('ingreseAqui').style.display = 'block';
    console.log('tamano 0')
}  
}

function limpiarAnterior() {
    textoEncriptado = [];
    textoOriginal = [];
    arrayEncriptado = [];
    cd=0;
    
}

function copiar() {
    let texto = document.getElementById('textoEncriptado') .innerHTML;
    
    navigator.clipboard.writeText(texto);
    
}


