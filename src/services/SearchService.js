import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { cpFiveApi } from "../services/AxiosService"

class SearchService {
  async findPostByQuery(query, page=1){
    logger.log(query)
    const res = await cpFiveApi.get(`api/posts?query=${query}&page=${page}`)
    logger.log(res)
    AppState.posts = res.data.posts
    // AppState.currentPage = res.data.page 
    // AppState.pages = res.data.totalPages
  }
}

export const searchService = new SearchService()