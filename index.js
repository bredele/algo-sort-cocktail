

/**
 * Sort array using cocktail sort algorithm.
 *
 * @param {Array} array
 * @return {Array}
 * @api public
 */

module.exports = function(array, distance) {
  var swapped = true
  var start = 0
  var end = array.length
  while(swapped) {
    swapped = false
    var i = start
    while(i < end) {
      var tmp = array[i + 1]
      if(array[i] > tmp) {
        array[i + 1] = array[i]
        array[i] = tmp
        swapped = true
      }
      i++
    }
    var j = end--
    while(j > start) {
      var tmp = array[j - 1]
      if(tmp > array[j]) {
        array[j - 1] = array[j]
        array[j] = tmp
        swapped = true
      }
      j--
    }
    start++
  }
  return array
}
