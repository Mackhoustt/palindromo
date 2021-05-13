var palabra= document.getElementById("Info")
var escrito;
var mensaje= document.getElementById("mensaje");
function Palindromo(){
     var verificar = false || true; 

    if (longitud==0){
       verificar= false;
    }

    else{ 
        info = palabra.value;
        var texto= info.toLowerCase().replace(/[\W_]/g, "");
         var longitud = texto.length;
        var ultimaLetra= texto.length -1;
      
    for(var i=0; i<ultimaLetra; i++){
        if (texto[i] == texto[ultimaLetra]){
           verificar = true;
            ultimaLetra --;
        }
        else{
            verificar = false;
        }
    
    }
  
    if (verificar==true){
        escrito=texto.toUpperCase();
        palabra.innerHTML=texto;
       alert("Sí es un palindromo");
    }
    else {
        escrito=texto.toUpperCase();
        palabra.innerHTML=texto;
        alert("No es un palindromo");
    }

 
}
}
