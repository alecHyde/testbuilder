// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
    
    if(findLengthDC(cardNumber) && findCodeDC(cardNumber)) {
    	return 'Diner\'s Club';
    } else if (findLengthAmEx(cardNumber) && findCodeAmEx(cardNumber)) {
    	return 'American Express';
    }else if (findLengthSwitch(cardNumber) && findCodeSwitch(cardNumber)) {
        return 'Switch';
    } else if (findLengthVisa(cardNumber) && findCodeVisa(cardNumber)) {
    	return 'Visa';
    } else if (findLengthMC(cardNumber) && findCodeMC(cardNumber)) {
    	return 'MasterCard';
    } else if (findLengthDiscover(cardNumber) && findCodeDiscover(cardNumber)) {
    	return 'Discover';
    } else if (findLengthMaestro(cardNumber) && findCodeMaestro(cardNumber)) {
    	return 'Maestro';
    } else if (findLengthChinaUnionPay(cardNumber) && findCodeChinaUnionPay(cardNumber)) {
        return 'China UnionPay';
    } 
};

  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long

var findLengthDC = function(ccLength) {
	if(typeof ccLength === 'string') {
		var length = ccLength.length;
	} else if (typeof ccLength === 'number'){
		var length = ccLength.toString().length;
	}
	if(length === 14) {
		return true;
	}
};

var findCodeDC = function(ccNumber) {
	if(typeof ccNumber === 'string') { 
	    var strCode2 = Number(ccNumber.slice(0,2))
	} else if (typeof ccNumber === 'number') {
        var numCode2 = Number(ccNumber.toString().slice(0,2))
	}
	if(strCode2 === 38 || strCode2 === 39 || numCode2 === 38 || numCode2 === 39) {
		return true;
	}
}

  // The American Express network always starts with a 34 or 37 and is 15 digits long

var findLengthAmEx = function(ccLength) {
	if(typeof ccLength === 'string') {
		var length = ccLength.length;
	} else if (typeof ccLength === 'number'){
		var length = ccLength.toString().length;
	}
	if(length === 15) {
		return true;
	}
};

var findCodeAmEx = function(ccNumber) {
	if(typeof ccNumber === 'string') { 
	    var strCode2 = Number(ccNumber.slice(0,2))
	} else if (typeof ccNumber === 'number') {
        var numCode2 = Number(ccNumber.toString().slice(0,2))
	}
	if(strCode2 === 34 || strCode2 === 37 || numCode2 === 34 || numCode2 === 37) {
		return true;
	}
}

// Visa length = 13, 16, 19. Code starts with 4

var findLengthVisa = function(ccLength) {
	if(typeof ccLength === 'string') {
		var length = ccLength.length;
	} else if (typeof ccLength === 'number'){
		var length = ccLength.toString().length;
	}
	if(length === 13 || length === 16 || length === 19) {
		return true;
	}
};

var findCodeVisa = function(ccNumber) {
	if(typeof ccNumber === 'string') { 
	    var strCode1 = Number(ccNumber.slice(0,1))
	} else if (typeof ccNumber === 'number') {
        var numCode1 = Number(ccNumber.toString().slice(0,1))
	}
	if(strCode1 === 4 || numCode1 === 14) {
		return true;
	}
}

// Master Card length = 16. Code starts with 51-55

var findLengthMC = function(ccLength) {
	if(typeof ccLength === 'string') {
		var length = ccLength.length;
	} else if (typeof ccLength === 'number'){
		var length = ccLength.toString().length;
	}
	if(length === 16) {
		return true;
	}
};

var findCodeMC = function(ccNumber) {
	if(typeof ccNumber === 'string') { 
	    var strCode2 = Number(ccNumber.slice(0,2))
	} else if (typeof ccNumber === 'number') {
        var numCode2 = Number(ccNumber.toString().slice(0,2))
	}
	if(strCode2 === 51 || strCode2 === 52 || strCode2 === 53 || strCode2 === 54 || strCode2 === 55 || numCode2 === 51 || numCode2 === 52 || numCode2 === 53 || numCode2 === 54 || numCode2 === 55) {
		return true;
	}
}

// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.

var findLengthDiscover = function(ccLength) {
	if(typeof ccLength === 'string') {
		var length = ccLength.length;
	} else if (typeof ccLength === 'number'){
		var length = ccLength.toString().length;
	}
	if(length === 16 || length === 19) {
		return true;
	}
}

