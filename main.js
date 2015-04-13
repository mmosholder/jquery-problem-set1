var capitalize = function(str){

  var strings = str.split(" ");
  var newArray = [];

  for(var i = 0 ; i < strings.length ; i++ ){

    var FirstLetter = strings[i].charAt(0).toUpperCase();
    var restOfWord = strings[i].slice(1);

    newArray[i] = FirstLetter + restOfWord;

  }

  return newArray.join(' ');

};  

var wordCount = function(str) {
	var splitStr = str.split(" ");
	return splitStr.length;
};

var primeTime = function(x) {
	if (x < 2) {
		return false;
	}
	else {
		console.log('prime!');
	}
};