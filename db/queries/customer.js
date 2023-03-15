const db = require("../connection");
``

const getUserByEmail = function (email) {
  const queryString = `SELECT * FROM customers
  WHERE email = $1;`;

  return db.query(queryString, [email]).then((response) => {
    if (!response.rows[0]) {
      return null;
    }
    return response.rows[0];
  });
};

const getUserByPhone = function (phone) {
  const queryString = `SELECT * FROM customers
  WHERE phone = $1;`;

  return db.query(queryString, [phone]).then((response) => {
    if (!response.rows[0]) {
      return null;
    }
    return response.rows[0];
  });
};

module.exports = { getUserByEmail, getUserByPhone };
