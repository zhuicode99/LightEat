const { generateString } = require("../../helper/helpers");
const db = require("../connection");


const addOrderToTable = function (cart, id) {
  const foood_ids = Object.keys(cart);
  const customer_email = id;
  const orderId = generateString();
  const date = new Date().toLocaleDateString();
  let queryString = "";
  if (foood_ids.length > 0) {
    for (const item of foood_ids) {
      queryString += `INSERT INTO ordered_foods (customer_email, food_id, food_count, orderId)
      VALUES ('${customer_email}',${item},${cart[item].count},'${orderId}');`;
    }
    queryString =
      queryString +
      `INSERT INTO orders (customer_email, order_date, orderId, order_completed)
    VALUES ('${customer_email}','${date}','${orderId}','${false}');`;
  }

  console.log(queryString);

  return db.query(queryString).then((response) => {
    console.log("RES", response.rows);
    return response.rows;
  });

  // console.log(arrayToString);
};

module.exports = { addOrderToTable };
