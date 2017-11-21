var expect = require('chai').expect;

var getPrices = require ("../src/shop-tools").getPrices;

describe("getPrices", function(){
	var products = getPrices;

	it("shoulb blablabla", function (){
		expect(products).to.eql({
		banana:1,
		potatoe:2,
	})
})
})