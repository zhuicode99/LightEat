const { LocalStorage } = require("node-localstorage");
const localStorage = new LocalStorage("./scratch");
const { getfoods, getfood } = require("../db/queries/foods");

const generateString = function () {
  let result = " ";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  for (let i = 0; i < 6; i++) {
    result +=
      Math.floor(Math.random() * 99) +
      characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const convertObj = function (objsArray) {

  const obj = {};

  for (const item of objsArray) {
    const food_count = `${item.name}  Qty. ${item.food_count}`;
    if (obj[item.orderid]) {
      obj[item.orderid].food.push(food_count)
    } else {
      obj[item.orderid] = {
        food: [food_count],
      };
    }
  }
  return obj;
};

module.exports = {
  generateString,convertObj
};
