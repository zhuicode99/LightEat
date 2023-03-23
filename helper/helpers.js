


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


module.exports = {
  generateString
};
