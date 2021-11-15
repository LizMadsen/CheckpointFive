export class NewPost {
  constructor(newPostData = {}){
    this.id = newPostData.id
    this.body = newPostData.body 
    this.imgUrl = newPostData.imgUrl
    this.creatorId = newPostData.creatorId
    this.createdAt = newPostData.createdAt
    this.likes = newPostData.likes
  }
}