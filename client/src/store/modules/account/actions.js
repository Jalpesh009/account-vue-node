// https://vuex.vuejs.org/en/actions.html
import axios from 'axios'
// import Account from '../../../utils/killbill/resources/Account'
// import uuidv1 from 'uuid/v1'
let config = require('@/environment/' + process.env.NODE_ENV + '.json')

export default {
  getVerificationStatus({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: config.apiURL + '/auth/login', data: data, method: 'POST' })
        .then(resp => {
          if (!resp.data.success) {
              commit('auth_error', resp.data.message)
              localStorage.removeItem('token')
              reject(resp.data.message)
          }
          const token = resp.data.result.token
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', resp.data.result)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
  }
}
