
// limpiar el el btn guion y lo que esta en observaciones
const btnDeleteGuiones = document.getElementById('btnDeleteGuiones');
btnDeleteGuiones.addEventListener('click',()=>{
  document.getElementById("guiones").selectedIndex = "";
  document.getElementById("observaciones").value ="";
})


// eliminar espacios y :
limpiarEntrada(Caso);
limpiarEntrada(dian1);
limpiarEntrada(IdLlamada);
limpiarEntrada(Celular);
limpiarEntrada(Legado);
limpiarEntrada(Legado2);
limpiarEntrada(switch1);
limpiarEntrada(NE);
limpiarEntrada(Correo);
function limpiarEntrada(input) {
  input.addEventListener("input", e => {
    let string = e.target.value;
    string = string.replace(/[ :	]/g, "");
    e.target.value = string;
  });
}

// funcion para evitar ctrl+s
document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key === "s") {
    event.preventDefault(); // evita el comportamiento predeterminado del navegador
    // código para guardar la información o enviarla al servidor
  }
});

// convertir a mayusculas
function mayus(e) {
  e.value = e.value.toUpperCase(); 
}



//fecha 
function fecha(){
  var fecha = new Date();
  var year = fecha.getFullYear();
  var mes=fecha.getMonth()+1;
  var dia=diaFecha(fecha.getDate());
  navigator.clipboard.writeText(dia+"/0"+mes+"/"+year);
}

// con esta funcion el texto queda selecionado
function copyToClipBoard(parametro) {
  var texto = document.getElementById(parametro);
  texto.select();
  document.execCommand("copy");
}

// capturar sintexto Entra
function captura(parametro) {
  var codigoACopiar = document.getElementById(parametro);
  navigator.clipboard.writeText(codigoACopiar.value);
}


//borra un solo texto deliteTextbox
function deliteTextbox(param,param2){
  document.getElementById(param).value = "";
  var input = document.getElementById(param);
  input.focus();
  document.getElementById(param2).value = "";
}

//borra todo
function borrarTodo(){
  var elementos= ["Caso","Nombre","IdLlamada","switch1","NE","Celular","Legado","dian1","Legado2","observaciones","observaciones2","nota","Correo","Direccion","acp","anillo","observacionesGiones"];

  for(let i=0;i<elementos.length;i++){
    var item=elementos[i];
    document.getElementById(item).value = "";
  }
  document.getElementById("guiones").selectedIndex = "";
  document.getElementById("guiones2").selectedIndex = "";
  document.getElementById("guionesGuion").selectedIndex = "";
  document.getElementById("nota").value = "Usuario se contacta indicando que no le funciona el servicio de internet, afirma haber realizado descartes de primer nivel, adicional se detecta led lost encendido."+"\n"+"\n"+"Usuario se contacta indicando que esta presentando intermitencia en el servicio de internet, afirma haber realizado descartes de primer nivel.";
  document.getElementById("dian2").value = "";

}

//generar
function capturarTodo() {
  let observaciones = document.getElementById("observaciones").value;
  //enviar toda la informacion capturada  a la plantilla
  document.getElementById("plantilla").value = observaciones;
  copyToClipBoard("plantilla");
  document.getElementById("btGenerar").innerHTML ="Generado!";
  setTimeout(resGenerar,1000);
 
}

//funcion notificacion de copiado temporal
function resGenerar(){
  document.getElementById("btGenerar").innerHTML ="Generar"
}

function resMSS(){
  document.getElementById("btMssP").innerHTML ="MSS"
}

//convertir numero del mes en mes texto

function converMonth(mes){
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  return meses[mes];
}

function diaFecha (dia){
if(dia<10){
  return "0"+dia
}else{
  return dia
}
}


