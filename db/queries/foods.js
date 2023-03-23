const db = require("../connection");

const getfoods = function () {
  const queryString = `SELECT * FROM foods;`;

  return db.query(queryString).then((response) => {
    if (!response.rows) {
      return null;
    }
    return response.rows;
  });
};





module.exports = { getfoods };
