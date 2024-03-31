/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Create an empty object to store the total spent by category
  let totalSpentByCategory = {};

  // Iterate over each transaction
  transactions.forEach(transactions => {
      // If the category is not yet in the object, add it with the price as the value
      if (!totalSpentByCategory[transactions.category]) {
          totalSpentByCategory[transactions.category] = transactions.price;
      } else {
          // If the category is already in the object, add the price to the existing value
          totalSpentByCategory[transactions.category] += transactions.price;
      }
  });

  // Convert the object to an array of objects with the format { category: 'Food', totalSpent: 10 }
  let result = Object.keys(totalSpentByCategory).map(category => {
      return { category: category, totalSpent: totalSpentByCategory[category] };
  });
 
  return result;
}
module.exports = calculateTotalSpentByCategory;


testtran=[{
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: 'Food',
  itemName: 'Pizza',
},]

console.log(calculateTotalSpentByCategory(testtran));