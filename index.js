const express = require("express"); 
const cors = require('cors'); 
require("dotenv").config()
const app = express();  
app.use(express.json());
app.use(cors()); 

const productsRouter = require('./router/products')
//connect to database
const mongoose = require("mongoose");
 
const connectDB = async () =>{
    try {
        mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.g7cyd.mongodb.net/HuyenPhi?retryWrites=true&w=majority`,
        {
            useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify: false
        },
        console.log("Conncet database success!!!") 
        )

    } catch (error) {
        console.log("Connect db fail" + error   )
        process.exit(1)
    }
}
connectDB();  

app.get('/',(req,res)=> res.send("Hello word !!!"));

app.use('/api',productsRouter)



const port = process.env.PORT || 4000
app.listen(port, ()=> console.log("Server start thành công !!! Port " + port))