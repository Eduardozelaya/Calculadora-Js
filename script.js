function insert(num){
  var number = document.getElementById('response').innerHTML;
  var limit = 10; // Limite para caracteres
            
	if (number.length < limit) {
  	document.getElementById('response').innerHTML = number + num;
  }
}
function clean(){
  document.getElementById('response').innerHTML = "";        
}
function back(){
  var response = document.getElementById('response').innerHTML;
  document.getElementById('response').innerHTML = response.substring(0, response.length -1);
}
function Calculate(){
  var response = document.getElementById('response').innerHTML;
  
	if(response){
    document.getElementById('response').innerHTML = eval(response);
  }else{
    document.getElementById('response').innerHTML = "Nada...";
  }
}