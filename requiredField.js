//Objetivo: enviar formulário vazio, validar mensagem: campo obrigatório
const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({
        headless: false
    });

    const page = await browser.newPage();

    await page.goto('https://practice.expandtesting.com/form-validation');

    // tenta enviar formulário vazio
    await page.click('button[type="submit"]');

    // captura mensagem HTML5
    const mensagem = await page.$eval(
        '#validationCustom01',
        element => element.validationMessage
    );

    console.log('Mensagem encontrada:', mensagem);

    // valida existência da mensagem
    if (mensagem.length > 0) {
        console.log('Teste passou');
    } else {
        console.log('Teste falhou');
    }

    // screenshot
    await page.screenshot({
        path: 'campo-obrigatorio.png',
        fullPage: true
    });

    await browser.close();

})();