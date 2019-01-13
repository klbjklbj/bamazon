var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "yikes",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
    listProducts();
});

function listProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        console.table(res);
        productSearch();
    });
}

function productSearch() {
    inquirer
        .prompt([{
            name: "productID",
            type: "input",
            message: "For which product ID would you like to search?"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many would you like to order?"
        },

        ])
        .then(function (answer) {
            let productIDWanted = answer.productID;
            connection.query("SELECT * FROM products WHERE ?", { item_id: productIDWanted }, function (err, res) {
                //console.log("answer.productID=" + answer.productID);
                console.table(res);
                let itemsAvailable = res[0].stock_quantity;
                let itemCost = res[0].price;

                //console.log(itemCost);

                //console.table(itemsAvailable);

                let itemsDesired = answer.quantity;
                let totalCost = itemsDesired * itemCost;
                console.log("productIDWanted: " + productIDWanted);
                console.log("itemsDesired: " + itemsDesired);

                if (itemsDesired <= itemsAvailable) {
                    let newItemsAvailableTotal = itemsAvailable - itemsDesired;
                    //console.log("Great! We have enough available to order");
                    //console.log("Now there are " + newItemsAvailableTotal + " left");
                    //"UPDATE products SET stock_quantity = 0 WHERE item_id=5"
                    let updateQuery = "UPDATE products SET stock_quantity = " + newItemsAvailableTotal + " WHERE item_id=" + answer.productID;
                    //console.log(updateQuery);
                    connection.query(updateQuery,
                    )
                    console.log("Thanks for your order. Your total is: $" + totalCost.toFixed(2));
                    listProducts();
                }
                else {
                    console.log("Sorry, there are not enough left in stock. Please try a different order.");
                    listProducts();
                }
            });
        });
}
