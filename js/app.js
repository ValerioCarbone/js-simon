// - Creare una funzione che generi 5 numeri casuali

const randomNumbersGenerated = getRandomNumbers(1, 100, 5)

// - Mostrare i 5 numeri casuali
let contentDOMElement = document.querySelector('.content')

contentDOMElement.innerHTML = randomNumbersGenerated

setTimeout(function () {
    contentDOMElement.innerHTML = ('')

    // - Creare un timer che duri 30 secondi
    // - Terminati i 30 secondi una funzione genererà 5 volte un prompt che chiede all'utente di inserire un numero
    setTimeout(function () {

        // - Confrontare i 5 numeri che l'utente ha inserito con i 5 precedentemente generati
        // - Creare un alert con che dica quanti e quali numeri sono giusti.     
        const numbersGuessedArray = insertNumbers(5)

        numbersChecker(randomNumbersGenerated, numbersGuessedArray, contentDOMElement)

    }, 30000)

}, 5000)





// FUNZIONI 

function getRandomNumbers(rangeMin, rangeMax, quantityOfNumbers,) {

    numbersArray = []

    while (numbersArray.length < quantityOfNumbers) {

        numberRandom = getRandomIntInclusive(rangeMin, rangeMax)

        if (!numbersArray.includes(numberRandom)) {
            numbersArray.push(numberRandom)
        }

    }
    return numbersArray
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}


// - Terminati i 30 secondi una funzione genererà 5 volte un prompt che chiede all'utente di inserire un numero

function insertNumbers(timesToAsk) {
    insertedNumbers = []
    for (let i = 0; insertedNumbers.length < timesToAsk; i++) {

        let guessedNumber = parseInt(prompt('Inserisci uno dei numeri precedenti'))

        if (!insertedNumbers.includes(guessedNumber)) {
            insertedNumbers.push(guessedNumber)
        }
    }
    return insertedNumbers
}

// - Confrontare i 5 numeri che l'utente ha inserito con i 5 precedentemente generati
// - Creare un alert con che dica quanti e quali numeri sono giusti 

function numbersChecker(randomN, guessedN, whereToStamp) {
    rightNumbers = []
    for (let i = 0; i < randomN.length; i++) {

        if (randomN.includes(guessedN[i])) {
            rightNumbers.push(guessedN[i])
        }
    }

    if (rightNumbers.length === 0) {
        return whereToStamp.innerHTML = ('Non hai indovinato neanche un numero!!')
    }

    else {
        return whereToStamp.innerHTML = (`Hai indovinato ${rightNumbers.length} numeri! Ecco quelli che ti sei ricordato correttamente: ${rightNumbers}`)
    }
}