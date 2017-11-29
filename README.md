# puppeteer-jest
Integration of Jest and Puppeteer

Simple demonstration of how Jest (https://github.com/facebook/jest) and 
Puppeteer (https://github.com/GoogleChrome/puppeteer) can work together

### How to run
1. `npm install`
2. `npm test`

### Configuration
In `config.js`:

- `suiteTimeout` - timeout for each test file
- `fullPageScreenshot` - create screenshot of full page or only for viewport
- `waitUntil` - wait for event during loading
- `url` - what page to load
