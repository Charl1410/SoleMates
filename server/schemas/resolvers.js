// require apollo 
const { AuthenticationError } = require('apollo-server-express');

//bring in the models 

const {User, Category, Order, Product} = require('../models')

const { signToken } = require('../utils/auth');

// write queries and mutations 

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('orders');
        },
        me: async(parent, args, context) => {
            if(context.user){
                return User.findOne({ _id: context.user._id}).populate('orders')
            }
            throw new AuthenticationError("You must be logged in")
        },
        categories: async () => {
            return Category.find()
        },
        category: async(parent, {name}) => {
            return Category.findOne({name:name}).populate('products')
        },
        products: async (parent, {productId}) => {
            return Product.find({_id: productId})
        },
        product: async() => {
            return Product.find()
        },
        orders: async (parent, {orderId}) => {
            return Order.find({_id:orderId}).populate('')
        },
        order: async() => {
            return Order.find()
        }


    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
          },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('No user found with this email address');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
          },

          newOrder: async (parent, { customerName, customerAddress, items, total }, context) => {
            if (context.user){
                const order = await Order.create({
                    customerName,
                    customerAddress,
                    items,
                    total
                })

                await User.findOneAndUpdate(
                    {id: context.user._id},
                    {$addToSet: {orders: order._id}}
                )
            }
            throw new AuthenticationError('You need to be logged in!');
          }
    }, 
}

module.exports = resolvers