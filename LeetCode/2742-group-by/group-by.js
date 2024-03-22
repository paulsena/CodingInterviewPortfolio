/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {

    const answer = {};

    for(let i of this) {
        let key = fn(i);
        if (answer[key] == undefined) {
            answer[key] = [];
        }
        answer[key].push(i);
    }

    return answer;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */