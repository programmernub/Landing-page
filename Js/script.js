const btnEnviar = document.getElementById("btn-enviar");
btnEnviar.addEventListener('click', (e)=>{
	e.preventDefault();
	const form = {
		nombre: document.getElementById("nombre").value,
		correo: document.getElementById("correo").value,
		producto: document.getElementById("producto").value,
		description: document.getElementById("descripcion").value
	};
	validar(form);	
});

function validar(form){
	console.log(form);
	if (form.nombre === "" || form.correo === "" || form.producto === "" || form.description === "") {
		alert("Ningún campo puede quedar en blanco");
	}else{
		localStorage.setItem("form", form)
		alert("Formulario enviado");
		document.getElementById("divs").reset();
	}
}