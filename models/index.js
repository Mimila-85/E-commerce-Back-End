// Import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define a Categories as having many Products to create a foreign key in the `license` table
Category.hasMany(Product, {
  foreignKey: 'category_id',
  // When we delete a Category, make sure to also delete the associated Products. As Category has many products, but a product can only belong to one category.
  onDelete: 'CASCADE'
});

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: {
    name: 'category_id',
    unique: false
  }
});

// Products belongToMany Tags (through ProductTag)
// Define the ProductTag model as our through table. Sequilize creates a productId as foreign key.
Product.belongsToMany(Tag, { through: ProductTag });

// Tags belongToMany Products (through ProductTag).
// Define the ProductTag model as our through table. Sequilize creates a tagId as foreign key.
Tag.belongsToMany(Product, { through: ProductTag });

// Package our models and export them as an object so we can import them together and use their proper names.
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
