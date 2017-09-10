import { Router } from 'express'

export function resource (name, storage) {
    const router = Router()

    router.get(`/${name}`, function (req, res, next) {
        res.json({
            data: storage.fetch(req.query.limit || 200),
            meta: {},
        })
    })

    router.get(`/${name}/:id`, function (req, res, next) {
        res.json({
            data: storage.find(req.params.id, req.query.safe === '1'),
        })
    })

    return router
}
