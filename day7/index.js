const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    const directory = {}
    let currentDir = []

    const changeDirectory = command => {

    }

    const listDirectory = () => {

    }

    const commands = {
      'cd': changeDirectory,
      'ls': listDirectory,
    }

    const elfCommands = data.split(/\r?\n/)


    elfCommands.forEach(command => {
      if (command.startsWith('$')) {
        
      }
    })


    console.log(elfCommands)


})



