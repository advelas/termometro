let mes=parseInt(prompt("¿Cuantos días tendrá este mes?"));
let registro=1;
let datoP=[];
let datoN=[];

function tomarDato(){
let entrada= parseInt(prompt(`Día ${registro} de ${mes}. ¿Cual es la temperatura de hoy?`));

if (entrada >= 0) {
datoP.push(entrada);
entrada=0;
} else {
datoN.push(entrada);
entrada=0;
}

registro = (registro+1);
}

do {
	tomarDato()
} while(registro<=mes);

let suma = datoN.reduce((current, previous) => current += previous);
let promedio = suma / datoN.length;
let tempMinima= Math.min.apply(null, datoN);
let tempMaxima= Math.max.apply(null, datoP);

document.write("Temperaturas sobre 0: " + "<br>" + datoP + "<br>");
document.write("Temperaturas bajo 0: " + "<br>" + datoN + "<br>");
document.write("Promedio de temperaturas bajo 0: " + "<br>" + promedio + "<br>");
document.write("Temperatura máxima: " + tempMaxima + "<br>");
document.write("Temperatura mínima: " + tempMinima + "<br>");