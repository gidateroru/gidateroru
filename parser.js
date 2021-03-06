const fs = require("fs");

const fields = ["company", "brand", "product", "unsuitability", "serial"];
const file = fs.readFileSync("./_data/format.txt");
const data = file
  .toString()
  .split(/==/g)
  .filter(Boolean)
  .map(column => column.split(/\n/).filter(Boolean));
console.log(data);
let records = [];
let j = 1;

// for (let i = 0; i < data[0].length; i++) {
//   records[i] = records[i] || [j++];

//   data.forEach(column => {
//     records[i].push(column[i]);
//   });
// }

records = data.map((record, index) => {
  const item = {id: index + 1};

  fields.forEach((field, index) => {
    item[field] = record[index];
  });

  return item;
});

fs.unlinkSync("./_data/result.json");
fs.appendFileSync("./_data/result.json", JSON.stringify(records));
