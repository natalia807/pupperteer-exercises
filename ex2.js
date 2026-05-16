//Capturar o texto: Example Domain
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

    // captura o texto da página
    const texto = await page.$eval('h1', element => element.textContent);

    // valida o texto
    if (texto === 'Example Domain') {
        console.log('Teste passou');
    } else {
        console.log('Teste falhou');
    }

    // fecha o navegador
    await browser.close();

})();