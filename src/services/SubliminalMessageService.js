import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { cpFiveApi } from "./AxiosService";


class SubliminalMessageService {
  async getAll(){
    const res = await cpFiveApi.get('api/ads')
    // logger.log(res.data) 
    AppState.subMessageBanner = res.data[0]
    AppState.subMessageTall = res.data[1]
    // logger.log(AppState.subMessage)
  }
}

export const subliminalMessageService = new SubliminalMessageService()