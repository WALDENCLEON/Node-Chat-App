//Ensure that object in message.js function is what you expect

var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
it('should generate correct messsage object', () => {
    
var from = 'Jen';
var text = "some text";

var message = generateMessage(from, text);

expect(message).toInclude({
    from,
    text, 
});

});

});
