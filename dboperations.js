var  config = require('./dbconfig');
const  sql = require('mssql');

async  function  getDistros() {
  try {
    let  pool = await  sql.connect(config);
    let  products = await  pool.request().query("SELECT * from tbl_Distro");
    return  products.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getDistro(distroId) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, distroId)
    .query("SELECT * from tbl_Distro where Id = @input_parameter");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  addDistro(distro) {
  try {
    let  pool = await  sql.connect(config);

    console.trace("distro.Code="+ distro.Code);

    let  insertDistro = await  pool.request()
    .input('Code', sql.NVarChar, distro.Code)
    .input('Name', sql.NVarChar, distro.Name)
    .input('Description', sql.NVarChar, distro.Description)
    .input('ImageURL', sql.NVarChar, distro.ImageURL)
    .input('HomePage', sql.NVarChar, distro.HomePage)
    .execute('InsertDistro');//Sp Name
    return  insertDistro.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

module.exports = {
  getDistros: getDistros,
  getDistro:  getDistro,
  addDistro:  addDistro
}