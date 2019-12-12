// https://vuex.vuejs.org/en/getters.html

export default {
  cardCount: state => state.creditCards.length,
  creditCards: state => state.creditCards
}
