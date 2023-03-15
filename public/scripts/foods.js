$(() => {
  $('#fetch-foods').on('click', () => {
    $.ajax({
      method: 'GET',
      url: '/api/foods'  //extract data from api/foods
    })
    .done((response) => {
      const $foodsList = $('#foods'); //where id=foods in ejs file
      $foodsList.empty();

      for(const food of response.foods) {
        /* console.log('here',food); */
      // let a = `<img src = ${food.food_url} style = "width:50px; height:50px">food name</img>`;
      const temp =`
        <main class="menu">
        <section class="food">
          <div class="food-img">
          <img src= ${food.food_url} style = "width:50px; height:50px>
          </div>
          <div class="food-info">
          <h4 class="food-name" >${food.name}</h4>
          <p class="food-description">${food.description}</p>
          <h4 class="food-price" >${food.price}</h4>
          </div>
          <button>Add</button>
        </section>
        </main>
        `

       $('#container').append(temp);



        // $(`<li class="food">`).text(food.name).appendTo($foodsList);
      }
    });
  });
});
