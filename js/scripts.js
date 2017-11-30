function Order(toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}

Order.prototype.priceCalc = function() {
  if (this.size === "Small") {
    price = 10;
  } else if (this.size === "Medium") {
    price = 15;
  } else {
    price = 80;
  }
  //if (this.time === "Matinee") {
  //  price -= 5;
//  }
  return price;
}





$(document).ready(function(){
  $("form#order-form").submit(function(event){
    event.preventDefault();
    $("#pizza-order").show();
    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      var toppings = $(this).val();
      $('#pizza-order').append(toppings + "<br>");


    $("#pizza-size").show();

      var size = $("#size").val();
      $('#pizza-size').append(size);

      var price = 0;
      var myOrder = new Order(toppings, size, price);

      $("#pizza-cost").append(myOrder.priceCalc(price));
      $("#pizza-cost").show()
      console.log(myOrder.priceCalc(price));
    });
    $('#order-form').hide();
  });
});
