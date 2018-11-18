/* jshint esversion : 6 */

// @root/api/index.js

// ROUTAGE DE L'API
const api = (function api() {

    const APIVersion = 1; // notre api est en version 1
    const database = require(__dirname + "/../model")({
      password: "", // définition du mot de passe de mySQL
      database: "tshirtz" // base de donnée cible
    });
  
    const routers = []; // on expotera ce tableau une fois rempli de routeurs...
    // IMPORT DES ROUTES DE l'API products
    const productsRouter = require("./products")(database.connection); // module api products
    const brandRouter = require("./brand")(database.connection); // module api brand
   
  
    // aggrégation des routeurs dans un tableau
    routers.push(productsRouter);
    routers.push(brandRouter);

    return { // définition des propriétés publiques du module @root/api/index.js
      version: APIVersion,
      prefix: `/api/v${APIVersion}`,
      routers: routers
    }; // on récupère ces valeurs dans @root/index.js
  
  }());
  
  module.exports = api;
   