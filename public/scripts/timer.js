localStorage.setItem('time', 0.1 * 60000); //default 0.5 min

let time = parseInt(localStorage.getItem('time')); //fetch time from local storage

let new_countdown = new Date().getTime() + time;
time = new_countdown;
console.log(time, "time here")
// Update the count down every 1 second
let x = setInterval(() => {
  // Get today's date and time
  let now = new Date().getTime();
  // Find the distance between now and the allowed time
  let distance = time - now;
  // let x = distance;
  localStorage.setItem('time', distance);

  // Time counter
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML = hours + "h "
    + minutes + "m " + seconds + "s ";


/*   const accountSid = "ACdb009032d29869242cb11b305b227cb3";
  const authToken = "5360f1657373053645d025a63eabd0bb";
  const client = require('twilio')(accountSid, authToken);
 */
 /*  function sendTwilioMessage() {
    client.messages
      .create({
        body: "Your Order is Ready!",
        from: "+14752646138",
        to: "+16479947763",
      })
      .then(function (message) {
        console.log("Order Ready Message Sent! Message SID: " + message.sid);
      })
      .catch(function (error) {
        console.error("Error sending Twilio message: " + error.message);
      });
  } */
  // If the count down is over, write some text
  if (distance <= 0) {
    clearInterval(x);
    // localStorage.removeItem('saved_countdown');
    document.getElementById("timer").innerHTML = "The Food Is Ready";
    // document.getElementById("timer2").innerHTML = "Pending";
   /*  sendTwilioMessage(); */
   $.ajax({
    url: "/twilio",
    method: "POST",
    success: function(response) {
      console.log(response);
    },
    error: function(error) {
      console.log(error);
    }
  });

  }
}, 1000);
