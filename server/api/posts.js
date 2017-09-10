import _ from 'lodash'
import { post } from '../models'
import { Router } from 'express'

const router = Router()

const postsData = new Map()

function posts (limit = 200) {
    if (postsData.size < limit) {
        _.times(limit - postsData.size, () => {
            const newPost = post()
            postsData.set(newPost.id, newPost)
        })
    }
    return _.slice(Array.from(postsData, x => x[1]), 0, limit)
}

/* GET posts listing. */
router.get('/posts', function (req, res, next) {
    res.json({
        data: posts(req.query.limit || 200),
        meta: {},
    })
})

export default router
