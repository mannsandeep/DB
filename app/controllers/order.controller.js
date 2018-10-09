const Order = require('../models/order.model.js');
// Create and Save a new Order
exports.create = (req, res) => {
    // Validate request
    if(!req.body.OrderNumber) {
        return res.status(400).send({
            message: "OrderNumber can not be empty"
        });
    }

    // Create an Order
    const order = new Order({
        OrderNumber: req.body.OrderNumber, 
        OrderStatus: req.body.OrderStatus,
		Soldto:req.body.Soldto,
		Shipto:req.body.Shipto,
		MaterialNumber:req.body.MaterialNumber,
		Quantity:req.body.Quantity,
		UOM:req.body.UOM,
		TrackingURL:req.body.TrackingURL,
		TrackingID:req.body.TrackingID,
		ShipmentID:req.body.ShipmentID,
		ItemStatus:req.body.ItemStatus,
		InoviceID:req.body.InoviceID,
		PONumber:req.body.PONumber,
		POCreationDate:req.body.POCreationDate
    });

    // Save Order in the database
    order.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the order."
        });
    });
};
	
	
	// Retrieve and return all orders from the database.
exports.findAll =  (req, res) => {
    Order.find().then(orders => {
        res.send(orders);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving orders."
        });
    });
};

// Find a single order with a ordernumber
exports.findOne = (req, res) => {
    Order.findById(req.params.OrderNumber)
    .then(order => {
        if(!order) {
            return res.status(404).send({
                message: "order not found with order number - " + req.params.OrderNumber
            });            
        }
        res.send(order);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "order not found with order number= " + req.params.OrderNumber
            });                
        }
        return res.status(500).send({
            message: "Error retrieving order with order number " + req.params.OrderNumber
        });
    });
};




// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Find note and update it with the request body
    Note.findByIdAndUpdate(req.params.noteId, {
        title: req.body.title || "Untitled Note",
        content: req.body.content
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    });
};
// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Note.findByIdAndRemove(req.params.noteId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        });
    });
};
