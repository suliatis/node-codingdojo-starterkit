const { expect } = require('chai');
const dojo = require('./');

describe('test framework', () => {
	it('should run the tests', () => {
		expect(true).to.be.true;
	});

	it('should depend on the actual code', () => {
		expect(dojo).not.to.be.null;
	});
});

describe('dojo', () => {
	
});
