
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) return [];
   let result = [];
   matrix.forEach((array, index) => {
    index % 2 === 1 ? result.push(...array.reverse()) : result.push(...array)    
   });
   return result;
}
