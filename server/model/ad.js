import mongoose from 'mongoose';

const adDetails = mongoose.Schema({
    name:String,
    redirectUrl:String,
    imageUrl:String,
})

export default mongoose.model('AdDetails',adDetails)