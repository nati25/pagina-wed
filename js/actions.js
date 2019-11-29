this.logueado = false;

$("#entrada").click(function(){
	if ($("#Usuario").val() == "Nathy" && $("#Contraseña").val() == '123'){
		logueado = true;
		if (logueado == true) {
			window.location = "./pages/inicio.html"
		}
	}else{
		swal.fire('Error');
	}
});
$("#Galeria").click(function(){
	window.location = "./Galeria.html"
})

window.addEventListener('load',function(){
	$('.container').fadeIn(1000);
});

$("#PDF").click(function(){
	window.location = "./PDF.html"
})