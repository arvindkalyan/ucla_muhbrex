import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'


const app = express();

//json data cannot be greater than 20mb
//extended: true allows parsing of non-strings as well 
app.use(express.json({ limit: "20mb", extended: true }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());

//mongodb atlas
const CONNECTION_URL = "mongodb+srv://sophia:adrangi@cluster0.nwzbc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology : true
}).then( () => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch( (error) => console.log(error.message))
