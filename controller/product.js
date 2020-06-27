const Product = require("../model/product");

let index = async (req, res) => {
  try {
    const products = await Product.find();
    res.render("../views/product/index", {products});
  }
  catch (error) {
    res.status(400).send(error)
  }
};

let show = async(req, res) => {
  product = await Product.findOne({ _id: req.params.id})
  res.render("../views/product/show", { product });
};

let create = (req,res) => {
  res.render("../views/product/create");
};

let save = async (req, res) => {
    const product = new Product(req.body)
    try{
      await product.save()
      res.redirect('/products');
    }
    catch(error){
      res.render('../views/error')
    }
};

let edit = async (req, res) => {
  product = await Product.findOne({ _id: req.params.id});
  console.log(product);
  res.render("../views/product/edit", { product });
};

let update = async (req, res) => {
  await Product.findOneAndUpdate({ _id: req.params.id},req.body,(error,product)=>{
    res.render("../views/product/show", { product });
  });
};

let destroy = async (req, res) => {
  try {
    await Product.findOneAndDelete({_id: req.params.id})
    res.redirect('/products');
  }
  catch {
    res.render('../views/error')
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
