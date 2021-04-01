const puppeteer = require('puppeteer');

(async () => {
  // coding ...
  console.log('Lanzamos el navegador');
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.goto('https://es.wikipedia.org/wiki/Node.js');

  console.log('Cerramos el navegador');

  let title1 = await page.evaluate(() => {
    const $h1 = document.querySelector('h1');
    return $h1.innerHTML;
  });

  console.log(title1);
  //browser.close();
  console.log('Navegador cerrado');
})();
