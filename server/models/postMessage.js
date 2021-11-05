import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    timeStamp: {
        type: Date,
        default: new Date()
    },
    likes: {
        type: Number,
        default: 0
    }
})

const postMessage = mongoose.model('postMessage', postSchema)

export default postMessage 