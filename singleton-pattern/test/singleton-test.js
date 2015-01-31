var should = require('should');

var MyBadSingleton = require('../src/MyBadSingleton');
var GoodSingleton = require('../src/GoodSingleton');

describe('MyBadSingleton', function() {
	it('shouldn\'t return the same instance', function(){

		var MyBadSingleton1 = MyBadSingleton.getInstance();
		var MyBadSingleton2 = MyBadSingleton.getInstance();

		console.log(MyBadSingleton1.randomNumber());
		console.log(MyBadSingleton2.randomNumber());

		MyBadSingleton1.randomNumber().should.not.be.equal(MyBadSingleton2.randomNumber());



	});

	it('should return the same randomNumber', function(){

		var GoodSingleton1 = GoodSingleton.getInstance();
		var GoodSingleton2 = GoodSingleton.getInstance();

		console.log(GoodSingleton1.randomNumber());
		console.log(GoodSingleton2.randomNumber());
		
		GoodSingleton1.randomNumber().should.be.equal(GoodSingleton2.randomNumber());


	});


});