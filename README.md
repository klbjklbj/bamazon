
# Welcome to Bamazon! 

This is a storefront app created with Node.js, Inquirer.js and MySQL. 

# Getting Started
* Clone repo
* Run the command 'npm install' in Terminal or Gitbash 
* Run the command depending which mode you would like to use: 1) For Customer - 'node bamazonCustomer' or 2) For Manager - 'node bamazonManager'
* Run 'ctrl + c' to exit each mode

# How to use it

The file *bamazonCustomer.js* prompts users with two messages...The first asks the ID of the product they would like to buy.
The second message asks how many units of the product they would like to buy. Once the user/customer has placed the order, the application will check if the store has enough of the product to meet the customer's request. If there is not enough inventory 
the app will prevent the order from going through, let the user know, ask them to make a different order. If the store has enough of the product, the app will complete the order by giving the user the total order cost and by updating SQL database with the new inventory total.

Below is a screenshot of a customer ordering two of productID #2 with the total and updated inventory.
![Image of Customer Order](https://github.com/klbjklbj/bamazon/blob/master/images/order.png)

Below is a screenshot of a customer ordering productID #7 when there's not enough inventory.
![Image of Customer Order](https://github.com/klbjklbj/bamazon/blob/master/images/not-enough.png)


The file *bamazonManager.js* lists a set of menu options: *View Products for Sale*, *View Low Inventory*, *Add to Inventory*, and *Add New Product*. If a user/manager selects *View Products for Sale*, the app lists every available item: the item IDs, names, prices, and quantities. If a manager selects *View Low Inventory*, then the app lists all items with an inventory count lower than five. 
If a manager selects *Add to Inventory*, then the app displays a prompt that will let the manager "add more" of any item currently in the store. If a manager selects *Add New Product*, it allows the manager to add a completely new product to the store. *bamazonManager.js* also updates the SQL database where appropriate.

Below is a screenshot of the start menu for bamazonManager.js
![Image of Manager Menu](https://github.com/klbjklbj/bamazon/blob/master/images/menu.png)

Below is a screenshot of the View Products for Sale function for bamazonManager.js
![Image of Manager Menu](https://github.com/klbjklbj/bamazon/blob/master/images/products.png)

Below is a screenshot of the View Low Inventory function for bamazonManager.js
![Image of Manager Menu](https://github.com/klbjklbj/bamazon/blob/master/images/low.png)

Below is a screenshot of the Add to Inventory function for bamazonManager.js
![Image of Manager Menu](https://github.com/klbjklbj/bamazon/blob/master/images/add.png)

Below is a screenshot of the Add New Product for bamazonManager.js
![Image of Manager Menu](https://github.com/klbjklbj/bamazon/blob/master/images/new.png)








