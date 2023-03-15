/* const { getUserByPhone } = require("../db/queries/customer"); backend function */


$(() => {
  $('#signup').on('click', () => {
    let email= $('#email').val();
    let phone= $('#phone').val();
    let name= $('#name').val();
    $.ajax({
      method: 'POST',
      data: {email:email, phone:phone, name:name},
      url: '/api/signup'

    })
    .done((response) => {

 /*  if(response.status === 200){
   return alert('pls login')
  } */
     alert('Successfully Created Your Account!')
     window.location.href="/";  //js redirect.
    });
  });
});
