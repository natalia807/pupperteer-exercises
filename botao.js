//clicar em botão, validar mudança na tela

const puppeteer = require('puppeteer');

(async () => {

    // inicia o navegador
    const browser = await puppeteer.launch({
        headless: false
    });

    // cria uma nova aba
    const page = await browser.newPage();

     // 2. Acessa a página alvo
  await page.goto('https://exemplo-de-site.com');

  // 3. Aguarda o botão ficar visível e clica nele
  const botaoSeletor = '#meu-botao';
  await page.waitForSelector(botaoSeletor, { visible: true });
  await page.click(botaoSeletor);

  // 4. Validação: Aguarda o elemento de sucesso aparecer na tela
  const mensagemSeletor = '.mensagem-sucesso';
  try {
    await page.waitForSelector(mensagemSeletor, { timeout: 5000 }); // Aguarda até 5 segundos
    console.log('Sucesso: O botão foi clicado e a validação apareceu!');
  } catch (error) {
    console.error('Erro: A validação falhou, o elemento esperado não apareceu.');
  }

  // 5. Fecha o navegador
  await browser.close();
})();