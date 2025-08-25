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

export default router;