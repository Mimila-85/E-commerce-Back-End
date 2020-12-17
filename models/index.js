// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
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

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
