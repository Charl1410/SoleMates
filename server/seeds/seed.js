const db = require('../config/connection');
const { User, Product, Category, Order, Brand } = require('../models');
const userSeeds = require('./users.json');
const categorySeeds = require('./categories.json');
const brandSeeds = require('./brands.json');
const productSeeds = require('./products.json');

// TODO: add seed for orders
//const orderSeeds = require('./orderSeeds.json');

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

    for (let i = 0; i < productSeeds.length; i++) {
      const product = productSeeds[i];
      const { _id, categories } = await Product.create(product);

      const newBrand = await Brand.findOneAndUpdate(
        { name: brand },
        {
          $addToSet: {
            products: _id,
          },
        }
      );

      for (let j = 0; j < categorySeeds.length; j++) {
        const newCategory = await Category.findOneAndUpdate(
          { name: categories[j] },
          {
            $addToSet: {
              products: _id,
            },
          }
        );
      }

    }

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
