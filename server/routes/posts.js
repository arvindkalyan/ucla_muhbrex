import express from 'express'
import {
    getPosts,
    getPost,
    createPost,
    changeLikes,
    changeDislikes, 
    updatePost,
    deletePost,
    changeComments
} from '../controllers/posts.js'
const router = express.Router()


//NOTE: Every route in this file actually starts with 
// http://localhost:5000/posts 


router.get('/', getPosts)
router.post('/create', createPost)
router.post('/changeLikes/:id/:likes', changeLikes)
router.post('/changeDislikes/:id/:dislikes', changeDislikes)
router.post('/changeComments/:id/:comments', changeComments)
// router.post('/adddislikes/:id/:dislikes', incrementDislikes)
// router.post('/decrementDislikes/:id/:dislikes', decrementDislikes)


router.delete('/delete/:id', deletePost)
router.post('/update/:id', updatePost)
router.get('/get/:id', getPost)

export default router 