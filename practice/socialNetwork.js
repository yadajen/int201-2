// Problem 13: Social Network User Management
// Create a SocialNetwork class with the following properties:
// · users (an array containing user objects, where each user has a username, email, friends list, and posts)
// Implement the following methods in the SocialNetwork class:
// · constructor() - initializes an empty array for users.
// · addUser(username, email) - adds a new user to the social network. Returns the user object.
// · getUsers() - returns an array of all users.
// · getUserByUsername(username) - returns the user with the given username.
// · addFriend(username, friendUsername) - adds a friend to a user's friends list. Returns the updated user object.
// · createPost(username, postContent) - allows a user to create a post. Updates the user's posts. Returns the post object.
// · getTimeline(username) - returns an array of posts from the user and their friends.

class SocialNetwork {
  constructor() {
    this.user = []
  }
  addUser(username, email) {
    const newuser = { username: username, email: email }
    this.user.push(newuser)
    return newuser
  }
  getUsers() {
    return this.user
  }
  getUserByUsername(username) {
    return this.user.find(
      (use) => use.username.toLowerCase() === username.toLowerCase()
    )
  }
  addFriend(username, friendUsername) {
    const addFriend = this.user.find(
      (f) => f.username.toLowerCase() === username.toLowerCase()
    )
    if (addFriend['friends list'] === undefined) addFriend['friends list'] = []
    if (addFriend['friends list'].length >= 0)
      addFriend['friends list'].push(friendUsername)
    return addFriend
  }
  createPost(username, postContent) {
    const postuse = this.user.find((p) => p.username === username)
    if (postuse.posts === undefined) postuse.posts = []
    if (postuse.posts.length >= 0) postuse.posts.push(postContent)
    return postuse
  }
  getTimeline(username) {
      const timeline = this.user.find((t) => t.username === username)
      const post = timeline.posts
      const friend = timeline['friends list']
      return { posts: post, 'friends list' : friend}
  }
} 

const newuse = new SocialNetwork()
console.log('-----add-----')
console.log(newuse.addUser('yada', '23342547'))
console.log(newuse.addUser('poy', '6534'))
console.log(newuse.addUser('jame', 'rtsw23'))

console.log('-----friend-----')
console.log(newuse.addFriend('yada', 'poy'))
console.log(newuse.addFriend('yada', 'jame'))

console.log('-----creatpost-----')
console.log(newuse.createPost('yada', 'today is happy'))
console.log(newuse.createPost('yada', 'today very bad'))

console.log('-----getuserbyname-----')
console.log(newuse.getUserByUsername("jame"))
console.log(newuse.getUserByUsername('yada'))

console.log('-----gettimeline-----')
console.log(newuse.getTimeline('yada'))
