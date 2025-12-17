console.log("inizio esecuzione");
let d = new Date();
console.log(d);
document.getElementById("saluto").innerHTML = d + " è un bel giorno"
function elabora(){
let numero = document.getElementById("inNumber").value;
    if(numero > 0 && numero <= 255){
        document.getElementById("out").innerHTML = "output"
        document.getElementById("out").innerHTML = "Hai inserito il numero" + numero;
    } else {
        document.getElementById("error").innerHTML = "errori"
        document.getElementById("error").innerHTML = "Il numero " + numero + " non è corretto";
    }
}
