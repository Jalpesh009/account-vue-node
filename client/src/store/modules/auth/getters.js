// https://vuex.vuejs.org/en/getters.html

export default {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
  getUser: state => state.user
}
