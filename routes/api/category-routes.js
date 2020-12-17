const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // Find all categories
  try {
    const categoriesAll = await Category.findAll({
    // be sure to include its associated Products
    include: [{ model: Product}]
    });
    res.status(200).json(categoriesAll);
  } catch(err){
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
      res.status(404).json({ message: 'No category found with this id'});
      return;
    }
    res.status(200).json(categorySingle);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryNew = await Category.create(req.body);
    res.status(200).json(categoryNew);
  } catch(err) {
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
      res.status(404).json({ message: 'No category found with this id'});
      return;
    }
    res.json(categoryUpdate);
  } catch(err) {
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
      res.status(404).json({ message: 'No category found with this id'});
      return;
    }
    res.status(200).json(categoryDelete);
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
