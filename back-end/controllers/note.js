const Note = require("../models/Note");

exports.addNewNote = async (req,res,next)=>{
    
    console.log('in add new note back end');
    const {userID, notes} = req.body;
    const validate = validateNote({...notes[0]});
    if(validate){

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
    }else{
        res.status(200).send({
            status: validate.status,
            msg:validate.msg
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

exports.updateNote = async(req,res,next)=>{
    const { userID, noteID, title, description} = req.body;

    const validate = await validateNote(title, description);
    if(validate){

        const updateNote = async()=>{
            const update = await Note.updateOne(
            {
                userID,
                'notes._id':noteID
            },
            {
                $set: {
                    'notes.$.title':title,
                    'notes.$.description': description
                }
            })
        return update;
        }

        try{
            const update = await updateNote();
            res.status(200).send({
                status: update.acknowledged,
                msg:'Note Updated Successfully'
            })
        }catch(err){
            console.log(err);
            res.status(200).send({
                status: false,
                msg:'Unable to update Note. Please Try Again'
            })
        }
    }else{
        res.status(200).send({
            status: validate.status,
            msg:validate.msg
        })
    }
}

exports.deleteNote = async(req,res,next) => {
    const {userID, noteID} = req.body;

    const deleteNote = async()=>{
        const del = await Note.updateOne(
            {userID},
            {
                $pull: {
                    notes: {
                        _id: noteID
                    }
                }
            }
        )
        return del;
    }

    try{
        const del = await deleteNote();
        res.status(200).send({
            status: del.acknowledged,
            msg:'Note Deleted Successfully'
        })
    }catch(err){
        console.log(err);
            res.status(200).send({
                status: false,
                msg:'Unable to Delete Note. Please Try Again'
            })
    }

}

const validateNote = (title, desc) =>{
    console.log(title,desc);
    if(title==='' && desc===''){
        return {
            status:false,
            msg:'Atleast One Field is required to add a note!'
        }
    }

    return true;

}