function Order(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}


Order.prototype.priceCalc = function() {
  if (this.size === small) {
    price = 10;
  } else if (this.size === medium) {
    price = 15;
  } else {
    price = 20;
  }
  if (this.time === "Matinee") {
    price -= 5;
  }
  return price;
}




$(document).ready(function(){
  $("form#order-form").submit(function(event){
    event.preventDefault();
    $("#pizza-order").show();
    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      var toppingsForPizza = $(this).val();
      $('#pizza-order').append(toppingsForPizza + "<br>");
    });
    $("#pizza-size").show();
    $("input:checkbox[name=sizes]:checked").each(function(){
      var whatSizePizza = $(this).val();
      $('#pizza-size').append(whatSizePizza + "<br>");
    });

    $('#order-form').hide();
  });
});
