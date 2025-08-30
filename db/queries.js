import pool from "./pool.js";

async function getMessageObject() {
  const {rows} = await pool.query('SELECT * FROM messages');
  // console.log(rows);
  return rows;
}
console.log(getMessageObject());

export default 
  getMessageObject;
