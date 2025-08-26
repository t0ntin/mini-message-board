import express from 'express';
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


router.get(/^\/$|\/index(\.html)?$/, (req, res) => {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.get('/new', (req, res) => {
  res.render('form',  { title: "Add a new message"});
});

router.get('/messages/:id', (req, res) => {
  const { id } = req.params;
  const index = Number(id); 
  const msg = messages[index]; 
  res.render('messages', { message: msg });
});

router.post('/new', (req, res) => {
  const { user, text } = req.body;

  messages.unshift({
    text: text,
    user: user,
    added: new Date()
  });

  res.redirect('/');
});

export default router;