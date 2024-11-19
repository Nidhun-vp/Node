import ch from'chalk';//extention mjs-modejs for using third party modules,here we use import instead of require
console.log(ch.bgRed.bold('Hello World'))
console.log(
     ch.red('R')+
     ch.yellow('A')+
     ch.green('I')+
     ch.cyan('N')+
     ch.blue('B')+
     ch.magenta('O')+
     ch.red('W')
)
console.log(ch.blue(`
    -------------------------
    *Welcome To chalk*
    -------------------------
    `))


console.log(ch.yellow('this is yellow text'));
