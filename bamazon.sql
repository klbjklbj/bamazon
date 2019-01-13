DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
item_id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAL(10,3) NOT NULL,
stock_quantity INTEGER(10) NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fuzzy Dice", "Novelties", 5.55, 789);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Redneck Rampage", "Video Games", 28.50, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Zima 6-pack", "Food & Beverage", 7.99, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Whoopie Cushion", "Novelties", 2.49, 250);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ron Swanson Bobblehead", "Novelties", 8.95, 800);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pet Rock", "Pets", 10, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Best of Weird Al Yankovic", "Music", 15.99, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fake Barf", "Novelties", 1.50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Land of the Lost - The Complete Collection", "DVDs", 11.50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Krustys Kough Syrup", "Health & Beauty", 3.50, 22);

UPDATE products SET stock_quantity="0" WHERE product_name = "product 8";


