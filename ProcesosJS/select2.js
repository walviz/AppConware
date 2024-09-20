function selecion2(){

    let opcion = document.getElementById("guiones2").value;
    let nombre = document.getElementById("Nombre").value;
    let celular = document.getElementById("Celular").value;
    let idLlamada = document.getElementById("IdLlamada").value;

  /*input.focus();*/
  /*copyToClipBoard("observaciones");*/
    switch(opcion){
      case "0":
        document.getElementById("observaciones2").value ="La causa fue: "+"No se detecta afectación dentro de la red de Tigo."+"\n"+"La solución fue: Se deja servicio operativo desde plataforma, no se evidencia falla por parte de Tigo, usuario debe validar de manera interna el equipo secundario ya que es administrado por ellos.";

        break;  
  
        case "1":
            document.getElementById("observaciones2").value ="Disponibilidad: lunes a viernes de 8:00am a 5:00pm, sábado de 8:00am a 12:00pm "+"\n"+"Persona quien atiende: "+ nombre + "\n"+"Teléfono: "+ celular +"\n"+"Observaciones: Estar carnetizado, ";
            // Colocar el foco después de "La causa fue: "
            
            observaciones2.focus();

            observaciones2.selectionStart = observaciones2.selectionEnd = observaciones2.value.indexOf("Observaciones: Estar carnetizado, ") + "Observaciones: Estar carnetizado, ".length;
            
            break; 
       
  
      default: false;
    }}