let mes=parseInt(prompt("¿Cuantos días tendrá este mes?"));
let registro=1;
let dato=[];

function tomarDato(){
dato.push(parseInt(prompt(`Día ${registro} (de ${mes}). Exprese la temperatura de hoy (en números)`)));
registro = (registro+1)
}

do {
	tomarDato()
} while(registro<=mes);

document.write("Temperaturas: " + "<br>" + dato);

document.write("<br>" + parseFloat(- dato));