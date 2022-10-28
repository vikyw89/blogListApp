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

const mostBlogs = (blogs) => {
    if (blogs.length === 0) {
        return {
            author: null,
            blogs: null
        }
    }
    let authorList = blogs.map((blog)=> {
        return blog.author
    })
    // remove duplicate
    let uniqueAuthorList = authorList.filter((author, index) => {
        return authorList.indexOf(author) === index;
    });
    // tally blogs count
    let blogsCountList = []
    for (let index in uniqueAuthorList) {
        let count = 0
        for (let blogsAuthor of authorList) {
            if (uniqueAuthorList[index].localeCompare(blogsAuthor) === 0) {
                count += 1
            }
        }
        blogsCountList[index] = count
    }
    let resultList = []
    for (let index in uniqueAuthorList) {
        let temp = {
            author: uniqueAuthorList[index],
            blogs: blogsCountList[index]
        }
        resultList.push(temp)
    }
    // finding index of highest blogsCount
    let highestCount = 0
    let highestCountIndex = 0
    for (let index in resultList) {
        if (resultList[index]['blogs'] > highestCount) {
            highestCount = resultList[index]['blogs']
            highestCountIndex = index
        }
    }
    return resultList[highestCountIndex]
}

const mostLikes = (blogs) => {
    if (blogs.length === 0) {
        return {
            author: null,
            likes: null
        }
    }
    let authorList = blogs.map((blog)=> {
        return blog.author
    })
    // Get unduplicated list of author
    let uniqueAuthorList = authorList.filter((author, index) => {
        return authorList.indexOf(author) === index;
    });
    // Get list of author total likes
    let totalLikeList = []
    for (let index in uniqueAuthorList) {
        let likeCount = 0
        for (let element of blogs) {
            if (uniqueAuthorList[index] === element.author) {
                likeCount += element.likes
            }
        }
        totalLikeList[index] = likeCount
    }
    // Create list of objects per author total like
    result = []
    for (let index in uniqueAuthorList) {
        temp = {
            author: uniqueAuthorList[index],
            likes: totalLikeList[index]
        }
        result.push(temp)
    }
    // Send the object with the most likes
    let highestLike = 0
    let highestLikeIndex = 0
    for (let index in result) {
        if (result[index]['likes'] > highestLike) {
            highestLike = result[index]['likes']
            highestLikeIndex = index
        }
    }
    return result[highestLikeIndex]
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}