// sup gangstas
const fs = require('fs')
const lowerStart = 97
const upperStart = 65
const LETTERS_IN_THE_MF_ALPHABET_B = 26

const toggle = process.argv.slice(2)[0]

if (toggle === '1') {
    fs.readFile('./input.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return;
        }
    
        const bigSacks = data.split(/\r?\n/)
    
        const chumbisPriority = {}
        let chumbusCounter = 1
    
        for (let guy = lowerStart; guy < lowerStart + LETTERS_IN_THE_MF_ALPHABET_B; guy++) {
            chumbisPriority[String.fromCharCode(guy)] = chumbusCounter++
        }
    
        for (let guy = upperStart; guy < upperStart + LETTERS_IN_THE_MF_ALPHABET_B; guy++) {
            chumbisPriority[String.fromCharCode(guy)] = chumbusCounter++
        }
    
        // this is the secret answer LOL!
        let sumOfAllFears = 0
    
    
        bigSacks.forEach(sack => {
            const firstComp = sack.substring(0, sack.length / 2)
            const secondComp = sack.substring(sack.length / 2)
    
            const sexyGorgeousVariableNameJuniorSingleton = {}
    
            for (let letter of firstComp) {
                sexyGorgeousVariableNameJuniorSingleton[letter] = true
            }
    
            for (let letter of secondComp) {
                if (sexyGorgeousVariableNameJuniorSingleton[letter]) {
                    sumOfAllFears += chumbisPriority[letter]
                    break
                }
            }
    
        })
        console.log(`PART 1 ANSWER -> ${sumOfAllFears}`)
    })
}


