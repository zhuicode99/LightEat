# Food-Ordering WebApp “LightEat”

- Welcome to LightEat! A food ordering experience for fictitious restaurant where user can select desired foods, add/remove items to cart and place an order for pick-up
- Notification will be sent by using SMS telecom API service, Twilio, when the order is placed and when it's ready. Clients are able to check estimated preparation time online as well.


## Final Product

_"LightEat" Project Demo_
![LightEat-Demo](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjcyMmJjZDAyNzFkNmNmNzM2ZWUzOWE0NDQ0ZTkxZWJiMGFmMTYyZiZjdD1n/81gJyhOT9fm5xtqj2E/giphy.gif)

## Getting Started

1. Install dependencies: `npm i`
2. Fix to binaries for sass: `npm rebuild node-sass`
3. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
4. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
5. Visit `http://localhost:8080/`

## Dependencies
- chalk: ^2.4.2,
- dotenv: ^2.0.0,
- ejs: ^2.6.2,
- express: ^4.17.1,
- morgan: ^1.9.1,
- pg: ^8.5.0,
- sass: ^1.35.1,
- twilio: ^3.77.2
- "nodemon": ^2.0.10
