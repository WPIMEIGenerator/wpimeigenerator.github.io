var WinPhoneTACs = ['35930004', '35281104', '35284305', '35933304', '35933604', '35977404', '35284505', '35928904', '35168205', '35974604', '35193905'];
function addZeros(n, needLength) {
needLength = needLength || 2;
n = String(n);
while (n.length < needLength) {
  n = "0" + n;
}
return n
}
function bclick(){
	var luhn = document.getElementById("luhn");
	luhn.value = WinPhoneTACs[Math.floor(Math.random()*WinPhoneTACs.length)];
	luhn.value += addZeros(Math.floor(Math.random()*999999 + 1),6);
	luhn.value += Calculate(luhn.value);
}

// Javascript code copyright 2009 by Fiach Reid : www.webtropy.com
// This code may be used freely, as long as this copyright notice is intact.
function Calculate(Luhn) {
	var sum = 0;
	for (i=0; i<Luhn.length; i++ ) {
		sum += parseInt(Luhn.substring(i,i+1));
	}
	
	var delta = new Array (0,1,2,3,4,-4,-3,-2,-1,0);
	
	for (i=Luhn.length-1; i>=0; i-=2 ) {       
		var deltaIndex = parseInt(Luhn.substring(i,i+1));
		var deltaValue = delta[deltaIndex]; 
		sum += deltaValue;
	}   
	
	var mod10 = sum % 10;
	mod10 = 10 - mod10; 
	
	if (mod10==10) {       
		mod10=0;
	}
	return mod10;
}
