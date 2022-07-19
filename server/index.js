import express from 'express';
import volleyball from 'volleyball';
import cors from 'cors'
import cookieParser from 'cookie-parser'
import errorHandler from './src/middlewares/errorHandler.js'
import validateAuthToken from './src/middlewares/validateAuthToken.js';
import apiRoute from './src/routes/api.js'
import authenticationRoute from './src/routes/authentication.js';
import './database/config.js'

const app = express();

app.use(cors({origin: 'http://localhost:3000', credentials: true}))
app.use(express.json())
app.use(cookieParser())
app.use(volleyball);

// routes
app.use('/authentication', authenticationRoute);
app.use((req, res, next) => validateAuthToken(req, res, next))
app.use('/api', apiRoute) // have access to "userID" and "username"
app.use((err, req, res, next) => errorHandler(err, req, res, next))

app.listen(8000, () => {
  console.log('Server Running at port 8000');
});
