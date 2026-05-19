/* Login válido, Objetivo: preencher login, preencher senha, clicar, validar sucesso */
const puppeteer = require('puppeteer');

(async () => {

    // inicia o navegador
    const browser = await puppeteer.launch({
        headless: false
    });

    // cria uma nova página
    const page = await browser.newPage();

    // acessa a página de login
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // preenche usuário
    await page.type('#username', 'student');

    // preenche senha
    await page.type('#password', 'Password123');

    // clica no botão de login
    await page.click('#submit');

    // espera a próxima página carregar
    await page.waitForSelector('.post-title');

    // captura mensagem de sucesso
    const mensagem = await page.$eval(
        '.post-title',
        element => element.textContent
    );

    // valida login
    if (mensagem.includes('Logged In Successfully')) {
        console.log('Login realizado com sucesso!');
    } else {
        console.log('Falha no login!');
    }

    // fecha navegador
    await browser.close();

})();