import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

const ReviewSchema = new Schema({
    carUid: {
        type: String,
        required: true,
        trim: true
    },
    comment: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        default: 0
    }
},
{
    timestamps: true,
    versionKey: false
});

export default Mongoose.model('Review', ReviewSchema);