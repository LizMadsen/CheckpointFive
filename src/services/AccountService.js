import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { cpFiveApi } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await cpFiveApi.get('account')
      AppState.account = res.data
      logger.log(AppState.account)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
}

export const accountService = new AccountService()
