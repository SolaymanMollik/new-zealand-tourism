

function MakeFunc(name, age, country, language, stall, sell, buy, profit) {
  this.name = name;
  this.id = age;
  this.country = country;
  this.language = language;
  this.stall = stall;
  this.sell = sell;
  this.buy = buy;
  this.profit = profit;
}

let productList = [];

for (let i = 2; i <= 500; i++) {
  let make = new MakeFunc("solayman", i, "Bangladesh", "Bangla");
  productList.push(make);
}

console.table(productList);
