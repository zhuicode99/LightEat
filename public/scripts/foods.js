$(document).ready(function () {
  let userOrder = {};

  const renderSingleOrder = function (order) {
    return `<div class="order-summary-container">
    <div class="order-food-pic">
      <img src=${order.food_url}>
    </div>
    <div class="order-detail">
      <span>
        ${order.name}
      </span>
      <span class="order-price">CA$${order.price} </span>
      <span class="food-count">${order.count} </span>
    </div>
    <div class="delete-order">
      <form class="delete-form">
        <input type="hidden" name ="id" class="food-id" value="${order.id}">
        <button type="submit" class="btn-delete"><i class="fa-solid fa-trash"></i></button>
      </form>
    </div>
  </div>`;
  };

  const renderAllOrders = function (orders) {
    for (const order in orders) {
      const newOrder = renderSingleOrder(orders[order]);

      $("#main-order-container").append(newOrder);
    }
  };

  $(".add-food").submit(function (event) {
    event.preventDefault();
    userOrder = {
      id: event.target.id.value,
      name: event.target.name.value,
      price: event.target.price.value,
      food_url: event.target.url.value,
      count: 1,
    };
    addItemToCart(userOrder);
    $("#main-order-container").empty();
    renderAllOrders(JSON.parse(localStorage.getItem("user_cart")));
    $(".order-amount").val(
      "CA$" + getSubTotal(localStorage.getItem("user_cart"))
    );
    $(".order-count").val(getOrderCount(localStorage.getItem("user_cart")));
  });
  console.log("script loaded");
  $("#main-order-container").on("submit", ".delete-form", function (event) {
    event.preventDefault();
    console.log("delete-form");
    deleteItemFromCart(event.target.id.value);
    $("#main-order-container").empty();
    renderAllOrders(JSON.parse(localStorage.getItem("user_cart")));

    $(".order-amount").val(
      "CA$" + getSubTotal(localStorage.getItem("user_cart"))
    );
    $(".order-count").val(getOrderCount(localStorage.getItem("user_cart")));
  });

  const addItemToCart = function (food) {
    let carts = JSON.parse(localStorage.getItem("user_cart"));
    if (carts === null) {
      const newFood = { [food.id]: food };
      localStorage.setItem("user_cart", JSON.stringify(newFood));
    }

    if (carts !== null) {
      if (carts[food.id]) {
        for (const cart in carts) {
          if (carts[cart].name === food.name) {
            carts[cart] = {
              id: food.id,
              name: food.name,
              price: food.price,
              food_url: food.food_url,
              count: carts[cart].count + 1,
            };
            localStorage.setItem("user_cart", JSON.stringify(carts));
            break;
          }
        }
      } else {
        carts[food.id] = {
          id: food.id,
          name: food.name,
          price: food.price,
          food_url: food.food_url,
          count: 1,
        };

        localStorage.setItem("user_cart", JSON.stringify(carts));
      }
    }
    //
  };

  const getSubTotal = function (orders) {
    const obj = JSON.parse(orders);
    let subTotal = 0;

    for (const key in obj) {
      // console.log(obj[key]);
      subTotal += obj[key].price * obj[key].count;
    }

    return subTotal;
  };

  const getOrderCount = function (orders) {
    const obj = JSON.parse(orders);
    let count = 0;

    for (const key in obj) {
      // console.log(obj[key]);
      count += obj[key].count;
    }

    return count;
  };

  const getTotals = function () {
    const subTotal = getSubTotal(localStorage.getItem("user_cart"));

    const tax = Math.round(subTotal * 0.14);
    const total = subTotal + tax;
    return { tax, subTotal, total };
  };

  const deleteItemFromCart = function (id) {
    console.log("this function is called", id);
    const cart = JSON.parse(localStorage.getItem("user_cart"));
    delete cart[id];
    localStorage.setItem("user_cart", JSON.stringify(cart));
  };

  $(".order-amount").val(
    "CA$" + getSubTotal(localStorage.getItem("user_cart"))
  );
  $(".order-count").val(getOrderCount(localStorage.getItem("user_cart")));
  renderAllOrders(JSON.parse(localStorage.getItem("user_cart")));

  $("#submit-order").on("submit", function (event) {
    event.preventDefault();
    const data = JSON.parse(localStorage.getItem('user_cart'));
    $.post({url:'/api/orders', data: data }).then((res)=>{
      localStorage.clear();
      window.location.replace("http://localhost:8080/foods");
    });
  });

  $(".estimated-tax").val(getTotals().tax);
  $(".subtotal").val(getTotals().subTotal);
  $(".calculated-total").val(getTotals().total);


  $(".place-order").on("submit", localStorage.clear())



//clear storage when order placed


});
//END OF DOCUMENT READY
