import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

const CarSchema = new Schema({
    uid: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
});

export default Mongoose.model('Car', CarSchema);