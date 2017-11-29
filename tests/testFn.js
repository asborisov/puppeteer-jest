module.exports = async function run(config, desc = '') {
    console.log((new Date()), 'launching');

    const page = this.page;
    await page.setViewport({width: 1980, height: 1080});

    console.log((new Date()), 'navigate');
    await page.goto(config.url, {
        waitUntil: config.waitUntil
    });

    console.log((new Date()), 'screenshot');
    await page.screenshot({
        path: `screenshots/search${desc}.png`,
        fullPage: config.fullPageScreenshot
    });

    console.log((new Date()), 'navigate');
    await page.goto(config.url, {
        waitUntil: config.waitUntil
    });

    console.log((new Date()), 'screenshot');
    await page.screenshot({
        path: `screenshots/search${desc}_2.png`,
        fullPage: config.fullPageScreenshot
    });

    console.log((new Date()), 'done');
};