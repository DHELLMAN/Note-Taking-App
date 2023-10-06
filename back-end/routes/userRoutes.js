const express =  require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require('cors');
const userController = require('../controllers/user');
const noteController = require('../controllers/note');

router.post('/login',userController.userLogin);

router.post('/signup',userController.newUserRegistration);

router.post('/addNote',noteController.addNewNote);

router.post('/getNotes',noteController.getNotes);

router.post('/update-note',noteController.updateNote);

router.post('/delete-note',noteController.deleteNote);

module.exports = router;