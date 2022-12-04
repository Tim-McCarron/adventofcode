const fs = require('fs')

const checkIfTheseGnomeAssBitcheshaveDUBS = pair => {
    const cleaningLIST = pair.split(',').map(gnomeSet => {
        const lists = gnomeSet.split('-')
        return { start: parseInt(lists[0]), end: parseInt(lists[1]) }
    })

    // definitely not inside yet !!!!!!
    let insideFellas = false
    
    if (cleaningLIST[0].start <= cleaningLIST[1].start && cleaningLIST[0].end >= cleaningLIST[1].end) {
        insideFellas = true
    }

    if (!insideFellas) {
        if (cleaningLIST[1].start <= cleaningLIST[0].start && cleaningLIST[1].end >= cleaningLIST[0].end) {
            insideFellas = true
        }
    }

    return insideFellas
}

const checkIfAnyBsBeOverlappin = pair => {
    const cleaningLIST = pair.split(',').map(gnomeSet => {
        const lists = gnomeSet.split('-')
        return { start: parseInt(lists[0]), end: parseInt(lists[1]) }
    })

    if (cleaningLIST[0].start === cleaningLIST[1].start || cleaningLIST[0].end === cleaningLIST[1].end) {
        return true
    }

    let areFellasOverlappin = false // heh... FOR NOW!!!

    const checkThese = []
    if (cleaningLIST[0].start === cleaningLIST[0].end) {
        checkThese.push(cleaningLIST[0].start)
    } else {
        for (let i = cleaningLIST[0].start; i < cleaningLIST[0].end + 1; i++) {
            checkThese.push(i)
        }
    }

    const againstThese = []
    if (cleaningLIST[1].start === cleaningLIST[1].end) {
        againstThese.push(cleaningLIST[1].start)
    } else {
        for (let i = cleaningLIST[1].start; i < cleaningLIST[1].end + 1; i++) {
            againstThese.push(i)
        }
    }

    checkThese.forEach(thisGuy => {
        if (againstThese.includes(thisGuy)) {
            areFellasOverlappin = true
        }
    })

    return areFellasOverlappin

}

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return;
    }

    const elfBangPairs = data.split(/\r?\n/)

    let total = 0
    elfBangPairs.forEach(pair => {
        if (checkIfTheseGnomeAssBitcheshaveDUBS(pair)) {
            total++
        }
    })

    let anyOverlappingFellas = 0
    elfBangPairs.forEach(pair => {
        if (checkIfAnyBsBeOverlappin(pair)) {
            anyOverlappingFellas++
        }

    })

    console.log(`PART 1 -> ${total}`)
    console.log(`PART 2 -> ${anyOverlappingFellas}`)
})