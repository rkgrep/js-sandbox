import Storage from './Storage'
import { getRandom } from './util'
import { post, tag, user } from './creator'

export const users = new Storage(user)
users.populateData(50)

export const tags = new Storage(tag)
tags.populateData(100)

export const posts = new Storage(() => {
    return post(
        getRandom(users.map, 1)[0],
        getRandom(tags.map, Math.floor(Math.random() * 5)),
        getRandom(users.map, Math.floor(Math.random() * 10))
    )
})
posts.populateData(300)
