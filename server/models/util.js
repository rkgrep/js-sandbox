export function getRandom (source, n) {
    const arr = Array.from(source, x => x[1])
    const result = new Array(n)
    let len = arr.length
    const taken = new Array(len)

    if (n > len) {
        throw new RangeError('getRandom: more elements taken than available')
    }

    while (n--) {
        var x = Math.floor(Math.random() * len)
        result[ n ] = arr[ x in taken ? taken[ x ] : x ]
        taken[ x ] = --len
    }

    return result
}
