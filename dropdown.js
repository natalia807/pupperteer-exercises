//Objetivo: selecionar opção de um <select>
const puppeteer = require('puppeteer');

(async () => {

    // inicia navegador
    const browser = await puppeteer.launch({
        headless: false
    });

    // cria página
    const page = await browser.newPage();

    // acessa página
    await page.goto('https://the-internet.herokuapp.com/dropdown?utm_source=chatgpt.com');

    // seleciona opção
    await page.select('#dropdown', '1');

    // espera elemento aparecer
    await page.waitForSelector('#finish', {
        visible: true
    });

    // captura texto
    const texto = await page.$eval(
        '#finish',
        element => element.textContent
    );

    console.log('Texto encontrado:', texto);

    // valida texto
    if (texto.includes('Hello World!')) {
        console.log('Teste passou');
    } else {
        console.log('Teste falhou');
    }

    // screenshot
    await page.screenshot({
        path: 'espera-elemento.png',
        fullPage: true
    });

    // fecha navegador
    await browser.close();

})();