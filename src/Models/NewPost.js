export class NewPost {
  constructor(newPostData = {}){
    this.title = newPostData.title
    this.body = newPostData.body 
    this.creatorId = newPostData.creatorId
    this.createdAt = newPostData.createdAt
    this.likes = newPostData.likes
  }
}