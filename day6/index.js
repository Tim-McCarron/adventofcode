const fs = require('fs');

const PACKET_SIGNAL = 4
const MESSAGE_SIGNAL = 14

const SIGNAL = process.argv.slice(2)[0] === '2' ? MESSAGE_SIGNAL : PACKET_SIGNAL

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return;
    }

    let startSignal = null
    
    for (let cursor = 0; cursor < data.length; cursor++) {
      if (cursor > SIGNAL - 1) {
        let bombinis = []
        for (let num = SIGNAL - 1; num > -1; num--) {
          bombinis.unshift(data[cursor - num])
        }

        let bombinisAreUniqueAndILoveThem = true
        bombinis.forEach(bomb => {
          if (bombinis.filter(b => b === bomb)?.length > 1) {
            bombinisAreUniqueAndILoveThem = false
          }
        })
        
        if (bombinisAreUniqueAndILoveThem) {
          startSignal = cursor + 1
          break
        }
      }
    }
    console.log(startSignal)
})



