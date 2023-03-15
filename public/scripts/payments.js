/* $(() => {
    $.ajax({
      method: 'GET',
      url: '/api/users'
    })
    .done((response) => {
      for(const user of response.customers) {
      const temp =`
        <p>Please confirm your phone number ${user.name}!</p>
        <p>${user.phone}</p>
        <a href ="/foods"><button class="btn btn-dark" id="order-status">Check Order Status</button></a>
 `
       $('#payment-info').append(temp);
      }
    });
  });
 */
