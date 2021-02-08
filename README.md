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

## Setup/Installation Requirements

### Without Github template clone:
* Clone Repo
* Delete .git if needing a clean commit history
* Initilize git
* Add remote repository to new git
* Make first commit only adding .gitignore to commit
* Open new repo to begin npm initilization

### With Github
* Press use this template
* Create new repo
* Clone new repo down to
* Open new repo to begin npm initilization

### Npm Initilization
* Verify package.json has correct npm packages for needs
* Modify title on line 18 of webpack.config.js
* Modify title on line 2 of package.json
* Modify description on line 19 of package.json
* Modify title on line 2 if package-lock.json
* Run ```npm init -y```
* Run ```npm install```
* Verify install works by running ```npm run test``` and ```npm run build```

## Link where to find my GitHub link

*https://github.com/Thisisjameswyn/PizzaParlor


### Specs

* Describe: Pizza()
Test: "It should correctly build a pizza object with given parameters"
Expect(new Pizza(size, topping1, topping2, topping3).toEqual(size, topping1, topping2, topping3);

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