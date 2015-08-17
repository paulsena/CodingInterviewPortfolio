/* Counts the number of elements that appear more then once in an array
 * Uses functional MapFilterReduce style.
 *
 * @param - Array of integers. 0-10,000 elements.
 * @return - Integer count of duplicate occurances.
 */

console.log(find_num_dupes([1,2,2,2,3,3,3,2,4]));

function find_num_dupes(v) {
    var arrCounts = [];
    
    //Counts occurance of each element in an array.
    v.forEach(function(element,array) {
        arrCounts[element] ? arrCounts[element]++ : arrCounts[element]=1;
    });
    
    //Filter to just more then 1 occurances and accumulate
    var counts = 
        arrCounts.filter(function(curVal) {
          return curVal>1;
        })
        .reduce(function(preVal, currVal) {
           return preVal + 1;
        },0);
    
    return counts;
}
