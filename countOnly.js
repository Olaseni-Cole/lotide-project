const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (result[item]) {
        result[item] ++;
        continue;
      }
      result[item] = 1;
    }
  }
  console.log(result);
  return result;
};

module.exports = countOnly;