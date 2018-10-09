const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
	
	OrderNumber:Number,
	OrderStatus:String,
	Soldto:Number,
	Shipto:Number,
	MaterialNumber:String,
	Quantity:Number,
	UOM:String,
	TrackingURL:String,
	TrackingID:String,
	ShipmentID:Number,
	ItemStatus:String,
	InoviceID:Number,
	PONumber:String,
	POCreationDate:Date
	
},{
	timestamps: true
});

module.exports = mongoose.model('Order',OrderSchema);

/*
const InvoiceSchema = mongoose.Schema({
	
	InoviceID:Number,
	NetValue:Number,
	Tax:Number,
	Total:Number,
	InovicePaid:String
	
},{
	timestamps: true
});

module.exports = mongoose.model('Invoice',InvoiceSchema);
*/