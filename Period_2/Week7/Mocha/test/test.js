const expect = require("chai").expect;
const assert = require ('assert')
const calc = require('../index.js')

describe('Calculator', function(){
    it('Add two numbers', function(done){
        var total = calc.add(10,5)
        assert.equal(total, 15)
        done()
    }),
  it('Subtract two numbers', function(done){
      var total = calc.subtract(10,5)
      assert.equal(total, 5)
      done()

  }),
  it('Divide two numbers', function(done){
      var total = calc.divide(5,2)
      assert.equal(total, 2.5)
      done()

  }),
  it('Multiply two numbers', function(done){
      var total = calc.multiply(10,5)
      assert.equal(total, 50)
      done()

  })
})