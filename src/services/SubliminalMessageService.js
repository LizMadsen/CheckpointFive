const { AppState } = require("../AppState");
const { logger } = require("../utils/Logger");
const { cpFiveApi } = require("./AxiosService");


class SubliminalMessageService {
  async getAll(){
    const res = await cpFiveApi.get('api/ads')
    logger.log(res.data) 
    AppState.subMessage = res.data[0]
  }
}

export const subliminalMessageService = new SubliminalMessageService()