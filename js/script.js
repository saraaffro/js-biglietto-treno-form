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

// selezione del container che appare e scompare con il click sui bottoni
const container = document.querySelector(".container");

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
        
        
        
        container.classList.remove("none");

        // output
        document.querySelector(".name").innerHTML = userName;
        document.querySelector(".km").innerHTML = nbKilometers;
        document.querySelector(".costo").innerHTML = userTicket.toFixed(2) + "€";
        document.querySelector(".carrozza").innerHTML = (Math.random() * 50).toFixed(0);
        document.querySelector(".posto").innerHTML = (Math.random() * 70).toFixed(0);

    }

);

// cancellare tutto quando premo annulla

deleteButton.addEventListener("click", 

    function () {
        container.classList.add("none");
        inputName.value = "";
        inputKm.value = "";
        inputAge.value = "";
    }

)







