//Objetivo: preencher CPF inválido, validar erro

const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({
        headless: false
    });

    const page = await browser.newPage();

    await page.goto('https://practice.expandtesting.com/form-validation');

    // espera carregar
    await page.waitForSelector('#validationCustom01');

    // nome
    await page.type('#validationCustom01', 'Natalia');

    // username
    await page.type('#validationCustomUsername', 'natalia');

    // cidade
    await page.type('#validationCustom03', 'Campina Grande');

    // estado
    await page.type('#validationCustom04', 'PB');

    // CEP inválido
    await page.type('#validationCustom05', '123');

    // checkbox
    await page.click('#invalidCheck');

    // envia formulário
    await page.click('button[type="submit"]');

    // captura campo inválido
    const mensagem = await page.$eval(
        '#validationCustom05',
        element => element.validationMessage
    );

    console.log('Mensagem encontrada:', mensagem);

    // valida erro
    if (mensagem.length > 0) {
        console.log('Teste passou');
    } else {
        console.log('Teste falhou');
    }

    await browser.close();

})();