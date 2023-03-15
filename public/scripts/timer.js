$(() => {
  $('#owner_input').on('click', () => {

    let value = $('#order-time').val();
    //  console.log(value,"value here")
      let inputTime = parseInt(value);
    localStorage.setItem('time',inputTime*60000) //key and value in localstorage

  }) //save the time into localstorage

  let time = parseInt(localStorage.getItem('time'));//fetch time from local storage
 console.log(time, 'here time')
    let new_countdown = new Date().getTime() + (time);
    time = new_countdown;
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
        document.getElementById("timer").innerHTML =  hours + "h "
     + minutes + "m " + seconds + "s ";


         // If the count down is over, write some text
         if (distance <= 0) {
             clearInterval(x);
            // localStorage.removeItem('saved_countdown');
            document.getElementById("timer").innerHTML = "The Food Is Ready";
            // document.getElementById("timer2").innerHTML = "Pending";
        }  }, 1000);
  });
