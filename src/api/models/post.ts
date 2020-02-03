import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { 
        type: String, 
        required: true
    },
    body: { 
        type: String,
        required: true 
    },
    createdOn: {
        type: Date,
        required: true
    },
    author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
       // required: true,          
    }
});

export default mongoose.model('Post', postSchema);