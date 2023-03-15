const db = require("../connection");


const getOrders = function () {
const queryString = `SELECT of.*
                    ,o.*
                    ,f.name
                    FROM ordered_foods AS of
                    JOIN orders AS o ON o.orderId = of.orderId
                    JOIN foods AS f ON f.id = of.food_id
                    WHERE o.order_date = CURRENT_DATE`;
  return db.query(queryString).then((response) => {
    if (!response.rows) {
      return null;
    }
    return response.rows;
  });
};




const getUsers = () => {
  return db.query("SELECT * FROM customers;").then((data) => {
    return data.rows;
  });
};

const getFoods = () => {
  return db.query("SELECT * FROM foods;").then((data) => {
    return data.rows;
  });
};

const addCustomer = (data) => {
  return db
    .query(
      `INSERT INTO customers (name, email, phone)
  VALUES ('${data.name}', '${data.email}', '${data.phone}')`
    )
    .then((data) => {
      return data.rows;
    });
};

const getOrderedFoods = () => {
  return db.query("SELECT * FROM ordered_foods").then((data) => {
    return data.rows;
  });
};

module.exports = {
  getUsers,
  getFoods,
  addCustomer,
  getOrderedFoods,
  getOrders,
};