//guiones CRs
function selecionCr(){
  let opcion = document.getElementById("gestionCr").value;

  switch(opcion){
    case "s":
      document.getElementById("notaCr").value ="";
      break; 
    case "0":
      document.getElementById("notaCr").value ="La causa fue: \nLa solución fue: ";
      break;   
    case "1":
      document.getElementById("notaCr").value = "S. Básico"+"\n"+
      "\t" + "ID prueba: " + "N/A" + "\n" +
      "\t" + "Falla evidencia en la prueba: " +"N/A"+ "\n" +
      "\t" + "Diagnóstico realizado: " + "\n" +"\n" +

      "S3GU1M13NT0_N1:d1agnostico";
      break;
    case "2":
      document.getElementById("notaCr").value ="S. Avanzado:"+"\n"+
      "\t" + "Conclusión al ejecutar lista de chequeo: " + "\n" +
      "\t" + "Numeral donde se evidencia falla en la lista de chequeo: "+ "\n" +
      "\t" + "Diagnóstico realizado: "+ "\n" +
      "\t" + "Falla eléctrica S/N: N" + "\n" +"\n" +

      "S3GU1M13NT0_N1:d1agnostico";
      break;
      case "3":
      document.getElementById("notaCr").value ="Prueba realizada:"+"\n"+
      "Herramienta utilizada: " + "\n" + 
      "Resultado obtenido:" + "\n" +"\n" +

      "S3GU1M13NT0_N1:p3s3rv1c10";
      break;
    
    default: false;
  }}


//guiones select
function selecion(){
  let opcion = document.getElementById("guiones").value;
  let nombre = document.getElementById("Nombre").value;
  let celular = document.getElementById("Celular").value;
  let idLlamada = document.getElementById("IdLlamada").value;
  let idGuiones = document.getElementById("observacionesGiones").value;


/*input.focus();*/
/*copyToClipBoard("observaciones");*/
  switch(opcion){
    case "0":
      document.getElementById("observaciones").value ="La causa fue: "+"\n"+"La solución fue: ";
      // Colocar el foco después de "La causa fue: "
      observaciones.focus();
      observaciones.selectionStart = observaciones.selectionEnd = observaciones.value.indexOf("La causa fue: ") + "La causa fue: ".length;
      
      break;  

    case "1":
      document.getElementById("observaciones").value = "S. Básico"+"\n"+
      "\t" + "ID prueba: " + "N/A" + "\n" +
      "\t" + "Falla evidencia en la prueba: " +"N/A"+ "\n" +
      "\t" + "Diagnóstico realizado: "+idGuiones + "\n" +"\n" +

      "S3GU1M13NT0_N1:d1agnostico";

      // Colocar el foco después de "Diagnóstico realizado: deliteTextbox"
      observaciones.focus();
      observaciones.selectionStart = observaciones.selectionEnd = observaciones.value.indexOf("Diagnóstico realizado: ") + "Diagnóstico realizado: ".length;
      
      break;

    case "2":
      document.getElementById("observaciones").value = "S. Avanzado:"+"\n"+
      "\t" + "Conclusión al ejecutar lista de chequeo: " + "\n" +
      "\t" + "Numeral donde se evidencia falla en la lista de chequeo: "+ "\n" +
      "\t" + "Diagnóstico realizado: "+  idGuiones + "\n" +
      "\t" + "Falla eléctrica S/N: N" + "\n" +"\n" +

      "S3GU1M13NT0_N1:d1agnostico";
      // Colocar el foco después de "Diagnóstico realizado: "
      observaciones.focus();
      observaciones.selectionStart = observaciones.selectionEnd = observaciones.value.indexOf("Diagnóstico realizado: ") + "Diagnóstico realizado: ".length;
      
      break;

    case "3":
      
      document.getElementById("observaciones").value = "De acuerdo a la comunicación establecida Nombre: "+nombre+", Teléfono: "+celular+" hemos registrado su llamada con el siguiente avance: "+ "\n" +"\n" +
      "Seguiremos gestionando su caso en pro de una solución oportuna."+ "\n" +"\n" +
      "ID llamada: " +idLlamada+ "\n" +"\n" +

      "S3GU1M13NT0_N1:llamadadelcliente";

      // Colocar el foco después del contenido específico
      observaciones.focus();
      var content = "De acuerdo a la comunicación establecida Nombre: " + nombre + ", Teléfono: " + celular + " hemos registrado su llamada con el siguiente avance: ";
      observaciones.selectionStart = observaciones.selectionEnd = observaciones.value.indexOf(content) + content.length;
      break;

    case "4":
      document.getElementById("observaciones").value = "De acuerdo a la comunicación establecida Nombre: "+nombre+", Teléfono: "+celular+" "+ "\n" +"\n" + idGuiones+"\n" +"\n" +
      "Seguiremos gestionando su caso en pro de una solución oportuna."+ "\n" +"\n" +
      "ID llamada: " +idLlamada+ "\n" +"\n" +

      "S3GU1M13NT0_N1:llamadaalcliente";
      
      // Colocar el foco después del contenido específico 
      observaciones.focus();
      var content = "De acuerdo a la comunicación establecida Nombre: " + nombre + ", Teléfono: " + celular + " ";
      observaciones.selectionStart = observaciones.selectionEnd = observaciones.value.indexOf(content) + content.length;
      break;

    case "5":
      document.getElementById("observaciones").value ="Prueba realizada:"+"\n"+
      "Herramienta utilizada: " + "\n" + 
      "Resultado obtenido: " + idGuiones + "\n" +"\n" +

      "S3GU1M13NT0_N1:p3s3rv1c10";
      // Colocar el foco después de "La causa fue: "
      observaciones.focus();
      observaciones.selectionStart = observaciones.selectionEnd = observaciones.value.indexOf("Resultado obtenido: ") + "Resultado obtenido: ".length;
      
      break;  


      case "6":
        document.getElementById("observaciones").value = "Se brinda respuesta a la solicitud del cliente en el correo adjunto." + "\n" +"\n"+"\n" +
  
        "S3GU1M13NT0_N1:correodelcliente";
  
        break;


        case "7":
        document.getElementById("observaciones").value = "Se envía respuesta a los interesados en el correo adjunto." + "\n" +"\n"+"\n" +
  
        "S3GU1M13NT0_N1:correoalcliente";
  
        break;


/*Guiones de N2*/


        case "20":
          document.getElementById("observaciones").value = "De acuerdo a la comunicación establecida Nombre: "+nombre+", Teléfono: "+celular+" hemos registrado su llamada con el siguiente avance: "+ "\n" +"\n" +
          "Seguiremos gestionando su caso en pro de una solución oportuna."+ "\n" +"\n" +
          "ID llamada: " +idLlamada+ "\n" +"\n" +
    
          "S3GU1M13NT0_N2TG:llamadadelcliente";
    
          // Colocar el foco después del contenido específico
          observaciones.focus();
          var content = "De acuerdo a la comunicación establecida Nombre: " + nombre + ", Teléfono: " + celular + " hemos registrado su llamada con el siguiente avance: ";
          observaciones.selectionStart = observaciones.selectionEnd = observaciones.value.indexOf(content) + content.length;
     
  
        break;


    default: false;
  }}



