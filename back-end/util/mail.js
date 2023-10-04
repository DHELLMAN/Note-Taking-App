const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'lmmalik933@gmail.com',
        pass:'fcoc jfyi uutp ctvu'
    }
});

const welcomeMail = async (email)=>{ 
    await transporter.sendMail({
            to:email,
            from:'lmmalik933@gmail.com',
            subject:'Registration Successful!',
            html:'<h1>Welcome aboard the Note App'
        }).then(()=>{
            console.log('Mail Sent');
            return 'Mail Sent!'
        }).catch(err=>{
            return err;
        })
} 

module.exports = welcomeMail;