import http from '../_http'
import qs from 'qs'

const baseUrl = 'http://localhost:12001/Account'

const accountService = {
  login: (loginInputModel) => {
    return http.post(baseUrl + '/Login', qs.stringify(loginInputModel))
  },
}

export default accountService
