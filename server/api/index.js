import { Router } from 'express'

import posts from './posts'

const router = Router()

router.get('/', (req, res) => {
    res.json({
        'version': '1.0.0',
    })
})
// Add POSTS Routes
router.use(posts)

export default router
