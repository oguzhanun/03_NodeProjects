const chalk = require('chalk');
const validator = require('validator');
const yargs = require('yargs');

//console.log('isEmail : ',validator.isEmail('blabla@blabla.com'));
//console.log(chalk.green.bold.bgRed.italic.underline('Success'));
//console.log(process.argv)

yargs.version('1.1.1');

//const argv ye eşitlemeden çalışmadı...
const argv = yargs.command('add','adding a note',
    {
        title:
            {
            describe:'This is a title',
            demandOption:true,
            type:'string'
            },
        body:
        {
            describe:'This is a body',
            demandOption:true,
            type:'string'
        }
    },
    function(argv)
    {
        console.log(argv);
    }
).help().argv;
//console.log(argv);