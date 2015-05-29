describe('findReplace', function(){
  it("will replace one word in string with given new word", function(){
    expect(findReplace("Hey there", "Hey", "Hi")).to.equal("Hi there");
  });

  it("will replace word regardless of case", function(){
    expect(findReplace("Hey there", "hey", "Hi")).to.equal("Hi there");
  });

  it("will always capitalize string output", function(){
    expect(findReplace("hey there", "hey", "hi")).to.equal("Hi there");
  });

  it("will accept numbers as input", function(){
    expect(findReplace("8 monkeys", 8, 12)).to.equal("12 monkeys");
  });

  it("accept equality of words regardless of attached punctuation", function(){
    expect(findReplace("hey! how are you?", "hey", "hi")).to.equal("Hi! how are you?");
  });

});