var findCodeDiscover = function(ccNumber) {
	if(typeof ccNumber === 'string') {
		var strCode4 = Number(ccNumber.slice(0,4))
		var strCode3 = Number(ccNumber.slice(0,3)) 
	    var strCode2 = Number(ccNumber.slice(0,2))
	} else if (typeof ccNumber === 'number') {
        var numCode4 = Number(ccNumber.toString().slice(0,4))
        var numCode3 = Number(ccNumber.toString().slice(0,3))
        var numCode2 = Number(ccNumber.toString().slice(0,2))
	}
	if(strCode4 === 6011 || strCode3 === 644 || strCode3 === 645 || strCode3 === 646 || strCode3 === 647 || strCode3 === 648 || strCode3 === 649 || strCode2 === 65 || numCode4 === 6011 || numCode3 === 644|| numCode3 === 645 || numCode3 === 646 || numCode3 === 647 || numCode3 === 648 || numCode3 === 649 || numCode2 === 65) {
		return true;
	}
};

// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19

var findLengthMaestro = function(ccLength) {
	if(typeof ccLength === 'string') {
		var length = ccLength.length;
	} else if (typeof ccLength === 'number'){
		var length = ccLength.toString().length;
	}
	if(length === 12 || length === 13 || length === 14 || length === 15 || length === 16 || length === 17 || length === 18 || length === 19) {
		return true;
	}
};

var findCodeMaestro = function(ccNumber) {
	if(typeof ccNumber === 'string') {
		var strCode = Number(ccNumber.slice(0,4)) 
	} else if (typeof ccNumber === 'number') {
        var numCode = Number(ccNumber.toString().slice(0,4))
	}
	if(strCode === 5018 || strCode === 5020 || strCode === 5038 || strCode === 6304 || numCode === 5018 || numCode === 5020 || numCode === 5038 || numCode === 6304) {
		return true;
	}
};

// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.

var findLengthChinaUnionPay = function(ccLength) {
	if(typeof ccLength === 'string') {
		var length = ccLength.length;
	} else if (typeof ccLength === 'number'){
		var length = ccLength.toString().length;
	}
	if(16 <= length <=19) {
		return true;
	}
};

var findCodeChinaUnionPay = function(ccNumber) {
	if(typeof ccNumber === 'string') {
		var strCode6 = Number(ccNumber.slice(0,6))
		var strCode4 = Number(ccNumber.slice(0,4)) 
	    var strCode3 = Number(ccNumber.slice(0,3))
	} else if (typeof ccNumber === 'number') {
        var numCode6 = Number(ccNumber.toString().slice(0,6))
        var numCode4 = Number(ccNumber.toString().slice(0,4))
        var numCode3 = Number(ccNumber.toString().slice(0,3))
	}
	if(6222126 <= strCode6 <= 622925 || 6222126 <= numCode6 <= 622925 || 6282 <= strCode4 <= 6288 || 6282 <= numCode4 <= 6288 || 624 <= strCode3 <= 626 || 624 <= numCode3 <= 626) {
		return true;
	}
};

// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

var findLengthSwitch = function(ccLength) {
	if(typeof ccLength === 'string') {
		var length = ccLength.length;
	} else if (typeof ccLength === 'number'){
		var length = ccLength.toString().length;
	}
	if(length === 16 || length === 18 || length === 19) {
		return true;
	}
};

var findCodeSwitch = function(ccNumber) {
	if(typeof ccNumber === 'string') {
		var strCode6 = Number(ccNumber.slice(0,6))
		var strCode4 = Number(ccNumber.slice(0,4)) 
	} else if (typeof ccNumber === 'number') {
        var numCode6 = Number(ccNumber.toString().slice(0,6))
        var numCode4 = Number(ccNumber.toString().slice(0,4))
	}
	if(strCode6 === 564182 || strCode6 === 633110 || strCode4 === 4903 || strCode4 === 4905 || strCode4 === 4911 || strCode4 === 4936 || strCode4 === 6333 || strCode4 === 6333 || strCode4 === 6759 || numCode6 === 564182 || numCode6 === 633110 || numCode4 === 4903 || numCode4 === 4905 || numCode4 === 4911 || numCode4 === 4936 || numCode4 === 6333 || numCode4 === 6333 || numCode4 === 6759) {
		return true;
	}
};


// Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, 
// you should choose the network with the longer prefix.

