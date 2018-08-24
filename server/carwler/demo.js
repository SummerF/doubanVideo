const puppeteer = require('puppeteer');

// (async () => {
//     const browser = await puppeteer.launch({
//         headless:false,
//         shlwMo:250
//     });
//     const page = await browser.newPage();
//     await page.goto('https://movie.douban.com/tag/#/?sort=T&range=7,10&tags=');
//     await page.screenshot({ path: 'example.png' });

//     await browser.close();
// })();
(async () => {
    const browser = await puppeteer.launch({
        headless:false
    });
    const page = await browser.newPage();
    await page.goto('https://movie.douban.com/tag/#/?sort=T&range=7,10&tags=', { waitUntil: 'networkidle2' });
    // await page.pdf({ path: 'hn.pdf', format: 'A4' });
    await browser.close();
})();




