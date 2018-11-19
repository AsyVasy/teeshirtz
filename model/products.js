/*jshint esversion :  6 */

// @root/model/products.js

const productsModel = function productsModel(connection) {

  const create = function createproducts(clbk, data) {
    const q = "INSERT INTO `product`(`name`, `price`, `id_brand`) VALUES (?, ?, ?)";
    const payload = [data.name, data.price, data.brand];
    console.log(data)

    connection.query(q, payload, (err, res, cols) => {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(err, null);
      return clbk(null, res);
    });   
  };

  const remove = function deleteproducts(clbk, ids) {
    // la clause SQL IN permet de chercher une valeur dans un tableau
    const q = "DELETE FROM product WHERE id IN (?)";

    connection.query(q, [ids], function (err, res, fields) {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(res, null);
      return clbk(null, res);
    });
  };

  const update = function editproducts(clbk, products) {
    const q = "UPDATE product SET name = ? WHERE id = ?";
    const payload = [products.name, products.id];
    connection.query(q, payload, function (err, res, fields) {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(err, null);
      return clbk(null, res);
    });
  };

  const get = function getproducts(clbk, id) {
    var sql;

      sql = "SELECT * FROM product";
    

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

module.exports = productsModel;
