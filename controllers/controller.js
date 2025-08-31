import pool from "../db/pool.js";
import getMessageObject from '../db/queries.js';
// async function getMessages(req, res) {
//   const messages = await getMessageObject();
//   // console.log(messages);
//   const {id} = req.params;
//   const selectedMsg = messages.find(item => item.id === Number(id));
//   console.log('this is the msg: ', selectedMsg);
//   res.render('index', {title: 'Mini Message Board', messages, selectedMsg});
// }

async function getMessagesIndexView(req, res) {
  // const messages = await getMessageObject();
  const messages = await [...(await getMessageObject()).reverse()];
  // const reversedMessages = [...messages].reverse();
  res.render('index', { title: 'Mini Message Board', messages});
}

// this is used for the view that shows the messages in a separate page(selected-msg.ejs)
async function getSelectedMessages (req, res)  {
  const messages = await getMessageObject();
  const selectedMsg = messages.find(item => item.id === Number(req.params.id));
  res.render('selected-msg', { title: 'Message Details', selectedMsg });
};

function getNewView (req, res) {
  res.render('new', {title: 'Create a message'});
}

async function insertMsgIntoDB (message, username) {
  await pool.query('INSERT INTO messages (message, username, added) VALUES ($1, $2, NOW())',[message, username]);
}

async function postNewView (req, res) {
  console.log('req.body is: ', req.body);
  const {text, username} = req.body;
  await insertMsgIntoDB (text, username);
  res.redirect('/');
}

// const messages = getMessageObject();
export {
  getMessagesIndexView,
  getSelectedMessages,
  getNewView,
  postNewView
}