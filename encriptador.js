/*La "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

/*Me quede en el punto 17) de js-> 18) esta realizado
*/
/*obtener el mensaje a encriptar */
let msj= document.getElementById("encriptar-texto");
let botonCopiar=document.getElementById("boton-copiar");
let textoDesencriptado = document.getElementById("desencriptar-texto");

/*Empieza encriptado */
function encriptar(){
    console.log("el tamaño es:",msj.value.length);
    console.log("el mensaje es:",msj.value);
    console.log(msj.value=="");
    if (msj.value.length > 0) {
        /*desaparezco objetos */
        desaparecerObjetos();

        /* muestro texto desencriptado*/
        textoDesencriptado.style.display="block";
        textoDesencriptado.innerHTML = encriptarMsj();
        msj.value = "";//borro msj de izq

        /*muestro boton copiar */
        botonCopiar.style.display="block";//visible
    }else{
        apareceObjetos();
        textoDesencriptado.style.display="none";//para sacar el texto derecho

    }
}

/*Desaparecer objetos cuando toco el boton */
function desaparecerObjetos(){
    let titulo=document.getElementById("titulo");
    let subtitulo=document.getElementById("subtitulo");
    let munieco=document.getElementById("munieco");

    titulo.style.display="none";
    subtitulo.style.display="none";
    munieco.style.display="none";
}

function apareceObjetos() {
    let titulo=document.getElementById("titulo");
    let subtitulo=document.getElementById("subtitulo");
    let munieco=document.getElementById("munieco");

    titulo.style.display="block";
    subtitulo.style.display="block";
    munieco.style.display="block";
}
function encriptarMsj(){
    /* encriptarlo */
    /*obtengo valor del mensaje */
    let mensaje=msj.value;
    let mensajeNuevo="";
    /*comparo, si tiene algunas de esas vocales la cambio*/
    for(let i=0;i<mensaje.length;i++){
        if(mensaje[i]==='a'){
            mensajeNuevo+="ai";
        }else if(mensaje[i]==='e'){
            mensajeNuevo+="enter";
        }else if(mensaje[i]==='i'){
            mensajeNuevo+="imes";
        }else if(mensaje[i]==='o'){
            mensajeNuevo+="ober";
        }else if(mensaje[i]==='u'){
            mensajeNuevo+="ufat";
        }else{
            mensajeNuevo+=mensaje[i];
        }
    }
    return mensajeNuevo;
}
/*Termina encriptado */

/*Empieza Desencriptado */
function desencriptar(){
    //si es mayor a 0
    if (msj.value.length > 0) {
        /*desaparece objetos */
        desaparecerObjetos();
    
    /* muestro texto a desencriptar*/
    textoDesencriptado.style.display="block";
    textoDesencriptado.innerHTML = desencriptarMsj();

    msj.value = "";//borro msj de izq

    /*muestro boton copiar */
    botonCopiar.style.display="block";//visible
    }else{
        apareceObjetos();
        textoDesencriptado.style.display="none";//para sacar el texto derecho
    }
}
function desencriptarMsj() {
    /* desencriptarlo */
    /*obtengo valor el mensaje */
    let mensaje=msj.value;
    let msjDesenciptado="";

    /*reemplazo si tiene algunas de esas palabras*/
    //con replaceAll()
    msjDesenciptado = mensaje.replaceAll('ai', 'a');
    msjDesenciptado = msjDesenciptado.replaceAll('enter', 'e');
    msjDesenciptado = msjDesenciptado.replaceAll('imes', 'i');
    msjDesenciptado = msjDesenciptado.replaceAll('ober', 'o');
    msjDesenciptado = msjDesenciptado.replaceAll('ufat', 'u');

    /*for(let i=0;i<mensaje.length;i++){
        if(mensaje[i]==='a'& mensaje[i+1]==='i'){
            msjDesenciptado+="a";
            i++;
        }else if(mensaje[i]==='e' & mensaje[i+1]==='n'){
            msjDesenciptado+="e";
            i+=5;
        }else if(mensaje[i]==='i'){
            msjDesenciptado+="i";
            i+=4;
        }else if(mensaje[i]==='o'){
            msjDesenciptado+="o";
            i+=4;
        }else if(mensaje[i]==='u'){
            msjDesenciptado+="u";
            i+=4;
        }else{
            msjDesenciptado+=mensaje[i];
        }
    }*/
    return msjDesenciptado;
}
/*Termina desencriptado*/

/*Empieza copiar */
function copiarTexto() {
    let copyText=document.querySelector("#desencriptar-texto");
    copyText.select();
    document.execCommand("copy");
}
/*Termina copiar */