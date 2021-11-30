import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    parent: {
        type: String,
        default: null
    },
    children: [String],
    comments: {
        type: Number, 
        default: 0
    },
    title: String,
    message: String,
    creator: String,
    timeStamp : String,
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    usersLiked: [String],
    usersDisliked: [String]
})

const PostModel = mongoose.model('PostModel', postSchema)

export default PostModel 