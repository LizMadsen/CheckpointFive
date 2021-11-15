import { AppState } from "../AppState"
import { logger } from "../utils/Logger"

class SearchService {
  async findPostByQuery(query, page=1){
    const posts = res.data.results.map(p => new Post(p))
    logger.log(res.data)
    AppState.results = posts 
    AppState.currentPage = res.data.page 
    AppState.pages = res.data.totalPages
  }
}

export const searchService = new SearchService()