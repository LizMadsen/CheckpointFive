import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { cpFiveApi } from "./AxiosService";


class SubliminalMessageService {
  async getAll(){
    const res = await cpFiveApi.get('api/ads')
    logger.log(res.data) 
    AppState.subMessage = res.data
    logger.log(AppState.subMessage)
  }
}

export const subliminalMessageService = new SubliminalMessageService()