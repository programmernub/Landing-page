const btnEnviar = document.getElementById("btn-enviar");
const form = {
	nombre: document.getElementById("nombre.value"),
	correo: document.getElementById("correo.value"),
	producto: document.getElementById("producto.value"),
	description: document.getElementById("description.value")
};
btnEnviar.addEventListener('click', (e)=>{
	e.preventDefault();
	validar(form);	
});

function validar(form){
	if (form.nombre === "" || form.correo === "" || form.producto === "" || form.description === "") {
		alert("Ningún campo puede quedar en blanco");
	}else{
		localStorage.setItem("form", form)
		alert("Formulario enviado");
		document.getElementById("divs").reset();
	}
}