import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { 
        type: String, 
        required: true
    },
    password: { 
        type: String, 
        required: true
    },
    role: { 
        type: String, 
        required: true
    },
    likedPost: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Post', 
    }],
});

export default mongoose.model('User', userSchema);