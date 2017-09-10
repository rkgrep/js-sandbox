import _ from 'lodash'

export default class Storage {
    constructor (generator) {
        this.generator = generator
        this.map = new Map()
    }

    populateData (count) {
        _.times(count, () => {
            const el = this.generator()
            this.map.set(el.id, el)
        })
    }

    fetch (limit) {
        if (this.map.size < limit) {
            this.populateData(limit - this.map.size)
        }

        return _.slice(Array.from(this.map, x => x[ 1 ]), 0, limit)
    }

    find (id, safe = false) {
        let result = this.map.get(id)

        if (typeof result === 'undefined') {
            if (!safe) {
                return null
            }

            result = this.generator()
            result.id = id
            this.map.set(id, result)
        }

        return result
    }
}
