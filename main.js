//Crear un formulario con los siguientes campos.
//1.Aplicarle un preventDefault al formulario
//2.Aplicar la validacion de los campos del formulario
//3.Validar el correo y telefono utilizando expresiones regulares
//4.Ocultar el formulario si fue validado exitosamente, y mostrar un text de gracias por su mensaje

var datas = document.getElementById('datas');
datas.addEventListener('submit', function (e) {
	// e.stopPropagation();
	e.preventDefault();
	var nombre = document.getElementById('nombre');
	var apellido = document.getElementById('apellido');
	var telefono = document.getElementById('telefono');
	var correo = document.getElementById('correo');
	var mensaje = document.getElementById('mensaje');
	input = document.getElementById('datas');

	var validMail = new RegExp('^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[_a-z0-9-]+(\.[_a-z0-9-]+)*(\.[a-z]{2,3})$');
	var validphone = new RegExp( /^[8]{1}[1-9]{2}[0-9]{5}$/):
	var validNomb = nombre.value;
	var validApellid = apellido.value;
	var validTeleph = telefono.value;
	var validEmail = correo.value;
	var validMessag = mensaje.value;

function validDatos() {
	if (validNomb ==''){
		alert('Caution write name');
		return false
	}

	if (validApellid ==''){
		alert('Caution write name');
		return false
	}

	if (validphone.test(validTeleph) ==''){
		alert('Caution write number');
		return false
	}

	if (validMail.test(validEmail) ==''){
		alert('Caution write number');
		return false
	}

	if (validMessag ==''){
		alert('Caution write name');
		return false
	}

datas.style.display = "none";
document.write ('Gracias por su Mensaje')
}
datos();

}, false);
