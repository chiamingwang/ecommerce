var express = require('express');
var router = express.Router();
const app = express();

if(!app.locals.photolist) {
	app.locals.photolist = [];
}

router.get('/', function(req, res, next) {
  res.render('index', { 
	title: 'E-commerce site',
	description: 'Sell Your Product',
	photos : app.locals.photolist,
	products: [
		{title: 'Nike', description: 'New 2021 Design', price: '$100', imageurl: 'https://user-images.githubusercontent.com/12411476/115804245-9a1b8b00-a3b0-11eb-8f27-e438c7f2580c.jpeg'},
		{title: 'Nike', description: 'New 2020 Design', price: '$150', imageurl: 'https://user-images.githubusercontent.com/12411476/115804570-3f366380-a3b1-11eb-8348-3deabeeec168.jpeg'},
		{title: 'Nike', description: 'Women Shoes', price: '$120', imageurl: 'https://user-images.githubusercontent.com/12411476/115806395-b3263b00-a3b4-11eb-8829-03e05b33d1f4.jpeg'},
		{title: 'Nike', description: 'Editor Pick', price: '$150', imageurl: 'https://user-images.githubusercontent.com/12411476/115806684-39428180-a3b5-11eb-8a51-d9c3d6056c3f.jpeg'},
		{title: 'Nike', description: 'Top Collection', price: '$120', imageurl: 'https://user-images.githubusercontent.com/12411476/115807647-08fbe280-a3b7-11eb-9729-5080924c494d.jpeg'}
	]
	});
});

router.post('/', (req, res, next)=>{
  let photo  = {
    title: req.body.title,
    description: req.body.description,
    imageurl: req.body.imageurl
  }
  app.locals.photolist.push(photo);
  res.redirect("/index");
});

module.exports = router;
