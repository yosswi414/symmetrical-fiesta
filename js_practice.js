function logText(id,time){
	for(let cnt=0;cnt<time;cnt++){
		console.log("["+cnt.toString()+"]"+document.getElementById(id).value);
	}
}

function notifyEvent(str){
	console.log("[event] " + str);
}
