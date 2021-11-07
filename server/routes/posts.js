import express from 'express'
import {
    getPosts,
    createPost,
    incrementLikes,
    updatePost,
    deletePost,
} from '../controllers/posts.js'
const router = express.Router()


//NOTE: Every route in this file actually starts with 
// localhost:5000/posts 
router.get('/', getPosts)
router.post('/create', createPost)
router.post('/addlikes/:id', incrementLikes)

//TODO 
router.delete('/delete/:id', deletePost)
router.post('/update/:id', updatePost)

export default router 