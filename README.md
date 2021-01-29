## James Wyn

# Pizza Parlor


### Description
This is my fourth week project for Epicodus.  The objective is to take an input for pizza and return a price based on size and toppings chosen.

### Technologies Used
* Bootstrap
* JavaScript
* jQuery
* HTML
* CSS
* MD

## Setup/Installation

* Clone repository to desktop
* launch in terminal and then launch index.html or send to a live server.

## Link where to find my GitHub link

*https://github.com/Thisisjameswyn/PizzaParlor


### Specs

* Describe: Pizza.prototype.calcCharge()
Test: "It should calculate the cost to be 0 if no size or toppings are selected"
Expect(calcCharge(0, 0, 0, 0).toEqual([0]);

* Test: "It should calculate the cost to be 8 if large size and no toppings are selected"
Expect(calcCharge(3, 0, 0, 0).toEqual([8]);

* Test: "It should calculate the cost to be 10 if large size and one topping is selected"
Expect(calcCharge(3, 1, 0, 0).toEqual([10]);

* Test: "It should calculate the cost to be 12 if large size and two toppings are selected"
Expect(calcCharge(3, 1, 1, 0).toEqual([12]);

* Test: "It should calculate the cost to be 14 if large size and 3 toppings are selected"
Expect(calcCharge(3, 1, 1, 1).toEqual([14]);



## License
[MIT License](https://opensource.org/licenses/MIT)
&copy; James Wyn 2021