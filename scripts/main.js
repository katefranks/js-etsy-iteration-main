// let total = 0;
// items['price']forEach(function (prices){
//   total += 'price';
// }
// return total;
// });

//
// items.forEach(function(item){
//   console.log(item.price);
// });
//
//////////// STEP 1 /////////////

const pricesArray = items.map(function(item){
  return item.price;
});

const totalPrice = pricesArray.reduce(function(acc, i){
  return acc + i;
});

const avgPrices = (totalPrice/items.length);

console.log(avgPrices);


















// function avgPrices(arr) {
//   const result = [ ];
//
//   for(let i = 0; i<arr.length; i++) {
//     result[arr[i][0]] = arr[[i][1]];
//
// // ******below breaks out the above to make it easier to read, but is the same
//     // let arr = arr[i]; // ['name', 'Charlie']
//     // let key = nestedArr[0];
//     // let value = nestedArray [1];
//     //
//     // result[key] = value;
//
//     // result ['name'] = 'charlie';
//   }
//   return result;
// }

// const prices = []
// items['price'];
//
// console.log(prices);
//
// for(const key['price'] in items) {
//     console.log(key, student[key]);
//
