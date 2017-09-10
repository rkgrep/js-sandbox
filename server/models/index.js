import _ from 'lodash'
import casual from 'casual'
import slugify from 'slugify'
import { createHash } from 'crypto'

casual.define('user', () => {
    let email = casual.email

    return {
        id: casual.uuid,
        avatar: 'https://secure.gravatar.com/avatar/' + createHash('md5').update(email).digest('hex') + '?d=retro',
        name: casual.username,
    }
})

casual.define('tag', () => {
    let title = casual.word
    return {
        id: casual.uuid,
        title,
        slug: slugify(title),
    }
})

casual.define('post', () => {
    let title = casual.title
    let comments_count = casual.integer(0, 10)
    let tags_count = casual.integer(1, 5)

    return {
        id: casual.uuid,
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
        tags: {
            data: _.times(tags_count, casual._tag)
        },
        commentators: {
            data: _.times(comments_count, casual._user)
        },
        user: {
            data: casual.user,
        },
    }
})

export const post = casual._post
