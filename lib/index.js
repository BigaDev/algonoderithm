var fs = require('fs');
var MathHelper = require('./math-helper');
var definations = JSON.parse(fs.readFileSync('./lib/definations.json', 'utf8'));

module.exports = {
  /**
   * Get all algorithms definations in Algonoderithm
   *
   * @param  
   * @return {JSON object}
   */
  list: function() {
    return definations;
  },
  /**
   * Haversin used for calculating the distance between geo location to other geo location list.
   *
   * @param  {Object} loc, {JSON Array} locs
   * @return {JSON Array} locs
   */
  haversin: {
    what: function() {
      return definations["haversin"];
    },
    do: function(targetGeoLoc, geoLocs, callback) {
      try {
        var r = 6371; 
        geoLocs.forEach(function(geoLoc) {
          var dLat  = MathHelper.rad(geoLoc.latitude - targetGeoLoc.latitude);
          var dLong = MathHelper.rad(geoLoc.longitude - targetGeoLoc.longitude);
          var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(MathHelper.rad(targetGeoLoc.latitude))
                  * Math.cos(MathHelper.rad(geoLoc.latitude)) * Math.sin(dLong/2) * Math.sin(dLong/2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
          var d = r * c;
          var distance = Math.round(d);
          geoLoc.distance = distance;
        });
        return callback(null, geoLocs);
      }
      catch(err){
        return callback(err);
      }
    }
  }
};