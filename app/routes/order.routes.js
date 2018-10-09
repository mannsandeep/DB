module.exports = (app)=> {
	const orders = require('../controllers/order.controller.js');
	
	// Create a new order
	app.post('/orders', orders.create );
	
	//Retrieve all orders
	app.get('/orders', orders.findAll);
	
	// Retrieve a single order with Ordernumber
	app.get('/orders/:OrderNumber', orders.findOne);
	// Update a Note with noteId
	app.put('/orders/:OrderNumber', orders.update);
	
	app.delete('/orders/:OrderNumber', orders.delete);
}