function Pizza(size, topping1, topping2, topping3)  {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.toppingAmount = topping1 + topping2 + topping3;
  this.price = 0;
}

Pizza.prototype.calcCharge = function() {
  console.log(this.size);
  if(this.size > 0) {
    this.price = this.size;
    if(this.toppingAmount == 3) {
      this.price += 6;
    } else if (this.toppingAmount == 2) {
      this.price += 4;
    } else if (this.toppingAmount == 1) {
      this.price += 2;
    } else {
      this.price += 0;
    }
  }
}

$(document).ready(function()  {
  $("form#pizza-submit").submit(function(event) {
    event.preventDefault();
    
    let pizzaPie = new Pizza(parseInt($("#size").val()),parseInt($("#topping1").val()),parseInt($("#topping2").val()),parseInt($("#topping3").val()));
    
    pizzaPie.calcCharge();
    console.log(pizzaPie.size);
    $("#order").text(`We have you booked for a ${$("#size option:selected").text()} with ${$("#topping1 option:selected").text()}, ${$("#topping2 option:selected").text()} and ${$("#topping3 option:selected").text()} the total price is  ${pizzaPie.price} dollars!  Better have my money ready.`)
  });
});
