function Pizza(size, topping1, topping2, topping3)  {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.price = 0;
}

Pizza.prototype.calcCharge = function() {
  //calc price for size
  if(this.size == 2)  {
    this.price += 8;
  } else if (this.size == 1)  {
    this.price += 6;
  } else {
    this. price += 4;
  }
  //calc price for topping nunmber

  //calc price for special toppings
}

$(document).ready(function()  {
  let pizzaPie = new Pizza(1,0,0,0);
  pizzaPie.calcCharge();
  console.log(pizzaPie);
  // $("").submit(function(event) {

  // });
});