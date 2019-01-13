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
    menuStart();

});

function viewProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        console.table(res);
        menuStart();
    });
}

function viewLowInventory() {
    connection.query("SELECT * FROM products WHERE stock_quantity < 5", function (err, res) {
        console.table(res);
        menuStart();
    });
}

function addInventory() {
    inquirer
        .prompt([{
            name: "productID",
            type: "input",
            message: "Which product ID would you like to add to?"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many would you like to add?"
        },

        ])
        .then(function (answer) {
            let productIDWanted = answer.productID;
            let itemsToAdd = parseInt(answer.quantity);

            connection.query("SELECT * FROM products WHERE ?", { item_id: productIDWanted }, function (err, res) {
                console.table(res);
                let currentQuantity = res[0].stock_quantity;

                console.log("current Quantity:" + currentQuantity);
                console.log("answer.productID=" + answer.productID);
                console.log("itemsToAdd: " + itemsToAdd);

                let newItemTotal = itemsToAdd + currentQuantity;
                console.log("New Total: " + newItemTotal);

                let updateQuery = "UPDATE products SET stock_quantity = " + newItemTotal + " WHERE item_id=" + answer.productID;

                //console.table(res);

                //console.log(updateQuery);
                connection.query(updateQuery, function (err, res) {
                    console.table(res);

                })
            })
        })
}

function addProduct() {
    inquirer
        .prompt([{
            name: "productName",
            type: "input",
            message: "What is the name of the new product?"
        },
        {
            name: "department",
            type: "input",
            message: "What department is this new product bring added to?"
        },
        {
            name: "price",
            type: "input",
            message: "What is the price of the new item?"
        },
        {
            name: "quantity",
            type: "input",
            message: "What is the quantity you are adding?"
        },

        ])
        .then(function (answer) {
            connection.query("INSERT INTO products SET ?",
                {
                    product_name: answer.productName,
                    department_name: answer.department,
                    price: answer.price,
                    stock_quantity: answer.quantity
                }
            )

            viewProducts();

        })
}

function menuStart() {
    inquirer
        .prompt([{
            name: "menu",
            type: "list",
            message: "What would you like to do?",
            choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product'],
        },
        ])
        .then(function (answer) {
            // console.log(answer.menu);
            if (answer.menu === "View Products for Sale") {
                viewProducts();
            }
            if (answer.menu === "View Low Inventory") {
                // console.log("View Low Inventory");
                viewLowInventory();
            }
            if (answer.menu === "Add to Inventory") {
                // console.log("Add to Inventory");
                addInventory();
            }
            if (answer.menu === "Add New Product") {
                // console.log("Add New Product");
                addProduct();
            }

        })
}