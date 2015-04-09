var cpu = require('../index');
var should = require('should');

describe('Api test', function() {
	describe('cpu numbers', function() {
		it('should return a Number', function() {
			var num = cpu.num();
			num.should.be.type('number');
		});
	});

	describe('cpu usages', function() {
		it('should return an array', function(done) {
			this.timeout = 1200;
			var num = cpu.num();

			cpu.usage(function(data) {
				data.should.be.type('object');
				num.should.equal(data.length);
				done();
			});

		})
	});
});

