/* jshint esversion : 6 */

// @root/api/products.js

const productsAPi = function productsAPi(connection) {

  const router = require("express").Router();
  const productsModel = require("../model/products")(connection);

  router.post('/products', (req, res) => {
    console.log(req.body);
    console.log("capostttt");
    productsModel.create((err, dataset) => {
      res.send(dataset);
      
    }, req.body); // post datas ici ...
  });
 
  router.get('/products/:id', (req, res) => {
    productsModel.get((err, dataset) => {
      res.send(dataset[1]);
    }, req.params.id);
  });

  router.get('/products', (req, res) => {
    console.log("ca get");
    
    productsModel.get( (err, dataset) => {
      res.send(dataset);
    }, null);
  });

  router.delete('/products', (req, res) => {
    productsModel.remove((err, dataset) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(dataset);
    }, req.body.ids); // tableau d'ids ici ...
  });

  router.patch('/products', (req, res) => {
    productsModel.update((err, dataset) => {
      if (err) return res.status(500).send(err);
      else return res.status(200).send(dataset);
    }, req.body); // un tableau d'ids ici ...
  });

  return router;
};

module.exports = productsAPi;
