const express = require('express');
const db = require('./src/config/db.js');
const routes = require("./src/startup/routes.js");
const dotenv = require('dotenv');
const cors = require('cors');    

dotenv.config();

const app = express();

app.use(cors());
db();
routes(app);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));