var express = require('express');
var router = express.Router();

const upload = require("./multer");


let LOCAL_DB = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('show', {cards : LOCAL_DB});
});


router.get('/add', function(req, res, next) {
  res.render('add' );
});
router.post('/add', function(req, res, next) {


  upload(req, res, (err)=> {
    if(err) return res.send(err);
   const gallery = {
      title : req.body.title,
      author : req.body.author,
      image : req.file.filename,
   }
   LOCAL_DB.push(gallery);
   res.redirect("/");
  });
});
module.exports = router;