// convertir mayus login
function loginMayuscula() {
  var saveUser = localStorage.getItem("user"); // Obtener el valor almacenado en localStorage
  if (saveUser) { // Verificar si hay un valor guardado
    saveUser = mayus2(saveUser); // Convertir a mayúsculas
    copiarAlPortapapeles(saveUser); // Copiar al portapapeles
    console.log("Usuario copiado al portapapeles: " + saveUser); // Opcional: para ver el resultado
  } else {
    console.log("No hay un usuario guardado.");
  }
}

function mayus2(cadena) {
  return cadena.toUpperCase(); // Convertir la cadena a mayúsculas
}

function copiarAlPortapapeles(texto) {
  navigator.clipboard.writeText(texto).then(function() {
    console.log("Texto copiado al portapapeles exitosamente.");
  }, function(err) {
    console.error("Error al copiar el texto: ", err);
  });
}

//agregar @une
function loginAgregarUne() {
  var saveUser = localStorage.getItem("user"); // Obtener el valor almacenado en localStorage
  if (saveUser) { // Verificar si hay un valor guardado
    saveUser = agregarUne(saveUser); // Agregar @une al final
    copiarAlPortapapeles2(saveUser); // Copiar al portapapeles
    console.log("Usuario modificado y copiado al portapapeles: " + saveUser); // Ver el resultado
  } else {
    console.log("No hay un usuario guardado.");
  }
}

function agregarUne(cadena) {
  return cadena + "@une"; // Agregar @une al final de la cadena
}

function copiarAlPortapapeles2(texto) {
  navigator.clipboard.writeText(texto).then(function() {
    console.log("Texto copiado al portapapeles exitosamente.");
  }, function(err) {
    console.error("Error al copiar el texto: ", err);
  });
}





