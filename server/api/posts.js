import _ from 'lodash'
import { post } from '../models'
import { Router } from 'express'

const router = Router()

/* GET posts listing. */
router.get('/posts', function (req, res, next) {
    res.json({
        data: _.times(req.query.limit || 100, post),
        meta: {},
    })
})

export default router
