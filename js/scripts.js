function Pizza(size, topping1, topping2, topping3)  {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.toppingAmount = topping1 + topping2 + topping3;
  this.price = 0;
}

Pizza.prototype.calcCharge = function() {
  this.price = this.size;

  if(this.toppingAmount > 2) {
    this.price += 6;
  } else if (this.toppingAmount < 2) {
    this.price += 2;
  } else {
    this.price += 4;
  }
}

$(document).ready(function()  {
  $("form#pizza-submit").submit(function(event) {
    event.preventDefault();
    let pizzaPie = new Pizza(parseInt($("#size").val()),parseInt($("#topping1").val()),parseInt($("#topping2").val()),parseInt($("#topping3").val()));
    console.log(pizzaPie);
    pizzaPie.calcCharge();
    console.log(pizzaPie.price);
    $("#order").text(`We have you booked for ${$("#size option:selected").text()} with ${$("#topping1 option:selected").text()}, the total price is  ${pizzaPie.price} dollars!  Better have my money ready.`)
    // let pizzaTime = $("#movie option:selected").text();
  });
});
