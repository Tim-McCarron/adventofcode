const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return;
    }

    const input = data.split(/\r?\n/)

    let instructionIndex = null
    input.forEach((row, index) => {
      if (!row) {
        instructionIndex = index
      }
    })


    const muscleCrateOrder = input.slice(0, instructionIndex - 1)
    const instructions = input.slice(instructionIndex + 1)

    const muscleCrates = {}
    for (let i = 0; i < 10; i++) {
      muscleCrates[i + 1] = []
    }

    console.log(muscleCrateOrder)
    console.log('----------------')

    for (let row = muscleCrateOrder.length - 1; row > -1; row--) {

      muscleCrateOrder[row]



      console.log(muscleCrateOrder[row])
    }
    console.log(instructions[0])
})



