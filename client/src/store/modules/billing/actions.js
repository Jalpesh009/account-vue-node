// https://vuex.vuejs.org/en/actions.html
import axios from 'axios'
// import Account from '../../../utils/killbill/resources/Account'
// import uuidv1 from 'uuid/v1'
let config = require('@/environment/' + process.env.NODE_ENV + '.json')

export default {
  addCreditCard({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios({ url: config.apiURL + '/billing/addCreditCard', data: data, method: 'POST' })
      .then(resp => {
        if (!resp.data.success) {
            reject(resp.data.message)
        }
        commit('add_credit_card', resp.data.result)
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  getCreditCardsByUser({ commit }, userId) {
    return new Promise((resolve, reject) => {
      axios({ url: config.apiURL + '/billing/getCreditCardsByUser/' + userId, method: 'GET' })
      .then(resp => {
        if (!resp.data.success) {
            return reject(resp.data.message)
        }
        console.log(resp.data.result)
        commit('set_credit_cards', resp.data.result)
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  selectPackage({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios({ url: config.apiURL + '/billing/selectPackage', data: data, method: 'POST' })
      .then(resp => {
        if (!resp.data.success) {
          reject(resp.data.message)
        }
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
    })
  }
}
