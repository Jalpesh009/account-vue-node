import axios from 'axios'
let config = require('@/environment/' + process.env.NODE_ENV + '.json')

export default {
  login({ commit }, data) {
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
  },
  register({ commit }, data) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios({ url: config.apiURL + '/auth/register', data: data, method: 'POST' })
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
          commit('auth_error', err)
          localStorage.removeItem('token')
          reject(err)
        })
    })
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit('logout')
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
  },
  sendVerificationEmail({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios({ url: config.apiURL + '/auth/sendVerificationEmail', data: data, method: 'POST' })
        .then(resp => {
          if (!resp.data.success) {
            reject(resp.data.message)
            localStorage.removeItem('token')
            reject(resp.data.message)
          }
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  sendVerificationSms({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios({ url: config.apiURL + '/auth/sendVerificationSms', data: data, method: 'POST' })
        .then(resp => {
          if (!resp.data.success) {
            reject(resp.data.message)
            localStorage.removeItem('token')
            reject(resp.data.message)
          }
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  getUserInfo({ commit }) {
    let token = config.apiFB.concat(localStorage.getItem('token'));

    let conf = {
      url: config.apiURL + '/auth/getUserInfo',
      method: 'GET',
      headers: { Authorization: token }
    }
    return new Promise((resolve, reject) => {
      axios(conf)
        .then(resp => {
          if (!resp.data.success) {
            reject(resp.data.message)
          }
          commit('auth_success', resp.data.result)
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  verifyCode({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios({ url: config.apiURL + '/auth/verifyCode', data: data, method: 'POST' })
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
  },
  saveSetting({ commit }, data) {

    let token = config.apiFB.concat(localStorage.getItem('token'));

    let conf = {
      url: config.apiURL + "/update-setting",
      data: data,
      method: "PUT",
      headers: { Authorization: token }
    }

    return new Promise((resolve, reject) => {
      axios(conf)
        .then(resp => {
          if (!resp.data.success) {
            reject(resp.data.message);
          }
          commit("auth_success", resp.data.result);
          resolve(resp);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
