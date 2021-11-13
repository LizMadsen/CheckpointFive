import { AppState } from '../AppState'
import { logger} from "../utils/Logger"
import {cpFiveApi} from "./AxiosService"

class PostsService {
  async getAll() {
    const res = await cpFiveApi.get('api/models/post')
    logger.log(res.data)
    Appstate.posts = res.data
  }
  async create(data){
    logger.log(data)
    const res = await cpFive.post('api/models/post', data)
    logger.log(res.data)
    Appstate.posts = res.data
  }
}

export const postsService = new PostsService()