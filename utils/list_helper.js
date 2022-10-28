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

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
}