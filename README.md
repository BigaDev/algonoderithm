# Algonoderithm
###when science apply into industry. algonoderithm help you by providing most computer science algorithms wanted in the applications

## Installation

	npm install algonoderithm --save

## Usage

	var algonoderithm = require('algonoderithm');
    algonoderithm.list(); // get all algorithms definations

    // any algorithm in algonoderithm contain two function
    // 1 - what() return the defination of the algorithm
    // 2 - do(params) execute the algorithm code
    // ex: haversin two calulate distance between point and other points

    algonoderithm.haversin.what(); // will return defination
    var point = {latitude: 11.1, longitude: 18.123};
    var points = [{latitude: 12.1, longitude: 28.123}, {latitude: 33.09, longitude: 23.13}, {latitude: 98.204, longitude: 21.123}];

    algonoderithm.haversin.do(point, points, function(err, data) {
    	if(err) {
    		console.log(err);
    	}
    	console.log(data);
    	//[ { latitude: 12.1, longitude: 28.123, distance: 1095 },
  			{ latitude: 33.09, longitude: 23.13, distance: 2498 },
  			{ latitude: 98.204, longitude: 21.123, distance: 9684 } ]
    });


## Release History

* 1.0.0 Initial release
