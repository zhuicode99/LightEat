# Food-Ordering WebApp “LightEat”

- Welcome to LightEat! A food ordering experience for fictitious restaurant where user can select desired foods, add/remove items to cart and place an order for pick-up
- Notification will be sent by using SMS telecom API service, Twilio, when the order is placed and when it's ready. Clients are able to check estimated preparation time online as well.


## Final Product

![LightEat-Demo](https://camo.githubusercontent.com/1d8d7ee235ff7287516dc50abb0c0402aa070b844d18a7ee2b548ae601858d9a/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45785a6a63794d6d4a6a5a4441794e7a466b4e6d4e6d4e7a4d325a57557a4f5745304e4451305a546b785a574a694d47466d4d5459795a695a6a6444316e2f3831674a79684f5439666d357874716a32452f67697068792e676966)

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
