const router = require('express').Router();
const { json } = require('sequelize');
// Import the models
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // Find all tags
  try{
    const tagsAll = await Tag.findAll({
    // Include/Join its associated model/table Product data.
    include: [{ model: Product, through: ProductTag }]
    });
    // Sucess response 200 - OK
    res.status(200).json(tagsAll);
  } catch(err) {
    // Server error response 500 - Internal Server Error
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // Find a single tag by its `id`
  try {
    const tagSingle = await Tag.findByPk(req.params.id, {
    // Include/Join its associated model/table Product data.
    include: [{ model: Product, through: ProductTag }]
    });
    if(!tagSingle){
      // Client error response 404 - Not found
      res.status(404).json({ message: 'No tag found with this id'});
      return;
    }
    // Sucess response 200 - OK
    res.status(200).json(tagSingle);
  } catch(err) {
    // Server error response 500 - Internal Server Error
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // Create a new tag
  try {
    const tagNew = await Tag.create(req.body);
    // Sucess response 200 - OK
    res.status(200).json(tagNew);
  } catch (err) {
    // Client error response 400 - Bad request
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagUpdate = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.json(tagUpdate);
  } catch(err) {
    // Client error response 400 - Bad request
    res.status(400).json;
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagDelete = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if(!tagDelete) {
      // Client error response 404 - Not found
      res.status(404).json({ message: 'No tag found with this id'});
      return;
    }
    // Sucess response 200 - OK
    res.status(200).json(tagDelete);
  } catch(err) {
    // Server error response 500 - Internal Server Error
    res.status(500).json(err);
  }
});

module.exports = router;
