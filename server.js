// load .env data into process.env
require("dotenv").config();

// Web server config
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const morgan = require("morgan");
const cookieSession = require("cookie-session");

const PORT = process.env.PORT || 8080;
const app = express();



const ejs = require("ejs");
app.engine("ejs", ejs.renderFile);
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


const foodsRoutes = require("./routes/foods"); //require from route folder
const foodsApiRoutes = require('./routes/foods_api');
const checkoutRoutes = require("./routes/checkout");
const statusRoutes = require("./routes/status");
const twilioRoutes = require("./routes/twilio");

app.use("/foods", foodsRoutes); //this foods is the url
app.use('/api/foods', foodsApiRoutes);
app.use("/checkout", checkoutRoutes);
app.use("/status", statusRoutes);
app.use("/twilio", twilioRoutes);



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
