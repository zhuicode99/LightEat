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

const getfood = function (id) {
  const queryString = `SELECT * FROM foods WHERE id = $1;`;
  return db.query(queryString, [id]).then((response) => {
    if (!response.rows) {
      return null;
    }
    return response.rows[0];
  });
};




module.exports = { getfoods, getfood,  };
