const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

const emptyList = []

const listWithOneBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  }
]

const listWithSeveralBlogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0
  }  
]

describe('total likes', () => {
  test('of empty list is zero', () => {
    const result = listHelper.totalLikes(emptyList)
    expect(result).toBe(0)
  })
  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })
  test('of a bigger list is calculated right', () => {
    const result = listHelper.totalLikes(listWithSeveralBlogs)
    expect(result).toBe(36)
  })
})

describe('favouriteBlog', () => {
  test('of empty list', () =>{
    const result = listHelper.favoriteBlog(emptyList)
    expect(result).toBe(null)
  })
  test('when list has only one blog, select that as favourite', () =>{
    const result = listHelper.favoriteBlog(listWithOneBlog)
    expect(result).toEqual(listWithOneBlog[0])
  })
  test('of a bigger list is selected right', () =>{
    const result = listHelper.favoriteBlog(listWithSeveralBlogs)
    expect(result).toEqual(listWithSeveralBlogs[2])
  })
})

describe('mostBlogs', () => {
  test('of empty list', () =>{
    const result = listHelper.mostBlogs(emptyList)
    expect(result).toEqual({
      author: null,
      blogs: null
    })
  })
  test('when list has only one blog, select that as favourite', () =>{
    const result = listHelper.mostBlogs(listWithOneBlog)
    expect(result).toEqual({
      author: "Edsger W. Dijkstra",
      blogs: 1
    })
  })
  test('author of most published is selected right', () =>{
    const result = listHelper.mostBlogs(listWithSeveralBlogs)
    expect(result).toEqual({
      author: "Robert C. Martin",
      blogs: 3
    })
  })
})

describe('mostLikes', () => {
  test('of empty list likes', () =>{
    const result = listHelper.mostLikes(emptyList)
    expect(result).toEqual({
      author: null,
      likes: null
    })
  })
  test('when list has only one blog, select that as favourite author likes', () =>{
    const result = listHelper.mostLikes(listWithOneBlog)
    expect(result).toEqual({
      author: "Edsger W. Dijkstra",
      likes: 5
    })
  })
  test('author of most liked is selected right', () =>{
    const result = listHelper.mostLikes(listWithSeveralBlogs)
    expect(result).toEqual({
      author: "Edsger W. Dijkstra",
      likes: 17
    })
  })
})