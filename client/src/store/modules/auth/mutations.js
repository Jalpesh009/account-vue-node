import { set } from '@/utils/vuex'

export default {
	setAuthenticated: set('authenticated'),
	setUser: set('user'),
	auth_request(state) {
    state.status = 'loading'
  },
  auth_success(state, result) {
    state.status = 'success'
		if (state.token === '') {
			state.token = result.token
		}
    state.user = result.user
  },
  auth_error(state) {
    state.status = 'error'
  },
  logout(state) {
    state.status = ''
    state.token = ''
  }
}
