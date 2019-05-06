/*function noBack(){
    window.location.hash="no-back-button";
    window.location.hash="Again-No-back-button" //chrome
    window.onhashchange=function(){window.location.hash="no-back-button";}
};
document.onkeydown = function(e){
	tecla = (document.all) ? e.keyCode : e.which;
	alert(tecla)
	if (tecla = 116) {return false;}
};*/
document.onkeydown = function(e){
 tecla = (document.all) ? e.keyCode : e.which;
 alert(tecla)
 if (tecla == 116){
 	if(confirm('Successful Message') == true){
   alert('Esto no esta permitido');
   return false; 
	}else{
		return false;
	}
   }
};
window.onbeforeunload = function() {
  return "¿Desea recargar la página web?";
};

