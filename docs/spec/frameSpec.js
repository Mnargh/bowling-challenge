describe("Frames", function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe("First Roll", function(){
    it("Can roll a score on the first roll", function(){
      frame.firstRoll(5);
      expect(frame.firstRollScore).toEqual(5);
    });
    it("Can only roll a score between 0 and 10", function(){
      expect(function(){ frame.firstRoll(-1) }).toThrowError("Can only roll between 0 and 10");
      expect(function(){ frame.firstRoll(11) }).toThrowError("Can only roll between 0 and 10");
    });
    it("Can record a strike", function(){
      frame.firstRoll(10);
      expect(frame.strike).toEqual(true);
    });
    it("Second roll is null if scored a strike", function(){
      frame.firstRoll(10);
      expect(function(){ frame.secondRoll(1) }).toThrowError("No second throw after a strike");
      expect(frame.secondRollScore).toEqual(null);
    });
  });

  describe("Second Roll", function(){
    it("Can only roll a score between 0 and 10", function(){
      frame.firstRoll(0);
      expect(function(){ frame.secondRoll(-1) }).toThrowError("Can only roll between 0 and 10");
      expect(function(){ frame.secondRoll(11) }).toThrowError("Can only roll between 0 and 10");
    });
    it("Cannot total more than 10 pins knocked down over two rolls", function(){
      frame.firstRoll(5);
      expect(function(){ frame.secondRoll(6) }).toThrowError("Cannot total more than 10 over two rolls");
    });
    it("Can record a spare", function(){
      frame.firstRoll(0);
      frame.secondRoll(10);
      expect(frame.spare).toEqual(true);
    });
  });
});
