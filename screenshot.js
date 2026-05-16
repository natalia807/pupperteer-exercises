// tirar screenshot e Salvar: screenshot.png
const puppeteer = require('puppeteer');

(async () => {

    // abre o navegador
    const browser = await puppeteer.launch({
        headless: false
    });

    // cria uma nova página
    const page = await browser.newPage();

    // acessa o site
    await page.goto('https://example.com');

    //tira screenshot da página
    await page.screenshot({
        path: 'screenshot.png',
        fullPage: true
    });

    console.log('Screenshot salva com sucesso!');

    // fecha o navegador
    await browser.close();

})();