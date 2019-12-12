import { set } from '@/utils/vuex'

export default {
	add_credit_card(state, card) {
		state.creditCards.push(card)
	},
	set_credit_cards: set('creditCards')
}
