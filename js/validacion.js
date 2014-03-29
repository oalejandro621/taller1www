function controltag(e) {
          tecla = (document.all) ? e.keyCode : e.which;
          if (tecla==8) return true; // para la tecla de retroseso
          else if (tecla==0||tecla==9)  return true; //<-- PARA EL TABULADOR-> su keyCode es 9 pero en tecla se esta transformando a 0 asi que porsiacaso los dos
          patron =/[0-9\s]/;// -> solo letras
         // patron =/[0-9\s]/;// -> solo numeros
          te = String.fromCharCode(tecla);
          return patron.test(te);
    }
    //funcion que permite solo digitar numeros
    function justNumbers(e) {
		var keynum = window.event ? window.event.keyCode : e.which;
		if ( keynum == 8) return true;
		return /\d/.test(String.fromCharCode(keynum));
	}
  
  var validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

    $(function()
    {  


      $('#registrar').on("click", function()
      {
        $(".error").fadeOut().remove();
        
        if($("#nombre").val() == "")
        {
          $("#nombre").focus().after('<span class="error">Este campo es obligatorio</span>');  
          return false;  
        }

        if($("#apellidos").val() == "")
        {
          $("#apellidos").focus().after('<span class="error">Este campo es obligatorio</span>');  
          return false;  
        }

        if($("#fecha_nacimiento").val() == "")
        {
          $("#fecha_nacimiento").focus().after('<span class="error">Este campo es obligatorio</span>');  
          return false;  
        }

        if($("#cedula").val() == "")
        {
          $("#cedula").focus().after('<span class="error">Este campo es obligatorio</span>');  
          return false;  
        }

        if($("input[name='genero']:checked").val() == undefined)
   		{
	      $("#generoElige").focus().after('<span id="generoSpan" class="error">Debe elejir una opción</span>');  
	      return false;  
	    }

	    if($("#telefono").val() == "")
        {
          $("#telefono").focus().after('<span class="error">Este campo es obligatorio</span>');  
          return false;  
        }

        if($("#celular").val() == "")
        {
          $("#celular").focus().after('<span class="error">Este campo es obligatorio</span>');  
          return false;  
        }

        if($("#direccion").val() == "")
        {
          $("#direccion").focus().after('<span class="error">Este campo es obligatorio</span>');  
          return false;  
        }

        if($("#ocupacion").val() == "")
        {
          $("#ocupacion").focus().after('<span class="error">Este campo es obligatorio</span>');  
          return false;  
        }

	    

	    if($("#correo").val() != "")
	    {      
	      if(!validacion_email.test($("#correo").val()))
	      {
	        $("#correo").focus().after('<span class="error">No es un formato de correo correcto</span>');  
	        return false;  
	      }      
	    }
	    else
	    {
	      $("#correo").focus().after('<span class="error">Este campo es obligatorio</span>');  
	      return false;
	    }

        if($("#contrasena").val() == "")
        {
          $("#contrasena").focus().after('<span class="error">Este campo es obligatorio</span>');  
          return false;  
        }

        if($("#confirmacion").val() == "")
        {
          $("#confirmacion").focus().after('<span class="error">Este campo es obligatorio</span>');  
          return false;  
        }
        else
        {
          if($("#confirmacion").val() != $("#contrasena").val())
          {
            $("#confirmacion").focus().after('<span class="error">Las contraseñas no coinciden</span>');  
            return false;  
          }
        }

        

	    

    });

        $("#nombre, #apellidos, #fecha_nacimiento, #cedula, #celular, #direccion,  #telefono, #ocupacion, #correo, #contrasena, #confirmacion").bind('blur keyup', function()
        { 
            if ($(this).val() != "") {        
            $('.error').fadeOut();
            return false;  
          }
        });

        $("#genero1, #genero2").bind('focus', function()
        { 
            if ($(this).val() != "") {        
            $('#generoSpan').fadeOut();
            return false;  
          }
        });
         
    });

	function datos(){
		
		if(document.getElementById('nombre').value != "" && document.getElementById('apellidos').value != "" && 
			document.getElementById('fecha_nacimiento').value != "" && document.getElementById('cedula').value != "" &&
			document.getElementById('celular').value != "" && document.getElementById('direccion').value != "" &&
			document.getElementById('telefono').value != "" && document.getElementById('ocupacion').value != "" &&
			document.getElementById('correo').value != "" && document.getElementById('contrasena').value != "" &&
			document.getElementById('confirmacion').value != "" && $("input[name='genero']:checked").val() != undefined &&
      $("#confirmacion").val() == $("#contrasena").val() && validacion_email.test($("#correo").val())){
			

			document.getElementById('spanNombre').innerHTML = document.getElementById('nombre').value;
			document.getElementById('spanApellidos').innerHTML = document.getElementById('apellidos').value;
			document.getElementById('spanFecha_nacimiento').innerHTML = document.getElementById('fecha_nacimiento').value;
			document.getElementById('spanCedula').innerHTML = document.getElementById('cedula').value;
			document.getElementById('spanCelular').innerHTML = document.getElementById('celular').value;
			document.getElementById('spanDireccion').innerHTML = document.getElementById('direccion').value;
			document.getElementById('spanTelefono').innerHTML = document.getElementById('telefono').value;
			document.getElementById('spanIdioma').innerHTML = document.getElementById('idioma').value;
			document.getElementById('spanProvincia').innerHTML = document.getElementById('provincia').value;
			document.getElementById('spanPais').innerHTML = document.getElementById('pais').value;
			document.getElementById('spanOcupacion').innerHTML = document.getElementById('ocupacion').value;
			document.getElementById('spanCorreo').innerHTML = document.getElementById('correo').value;
			document.getElementById('spanContrasena').innerHTML = document.getElementById('contrasena').value;
			document.getElementById('spanSexo').innerHTML = $("input[name='genero']:checked").val();		


			if (document.getElementById('resultado').className == "oculto") {
				document.getElementById('resultado').className = "";
        document.getElementById('campos').className = "oculto";
			}
		}
	}