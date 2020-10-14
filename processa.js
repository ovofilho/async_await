// callback > promises > async/await

// calback é uma função que geralmente tem um erro no primeiro parâmetro e qualquer coisa no segundo.
// callback chama de volta uma função executada

const fs = require('fs') // importar o filesystem para ler e escrever arquivos

console.log(1)

function callback(err, contents){
    console.log(err, String(contents))
}

fs.readFile('./ini.txt', callback)

console.log(2)
    console.log('arquivo alterado para mostrar no git');

console.log(3)