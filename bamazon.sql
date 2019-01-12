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
VALUES ("product 1", "Dept X", 5.55, 789);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product 2", "Dept X", 8.50, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product 3", "Dept Y", 500, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product 4", "Dept Z", 300, 250);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product 5", "Dept X", 10, 800);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product 6", "Dept Z", 10, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product 7", "Dept X", 5, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product 8", "Dept X", 1.50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product 9", "Dept Y", 11.50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product 10", "Dept Z", 3.50, 22);

UPDATE products SET stock_quantity="0" WHERE product_name = "product 8";


