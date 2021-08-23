// const book = {
//   title: "Ego bla bla",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName); // Default - Self-Published

const item = ["Coffee (hot)", "$2.00", "$2.50", "$3.00"];

const [itemName, smallPrice, mediumPrice, largePrice] = item;

console.log(`a medium ${itemName} costs ${mediumPrice}`);
