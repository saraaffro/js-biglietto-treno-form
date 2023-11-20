// selezione nome e cognome user
const inputName = document.getElementById("username");


// selezione km che vuole percorrere user
const inputKm = document.getElementById("kilometers");


// selezione età user
const inputAge = document.getElementById("age");

// selezione del bottone di invio dati
const sendButton = document.getElementById("send");


let userName;
let nbKilometers;
let userAge;
let ticketPrice;
let userTicket;

sendButton.addEventListener("click",

    function(){
        userName = inputName.value;
        console.log("nome e cognome: ", userName);

        nbKilometers = parseInt(inputKm.value);
        console.log("numero di chilometri: ", nbKilometers);

        userAge = parseInt(inputAge.value);
        console.log("età: ", userAge);

        ticketPrice = 0,21 * nbKilometers;

        if (userAge < 18){
            userTicket = ticketPrice - (ticketPrice / 100) * 20;
            console.log(ticketPrice); 
            document.getElementById("biglietto").innerHTML = `Dato che sei minorenne e hai accesso a uno sconto del 20%, il costo del tuo biglietto è di: ${userTicket.toFixed(2)} €`;
        } else if (userAge > 65){
            userTicket = ticketPrice - (ticketPrice / 100) * 40;
            console.log(ticketPrice);
            document.getElementById("biglietto").innerHTML = `Dato che sei over 65 e hai accesso a uno sconto del 40%, il costo del tuo biglietto è di: ${userTicket.toFixed(2)} €`;
        } else{
            userTicket = ticketPrice;
            console.log(ticketPrice);
            document.getElementById("biglietto").innerHTML = `Il costo del tuo biglietto è di: ${userTicket.toFixed(2)} €`;
        }
    }

);



