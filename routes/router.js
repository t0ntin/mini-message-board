import express from 'express';
const router = express.Router();
import { getMessagesIndexView, getSelectedMessages, getNewView, postNewView } from '../controllers/controller.js';

router.get('/', getMessagesIndexView);

// router.get('/new', getMessages);

router.get('/selected-msg/:id', getSelectedMessages)

router.get('/new', getNewView);
router.post('/new', postNewView);

// THIS FUNCTION WORKED WITH THE ARRAY, BEFORE IMPLEMENTING THE DATABASE:
// router.get('/messages/:id', (req, res) => {
//   const { id } = req.params;
//   const index = Number(id); 
//   const msg = messages[index]; 
//   res.render('messages', { message: msg });
// });

// router.post('/new', (req, res) => {
//   const { user, text } = req.body;

//   messages.unshift({
//     text: text,
//     user: user,
//     added: new Date()
//   });

//   res.redirect('/');
// });

export default router;