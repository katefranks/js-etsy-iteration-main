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

// const pricesArray = items.map(function(item){
//   return item.price;
// });
//
// const totalPrice = pricesArray.reduce(function(acc, i){
//   return acc + i;
// });
//
// const avgPrices = (totalPrice/items.length);
//
// console.log(avgPrices);

//////////// STEP 2 /////////////

//"Items that cost between $14.00 USD and $18.00 USD:"//
// const pricesArray = items.map(function(item){
//   return item.price;
// });
//
// console.log(pricesArray);
//
// const filterPrices = items.filter(function(item){
//
// })
// //////////////////////////////
// function isBigEnough(value) {
//   return value >= 10
// }
//
// let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
// filtered is [12, 130, 44]
/////////////////////////


  let lower = 14;
  let upper = 18;
  let filterPrices = items.filter(function(item) {
    return (item.price >= lower && item.price <= upper);
  });

  console.log(filterPrices);
//////////////////////////

// let lower = 14;
// let upper = 18;
//   function filterByID(item) {
//     if (items.price >= lower && items.price <= upper) {
//       return item;
//     }
// }
// console.log(filterByID);
