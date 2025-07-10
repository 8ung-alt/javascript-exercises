const sumAll = function(start, end) {
let buffer;
let result = 0;
if (
    start < 0 || end < 0 ||
    start % 1 != 0 || end % 1 != 0 ||
    typeof(start) != "number" || typeof(end) != "number"
) {
    return "ERROR";
}
if(start > end) {
    buffer = start;
    start = end; 
    end = buffer;
}
for (let i = start; i <= end; i++) {
    result += i;
}
return result;
};

// Do not edit below this line
module.exports = sumAll;
