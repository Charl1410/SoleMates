const db = require('../config/connection');
const { User, Product, Category, Order, Brand } = require('../models');
const userSeeds = require('./users.json');
const categorySeeds = require('./categories.json');
const brandSeeds = require('./brands.json');
const productSeeds = require('./products.json');

db.once('open', async () => {
  try {
    await Category.deleteMany({});
    await User.deleteMany({});
    await Product.deleteMany({});
    await Order.deleteMany({});
    await Brand.deleteMany({});

    await User.create(userSeeds);
    await Category.create(categorySeeds);
    await Brand.create(brandSeeds);

    let createdProduct;
    for (let i = 0; i < productSeeds.length; i++) {
      const product = productSeeds[i];
    
      // Retrieve the ObjectIds of the categories based on their names
      const categoryIds = [];
      for (let j = 0; j < product.categories.length; j++) {
        const category = await Category.findOne({ name: product.categories[j] });
        categoryIds.push(category._id);
      }
    
      // Retrieve the ObjectId of the brand based on its name
      const brand = await Brand.findOne({ name: product.brand });
    
      // Create the product using the retrieved categoryIds and brand._id
      createdProduct = await Product.create({
        ...product,
        categories: categoryIds,
        brand: brand._id,
      });
    
      // Add the created product to each category
      for (let j = 0; j < product.categories.length; j++) {
        const newCategory = await Category.findOneAndUpdate(
          { name: product.categories[j] },
          {
            $addToSet: {
              products: createdProduct._id,
            },
          }
        );
      }
    }    

    for (let j = 0; j < categorySeeds.length; j++) {
      const newCategory = await Category.findOneAndUpdate(
        { name: categorySeeds[j].name }, // use the name property of the object
        {
          $addToSet: {
            products: createdProduct._id,
          },
        }
      );
    }    

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
