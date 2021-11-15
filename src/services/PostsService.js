import { logger} from "../utils/Logger"
import { cpFiveApi } from "./AxiosService"
import { AppState } from "../AppState"

class PostsService {
  async getAll() {
    const res = await cpFiveApi.get('api/posts')
    AppState.posts = res.data.posts
    // logger.log(AppState.posts)
  }
  async create(data){
    // logger.log(data)
    const res = await cpFiveApi.post('api/posts', data)
    // logger.log(res.data)
    AppState.posts = res.data.posts
  }
  async remove(){
    const res = await cpFiveApi.delete('api/posts' + AppState)
    // logger.log(res.data)
    AppState.posts = res.data.posts
  }
}

export const postsService = new PostsService()