import express from 'express';
const indexRouter = express.Router();

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


indexRouter.get(/^\/$|\/index(\.html)?$/, (req, res) => {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});


export default indexRouter;