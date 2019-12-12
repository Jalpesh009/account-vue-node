<template>
  <b-modal
    v-model="modalShow"
    ref="my-modal"
    class="modal fade add-cc"
    tabindex="-1"
    role="dialog"
    aria-labelledby="add-credit-card"
    aria-hidden="true"
    size="lg"
    style="display: none;"
  >
    <template v-slot:modal-header="{close}">
      <h4 id="add-credit-card" class="modal-title">Credit card information and ownership proof</h4>
      <button
        id="button_close"
        type="button"
        class="close"
        data-dismiss="modal"
        aria-hidden="true"
        @click="close()"
      >×</button>
    </template>
    <template v-slot:default >
      <div v-show="step1" id="verification-step1">
        <h5>STEP 1: Provide your credit card information</h5>
        <p>In order to get your paid account up and running, you need to add a payment card to your account and provide the following information:</p>
        <ul class="verification_step1_list">
          <li>Full name</li>
          <li>Credit card number</li>
          <li>Expiry date</li>
        </ul>
        <div class="add-first-cc">
          <form id="add-credit-card-form">
            <div class="row mt-4">
              <div class="col-12">
                <div class="form-group">
                  <label for="credit-card-number">Credit card number</label>
                  <vue-mask
                    id="credit-card-number"
                    v-model="newCreditCard.number"
                    type="text"
                    name="credit-card-number"
                    class="form-control"
                    data-toggle="input-mask"
                    mask="0000 0000 0000 0000"
                    placeholder="xxxx xxxx xxxx xxxx"
                    required
                    @input="validateNewCreditCard"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-7">
                <label for="credit-card-name">First and last name</label>
                <input
                  id="credit-card-name"
                  v-model="newCreditCard.name"
                  type="text"
                  name="credit-card-name"
                  class="form-control text-uppercase"
                  placeholder="JOHN DOE"
                  required
                  @keypress="nameValidator($event)"
                  @input="validateNewCreditCard"
                >
              </div>
              <div class="col-5">
                <label for="credit-card-expiry-date">Expiry date</label>
                <vue-mask
                  id="credit-card-expiry-date"
                  v-model="newCreditCard.expiryDate"
                  type="text"
                  name="credit-card-expiry-date"
                  class="form-control"
                  data-toggle="input-mask"
                  mask="00/00"
                  placeholder="MM/YY"
                  required
                  @input="validateNewCreditCard"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div v-show="!step1" id="verification-step2" >
        <div class="modal-body">
          <h5>STEP 2: Upload photos proving ownership of your card</h5>
          <p class="text-center">This is a required step in card verification procedure.</p>
          <h5 class="text-center pt-1">Selfie with Payment Card</h5>
          <vue-dropify type="file" accept=".jpeg, .pdf, .gif" required />
          <h5 class="pt-2">Photo requirements</h5>
          <ul>
            <li>Look straight at the camera.</li>
            <li>Background colour should be light and neutral.</li>
            <li>
              Photo of you should be in
              <strong>colour.</strong>
            </li>
            <li>
              Your face must be clearly
              <strong>visible</strong>. Please
              <strong>do not</strong> wear sunglasses, a hat, or a headband.
            </li>
            <li>Information in your document must be easily readable.</li>
            <li>In case of a low-quality photo or scan, the Compliance Officer may ask you to upload it again.</li>
          </ul>
        </div>
      </div>
    </template>
    <template v-slot:modal-footer="{close}">
      <button v-if="step1" id="verification-button1" :disabled="verificationButtonDisabled" type="button" class="btn btn-primary" @click="step1 = false" >Next</button>
      <button v-else id="verification-button2" type="button" class="btn btn-success" @click="addCard()">Add card</button>
    </template>

    <!-- /.modal-content -->
  </b-modal>
  <!-- /.modal-dialog -->
  <!-- /.modal-dialog -->
</template>

<script>
  import vueMask from 'vue-jquery-mask'
  import VueDropify from 'vue-dropify'
  export default {
    name: 'CreditCards',
    components: {
      vueMask,
      VueDropify
    },
    props: {
    },
    data() {
      return {
        modalShow: false,
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
        ],
        step1: true,
        newCreditCard: {
          number: '',
          name: '',
          expiryDate: ''
        },
        verificationButtonDisabled: true
      }
    },
    computed: {
    },
    mounted() {
    },
    methods: {
      nameValidator(e) {
        var regex = new RegExp('^[a-zA-Z \s]+$')
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode)
        if (regex.test(str)) {
          return true
        } else {
          e.preventDefault()
          alert('Only alphabetical characters and spaces are allowed')
          return false
        }
      },
      validateNewCreditCard() {
        this.verificationButtonDisabled = !(this.newCreditCard.number.length === 16 &&
          this.newCreditCard.name.length > 0 &&
          this.newCreditCard.expiryDate.length === 4)
      },
      addCard() {
        let trimCreditCard = this.newCreditCard.number.substr(12)
        this.$emit('set-new-credit-card', {
          number: this.newCreditCard.number,
          name: this.newCreditCard.name,
          expiryDate: this.newCreditCard.expiryDate,
          lastNumbers: trimCreditCard,
          paymentSystem: this.getCardType(this.newCreditCard.number),
          cardTitle: 'New card'
        })
        this.modalShow = false
        this.step1 = true
        this.newCreditCard = this.restInputs(this.newCreditCard)
      },
      restInputs(spy) {
        Object.keys(spy).forEach(function(key){ spy[key] = '' })
        return spy
      },
      getCardType(number) {
        // visa
        let re = new RegExp('^4')
        if (String(number).match(re) != null) { return 'visa' }
        // Mastercard
        if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number)) { return 'mastercard' }
        // default
        return 'visa'
      }
    }
  }
</script>
<style>
  .verification_step1_list {
    padding-left: 40px
  }
  .dropzone-area {
    width: 200px !important;
    margin: 0 auto;
    border: 2px dashed rgba(50, 58, 70, 0.3);
    background: #fff;
    border-radius: 6px;
  }
  .dropzone-area:hover {
    background-size: 30px 30px !important;
    background-image: linear-gradient(-45deg,#f6f6f6 25%,transparent 0,transparent 50%,#f6f6f6 0,#f6f6f6 75%,transparent 0,transparent) !important;
    -webkit-animation: progress-bar-stripes 2s linear infinite !important;
    animation: progress-bar-stripes 2s linear infinite !important;
  }
  .dropzone-img span {
    width: auto;
  }
  .dropzone-img span:hover {
    transition: all .3s;
    background: #fff;
    width: auto;
  }
  @keyframes progress-bar-stripes {
    from {
      background-position: 30px 30px;
    }
    to {
      background-position: 0 0;
    }
  }
</style>
