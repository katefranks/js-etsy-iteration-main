
//////////// STEP 1 /////////////
//final solution:

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

/////////////////////
//step 1 trial & error below:
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

////////////// STEP 2 ////////////////////////
//final solution:


  // let lower = 14;
  // let upper = 18;
  // let filterPrices = items.filter(function(item) {
  //   return (item.price >= lower && item.price <= upper);
  // });
  //
  // console.log(filterPrices);
////////////////////////////////////////////////

//step 2 trial & error below....

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
/////////////////////////

// let lower = 14;
// let upper = 18;
//   function filterByID(item) {
//     if (items.price >= lower && items.price <= upper) {
//       return item;
//     }
// }
// console.log(filterByID);



////////////// STEP 3 ////////////////////////
//find the item with a "GBP" currency code
//// The following console.logs the entire object w/ the GBP currency.
let currency = "GBP";
let filterCurrency = items.filter(function(item) {
  return item.currency_code == currency;
});
//
console.log(filterCurrency);

///// Trying to figure out how to show just the title & price.

// let a = filterCurrency;
//
// console.log(a.title);

// console.log(filterCurrency['title']);
