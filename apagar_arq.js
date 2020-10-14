const fs = require('fs')

try {
    fs.unlinkSync('./apagar.txt');

} catch (e){
    console.log(e)
}finally {
    console.log('arquivo apagado com sucesso')
}

console.log('o que fazer após apagar o arquivo. ');