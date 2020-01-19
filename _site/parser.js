const fs = require("fs");
const pdf = require("pdf-parse");

let dataBuffer = fs.readFileSync("Kamuoyu_Duyurusu_2020-1.pdf");

pdf(dataBuffer).then(function(data) {

  console.log(data.numpages);
  console.log(data.numrender);
  console.log(data.info);
  console.log(data.metadata); 

  console.log(data.text.split('Firma AdıMarkaÜrün AdıUygunsuzlukParti/Seri No').length);
});
