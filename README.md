![License](https://img.shields.io/badge/license-MIT-blue)
# E-commerce-Back-End

## Description

This e-commerce back end application uses Express.js API and Sequelize to interact with a MySQL database.

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:
```
npm i
```
It will install `express`, `sequelize`, `mysq12`, and `dotenv`.

* `Express` to create our server side.

* `Sequelize` and `mysq12` creates a connection between your MySQL database and this application.

* `dotenv` will protect your credentials, check `.env.EXAMPLE` to see what you need on your `.env` file.

## Usage

Before start create your database on MySQL. Then, use the file `.env.EXAMPLE` to create your `.env` with your database name, user name, and password. Next, run on your command line `npm run seed` to seed data to your database so that you can test your routes. 

There are four models in this database that will create the following tables:

* `Category`

  * `id`

    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `category_name`
  
    * String.
  
    * Doesn't allow null values.

* `Product`

  * `id`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `product_name`
  
    * String.
  
    * Doesn't allow null values.

  * `price`
  
    * Decimal.
  
    * Doesn't allow null values.
  
    * Validates that the value is a decimal.

  * `stock`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set a default value of `10`.
  
    * Validates that the value is numeric.

  * `category_id`
  
    * Integer.
  
    * References the `Category` model's `id`.

* `Tag`

  * `id`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `tag_name`
  
    * String.

* `ProductTag`

  * `id`

    * Integer.

    * Doesn't allow null values.

    * Set as primary key.

    * Uses auto increment.

  * `product_id`

    * Integer.

    * References the `Product` model's `id`.

  * `tag_id`

    * Integer.

    * References the `Tag` model's `id`.

Note that the relationship between these tables have been created as following:

* `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products, but a product can only belong to one category.

* `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. 

Finally, to be able to test your back end routes with Postman, Insomnia Core or similar application, run on your command line `npm start` to start your local server.

Click on the gif below to watch a demo video for this application.

[![e-commerce](https://github.com/Mimila-85/E-commerce-Back-End/blob/master/assets/images/eCommerceDemo.gif)](https://youtu.be/he1b_SX6h_Q)

## License

This project is licensed under the terms of the MIT license.

## Contributing

If you would like to participate on this project please submit any bugs or feature requests to the contact listed on the `questions` section of this README. 

## Tests

This back end application can be test using Postman, Insomnia Core or similar application to test the GET, POST, PUT and DELETE routes. 

## Questions

If you have any questions about the repo, open an issue or contact me directly at camila.alves85@gmail.com. You can find more of my work at [Mimila-85](https://github.com/Mimila-85).
