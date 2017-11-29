const run = require('./testFn');
const config = require('./config');
const id = 4;

describe('one', () => {
    jest.setTimeout(config.suiteTimeout);

    it('should run test', () => {
        return run(config, `${id}1`);
    });
    it('should run test twice', () => {
        return run(config, `${id}2`);
    });
});
