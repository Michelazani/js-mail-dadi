// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// azione con click per scegliere numero random per utente

const buttonElement = document.querySelector('button');

buttonElement.addEventListener ('click' , function (){

    const randomNumberComputer = Math.floor ( Math.random () * 6) + 1; 
        console.log(randomNumberComputer)
    const randomNumberUser = Math.floor ( Math.random () * 6) + 1;
        console.log(randomNumberUser + ' your random number')

    if(randomNumberComputer > randomNumberUser){
        alert('Computer won')
    }
    else if(randomNumberUser > randomNumberComputer){
        alert('You won')
    }
    else if(randomNumberComputer === randomNumberUser) {
        alert('tied')
    }
} ) 




//! Mail
// !  Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (createvi una piccola lista di email),
// !  stampa un messaggio appropriato sull’esito del controllo.
// !  Prima di partire a scrivere codice poniamoci qualche domanda:
// !  Che ci sia un array da qualche parte?
// !  Se dobbiamo confrontare qualcosa che "cosa" ci serve?

const sendElement = document.getElementById('sendButton');
const mailTyped = document.getElementById ('mailUser');


const controlMailUser = [
    'ciao@gmail.com',
    'ginetto@gmail.com',
    'gina@gmail.com',
    'giorgione@gmail.com'
];

/*
    controlMailUser[0] --> ciao
    [1] -- ginetto
*/

let found = false;

sendElement.addEventListener ('click' , function (){

    for (let i = 0; i < controlMailUser.length ; i++){

        console.log("if(" + controlMailUser[i] + " === " + mailTyped.value + ")");

        if(controlMailUser[i] === mailTyped.value ){

            console.log('---> entro nella if');

            found = true;
             alert('correct');
        } 
    
        
   }


sendElement.innerHTML = 'type again'

    //   console.log('found:', found);
   

//     if(found === true) {
//         console.log('mail found');
//    } else if (found === false) {
//         console.log('mail not fond');
//    }    


} ) 

