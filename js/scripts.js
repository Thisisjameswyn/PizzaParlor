function Pizza(size, topping1, topping2, topping3)  {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.toppingAmount = topping1 + topping2 + topping3;
  this.price = 0;
}

Pizza.prototype.calcCharge = function() {
  if(this.size == 2)  {
    this.price += 8;
  } else if (this.size == 1)  {
    this.price += 6;
  } else {
    this. price += 4;
  }

  if(this.toppingAmount > 2) {
    this.price += 6;
  } else if (this.toppingAmount < 2) {
    this.price += 2;
  } else {
    this.price += 4;
  }

  //calc price for topping nunmber

  //calc price for special toppings
}

$(document).ready(function()  {
  $("form#pizza-submit").submit(function(event) {
    event.preventDefault();
    let pizzaPie = new Pizza(parseInt($("#size").val()),parseInt($("#topping1").val()),parseInt($("#topping2").val()),parseInt($("#topping3").val()));
    console.log(pizzaPie);
    pizzaPie.calcCharge();
    console.log(pizzaPie.price);
    
    // let pizzaTime = $("#movie option:selected").text();
  });
});
