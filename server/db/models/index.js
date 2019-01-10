const User = require('./user')
const Book = require('./book')
const Order = require('./order')
const BooksForOrders = require('./booksForOrders')

User.hasMany(Order)
Order.belongsTo(User)
Order.belongsToMany(Book, {through: BooksForOrders})
Book.belongsToMany(Order, {through: BooksForOrders})

const Staff = require('./staff')
const Author = require('./author')
const Genre = require('./genre')

Staff.belongsToMany(Book, {through: 'StaffBooks'})
Book.belongsToMany(Staff, {through: 'StaffBooks'})

//Genre.hasMany(Book)
//Book.belongsTo(Genre)
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Book,
  Order,
  Staff,
  Genre,
  Author,
  BooksForOrders
}
