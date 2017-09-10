import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.json({
        'version': '1.0.0',
    })
})

import { posts, tags, users } from '../models'
import { resource } from './resource'

router.use(resource('posts', posts))
router.use(resource('users', users))
router.use(resource('tags', tags))

export default router
