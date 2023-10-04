const User = require("../models/User");
const welcomeMail = require("../util/mail");

exports.newUserRegistration = async(req,res,next)=>{
    console.log('reaching backend signup page');
    const { username, email, contact, password } = req.body;
    const existingUser = await User.find({email});
    if(existingUser.length!==0){
        return res.status(200).send({
            status:false,
            msg:'E-Mail already exists. Kindly login with that Mail or enter a new Mail.'
        })
    }
    const user = new User({username, email, contact, password});
    user.save().then(async()=>{
        console.log('saved in db');
        await welcomeMail(email);
        res.status(200).send({
            status:true,
            msg:'New User Registered Successfully!',
            userID: user._id
        });
    }).catch(err=>{
        console.log('Unable to register user.');
        res.status(200).send({
            status:false,
            msg:'New User Registration Not Successful. Try Again.',
        });
    })

}

exports.userLogin = async(req,res,next)=>{
    console.log('reached user Login Back end');
    const enteredEmail = req.body.email;
    const enteredPassword = req.body.password;
    const userData = await User.find({email:enteredEmail});
    if(userData.length===0){
        return res.status(200).send({status:false,msg:'Please Check Your Email or Signup before logging in.'})
    }
    const {password, _id} = userData[0];
    if(password!==enteredPassword){
        return res.status(200).send({status:false,msg:'Wrong Credentials. Please Try Again'})
    }
    
    res.status(200).send({status:true,msg:'Login Success',userID:_id});
}