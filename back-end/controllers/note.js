const Note = require("../models/Note");

exports.addNewNote = async (req,res,next)=>{
    
    console.log('in add new note back end');
    const {userID, notes} = req.body;
    const existingNotes = await Note.find({userID});
    if(existingNotes.length>0){
        Note.updateOne(
            {userID},
            {$push: {notes}}
            ).then(()=>{
                console.log('New Note Added!');
                res.status(200).send({status: true, msg:'New Note Added'});
            }).catch(err=>{
                console.log('Note Saving Unsuccessful');
                console.log(err);
                res.status(200).send({status:false,msg:'Unable to Save Note. Please try again!'});
            })
    }else{
        const note = new Note({...req.body});
        note.save().then(()=>{
            console.log('Note Saved!');
            res.status(200).send({status: true, msg:'Note Saved'});
        }).catch(err=>{
            console.log('Note Saving Unsuccessful');
            console.log(err);
            res.status(200).send({status:false,msg:'Unable to Save Note. Please try again!'});
        })
    }
}

exports.getNotes = async(req,res,next)=>{
    const userID = req.body.userID;
    const notesData = await Note.find({userID});
    if(notesData.length===0){
        return res.status(200).send({
            status:false,
            msg: 'No Notes Present.'
        })
    }
    res.status(200).send({
        status:true,
        msg:'Notes Found!',
        notes: notesData[0].notes
    });
}

exports.updateNote = (req,res,next)=>{
    console.log(req.body);
    const { userID, noteID, title, description} = req.body;

}