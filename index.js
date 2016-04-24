function createCheckMacValue(){
  var stooges = { z: "f" , m: "a" };
  var keys = Object.keys(stooges);
  var sortedKeys = _.sortBy(keys, function(key) {
    return key;
  });
  var uri = _.map(sortedKeys, function(key) {
    return key + '=' + stooges[key];
  }).join('&');
  console.log(uri);
}
