//Preencher formulário: automatizar nome, e-mail e senha.
const puppeteer = require('puppeteer');

(async () => {

    // inicia o navegador
    const browser = await puppeteer.launch({
        headless: false
    });

    // cria uma nova aba
    const page = await browser.newPage();

    // acessa o formulário
    await page.goto('https://www.w3schools.com/html/html_forms.asp');

    // limpa os campos antes de preencher
    await page.click('#fname', { clickCount: 3 });
    await page.keyboard.press('Backspace');

    await page.click('#lname', { clickCount: 3 });
    await page.keyboard.press('Backspace');

    // preenche os campos
    await page.type('#fname', 'Natalia');
    await page.type('#lname', 'Santos');

    // captura os valores preenchidos
    const firstName = await page.$eval('#fname', el => el.value);
    const lastName = await page.$eval('#lname', el => el.value);

    // valida o preenchimento
    if (firstName === 'Natalia' && lastName === 'Santos') {
        console.log('Teste passou');
    } else {
        console.log('Teste falhou');
    }


    await page.screenshot({
        path: 'preenchimento-formulario.png',
        fullPage: true
    });


    await browser.close();

})();