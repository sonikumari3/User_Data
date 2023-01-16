const express= require('express')

const mongoose= require('mongoose')
const {User}= require('./model/userModel')

// const router= require('./route/route')

const app= express()
app.use(express.json())

mongoose.connect('mongodb+srv://Soni:ASj7w5ibygF7H8hy@cluster0.vjzcsaj.mongodb.net/sensor',{
    useNewUrlParser:true
})

.then(() => console.log('mongoDB is connect'))
.catch(()=> console.log(error))

app.post('/post-user',async(req,res)=>{
    try {
        let userID=req.body.userID
        let sensorID=req.body.sensorID
        let sensorData=req.body.sensorData

        if(userID){
            if(sensorID){
                if(sensorData){
                    const user= await User.findOne({userID:userID})
                    if(user){
                        const user= await User.updateOne({
                            sensorID:sensorID,
                            sensorData:sensorData
                        })
                        res.send(user)

                    }
                    else{
                        const data= await new User({
                            userID:userID,
                            sensorID:sensorID,
                            sensorData:sensorData
                    
                        })
                        data.save()
                    
                        console.log(data)
                        res.send(data)

                    }
                   

                }
                else{
                    res.send('enter sensorData')
                }

            }
            else{
                res.send('Enter sensorID')
            }
            
        }
        else{
            res.send('enter userID')
        }
    
        
    } catch (error) {
        res.send(error)
        
    }


    

})

app.listen(process.env.PORT || 3000,function(){
    console.log("Express app running on PORT" + (process.env.PORT || 3000))
})