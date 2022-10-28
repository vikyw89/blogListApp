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

const favoriteBlog = (blogs) => {
    let favourite = null
    let highestLike = 0
    for (let blog of blogs) {
        if (blog.likes > highestLike) {
            favourite = blog
            highestLike = blog.likes
        }
    }
    return favourite
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}