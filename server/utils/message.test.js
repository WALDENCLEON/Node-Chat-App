
var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });

});

describe("generateLocationMessage", () => {

  it("Should generate a location object/URL", () => {

    var from = "Cleon";
    var lat = 3;
    var long = 2;
    var location = generateLocationMessage(from, lat, long);

    expect(location).toInclude({
      from:"Cleon",
      url: "https://www.google.com/maps?q=3,2"
    });


  });

});
