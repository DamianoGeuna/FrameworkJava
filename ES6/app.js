// con const Non si può ne ridichiarare ne riassegnare

const colori =[] //anche scrivere new Array()

colori.push('red')
console.log(colori) //ti dice cosa c'è nell'array.

colori.push('yellow')
console.log(colori) 

let numeri =[1,2,3,4]; //let permette di modificare il contenuto
//possiamo riassegnarlo ma non ridichiararlo (forse contrario)
console.log(numeri)

numeri = "uno due tre";
console.log(numeri) 

const num =[1,2,3,4,5,6,7,8,9]
//risultato [2.4.6.8,...]
//const res = num.map(function(numero){
    //console.log(numero,"indice: ",index); per farci vedere che succede
//    return numero * 2
//})

//uso Arrow function
//const res = num.map( (numero) => {
//    return numero * 2
//})

//arrow function con un solo argomento nella callback posso omettere le parentesi tonde
//const res = num.map( numero => {
//    return numero * 2
//})

//arrow function con un solo argomento nella callback posso omettere le parentesi tonde
//Se il callback ha una sola riga di codice posso togliere le graffe e il return
//const res = num.map( numero => numero * 2)

//console.log(res)

//function expression
//let sum =function (a,b)
//{
//    return a + b;
//}

function sum(a,b)
{
    return a+b;
}

//quadrato di un numero
//ES5

//function square(n)
//{
//    const res = n*n;
//    return res;
//}

//const res = square(5) //console log(25)
//function expression fino a ES5

//const square = function(n)
//{
//    return n * n
//}

//const res = square (5)

//function expression con arrow function arrivata con ES6

//const square = (n) => {return n*n}
//const square = n => n * n //sono la stessa cosa di sopra

//const numeri = [5,2,3]
//const quadrati = numeri.map(n => n * n) // array_filter
//const quadratiPari = numeri.map(n => n * n).filter(n=>n % 2 === 0);

/***************************************************************/


//expression function

//const TrovaDispari = function(numero)
//{
//    return numero % 2 !== 0;
//}


const spareggio =[5,9,7,6,2,3,9,9,4]
console.log(spareggio);

//const Dispari = numeri.filter(trovaDispari)

//console.log ("Prima riga",Dispari) //Frasi di debug per capire dove siamo

const parole = ['latte','casa','mario','mela'];
// javascript 2015
//const findWord = word => item => item === word;

//Javascript 2009-2014;
const findWord = (word) => {
    return function (item) {
        return item === word
    }
} /*funzione di ordine superiore ((la parola che serve la prendo da sopra))*/; //Mettiamo nome che indica cosa deve fare.

const result = parole.filter(findWord('mela'));//funzione accettata come argomento = callback;

console.log(result);

/**
 * numeri.filter(function(numeor){
 * return numero % 2 !==0})*/