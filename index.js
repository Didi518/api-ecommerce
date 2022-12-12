require('dotenv').config();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const morgan = require('morgan');
const dbConnect = require('./config/dbConnect');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const PORT = process.env.PORT || 8000;

const app = express();

console.log(process.env.NODE_ENV);

dbConnect();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/user', require('./routes/authRoutes'));
app.use('/api/product', require('./routes/productRoutes'));
app.use('/api/blog', require('./routes/blogRoutes'));
app.use('/api/prod-category', require('./routes/productCategoryRoutes'));
app.use('/api/blog-category', require('./routes/blogCategoryRoutes'));
app.use('/api/brand', require('./routes/brandRoutes'));

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Serveur connecté au port: ${PORT}`);
});
