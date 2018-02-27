function theBeatlesPlay(members, instruments) {
  var plays = [];
  for (var i = 0; i < members.length; i++) {
    plays.push(`${members[i]} plays ${instruments[i]}`);
  }
  return plays;
}

function johnLennonFacts(facts) {
  var factArray = [];
  for (var i = 0; i < facts.length; i++) {
    factArray.push(`${facts[i]}!!!`);
  }
  return factArray;
}

function iLoveTheBeatles(num) {
  var arr = [];
  var i = 0;
  if (num < 15) {
    do {
      arr.push("I love the Beatles!");
    } while (i < num);
  }
}