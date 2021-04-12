//struttura base del test
import Counter from './Counter.js'; // require 
//import CounterElement from './CounterElement.js';

let contatore = new Counter()
contatore.increment()
contatore.increment()

console.log("Primo test",contatore.value == 2);


contatore = new Counter(10)
contatore.increment()
contatore.increment()

console.log("Secondo test",contatore.value == 12);

/**
 * 1 arg partenza
 * 2 arg min
 * 3 arg max
 */
contatore = new Counter(10,10,15)
contatore.increment() //11
contatore.increment() // 12
contatore.increment() // 13

console.log(contatore.value == 13)

contatore.increment() // 14
contatore.increment() // 15
contatore.increment() // 15
contatore.increment() // 15

console.log("val max dev'essere 15",contatore.value == 15)
contatore.decrement() // 10
contatore.decrement() // 10
contatore.decrement() // 10
contatore.decrement() // 10



contatore= new Counter(10,10,15)

console.log("penultimo test",contatore.value==10);

//parte da 10, il minimo è 4 ma non c'è un massimo.
//contatore = new Counter(10,4)


//new CounterElement('#counterA')
//new CounterElement('#counterB')




contatore = new Counter("0")
contatore.decrement() // -1

console.log("06 - initial passato come stringa \"0\" decremento",contatore.value == -1,"actual ",contatore.value)

contatore = new Counter("0")
contatore.increment() // 1

console.log("07 - initial passato come stringa \"0\" increment",contatore.value == 1,"actual ",contatore.value)


contatore = new Counter("9","-10","10")

contatore.increment() // 10
console.log("08a - parametri passati come stringhe limite max e min increment",contatore.value == 10,"actual ",contatore.value)
contatore.increment() // 10
console.log("08b - parametri passati come stringhe limite max e min increment",contatore.value == 10,"actual ",contatore.value)

contatore.decrement() // 9
console.log("08c - parametri passati come stringhe limite max e min decrement",contatore.value == 9,"actual ",contatore.value)


contatore = new Counter("-8","-10","10")
contatore.decrement() // -9
console.log("9a - parametri passati come stringhe limite max e min decrement",contatore.value == -9,"actual ",contatore.value)
contatore.decrement() // -10
console.log("9b - parametri passati come stringhe limite max e min decrement",contatore.value == -10,"actual ",contatore.value)
contatore.decrement() // -10
console.log("9c - parametri passati come stringhe limite max e min decrement",contatore.value == -10,"actual ",contatore.value)


try {
    contatore = new Counter(10,11,12)
    console.log("FAIL 10a Error - mi aspettavo un eccezione initial è minore di min",false)
} catch (error) {
    console.log("PASS 10a Error - trovato un errore atteso 'initial è minore di min' ",error.message === 'initial è minore di min')
    //console.error(error)
}

try {
    contatore = new Counter("10","11","12")
    console.log("FAIL 10b Error - mi aspettavo un eccezione 'initial è minore di min' ",false)
} catch (error) {
    console.log("PASS 10b Error - trovato un errore atteso 'initial è minore di min' ",error.message === 'initial è minore di min')
    //console.error(error)
}


try {
    contatore = new Counter(13,11,12)
    console.log("FAIL 10c Error - mi aspettavo un eccezione initial è maggiore di max",false)
} catch (error) {
    console.log("PASS 10c Error - trovato un errore era atteso 'errore initial maggiore di max'",error.message === 'initial è maggiore di max',)
    //console.error(error)
}


try {
    contatore = new Counter("13","11","12")
    console.log("FAIL 10d Error - mi aspettavo un eccezione initial è maggiore di max",false)
} catch (error) {
    console.log("PASS 10d Error - trovato un errore era atteso 'errore initial maggiore di max'",error.message === 'initial è maggiore di max',)
    //console.error(error)
}