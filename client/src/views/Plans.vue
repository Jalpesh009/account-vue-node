<template>
  <!-- Start Content-->
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="card-box">
          <ChoosePlan />
          <h4 class="header-title mb-2 mt-3 pb-2">Payment details</h4>
          <div class="row">
            <div class="col-lg-9">
              <div class="credit-cards row flex-wrap">
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
                  <button
                    data-toggle="modal"
                    data-backdrop="static"
                    data-keyboard="false"
                    @click="creditCardModalShow"
                  >
                    <div class="add-new-card d-flex flex-column">
                      <div class="m-auto">
                        <i class="fas fa-plus" />
                        <p class="font-16">Add new card</p>
                      </div>
                    </div>
                  </button>
                  <h5 class="text-center mb-2">Primary card</h5>
                </div>
                <!-- credit-card -->
              </div>
              <!-- credit-cards-row -->
            </div>
            <div class="col-lg-3 pt-4 pt-lg-0">
              <p>The initial charge*:</p>
              <p id="initial-charge" class="text-center amount">$111.83</p>
              <button
                id="proceed-btn"
                type="button"
                class="btn btn-success waves-effect btn-block waves-light mb-2"
              >Proceed</button>
              <p class="text-sm">*Includes a credit balance of $50 and CC fees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
    <CreditCardModal ref="creditCardModal" @set-new-credit-card="getNewCreditCard($event)"/>
    <NoCardModal/>
    <NoIdConfirmedModal/>
  </div>
  <!-- container-fluid -->
</template>

<script>
import ChoosePlan from '../components/Plans/ChoosePlan'
import NoCardModal from '../components/Plans/NoCardModal'
import NoIdConfirmedModal from '../components/Plans/NoIdConfirmedModal'
import CreditCardModal from '../components/core/CreditCardModal.vue'
import $ from 'jquery'

export default {
  components: {
    ChoosePlan,
    NoCardModal,
    NoIdConfirmedModal,
    CreditCardModal
  },
  data() {
    return {
      openCreditCardModal: false,
      creditCards: []
    }
  },
  mounted() {
    // Plan initial-charges

    $('#plan1').click(function() {
      $('#initial-charge').text('$111.83')
    })

    $('#plan2').click(function() {
      $('#initial-charge').text('$147.23')
    })

    $('#plan3').click(function() {
      $('#initial-charge').text('$201.83')
    })

    $('#plan4').click(function() {
      $('#initial-charge').text('$337.83')
    })

    $('#plan5').click(function() {
      $('#initial-charge').text('$651.83')
    })

    $('#plan6').click(function() {
      $('#initial-charge').text('$951.83')
    })

    $('#plan7').click(function() {
      $('#initial-charge').text('$1351.83')
    })

    $('#plan8').click(function() {
      $('#initial-charge').text('$2227.83')
    })

    $('#plan9').click(function() {
      $('#initial-charge').text('$4351.83')
    })

    $('#proceed-btn').click(function() {
      if ($('.pro-user-name').hasClass('id-not-confirmed')) {
        $('.error-id-not-confirmed').modal('show')
      } else if ($('cc-added').length) {
      } else {
        $('.error-no-card').modal('show')
      }
    })

    $('#error-no-card-btn').click(function() {
      $('.error-no-card').modal('hide')
      $('.add-cc').modal('show')
    })

    $('#error-id-not-confirmed-btn').click(function() {
      $('.error-id-not-confirmed').modal('hide')
      $('.verify-identity').modal('show')
    })
  },
  methods: {
    creditCardModalShow() {
      this.$refs.creditCardModal.$refs['my-modal'].show()
    },
    noCreditCardShow() {
      this.$bvModal.show('no-card-modal')
    },
    noIdConfirmedModalShow() {
      this.$bvModal.show('no-id-confirmed')
    },
    getNewCreditCard(payload) {
      this.creditCards.push(payload)
    }
  }
}
</script>
