const fetchUrl = 'https://jsonplaceholder.typicode.com/posts'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

async function getManyPosts(url: string) {
  let response = await fetch(url)
  let jsonBody = await response.json()
  return jsonBody as Post[]
}

async function renderPosts() {
  let posts = await getManyPosts(fetchUrl)
  
  let post = posts[0]
  console.log('ID #', post.id)
  
  const isAdmin = (post.userId === 1) ? 'Administrator' : post.userId.toString()
  console.log('Author: ', isAdmin)
  console.log('Title: ', post.title)
  console.log('Body: ', post.body)
}

renderPosts()

