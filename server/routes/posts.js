import express from 'express'
import {
    getPosts,
    getPost,
    createPost,
    incrementLikes,
    decrementLikes,
    updatePost,
    deletePost,
} from '../controllers/posts.js'
const router = express.Router()


//NOTE: Every route in this file actually starts with 
// http://localhost:5000/posts 


router.get('/', getPosts)
router.post('/create', createPost)
router.post('/addlikes/:id/:likes', incrementLikes)
router.post('/decrementLikes/:id/:likes', decrementLikes)

//TODO 
router.delete('/delete/:id', deletePost)
router.post('/update/:id', updatePost)
router.get('/get/:id', getPost)

export default router 