const fs = require('fs')

const CHANGE_DIRS = {
    PUT_ER_IN_REVERSE_TERR: '..',
    BACK_TO_THE_BANDO: '/',
}
 

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    let directory = {}
    let currentDirPath = []
    
    const changeDirectory = param => {
        // GET OUT THE WAY HONDA CIVIC IN REVERSE HERE
        if (param === CHANGE_DIRS.PUT_ER_IN_REVERSE_TERR) {
            currentDirPath = currentDirPath.slice(0, currentDirPath.length - 1)
        // return to the bando to light up the smoke and let the halo 2 cutscenes flow
        } else if (param === CHANGE_DIRS.BACK_TO_THE_BANDO) {
            currentDirPath = ['/']
        } else {
            currentDirPath.push(param)
            checkAndSetLocation()
        }
    }

    const checkAndSetLocation = () => {
        for (let cursor = 0; cursor < currentDirPath.length; cursor++) {

        }
    }

    // const maxPrimeRecursionHiddenTechnique = (path,)

    let readNextLine = false
    
    const listDirectory = () => {
        readNextLine = true
    }

    const writeValueAtCurrentBando = val => {
        // let 
    }

    // const setTreeItem = params
    
    const commands = {
        'cd': changeDirectory,
        'ls': listDirectory,
    }
    
    
    data.split(/\r?\n/).forEach(command => {
        const params = command.split(' ')
        if (command.startsWith('$')) {
            readNextLine = false
            commands[params[1]](params[2])
        } else {
            if (params[0] === 'dir') {
                writeValueAtCurrentBando({ type: 'dir', name: params[1], value: [] })
            } else {
                writeValueAtCurrentBando({ type: 'file', name: params[1], value: parseInt(params[0]) })
            }
        }
    })
    
    console.log(JSON.stringify(directory))
    // console.log(elfCommands)
    
    
})



