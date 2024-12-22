function describe (title, callback) {
    console.log(title, callback())
}

describe ('Hello test suite', ()=> {
    console.log('hello') 
    return 'anton';
})

// парсинг сайтов через wget
//npm run wget -- -d apps/ https://raw.githubusercontent.com/breslavsky/hello-cypress/main/apps/tesla.html  
// node JS установил с сайта. До этого через fnm
//Также для того чтобы запускат ьсайты локально был установлен пакет tiny-server. Для запуска используй npm start

//про графану. Для того чтобы запустить нужно использовать команду "make run" в wsl среде