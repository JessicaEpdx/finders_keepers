describe('findReplace', function(){
  it("will replace one word in string with given new word", function(){
    expect(findReplace("Hey there", "Hey", "Hi")).to.equal("Hi there");
  });
});
