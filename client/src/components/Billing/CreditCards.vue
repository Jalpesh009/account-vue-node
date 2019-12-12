<template>
  <div class="col-md-7 col-lg-8">
    <div id="credit-cards" class="card-box">
      <h4 class="header-title mb-2">Credit cards</h4>
      <div class="credit-cards row flex-wrap justify-content-md-center justify-content-lg-start">
        <!-- credit-card -->
        <template v-for="(item, index) in creditCards">
          <div id="primary-card-container" :key="index" class="credit-card-container">
            <a href="#">
              <div class="credit-card d-flex flex-column">
                <div class="float-right" />
                <div class="m-auto">xxxx-xxxx-xxxx-{{ item.lastNumbers }}</div>
                <img :src="'assets/images/credit-card-logo-'+item.paymentSystem+'.png'" >
              </div>
            </a>
            <p class="text-center h4 mt-3 mb-2">{{ item.cardTitle }}</p>
          </div>
        </template>
        <div class="credit-card-container">
          <a href="#" @click.prevent="creditCardModalShow">
            <div class="add-new-card d-flex flex-column">
              <div class="m-auto">
                <i class="fas fa-plus" />
                <p class="font-16">Add new card</p>
              </div>
            </div>
          </a>
        </div>
        <!-- credit-card -->
      </div>
      <!-- credit-cards-row -->
    </div>
    <!-- card-box -->
    <CreditCardModal ref="creditCardModal" @set-new-credit-card="getNewCreditCard($event)"></CreditCardModal>

  </div>
  <!-- col-->
</template>

<script>
import vueMask from 'vue-jquery-mask'
import VueDropify from 'vue-dropify'
import CreditCardModal from '../../components/core/CreditCardModal.vue'
export default {
  name: 'CreditCards',
  components: {
    vueMask,
    VueDropify,
    CreditCardModal
  },
  props: {},
  data() {
    return {
      creditCards: [
        {
          lastNumbers: '4652',
          paymentSystem: 'visa',
          cardTitle: 'Primary card'
        },
        {
          lastNumbers: '7891',
          paymentSystem: 'mastercard',
          cardTitle: 'Secondary card'
        }
      ]
    }
  },
  computed: {
  },
  mounted() {
  },
  methods: {
    creditCardModalShow() {
      this.$refs.creditCardModal.$refs['my-modal'].show()
    },
    getNewCreditCard(payload) {
      this.creditCards.push(payload)
    }
  }
}
</script>
