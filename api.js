var  Db = require('./dboperations');
var  Distro = require('./Distro');
var  UserType = require('./UserType');
var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
  console.log('middleware');
  next();
});
 
router.route('/distros').get((request, response) => {
  Db.getDistros().then((data) => {
    response.json(data[0]);
  })
})
 
router.route('/distro/:id').get((request, response) => {
  Db.getDistro(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/distro').post((request, response) => {
  let  distro = { ...request.body }
  Db.addDistro(distro).then(data  => {
    response.status(201).json(data);
    
  })
})
  
router.route('/UserType').get((request, response) => {
  Db.getUserTypes().then((data) => {
    response.json(data[0]);
  })
})
 
router.route('/userType/:id').get((request, response) => {
  Db.getUserType(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

var  port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);