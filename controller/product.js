const Product = require("../model/product");

let index =  (req, res) => {
  try {
    // const products =  Product.find({});
    products = [{title:"hi",description:"hello",price:15},{title:"hi",description:"hello",price:15}];
    res.render("../views/product/index", { products});
  }
  catch (error) {
    res.status(400).send(error)
  }
};

let show = (req, res) => {
  product = {title:"hi",description:"hello",price:15}
  res.render("../views/product/show", { product });
};

let create = (req, res) => {
  res.render("../views/product/create");
};

let save = (req, res) => {

};

let edit = (req, res) => {
  product = {title:"hi",description:"hello",price:15}
  res.render("../views/product/edit", { product });
};

let update = (req, res) => {};

let destroy = (req, res) => {};

module.exports = {
  index: index,
  show: show,
  create: create,
  save: save,
  edit: edit,
  update: update,
  destroy: destroy,
};
