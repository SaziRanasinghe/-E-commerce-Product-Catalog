const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//ROUTES
const postRoutes = require('./routes/posts');

//MIDDLEWARE
app.use(cors());
app.use(bodyParser.json())
app.use(postRoutes)

 
require('dotenv').config();
 


//CONNECT DATABASE
const PORT = 5000;
const DB_URL = 'mongodb+srv://sasini99ranasinghe:ecommerce123@ecommercecluster.ss7su.mongodb.net/?retryWrites=true&w=majority&appName=EcommerceCluster'

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('DB Connected'))
  .catch(err => console.error('DB Connection Error:', err));
 



//an express function
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
})