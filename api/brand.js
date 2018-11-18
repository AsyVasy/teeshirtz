/* jshint esversion : 6 */

// @root/api/brand.js

const brandAPi = function brandAPi(connection) {

    const router = require("express").Router();
    const brandModel = require("../model/brand")(connection);
  
    router.post('/brand', (req, res) => {
      brandModel.create((err, dataset) => {
        res.send(dataset);
      }, req.body); // post datas ici ...
    });
   
    router.get('/brand/:id', (req, res) => {
      brandModel.get((err, dataset) => {
        res.send(dataset[1]);
      }, req.params.id);
    });
  
    router.get('/brand', (req, res) => {
      console.log("ca get");
      
      brandModel.get( (err, dataset) => {
        res.send(dataset);
      }, null);
    });
  
    router.delete('/brand', (req, res) => {
      brandModel.remove((err, dataset) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(dataset);
      }, req.body.ids); // tableau d'ids ici ...
    });
  
    router.patch('/brand', (req, res) => {
      brandModel.update((err, dataset) => {
        if (err) return res.status(500).send(err);
        else return res.status(200).send(dataset);
      }, req.body); // un tableau d'ids ici ...
    });
  
    return router;
  };
  
  module.exports = brandAPi;
  