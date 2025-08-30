import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import router from './routes/router.js';

const app = express();
const PORT = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// set up ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended:true}));
// routes
app.use('/', router);

app.use((req, res) => {
  res.status(404).render('404');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

// ========TEST==========
// app.get('/check-css', (req, res) => {
//   const cssPath = path.join(__dirname, 'public/css/style.css');
//   res.send({ exists: fs.existsSync(cssPath), path: cssPath });
// });

// ===================
app.listen(PORT,  (error) => {
  if(error){
    throw error;
  }
  console.log(`server running on port ${PORT}`)
});
