import express from 'express'
import { getPosts, createPost, incrementLikes } from '../controllers/posts.js'
const router = express.Router()


//NOTE: Every route in this file actually starts with 
// localhost:5000/posts s
router.get('/', getPosts)
router.post('/', createPost)
router.post('/addlikes/:id', incrementLikes)

export default router 