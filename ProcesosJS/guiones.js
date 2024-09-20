function selecionGuiones(){

    let opcion = document.getElementById("guionesGuion").value;
    let nombre = document.getElementById("Nombre").value;
    let celular = document.getElementById("Celular").value;
    let idLlamada = document.getElementById("IdLlamada").value;
    let idServicio = document.getElementById("Legado").value;
    let idSerial = document.getElementById("Legado2").value;
    let idNE = document.getElementById("NE").value;
    let switch1 = document.getElementById("switch1").value;


  /*input.focus();*/
  /*copyToClipBoard("observaciones");*/
    switch(opcion){
    case "0":
        document.getElementById("observacionesGiones").value ="Usuario "+ nombre +" se contacta reportando fallas en el servicio de internet. Se verificó que el servicio está activo con el identificador "+ idServicio +", con el número de serie del equipo "+ idSerial +". Se comprobó que el enlace está operativo con parámetros óptimos y que las VLANs están correctamente configuradas en modo bridge. Se accedió al equipo NE con IP "+ idNE +" y se confirmó el levantamiento de capa 3, con el equipo MAC X. Se confirma operatividad dentro de la red de Tigo,";
        
        break;  
  
    case "1":
        document.getElementById("observacionesGiones").value ="Usuario "+ nombre +" se ha comunicado informando problemas con el servicio de internet. Menciona haber realizado pruebas iniciales y ha observado que la luz LED lost está encendida en el equipo Huawei con tecnología GPON. Se ha validado que el servicio está activo con el ID "+ idServicio +". Tras revisar el serial "+ idSerial +", se ha identificado una ruptura de fibra. Se ha generado una solicitud para una visita técnica con el fin de revisar el problema en el lugar.";
        
        break; 

    case "2":
        document.getElementById("observacionesGiones").value ="Buenos días nos intentamos comunicar para darle gestión al requerimiento REQ00000xxx pero no hay respuesta las llamadas se van  buzón correo de voz, los invitamos a que se comunique por las líneas de atención 01 8000 513 287 o #513 desde líneas Tigo.";
        
        break; 

    case "3":
      document.getElementById("observacionesGiones").value ="Usuario "+ nombre +" se contacta reportando fallas en el servicio de internet. Se verificó que el servicio está activo con el identificador "+ idServicio +", se confirma MAC del equipo "+ idSerial +" en estado online, con parámetros óptimos y portadoras dentro del rango óptimo de operatividad, Se le indicó al cliente que realice una prueba directa el cual confirma el correcto funcionamiento del servicio.";
      
      break;

      case "4":
      document.getElementById("observacionesGiones").value ="Usuario "+ nombre +" se contacta reportando fallas en el servicio de internet. Se verificó que el servicio está activo con el identificador "+ idServicio +", se confirma MAC del equipo "+ idSerial +" en estado Offline, se realiza descartes de primer nivel con el usuario, el cual nos informa que no recibe navegación por parte del equipo, online queda apagado, no se tiene gestión ,se verifica que equipo tenga perfil Lda correctamente configurado, por lo que se genera visita técnica, para revisión del equipo en terreno.";
      
      break;
       
      case "5":
      document.getElementById("observacionesGiones").value ="Usuario "+ nombre +" se contacta reportando fallas en el servicio de internet. Se verificó que el servicio está activo con el identificador "+ idServicio +", tiene gestión del switch "+ switch1 +" se ingresa al NE "+idNE+"el cual se evidencia levantamiento en capa 3 con la MAC x, equipo administrado por el usuario, se le informa que debe verificar sus equipos internos, ya que no se detectó afectación dentro de la red de Tigo.";
      
      break;

      case "6":
        document.getElementById("observacionesGiones").value ="Usuario "+ nombre +" se contacta reportando fallas en el servicio de internet. Se verificó que el servicio está activo con el identificador "+ idServicio +", con el número de serie del equipo "+ idSerial +". Se comprobó que el enlace está operativo con parámetros óptimos y que las VLANs están correctamente configuradas en modo Router. Se confirma operatividad dentro de la red de Tigo,";
      
      break;
  
      default: false;
    }}