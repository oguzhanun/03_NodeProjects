const mongoose = require("mongoose");
const validator = require("validator");


mongoose.connect("mongodb://127.0.0.1:27017/kurye-taxi-db",{
    useNewUrlParser:true,
    useCreateIndex:true
});

const User = mongoose.model("users",{
    username:{
        type : String,
        unique : true,
        trim : true,
        lowercase : true,
        required : true,
        validate (value){
            if(!validator.isEmail(value)){
                throw new Error("Not a valid email!")
            }
        }
    },
    password : {
        type : String,
        required : true,
        minlength : 6,
        validate(value){
            if(validator.equals("password", value)){
                throw new Error("The password cannot be set as password keyword!")
            }
        }

    },
    active : {
        type : Boolean
    }
})

const Kurye = mongoose.model("kurye", {
    username : {
        type : String,
        unique : true,
        lowercase : true
    } 
})

const restA = new User({username:"SSS22ff@mynet.com", password:"password", active:true});

restA.save().then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err)
})