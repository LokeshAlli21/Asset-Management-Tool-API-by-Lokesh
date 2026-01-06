import express from 'express'
import {
    addAsset
} from '../controllers/assets.controller.js'

const router = express.Router()

router.post('/add', addAsset)

export default router