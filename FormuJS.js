
function validarEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

 function validaFormu(){
      nom = document.getElementById("txtNom").value;
      ape = document.getElementById("txtApe").value;
      tel = document.getElementById("txtTel").value;
      user = document.getElementById("txtUser").value;
      email= document.getElementById("txtEmail").value;

      if (nom == null || nom.length == 0) {
        
        alert('Para enviar debes rellenar todos los campos obligatorios');
        alert('Rellena el campo Nombre (OBLIGATORIO*).');
      }else if(nom.length > 30){

        alert('El nombre  debe contener como máximo de 30 caracteres.');

      }else if(ape == null || ape.length == 0){

        alert('Rellena el campo Apellidos (OBLIGATORIO*).');
      }else if(ape.length > 40){

        alert('El nombre  debe contener como máximo de 40 caracteres.');
      }else if(tel == null ||  tel.length == 0){

        alert('Rellena el campo Numero de Teléfono (OBLIGATORIO*).');
      }else if(tel.length <9 ||  tel.length >9){

        alert('El numero de Telefono debe contener 9 dígitos.');
      }else if(user == null || user.length == 0){

        alert('Rellena el campo Nombre de Usuario (OBLIGATORIO*).');
      
      }else if(user.length > 20){

        alert('El nombre de usuario debe contener como máximo de 20 caracteres.');

      }else if( !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){

        alert('El formato de Correo Electronico (E-Mail) no es correcto.');
      }else{
        
        window.location.href = "FormuEnviado.html";
        alert('Enhorabuena, acabas de registrarte en Steam');
      }
    }
  
