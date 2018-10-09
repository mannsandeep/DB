module.exports = (app)=> {
	const notes = require('../controllers/note.controller.js');
	
	// Create a new note
	app.post('/notes', notes.create );
	
	//Retrieve all notes
	app.get('/notes', notes.findAll);
	
	// Retrieve a single Note with noteId
	app.get('/notes/:noteId', notes.findOne);
	// Update a Note with noteId
	app.put('/notes/:noteId', notes.update);
	
	app.delete('/notes/:noteId', notes.delete);
}