const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    let sum = 0
    for (let blog of blogs) {
        sum += blog.likes
    }
    return sum
}

module.exports = {
    dummy,
    totalLikes
}