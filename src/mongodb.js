const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginFormPractice")
.then(()=>{
    console.log('mongoose connected');
})
.catch(()=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    messages: [
        {
            text: String,
            isRead: { type: Boolean, default: false }
        }
    ]
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection