
(function() {
  'use strict';

  // const pricesArray = items.map (function(item){
  //   return item.price;
  // });
  //
  // const total = pricesArray.reduce(function(acc, i) {
  //   return acc + i;
  // });

  ///////////// this is the same, but chained together

  const priceofAllItems = items
    .map(function(item){
      return item.price;
    })
    //// map targeted prices of all items and returned an array
    .reduce(function(acc, i){
      return acc + i;
    })
    ///// reduce returned them to a single value

////// 0 is the initial value of the accumulator. The first time it runs, 0 + price of 1st item, 2nd time it will be price of 1st item, plus price of next item
    const priceOfAllItems2 = items
      .reduce(function(acc, item) {
        return acc + item.price;
      }, 0);
///// to show average price.  To fixed rounds decimal

    const averagePrice = (priceOfAllItems2 / items.length).toFixed(2);

    console.log(`ANSWER #1`);
    console.log(`The average price is $${Math.floor(averagePrice * 100)} / 100}.`)
    console.log(`\n`);

///////////////////////

    console.log(`\n`);
    console.log(`ANSWER #2`);
    console.log(`Items that cost between $14.00 and $18.00 USD`);
    console.log(`\n`);

    items
      .filter(function(item) {
        return item.currency_code === "USD" && item.price >= 14 && item.price <= 18;
        })
        .map (function(item){
          return item.title;
        })
        .forEach(function(item) {
          console.log(item);
        } )

////////
console.log(`\n`);
console.log(`ANSWER #3`);
console.log(`\n`);

items
  .filter(function(item){
    return item.currency_code === 'GBP';
  })
  .forEach(function(item){
    //  \u00a3
    console.log(`${item.title} costs \u00a3${item.price}`);
  });
  console.log(`\n`);

////////

////////
console.log(`\n`);
console.log(`ANSWER #4`);
console.log(`\n`);
///// includes:   is a boolean, returns true or false
items
  .filter(function(item){
    return item.materials.includes(`wood`);
  })
  .forEach(function(item){
    console.log(`${item.title} is made of wood`)
  });

  console.log(`\n`);

  ///////


  console.log(`ANSWER #5`);
  console.log(`\n`);

  items
    .filter(function(item){
      return item.materials.length >= 8
    })
    .forEach(function(item){
      console.log(`${item.title} has ${item.materials.length} materials`);
        console.log(`\n`);
      item.materials.forEach(function(material) {
        console.log(material);
      })
        console.log(`\n`);
    });

//////////////
    console.log(`ANSWER #6`);
    console.log(`\n`);

    const itemsMadeBySeller = items
      .filter(function(item){
        return item.who_made === 'i_did'
      });
        console.log(`${itemsMadeBySeller.length} items were made by their sellers.`)





})();

///////////////// Notes & previous attempts////////////////////

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

// Class notes:

// const pricesArray = items.map (function(item){
//   return item.price;
// });
//
// const total = pricesArray.reduce(function(acc, i) {
//   return acc + i;
// });
//
// ///////////// this is the same, but chained together
// (function() {
//   'use strict';
//
//   const priceofAllItems = items
//     .map(function(item){
//       return item.price;
//     })
//     //// map targeted prices of all items and returned an array
//     .reduce(function(acc, i){
//       return acc + i;
//     })
    ///// reduce returned them to a single value

////// 0 is the initial value of the accumulator. The first time it runs, 0 + price of 1st item, 2nd time it will be price of 1st item, plus price of next item
//     const priceOfAllItems2 = item
//       .reduce(function(acc, item) {
//         return acc + item.price;
//       }, 0);
// ///// to show average price.  To fixed rounds decimal
//
//     const averagePrice = (priceOfAllItems2 / items.length).toFixed(2);
//
//     console.log(`ANSWER #1`);
//     console.log(`The average price is $${Math.floor(averagePrice * 100)} / 100}.`)
//     conosole.log(`\n`)
//
//
// })();

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

/////////// CLASS NOTES #3:
// console.log(`ANSWER #2`);
// console.log(`Items that cost between $14.00 and $18.00 USD`)
//
// items
//   .filter(function(item) {
//     return item.currency_code === "USD" && item.price >= 14 && item.price <= 18;
//     })
//     .map (function(item){
//       return item.title;
//     })
//     .forEach(function(item) {
//       console.log(item);
//     } )


////////////// STEP 3 ////////////////////////
//find the item with a "GBP" currency code

//// The following console.logs the entire object w/ the GBP currency.

// let currency = "GBP";
// let filterCurrency = items.filter(function(item) {
//   return item.currency_code == currency;
// });
// //
// console.log(filterCurrency);



///// Trying to figure out how to show just the title & price.

// let a = filterCurrency;
//
// console.log(a.title);

// console.log(filterCurrency['title']);

///////////////// STEP 4 ////////////////////
// find which items are made of wood//

// let material = "wood";
// let sortMaterial = items.sort(function(item) {
//   return item.materials == material;
// });
// //
// console.log(sortMaterial);
// //////////////////
//


// function isWood(materialType) {
//   return materialType.materials.wood == 'wood';
// }

// console.log(items.find(isWood));




// items.materials.wood.sort();
// console.log(items);













/////////////// STEP 5 ////////////////////
