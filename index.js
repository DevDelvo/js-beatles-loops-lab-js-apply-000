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
  do {
    arr.push("I love the Beatles!");
  } while (num < 15);
  
  return arr;
}