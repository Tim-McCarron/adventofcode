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
        }
    }

    const writeValueAtCurrentBando = (name, value) => {
        node = directory
        console.log('directory', directory)
        console.log('node', node)
        for (let cursor = 0; cursor < currentDirPath.length; cursor++) {
            console.log('cursor', cursor)
            if (cursor === currentDirPath.length - 1) {
                console.log('fuck!')
                node[name] = value
            } else {
                console.log('currentDirPath', currentDirPath)
                console.log('node', node)
                console.log('currentDirPath[cursor]', currentDirPath[cursor])
                node = node[currentDirPath[cursor]]
            }
        }
    }
    
    const getNode = (name, value, currentNode) => {

    }
    
    data.split(/\r?\n/).forEach((command, index) => {
        if (index > 25) return
        const params = command.split(' ')
        if (command.startsWith('$ cd')) {
            changeDirectory(params[2])
        } else if (!command.startsWith('$ ls')) {
            // this must be a read since it isnt ls and isnt cd
            if (params[0] === 'dir') {
                writeValueAtCurrentBando(params[1], {})
            } else {
                writeValueAtCurrentBando(params[1], parseInt(params[0]))
            }
        }
    })
    
    console.log(JSON.stringify(directory))
    // console.log(elfCommands)
    
    // dir lswlpt
    // 189381 mzsnhlf
})



