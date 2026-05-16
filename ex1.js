//validar título da página do site
const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({
        headless: false
    });

    const page = await browser.newPage();

    await page.goto('https://example.com');

    const titulo = await page.title();

    console.log(titulo);

    await browser.close();

})();