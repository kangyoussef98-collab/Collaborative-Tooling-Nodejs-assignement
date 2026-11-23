const Item = require('../models/item.model');

module.exports = {
  create: (data) => Item.create(data),
  getAll: () => Item.find(),
  getById: (id) => Item.findById(id),
  update: (id, data) => Item.findByIdAndUpdate(id, data, { new: true, runValidators: true }),
  remove: (id) => Item.findByIdAndDelete(id),
};
