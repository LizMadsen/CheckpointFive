import { logger} from "../utils/Logger"
import { cpFiveApi } from "./AxiosService"
import { AppState } from "../AppState"

class PostsService {
  async getAll() {
    const res = await cpFiveApi.get('api/posts')
    logger.log(res.data)
    AppState.posts = res.data
  }
  async create(data){
    logger.log(data)
    const res = await cpFive.post('api/posts', data)
    logger.log(res.data)
    AppState.posts = res.data
  }
}

export const postsService = new PostsService()