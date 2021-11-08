import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js'
//const { auth } = require('express-openid-connect');

const app = express();

// //auth
// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: 'a long, randomly-generated string stored in env',
//   baseURL: 'http://localhost:3000',
//   clientID: 'wwkf_tru5s2nz9-o2JH-rN1OVgu8nwKkr0TGqi4u1ly1EqydRmqcRnJNl5miRUWj',
//   issuerBaseURL: 'https://dev-lpnow650.us.auth0.com'
// };

// // auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));

// // req.isAuthenticated is provided from the auth router
// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
//   console.log(res);
// });




//json data cannot be greater than 20mb
//extended: true allows parsing of non-strings as well 
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/posts', postRoutes)
//ever route inside of postRoutes will start with localhost:5000/posts 

//mongodb atlas

const TEST_URL = "mongodb+srv://sadrangi:sadrangi@cluster0.avdpc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const CONNECTION_URL = "mongodb+srv://sophia:adrangi@cluster0.nwzbc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.port || 5000


//PLEASE USE TEST_URL WHEN YOU'RE TESTING INSTEAD OF CONNECTION_URL
mongoose.connect(TEST_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then( () => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch( (error) => console.log(error.message))
