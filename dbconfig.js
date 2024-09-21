const  config = {
  user:  'sa', // sql user
  password:  'Password@123', //sql user password
  server:  '236PCWIN11', // if it does not work try- localhost
  database:  'distroTrends',
  options: {
    trustedconnection:  true,
    enableArithAbort:  true,
    instancename:  'SQLEXPRESS'  // SQL Server instance name
  },
  port:  1433
}

module.exports = config;