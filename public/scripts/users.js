// Client facing scripts here
/* $(() => {
  $('#fetch-users').on('click', () => {
    $.ajax({
      method: 'GET',
      url: '/api/users'
    })
    .done((response) => {
      const $usersList = $('#users');
      $usersList.empty();

      for(const user of response.users) {
        $(`<li class="user">`).text(user.name).appendTo($usersList);
      }
    });
  });
});
 *///original code
 $(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((response) => {
    for(user of response) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;
});
//new code
