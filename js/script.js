/*function checking (){
	var tiempo_examen = 4800;
	var ruta_examen = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSea0zUP3e-DW0zy7gw2qydsfUTdyOTX0R2TbdMUCgjVNZSbxg/viewform?embedded=true" width="640" height="1447" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>';
	var t = localStorage.getItem('time');
	var reload = localStorage.getItem('reloaded');
	var stat = localStorage.getItem('status');

	if (stat === 'done') {
		window.open('html/end.html','_self');
	}else{
		localStorage.setItem('prueba', ruta_examen);
		$('#test').append(ruta_examen);
		
		if (reload != 'true') {
			localStorage.setItem('time',tiempo_examen);
			$('#test').load()
		}else{
			//mantiene el mismo tiempo
		}
	}
}

	//frecuencia de chequeo del foco en la pagina
	setInterval(checkFocus,10);
	//chequear el foco de la pagina
	function checkFocus() {
	  if ( document.hasFocus() ) {
	  } else {
	  	/*Este cierra el examen al meter la pata*/
	 	//window.open('html/exit.html', '_self');
	 /* }
	}; 
	/*var seconds = localStorage.getItem('time');
	//representar el temporizador
	function secondPassed(){
		var hours = (Math.floor(seconds/3600));
		hours = ((hours < 10)? "0":"")+hours;
		var minutes = (Math.round((seconds - 30)/60)) % 60;
		if (minutes < 10) { minutes = "0" + minutes};
		var remainingSeconds = seconds % 60;
		if (remainingSeconds < 10) {
			remainingSeconds = "0" + remainingSeconds;
		}
		document.getElementById('countdown').innerHTML = hours + ":" + minutes + ":" + remainingSeconds;
		if (seconds == 0) {
			clearInterval(countdownTimer);
			window.open('html/timeUp.html','_self');
			localStorage.setItem('status','done');
		}else{
			seconds --;
		}
	};
	var countdownTimer = setInterval(function(){secondPassed();counter()},1000);
	//avisar con rojo a los 10 minutos finales
	function counter(){
		if (seconds < 600) {
			document.getElementById('countdown').style.color = "#dc3545";
		}
		//parpadear en los últimos 5 minutos
		if (seconds < 300) {
			$('[id = "countdown"]').each(function(){
				$(this).addClass("parpadea");
			});
		}
	};
	//guardar el tiempo cuando se cierra la pagina
	window.onbeforeunload = function(e){
		localStorage.setItem('time', seconds);
		localStorage.setItem('reloaded','true');
	}
	//cargar el tiempo al acutalizar
	//window.onload = function(e){
		//checking();
		/*var time = localStorage.getItem("time");
		seconds = time;
		var status = localStorage.getItem("status");
		if (status == "done") {
			//$('#notification').modal('show');
			window.open('html/end.html','_self');
		}
		/*$('#exit').on('show.bs.modal', function (e) {
			localStorage.clear();
			localStorage.setItem('status','done');
		});
		$('#timeup').on('show.bs.modal', function (e) {
			localStorage.clear();
			localStorage.setItem('status','done');
		});*/
		
	//}