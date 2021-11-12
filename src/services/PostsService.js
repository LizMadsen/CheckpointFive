import {AppState} from "../AppState"
import { logger} from "../utils/Logger"
import {cpFiveApi} from "./AxiosService"

class PostsService {
  async getAll() {
    const res = await cpFiveApi.get('/api/post')
    logger.log(res.data)
    Appstate.posts = res.data
  }
  async create(data){
    logger.log(data)
    const res = await cpFive.post()
  }
}