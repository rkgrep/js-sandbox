import casual from 'casual'
import slugify from 'slugify'
import { createHash } from 'crypto'
import { host, port } from '../config'

casual.define('user', () => {
    let email = casual.email
    let id = casual.uuid

    return {
        id,
        url: `http://${host}:${port}/api/users/${id}`,
        avatar: 'https://secure.gravatar.com/avatar/' + createHash('md5').update(email).digest('hex') + '?d=retro',
        name: casual.username,
    }
})

casual.define('tag', () => {
    let title = casual.word
    let id = casual.uuid

    return {
        id,
        url: `http://${host}:${port}/api/tags/${id}`,
        title,
        slug: slugify(title),
    }
})

casual.define('post', (user, tags = [], commentators = []) => {
    let title = casual.title
    let comments_count = commentators.length
    let tags_count = tags.length
    let id = casual.uuid

    return {
        id,
        url: `http://${host}:${port}/api/tags/${id}`,
        title,
        slug: slugify(title),
        description: casual.description,
        published_at: casual.moment.format(),
        updated_at: casual.moment.format(),
        lang: casual.language_code,
        rate: casual.integer(1, 10),
        views_count: casual.integer(0, 200),
        trending: casual.boolean,
        promoted: casual.boolean,
        comments_count,
        tags_count,
        tags,
        commentators,
        user,
    }
})

export const post = casual._post
export const user = casual._user
export const tag = casual._tag
