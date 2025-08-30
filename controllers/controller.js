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
  const messages = await getMessageObject();
  res.render('index', { title: 'Mini Message Board', messages});
}

// this is used for the view that shows the messages in a separate page(selected-msg.ejs)
async function getSelectedMessages (req, res)  {
  const messages = await getMessageObject();
  const selectedMsg = messages.find(item => item.id === Number(req.params.id));
  res.render('selected-msg', { title: 'Message Details', selectedMsg });
};


export {
  getMessagesIndexView,
  getSelectedMessages,


}