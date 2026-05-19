//Objetivos: senha incorreta, validar mensagem de erro
const puppeteer = require('puppeteer');

(async () => {

    // inicia navegador
    const browser = await puppeteer.launch({
        headless: false
    });

    // cria página
    const page = await browser.newPage();

    // acessa login
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // preenche usuário
    await page.type('#username', 'student'); //#seletor html da página

    // senha incorreta
    await page.type('#password', 'password123');//#seletor html da página

    // clica login
    await page.click('#submit');

    // espera mensagem de erro aparecer
    await page.waitForSelector('#error');

    // captura mensagem
    const mensagemErro = await page.$eval(
        '#error',
        element => element.textContent
    );

    // valida mensagem
    if (mensagemErro.includes('Your password is invalid!')) {
        console.log('Teste passou');
    } else {
        console.log('Teste falhou');
    }

    // fecha navegador
    await browser.close();

})();