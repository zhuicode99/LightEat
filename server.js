// load .env data into process.env
require("dotenv").config();

// Web server config
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const morgan = require("morgan");
const cookieSession = require("cookie-session");

const PORT = process.env.PORT || 8080;
const app = express();

app.set("view engine", "ejs");


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const { LocalStorage } = require("node-localstorage");
const { generateString } = require("./helper/helpers");
const userApiRoutes = require("./routes/users-api");
const widgetApiRoutes = require("./routes/widgets-api");
const usersRoutes = require("./routes/users");
const foodsRoutes = require("./routes/foods"); //require from route folder
const signInRoute = require("./routes/signin");
const orderRouter = require("./routes/orders");
const ordersApiRouter = require("./routes/orders-api");
const orderStatusRouter = require("./routes/order_status");
const foodsApiRoutes = require('./routes/foods-api');
const signupRoutes = require('./routes/signup');
const signupApiRoutes = require('./routes/signup-api');
const ownerRoutes = require('./routes/owner');
const paymentsRoutes = require('./routes/payments');
const paymentsApiRoutes = require('./routes/payments-api');
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
const userId = generateString();
const localStorage = new LocalStorage("./scratch");
const cart = {/*'UXC':{name:'cake', price:20,count:1}, 'BFG':{name:'borrito', price:18 ,count:2}*/};
// localStorage._deleteLocation();
localStorage.setItem("user_cart", JSON.stringify(cart));
app.use("/api/users", userApiRoutes);
app.use("/api/widgets", widgetApiRoutes);
app.use("/users", usersRoutes);
app.use("/foods", foodsRoutes); //this foods is the url
app.use('/api/foods', foodsApiRoutes);
app.use("/signin", signInRoute);
// app.use("/orders", orderRouter)
// const userApiRoutes = require('./routes/users-api');
// const widgetApiRoutes = require('./routes/widgets-api');
// const usersRoutes = require('./routes/users');
// const foodsApiRoutes = require('./routes/foods-api');//require from route folder
// const foodsRoutes = require('./routes/foods');
// const signupRoutes = require('./routes/signup');
// const signupApiRoutes = require('./routes/signup-api');
// app.use("/orders", orderRouter);
// app.use('/signup', signupRoutes);
// app.use('/api/signup', signupApiRoutes);
// app.use('/owner', ownerRoutes);
// app.use('/payments', paymentsRoutes);
// app.use('/api/paayments', paymentsApiRoutes);
app.use("/orders", orderRouter);
app.use("/api/orders", ordersApiRouter);
app.use("/order_status", orderStatusRouter);
app.use('/signup', signupRoutes);
app.use('/api/signup', signupApiRoutes);
app.use('/owner', ownerRoutes);
app.use('/payments', paymentsRoutes);
app.use('/api/payments', paymentsApiRoutes);






// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`


app.use('/signup', signupRoutes);
app.use('/api/signup', signupApiRoutes);

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.render("index");
});
// console.log(localStorage.getItem('user_cart'))


/* app.use ('/', usersApiRoutes) */

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
