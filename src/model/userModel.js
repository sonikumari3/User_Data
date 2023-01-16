const mongoose = require('mongoose')
const Schema= mongoose.Schema;

 const userSchema = new Schema({
    userID: {
        require:true,
        type:String
    },
    sensorID:{
        require:true,
        type:String
    },
    sensorData:{
        require:true,
        type:Object
    },
    
},
{
    timestamps:true
}
)
 const User = mongoose.model('User',userSchema)
 module.exports={User}