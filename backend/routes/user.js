const router = require("express").Router();
const userController = require('../controllers/user');
const upload = require('../middleware/xlsxand csv');



router.post('/',upload.array('document'),userController.uploadfile);


module.exports=router;

