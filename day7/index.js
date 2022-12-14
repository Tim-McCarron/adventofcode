const fs = require('fs');


fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    const commands = data.split(/\r?\n/)
    console.log(commands)


})



