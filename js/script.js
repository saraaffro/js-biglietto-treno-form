// selezione nome e cognome user
const inputName = document.getElementById("username");


// selezione km che vuole percorrere user
const inputKm = document.getElementById("kilometers");


// selezione età user
const inputAge = document.getElementById("age");

// selezione del bottone di invio dati
const sendButton = document.getElementById("send");

// selezione del bottone di annulla dati
const deleteButton = document.getElementById("delete");

// dichiarazione variabili
let userName;
let nbKilometers;
let userAge;
let ticketPrice;
let userTicket;

sendButton.addEventListener("click",

    function(){
        userName = inputName.value;
        
        nbKilometers = parseInt(inputKm.value);
        

        userAge = parseInt(inputAge.value);
    
        // console.log
        console.log("nome e cognome: ", userName);
        console.log("numero di chilometri: ", nbKilometers);
        console.log("età: ", userAge);

        ticketPrice = 0.21 * nbKilometers;

        if (userAge < 18){
            userTicket = ticketPrice - (ticketPrice / 100) * 20;
        } else if (userAge > 65){
            userTicket = ticketPrice - (ticketPrice / 100) * 40;
        } else{
            userTicket = ticketPrice;
        }

        // output
        document.getElementById("biglietto").innerHTML = `Il costo del tuo biglietto è di: ${userTicket.toFixed(2)} €`;
    }

);

const container = document.querySelector(".container");

deleteButton.addEventListener("click", 

    function () {
        container.classList.add("none");
    }

)







