// const { Pool } = require("pg");
import { Pool } from 'pg';


// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
// const pool = new Pool({
//   host: "localhost", // or wherever the db is hosted
//   user: "achaparro",
//   database: "mini_message_board",
//   password: "ustele",
//   port: 5432 // The default port
// });

import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, 
  ssl: {
    rejectUnauthorized: false
  }
});
export default pool;