const router = require('express').Router();
// Import the models
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // Find all categories
  try {
    const categoriesAll = await Category.findAll({
    // be sure to include its associated Products
    include: [{ model: Product}]
    });
    // Sucess response 200 - OK
    res.status(200).json(categoriesAll);
  } catch(err){
    // Server error response 500 - Internal Server Error
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const categorySingle = await Category.findByPk(req.params.id, {
    // be sure to include its associated Products
    include: [{ model: Product}]
    });
    if(!categorySingle){
      // Client error response 404 - Not found
      res.status(404).json({ message: 'No category found with this id'});
      return;
    }
    // Sucess response 200 - OK
    res.status(200).json(categorySingle);
  } catch(err) {
    // Server error response 500 - Internal Server Error
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryNew = await Category.create(req.body);
    // Sucess response 200 - OK
    res.status(200).json(categoryNew);
  } catch(err) {
    // Client error response 400 - Bad request
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryUpdate = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if(!categoryUpdate) {
      // Client error response 404 - Not found
      res.status(404).json({ message: 'No category found with this id'});
      return;
    }
    res.json(categoryUpdate);
  } catch(err) {
    // Client error response 400 - Bad request
    res.status(400).json;
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryDelete = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if(!categoryDelete) {
      // Client error response 404 - Not found
      res.status(404).json({ message: 'No category found with this id'});
      return;
    }
    // Sucess response 200 - OK
    res.status(200).json(categoryDelete);
  } catch(err) {
    // Server error response 500 - Internal Server Error
    res.status(500).json(err);
  }
});

module.exports = router;
