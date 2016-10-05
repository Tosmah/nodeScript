#!/usr/bin/env node
/*const program = require('commander')

program
    .version('1.0.0')
    .option('-t, --tosmah', 'Show hello Tosmah')
    .option('-q, --quentin', 'Show hello Quentin le Teufeur')

program.parse(process.argv)

if (program.tosmah) {
    console.log('Hello Tosmah le boss')
} else if (program.quentin) {
    console.log('Hello Quentin le Teufeur')
} else {
    program.help()
}*/

/*const inquirer = require('inquirer')

inquirer.prompt([
    {
        type: 'input',
        message: 'Entrez votre nom d\'utilisateur : ',
        name: 'username'
    }, {
        type: 'password',
        message: 'Entrez votre mot de passe : ',
        name: 'password'
    }, {
        type: 'checkbox',
        message: 'Que voulez vous sauvegarder ?',
        name: 'folderToSave',
        choices : [
            'Mes Documents',
            'Mon Bureau',
            'Ma Musique'
        ]
    }
]).then((answers) => {
    console.log(answers)
})*/

const fs = require ('fs')

try {
    fs.writeFile('message.txt', 'Bonjour !', (err) => {
        if (err) throw err
        console.log('Fichier écrit')
    })
    fs.readFile('message.txt', 'utf8', (err, data) => {
        if (err) throw err
        console.log('Données du fichier : ' + data)
    })
} catch (err) {
    console.error('ERR > ', err)
}
