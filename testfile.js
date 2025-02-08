
var assert = require("assert");
let calc = require("./calc");

describe('Calculator',function(){

    it('Should add 3 and 4 and get 7',function(){
        assert.equal(calc.add(3,4),7)
    })
    it('Should substract 7 and 4 and get 3',function(){
        assert.equal(calc.substract(7,4),3)
    })
    it('Should Multiple 3 and 4 and get 12',function(){
        assert.equal(calc.multiply(3,4),12)
    })
    it('Should Divide 12 and 4 and get 3',function(){
        assert.equal(calc.divide(12,4),3)
    })
    
})