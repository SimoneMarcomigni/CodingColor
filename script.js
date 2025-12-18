console.log("inizio esecuzione");
let d = new Date();
console.log(d);
document.getElementById("saluto").innerHTML = d.getDay();
let colori = [];
let colori2 = new array();
function elabora(){
let numero = document.getElementById("inNumber").value;
    const i = 0;
    if(numero > 0 && numero <= 255){
        colori.push(numero);
        document.getElementById("out").innerHTML = "output";
        document.getElementById("out").innerHTML = "Hai inserito il numero: " + numero;
        document.getElementById("out").innerHTML += "<br> I colori inseriti sono: " + colori;
        console.log(colori);
        document.getElementById("error").innerHTML = "errori";
        if(colori.length == 3){
            newColor = `rgb(${colori[0]}, ${colori[1]}, ${colori[2]})`;
            document.getElementById("out").style.color = newColor;
        }
    } else {
        document.getElementById("error").innerHTML = "errori";
        document.getElementById("error").innerHTML = "Il numero " + numero + " non è corretto";
        document.getElementById("out").innerHTML = "output";
    }
}
