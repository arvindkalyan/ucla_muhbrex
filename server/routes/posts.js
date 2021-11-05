import express from 'express'
import { getPosts, createPost } from '../controllers/posts.js'
const router = express.Router()


//NOTE: Every route in this file actually starts with 
// localhost:5000/posts s
router.get('/', getPosts)
router.post('/', createPost)

export default router 