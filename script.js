function noBack(){
    window.location.hash="no-back-button";
    window.location.hash="Again-No-back-button" //chrome
    window.onhashchange=function(){window.location.hash="no-back-button";}
};
document.onkeydown = function(e){
	tecla = (document.all) ? e.keyCode : e.which;
	alert(tecla)
	if (tecla = 116) {return false;}
};
( function (){
			let segundosTimer = 10;
			timer();
		function timer(){
			let segundosTotales = segundosTimer; //30 minutos
			horas = Math.floor(segundosTotales / 3600);
			horas = ((horas <  10)? "0" : "") + horas;
			segundosTotales %= 3600;
			minutos =  Math.floor(segundosTotales / 60);
			minutos = ((minutos < 10)? "0":"") + minutos;
			segundosTotales %= 60;
			segundosTotales = ((segundosTotales<10)?"0":"")+segundosTotales;
			document.getElementById("timer").innerHTML = horas + ":"+ minutos +":"+segundosTotales;
			console.log(segundosTotales);
			segundosTimer--;
			console.log(segundosTotales);
				if (document.getElementById("timer").innerHTML == "00:00:00") {
					alert('Hemos terminado el examen pues el tiempo se ha agotado \nSi has recibido este mensaje no has enviado tu cuestionario \nEl sistema le otorgará automáticamente la nota de CERO');
				}
			if (segundosTotales > 0) {
			setTimeout(timer,1000);

			}
		}
	})();