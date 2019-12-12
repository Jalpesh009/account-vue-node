<template>
  <div class="account-pages mb-0">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-5">
          <div class="text-center mt-4 mb-4">
            <span class=""><img src="assets/images/logo-dark.png" alt="CallAnswering logo" height="66"></span>
          </div>
          <div class="card">
            <div class="card-body p-4">
              <div class="text-center">
                  <h4 class="text-uppercase mt-0">Start your free trial</h4>
              </div>
              <div v-show="step == 1" id="signup-step1">
                <div class="step-counter d-flex align-items-center justify-content-center">
                  <div class="signup-step-active"/>
                  <div class="signup-step"/>
                  <div class="signup-step"/>
                </div>
                <form id="signup-form1" novalidate>
                  <div class="form-group">
                    <input id="first-name" v-model="firstName" class="form-control" type="text" name="fname" placeholder="First name" required>
                  </div>
                  <div class="form-group">
                    <input id="last-name" v-model="lastName" class="form-control" type="text" name="lname" placeholder="Last name" required>
                  </div>
                  <div class="form-group">
                    <input id="email" v-model="email" class="form-control" type="email" name="email" placeholder="Email" parsley-type="email" required>
                  </div>
                  <div class="form-group mb-0 text-center">
                    <button id="submit1" class="btn btn-primary btn-block" type="button" disabled="disabled" @click="handleSubmit1">Next</button>
                  </div>
                </form>
              </div>
              <div v-show="step == 2" id="signup-step2">
                <div class="step-counter d-flex align-items-center justify-content-center">
                  <div class="signup-step"/>
                  <div class="signup-step-active"/>
                  <div class="signup-step"/>
                </div>
                <form id="signup-form2" data-parsley-validate novalidate data-parsley-excluded="[disabled]">
                  <div class="form-group">
                      <input id="first-name2" v-model="firstName" class="form-control" type="text" name="fname" disabled="disabled">
                  </div>
                  <div class="form-group">
                      <input id="last-name2" v-model="lastName" class="form-control" type="text" name="lname" disabled="disabled">
                  </div>
                  <div class="form-group">
                      <input id="email2" v-model="email" class="form-control" type="email" name="email" disabled="disabled" >
                  </div>
                  <div class="form-group">
                    <VuePhoneNumberInput id="phone-number-second" v-model="phoneNumber" required @update="updatePhoneNumber"/>
                  </div>
                  <div class="form-group mb-0 text-center">
                      <button id="submit2" class="btn btn-primary btn-block" type="button" disabled="disabled" @click="handleSubmit2">Next</button>
                  </div>
                </form>
              </div>
              <div v-show="step == 3" id="signup-step3">
                <div class="step-counter d-flex align-items-center justify-content-center">
                  <div class="signup-step"/>
                  <div class="signup-step"/>
                  <div class="signup-step-active"/>
                </div>
                <form id="signup-form3" data-parsley-validate novalidate data-parsley-excluded="[disabled]">
                  <div class="form-group">
                    <input id="first-name3" v-model="firstName" class="form-control" type="text" name="fname" disabled="disabled">
                  </div>
                  <div class="form-group">
                    <input id="last-name3" v-model="lastName" class="form-control" type="text" name="lname" disabled="disabled">
                  </div>
                  <div class="form-group">
                    <input id="email3" v-model="email" class="form-control" type="email" name="email" disabled="disabled">
                  </div>
                  <div class="form-group">
                    <VuePhoneNumberInput id="phone-number-third" v-model="phoneNumber" :default-country-code="countryCode" disabled="disabled"/>
                  </div>
                  <div class="form-group">
                    <input id="bussiness-name3" v-model="businessName" class="form-control" type="text" name="bname" placeholder="Business name" parsley-trigger="change" required>
                  </div>
                  <div class="form-group" style="position: relative;">
                    <input id="password3" :type="passwordFieldType" v-model="password" class="form-control" name="password" placeholder="Password" required minlength="8" aria-autocomplete="list">
                    <div class="show-password"><i id="show-or-hide" class="fas fa-eye" @click="switchVisibility"/></div>
                  </div>
                  <div class="form-group">
                    <input id="password-check3" class="form-control" type="password" name="pasword-check" placeholder="Confirm Password" data-parsley-equalto="#password3" required>
                  </div>
                  <div class="form-group">
                    <input v-model="referralCode" class="form-control" type="text" name="promo_code" placeholder="Referral Code">
                  </div>
                  <div class="form-group">
                    <div class="custom-control custom-checkbox">
                      <input id="checkbox-signup" type="checkbox" class="custom-control-input" required>
                      <label class="custom-control-label" for="checkbox-signup">I accept <a target="_blank" href="https://callanswering.com/terms">Terms and conditions</a></label>
                    </div>
                  </div>
                  <div class="form-group mb-0 text-center">
                    <button id="submit3" class="btn btn-primary btn-block" type="button" disabled="disabled" @click="handleSubmit3">Start free trial</button>
                  </div>
                </form>
              </div>
            </div> <!-- end card-body -->
          </div>
            <!-- end card -->
          <div class="row mt-3">
            <div class="col-12 text-center">
              <p class="text-muted">Already have account?<a href="login.html" class="text-dark ml-1"><b>Log in</b></a></p>
            </div> <!-- end col -->
          </div>
            <!-- end row -->
        </div> <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
    <b-modal id="verify-email-modal" class="verify-email">
      <template v-slot:modal-title>
        <h4 id="verify-email" class="modal-title">Verify your email</h4>
      </template>
      <div class="verify-code-container d-block text-center">
        <p>We have sent a confirmation email to <span id="sentToEmail"/>.</p>
        <p>Please enter the confirmation code below:</p>
        <input v-model="verificationCode" class="form-control" type="number" onfocus="this.placeholder = ''" onblur="this.placeholder = '00000'" placeholder="00000">
        <p class="mt-3">Didn't get the email or entered a wrong address?</p>
        <div class="row">
            <div class="col-6">
              <button id="resend-email-btn" class="btn btn-rounded btn-sm btn-secondary" @click="handleSubmit1">Resend email</button>
            </div>
            <div class="col-6">
              <button id="change-email-btn" class="btn btn-rounded btn-sm btn-secondary" @click="changeEmail = true">Change email</button>
            </div>
        </div>
        <div v-show="changeEmail" id="wrong-email" class="mt-3 mb-3">
          <p>Enter email address and we'll send the confirmation code</p>
          <form id="new-email-form">
            <div class="input-group">
              <input id="new-email" v-model="email" class="form-control" type="email" name="new-email" placeholder="Enter new email" parsley-type="email" required>
              <div class="input-group-append">
                <button type="button" class="btn btn-primary" @click="handleSubmit1">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <template v-slot:modal-footer>
        <button id="verify-email-btn" type="button" class="btn btn-primary" @click="handleVerifyEmail">Next</button>
     </template>
    </b-modal>

    <b-modal id="verify-number-modal" class="verify-number">
      <template v-slot:modal-title>
        <h4 id="verify-email" class="modal-title">Verify your phone number</h4>
      </template>
      <div class="verify-code-container d-block text-center">
        <p>We have sent a confirmation text to <span id="sentToPhone"/></p>
        <p>Please enter the confirmation code below:</p>
        <input id="telephone-code" v-model="verificationCode" class="form-control" type="number" data-parsley-length="[5,5]" data-parsley-length-message="The code should be a 5 digit number" parsley-type="number" onfocus="this.placeholder = ''" onblur="this.placeholder = '00000'" placeholder="00000">
        <p class="mt-3">Didn't get the text or entered a wrong number?</p>
        <div class="row">
          <div class="col-6">
            <button id="resend-text-btn" class="btn btn-rounded btn-sm btn-secondary" @click="handleSubmit2">Resend text</button>
          </div>
          <div class="col-6">
            <button id="change-number-btn" class="btn btn-rounded btn-sm btn-secondary" @click="changeNumber = true">Change number</button>
          </div>
        </div>
        <div v-show="changeNumber" id="wrong-number" class="mt-3 mb-3">
          <p>Enter the correct number and we'll send the confirmation code</p>
          <form id="new-number-form">
            <div class="input-group">
              <VuePhoneNumberInput id="modal-phone-number" v-model="phoneNumber" :default-country-code="countryCode" style="width: 86%;" @update="updatePhoneNumber"/>
              <div class="input-group-append">
                <button type="button" class="btn btn-primary" @click="handleSubmit2">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <template v-slot:modal-footer>
        <button id="verify-number-btn" type="button" class="btn btn-primary" @click="handleVerifyNumber">Next</button>
     </template>
    </b-modal>
    <vue-snotify/>
  </div>
