// const Product = require("../model/mongoose/product");
const Product = require("../model/sequelize/product");

let index = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.render("../views/product/index", { products });
  } catch (error) {
    res.status(400).send(error);
  }
};

let show = async (req, res) => {
  product = await Product.findOne({
    where: { id: req.params.id },
  });
  res.render("../views/product/show", { product });
};

let create = (req, res) => {
  res.render("../views/product/create");
};

let save = async (req, res) => {
  await (await Product.create(req.body))
    .save()
    .then(() => {
      res.redirect("/products");
    })
    .catch((err) => {
      res.render("../views/error");
    });
};

let edit = async (req, res) => {
  product = await Product.findOne({
    where: { id: req.params.id },
  });
  console.log(product);
  res.render("../views/product/edit", { product });
};

let update = async (req, res) => {
  await Product.update(req.body, {
    returning: true,
    where: { id: req.params.id },
  })
    .then((result, updatedProduct) => {
      console.log(result);
      res.render("../views/product/show", { updatedProduct });
    })
    .catch((error) => {
      console.log(error);
    });
};

let destroy = async (req, res) => {
  try {
    await Product.destroy({
      where: { id: req.params.id },
    });
    res.redirect("/products");
  } catch {
    res.render("../views/error");
  }
};

module.exports = {
  index: index,
  show: show,
  create: create,
  save: save,
  edit: edit,
  update: update,
  destroy: destroy,
};
