import mongoose from 'mongoose';

const videoSchema = mongoose.Schema({
    channel: String,
    desc: String,
    song: String,
    liked: Number,
    comments: Number,
    shared: Number,
    url: String
});
export default mongoose.model('videos', videoSchema);