</template>

<script>
import 'parsleyjs'
import JQuery from 'jquery'
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
import { VuePassword, VuePasswordAuto } from 'vue-password'
let $ = JQuery

export default {
    components: {
      VuePhoneNumberInput,
      VuePassword,
      VuePasswordAuto
    },
    data: () => ({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        passwordConfirm: '',
        businessName: '',
        referralCode: '',
        acceptTermsAndPolicy: false,
        errorMsg: '',
        step: 1,
        verificationId: -1,
        verificationCode: '',
        changeEmail: false,
        changeNumber: false,
        countryCode: '',
        formattedNumber: '',
        passwordFieldType: 'password'
    }),
    mounted: () => {
      $('form').parsley()
      $('#signup-form1 input').on('change', function() {
        $('#signup-form1').parsley().validate()
        if ($('#signup-form1').parsley().isValid()) {
            $('#submit1').prop('disabled', false)
        } else {
            $('#submit1').prop('disabled', 'disabled')
        }
      })

      $('#signup-form2 input').on('change', function() {
        $('#signup-form2').parsley().validate()
        if ($('#signup-form2').parsley().isValid()) {
            $('#submit2').prop('disabled', false)
        } else {
            $('#submit2').prop('disabled', 'disabled')
        }
      })

      $('#signup-form3 input').on('change', function() {
        $('#signup-form3').parsley().validate()
        if ($('#signup-form3').parsley().isValid()) {
            $('#submit3').prop('disabled', false)
        } else {
            $('#submit3').prop('disabled', 'disabled')
        }
      })
    },
    methods: {
      handleSubmit1 () {
        let that = this
        this.verificationCode = ''
        this.$store.dispatch('auth/sendVerificationEmail', {
           email: this.email, first_name: this.firstName, last_name: this.lastName
         }).then(resp => {
           that.verificationId = resp.data.result.id
           this.$bvModal.show('verify-email-modal')
         }).catch(err => {
           this.$snotify.error(err, 'Error!',
             {
              timeout: 3000,
              showProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true
             }
           )
         })
      },
      handleSubmit2 () {
        let that = this
        this.verificationCode = ''
        this.$store.dispatch('auth/sendVerificationSms', {
           number: this.formattedNumber, first_name: this.firstName, last_name: this.lastName
         }).then(resp => {
           that.verificationId = resp.data.result.id
           this.$bvModal.show('verify-number-modal')
         }).catch(err => {
           this.$snotify.error(err, 'Error!',
             {
              timeout: 3000,
              showProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true
             }
           )
        })
      },
      handleSubmit3 () {
        this.$store.dispatch('auth/register', {
          'first_name': this.firstName,
          'last_name': this.lastName,
          'email': this.email,
          'password': this.password,
          'phone_number': this.formattedNumber,
          'business_name': this.businessName,
          'referral_code': this.referralCode
        }).then(() => {
          this.$snotify.success('Successfully registered', 'Success!',
            {
             timeout: 3000,
             showProgressBar: true,
             closeOnClick: true,
             pauseOnHover: true
            }
          )
          this.$router.push('/dashboard')
        }).catch(err => {
          this.$snotify.error(err, 'Error!',
            {
             timeout: 3000,
             showProgressBar: true,
             closeOnClick: true,
             pauseOnHover: true
            }
          )
        })
      },
      handleLogin (event) {
        this.$router.push('/login')
      },
      handleVerifyEmail () {
        let that = this
        this.$store.dispatch('auth/verifyCode', {
           id: this.verificationId, code: this.verificationCode
        }).then(resp => {
           if (resp.data.result.verify) {
             this.$snotify.success('Successfully verified', 'Success!',
               {
                timeout: 3000,
                showProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true
               }
             )
             this.$bvModal.hide('verify-email-modal')
             that.step++
           }
        }).catch(err => {
          this.$snotify.error(err, 'Error!',
            {
             timeout: 3000,
             showProgressBar: true,
             closeOnClick: true,
             pauseOnHover: true
            }
          )
        })
      },
      handleVerifyNumber () {
        let that = this
        this.$store.dispatch('auth/verifyCode', {
           id: this.verificationId, code: this.verificationCode
        }).then(resp => {
           if (resp.data.result.verify) {
             this.$snotify.success('Successfully verified', 'Success!',
               {
                timeout: 3000,
                showProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true
               }
             )
             this.$bvModal.hide('verify-number-modal')
             that.step++
           }
        }).catch(err => {
          this.$snotify.error(err, 'Error!',
            {
             timeout: 3000,
             showProgressBar: true,
             closeOnClick: true,
             pauseOnHover: true
            }
          )
        })
      },
      updatePhoneNumber (data) {
        this.countryCode = data.countryCode
        this.formattedNumber = data.formattedNumber
      },
      switchVisibility () {
        this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
        if ($('#show-or-hide').hasClass('fa-eye')) {
          $('#show-or-hide').removeClass('fa-eye')
          $('#show-or-hide').addClass('fa-eye-slash')
          $('.show-password').css('right', '9px')
        } else {
          $('#show-or-hide').addClass('fa-eye')
          $('#show-or-hide').removeClass('fa-eye-slash')
          $('.show-password').css('right', '10px')
        }
      }
    }
}
</script>

<style scoped>
.verify-code-container > input {
    border-top: none;
    border-left: none;
    border-right: none;
    border-top-width: 3px;
    text-align: center;
    border-radius: 0;
    font-size: 2rem;
    font-weight: bold;
}
</style>
