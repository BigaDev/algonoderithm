# ![Alt text](/assets/images/name.png?raw=true "Algonoderithm")

algonoderithm help you by providing most computer science algorithms wanted in the applications.

## Installation

```bash
npm install algonoderithm --save
```

## Usage

```javascript
var algonoderithm = require('algonoderithm');

algonoderithm.list(); // get all algorithms definitions

// any algorithm in algonoderithm contain two functions
// 1 - what() return the defination of the algorithm
// 2 - do(params) execute the algorithm code
// ex: haversin two calculate distance between point and other points

algonoderithm.haversin.what(); // will return defination
var point = {latitude: 11.1, longitude: 18.123};
var points = [
    {latitude: 12.1, longitude: 28.123},
    {latitude: 33.09, longitude: 23.13},
    {latitude: 98.204, longitude: 21.123}
];

algonoderithm.haversin.do(point, points, function(err, data) {
    if(err) {
        return console.log(err);
    }

    console.log(data);
    /*
     [
        { latitude: 12.1, longitude: 28.123, distance: 1095 },
        { latitude: 33.09, longitude: 23.13, distance: 2498 },
        { latitude: 98.204, longitude: 21.123, distance: 9684 }
     ]
    */
});
```
## Contribution 

Our next level we need to implement these algorithms:

1 - dijkstra (shortest path)

2 - summarize text

3 - radix sort

4 - Auto-Tag URL ( This algorithm takes in a URL, retrieves the content, and produces candidate tags using LDA)

anyone is welcome to contribute but please follow these rules:

1 - anyone want to add a new algorithm to algonoderithm must checkout from master branch.

2 - if you want to add a new algorithm the branch name must be "add-algo-NameOfAlgorithm".

3 - if you found a bug and fix it the branch name must be "fix-NameOfFile".

4 - any algorithm will be added into algonoderithm must have it's defination in defination.json and have what and do functions.

5 - any pull request must merge into development branch.

6 - if any pull request merge into master branch, it will be rejected.


## Release History

* 0.1.0 Initial release
* 0.2.0 Initial release
* 0.3.0 Initial release
* 1.0.0 Initial release
* 2.0.0 Road Map
