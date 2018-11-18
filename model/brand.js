/*jshint esversion :  6 */

// @root/model/brands.js

const brandsModel = function brandsModel(connection) {

    const create = function createbrands(clbk, data) {
      const q = "INSERT INTO brand (name) VALUES (?)";
      const payload = [data.name];
  
      connection.query(q, payload, (err, res, cols) => {
        // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(err, null);
        return clbk(null, res);
      });   
    };
  
    const remove = function deletebrands(clbk, ids) {
      // la clause SQL IN permet de chercher une valeur dans un tableau
      const q = "DELETE FROM brand WHERE id IN (?)";
  
      connection.query(q, [ids], function (err, res, fields) {
        // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(res, null);
        return clbk(null, res);
      });
    };
  
    const update = function editbrands(clbk, brands) {
      const q = "UPDATE brand SET name = ? WHERE id = ?";
      const payload = [brands.name, brands.id];
      connection.query(q, payload, function (err, res, fields) {
        // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(err, null);
        return clbk(null, res);
      });
    };
  
    const get = function getbrands(clbk, id) {
      var sql;
  
        sql = "SELECT * FROM brand";
      
  
      connection.query(sql, [id], (error, results, fields) => {
        // return console.log(this.sql);
        if (error) return clbk(error, null);
        else return clbk(null, [fields.map(x => x.name), results]);
      });
    };
   
    return {
      create,
      remove,
      update,
      get
    };
  };
  
  module.exports = brandsModel;
  