<template>
  <b-modal
    id="add-edit-member"
    modal-prevent-closing
    class="modal fade add-edit-member"
    title="Add/edit Member"
    tabindex="-1"
    role="dialog"
    aria-labelledby="Add/edit Member"
    style="display: none;"
    size="xl"
    @shown="
    userInfo = JSON.parse(JSON.stringify(userData))"
  >
    <template v-slot:modal-header="{close}">
      <h4 id="Add-new-contact" class="modal-title">Add/edit Member</h4>
      <button type="button" class="close" @click="close()">×</button>
    </template>
    <template v-slot:default >

      <div class="row">
        <div class="col-lg-12">
          <div class="card-box">
            <div class="row">
              <div class="col-lg-3 text-center">
                <a data-toggle="modal" href="#" data-backdrop="static" data-keyboard="false" @click="$bvModal.show('my-modal-upload')">
                  <div class="img-hover">
                    <img src="assets/images/users/user-2.jpg" class="rounded-circle avatar-xxxl img-thumbnail" alt="profile-image">
                    <div class="img-overlay">Upload<br><i class="fas fa-camera"/></div>
                  </div>
                </a>
                <p class="h2 pt-0 mt-2 mb-1">{{ `${userInfo.firstName} ${userInfo.lastName}` }}</p>
                <div class="b_transfer_time">
                  <h4 class="title">Do not transfer form</h4>
                  <div class="wrapper">
                    <label for="transfer_from" class="select_wrapp">
                      <select id="transfer_from" v-model="userInfo.transferFrom" name="transfer_from">
                        <option value="12 am">12 am</option>
                        <option value="1 am">1 am</option>
                        <option value="2 am">2 am</option>
                        <option value="3 am">3 am</option>
                        <option value="4 am">4 am</option>
                        <option value="5 am">5 am</option>
                        <option value="6 am">6 am</option>
                        <option value="7 am">7 am</option>
                        <option value="8 am">8 am</option>
                        <option value="9 am">9 am</option>
                        <option value="10 am">10 am</option>
                        <option value="11 am">11 am</option>
                        <option value="12 pm">12 pm</option>
                        <option value="1 pm">1 pm</option>
                        <option value="2 pm">2 pm</option>
                        <option value="3 pm">3 pm</option>
                        <option value="4 pm">4 pm</option>
                        <option value="5 pm">5 pm</option>
                        <option value="6 pm">6 pm</option>
                        <option value="7 pm">7 pm</option>
                        <option value="8 pm">8 pm</option>
                        <option value="9 pm">9 pm</option>
                        <option value="10 pm">10 pm</option>
                        <option value="11 pm">11 pm</option>
                      </select>
                    </label>
                    -
                    <label for="transfer_to" class="select_wrapp">
                    <select id="transfer_to" v-model="userInfo.transferTo" name="transfer_to">
                      <option value="12 am">12 am</option>
                      <option value="1 am">1 am</option>
                      <option value="2 am">2 am</option>
                      <option value="3 am">3 am</option>
                      <option value="4 am">4 am</option>
                      <option value="5 am">5 am</option>
                      <option value="6 am">6 am</option>
                      <option value="7 am">7 am</option>
                      <option value="8 am">8 am</option>
                      <option value="9 am">9 am</option>
                      <option value="10 am">10 am</option>
                      <option value="11 am">11 am</option>
                      <option value="12 pm">12 pm</option>
                      <option value="1 pm">1 pm</option>
                      <option value="2 pm">2 pm</option>
                      <option value="3 pm">3 pm</option>
                      <option value="4 pm">4 pm</option>
                      <option value="5 pm">5 pm</option>
                      <option value="6 pm">6 pm</option>
                      <option value="7 pm">7 pm</option>
                      <option value="8 pm">8 pm</option>
                      <option value="9 pm">9 pm</option>
                      <option value="10 pm">10 pm</option>
                      <option value="11 pm">11 pm</option>
                    </select>
                    </label>
                  </div>
                </div>
                <div class="b_ready_calls_sms">
                  <div class="calls">
                    <span>Ready for calls</span>
                    <b-form-checkbox v-model="userInfo.readyForCalls" name="check-button" switch />
                  </div>
                  <div class="sms">
                    <span>No SMS</span>
                    <b-form-checkbox v-model="userInfo.noSms" name="check-button1" switch />
                  </div>
                </div>
              </div>
              <div class="col-lg-9 tab">
                <form method="post">
                  <div class="table-responsive">
                    <table class="table table-borderless text-left table-striped account mb-0">
                      <tbody>
                      <tr>
                        <th scope="row" class="column-header">First Name</th>
                        <td><input v-model="userInfo.firstName" type="text" name="entity"></td>
                      </tr>
                      <tr>
                        <th scope="row" class="column-header">Last Name</th>
                        <td><input v-model="userInfo.lastName" type="text" name="region"></td>
                      </tr>
                      <tr>
                        <th scope="row" class="column-header">Contact Number</th>
                        <td><input v-model="userInfo.phone" type="tel" name="ABN"></td>
                      </tr>
                      <tr>
                        <th scope="row" class="column-header">Gender</th>
                        <td class="select_wrapp">
                          <select>
                            <option value="0" selected="selected">Male</option>
                            <option value="0">Female</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" class="column-header">Account type</th>
                        <td>
                          <select class="select_wrapp">
                            <option value="0" selected="selected">Limited</option>
                            <option value="0" selected="selected">Limited</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" class="column-header">Email</th>
                        <td><input v-model="userInfo.email" type="text" name="email"></td>
                      </tr>
                      <tr>
                        <th scope="row" class="column-header">Password</th>
                        <td><input v-model="userInfo.password" placeholder="Type new password..." type="password" name="password"></td>
                      </tr>
                      <tr>
                        <th scope="row" class="column-header">Time zone</th>
                        <td class="select_wrapp">
                          <select>
                            <option timeZoneId="1" gmtAdjustment="GMT-12:00" useDaylightTime="0" value="-12">(GMT-12:00) International Date Line West</option>
                            <option timeZoneId="2" gmtAdjustment="GMT-11:00" useDaylightTime="0" value="-11">(GMT-11:00) Midway Island, Samoa</option>
                            <option timeZoneId="3" gmtAdjustment="GMT-10:00" useDaylightTime="0" value="-10">(GMT-10:00) Hawaii</option>
                            <option timeZoneId="4" gmtAdjustment="GMT-09:00" useDaylightTime="1" value="-9">(GMT-09:00) Alaska</option>
                            <option timeZoneId="5" gmtAdjustment="GMT-08:00" useDaylightTime="1" value="-8">(GMT-08:00) Pacific Time (US & Canada)</option>
                            <option timeZoneId="6" gmtAdjustment="GMT-08:00" useDaylightTime="1" value="-8">(GMT-08:00) Tijuana, Baja California</option>
                            <option timeZoneId="7" gmtAdjustment="GMT-07:00" useDaylightTime="0" value="-7">(GMT-07:00) Arizona</option>
                            <option timeZoneId="8" gmtAdjustment="GMT-07:00" useDaylightTime="1" value="-7">(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
                            <option timeZoneId="9" gmtAdjustment="GMT-07:00" useDaylightTime="1" value="-7">(GMT-07:00) Mountain Time (US & Canada)</option>
                            <option timeZoneId="10" gmtAdjustment="GMT-06:00" useDaylightTime="0" value="-6">(GMT-06:00) Central America</option>
                            <option timeZoneId="11" gmtAdjustment="GMT-06:00" useDaylightTime="1" value="-6">(GMT-06:00) Central Time (US & Canada)</option>
                            <option timeZoneId="12" gmtAdjustment="GMT-06:00" useDaylightTime="1" value="-6">(GMT-06:00) Guadalajara, Mexico City, Monterrey</option>
                            <option timeZoneId="13" gmtAdjustment="GMT-06:00" useDaylightTime="0" value="-6">(GMT-06:00) Saskatchewan</option>
                            <option timeZoneId="14" gmtAdjustment="GMT-05:00" useDaylightTime="0" value="-5">(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option>
                            <option timeZoneId="15" gmtAdjustment="GMT-05:00" useDaylightTime="1" value="-5">(GMT-05:00) Eastern Time (US & Canada)</option>
                            <option timeZoneId="16" gmtAdjustment="GMT-05:00" useDaylightTime="1" value="-5">(GMT-05:00) Indiana (East)</option>
                            <option timeZoneId="17" gmtAdjustment="GMT-04:00" useDaylightTime="1" value="-4">(GMT-04:00) Atlantic Time (Canada)</option>
                            <option timeZoneId="18" gmtAdjustment="GMT-04:00" useDaylightTime="0" value="-4">(GMT-04:00) Caracas, La Paz</option>
                            <option timeZoneId="19" gmtAdjustment="GMT-04:00" useDaylightTime="0" value="-4">(GMT-04:00) Manaus</option>
                            <option timeZoneId="20" gmtAdjustment="GMT-04:00" useDaylightTime="1" value="-4">(GMT-04:00) Santiago</option>
                            <option timeZoneId="21" gmtAdjustment="GMT-03:30" useDaylightTime="1" value="-3.5">(GMT-03:30) Newfoundland</option>
                            <option timeZoneId="22" gmtAdjustment="GMT-03:00" useDaylightTime="1" value="-3">(GMT-03:00) Brasilia</option>
                            <option timeZoneId="23" gmtAdjustment="GMT-03:00" useDaylightTime="0" value="-3">(GMT-03:00) Buenos Aires, Georgetown</option>
                            <option timeZoneId="24" gmtAdjustment="GMT-03:00" useDaylightTime="1" value="-3">(GMT-03:00) Greenland</option>
                            <option timeZoneId="25" gmtAdjustment="GMT-03:00" useDaylightTime="1" value="-3">(GMT-03:00) Montevideo</option>
                            <option timeZoneId="26" gmtAdjustment="GMT-02:00" useDaylightTime="1" value="-2">(GMT-02:00) Mid-Atlantic</option>
                            <option timeZoneId="27" gmtAdjustment="GMT-01:00" useDaylightTime="0" value="-1">(GMT-01:00) Cape Verde Is.</option>
                            <option timeZoneId="28" gmtAdjustment="GMT-01:00" useDaylightTime="1" value="-1">(GMT-01:00) Azores</option>
                            <option timeZoneId="29" gmtAdjustment="GMT+00:00" useDaylightTime="0" value="0">(GMT+00:00) Casablanca, Monrovia, Reykjavik</option>
                            <option timeZoneId="30" gmtAdjustment="GMT+00:00" useDaylightTime="1" value="0">(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London</option>
                            <option timeZoneId="31" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option>
                            <option timeZoneId="32" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option>
                            <option timeZoneId="33" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) Brussels, Copenhagen, Madrid, Paris</option>
                            <option timeZoneId="34" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option>
                            <option timeZoneId="35" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) West Central Africa</option>
                            <option timeZoneId="36" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Amman</option>
                            <option timeZoneId="37" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Athens, Bucharest, Istanbul</option>
                            <option timeZoneId="38" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Beirut</option>
                            <option timeZoneId="39" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Cairo</option>
                            <option timeZoneId="40" gmtAdjustment="GMT+02:00" useDaylightTime="0" value="2">(GMT+02:00) Harare, Pretoria</option>
                            <option timeZoneId="41" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</option>
                            <option timeZoneId="42" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Jerusalem</option>
                            <option timeZoneId="43" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Minsk</option>
                            <option timeZoneId="44" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Windhoek</option>
                            <option timeZoneId="45" gmtAdjustment="GMT+03:00" useDaylightTime="0" value="3">(GMT+03:00) Kuwait, Riyadh, Baghdad</option>
                            <option timeZoneId="46" gmtAdjustment="GMT+03:00" useDaylightTime="1" value="3">(GMT+03:00) Moscow, St. Petersburg, Volgograd</option>
                            <option timeZoneId="47" gmtAdjustment="GMT+03:00" useDaylightTime="0" value="3">(GMT+03:00) Nairobi</option>
                            <option timeZoneId="48" gmtAdjustment="GMT+03:00" useDaylightTime="0" value="3">(GMT+03:00) Tbilisi</option>
                            <option timeZoneId="49" gmtAdjustment="GMT+03:30" useDaylightTime="1" value="3.5">(GMT+03:30) Tehran</option>
                            <option timeZoneId="50" gmtAdjustment="GMT+04:00" useDaylightTime="0" value="4">(GMT+04:00) Abu Dhabi, Muscat</option>
                            <option timeZoneId="51" gmtAdjustment="GMT+04:00" useDaylightTime="1" value="4">(GMT+04:00) Baku</option>
                            <option timeZoneId="52" gmtAdjustment="GMT+04:00" useDaylightTime="1" value="4">(GMT+04:00) Yerevan</option>
                            <option timeZoneId="53" gmtAdjustment="GMT+04:30" useDaylightTime="0" value="4.5">(GMT+04:30) Kabul</option>
                            <option timeZoneId="54" gmtAdjustment="GMT+05:00" useDaylightTime="1" value="5">(GMT+05:00) Yekaterinburg</option>
                            <option timeZoneId="55" gmtAdjustment="GMT+05:00" useDaylightTime="0" value="5">(GMT+05:00) Islamabad, Karachi, Tashkent</option>
                            <option timeZoneId="56" gmtAdjustment="GMT+05:30" useDaylightTime="0" value="5.5">(GMT+05:30) Sri Jayawardenapura</option>
                            <option timeZoneId="57" gmtAdjustment="GMT+05:30" useDaylightTime="0" value="5.5">(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
                            <option timeZoneId="58" gmtAdjustment="GMT+05:45" useDaylightTime="0" value="5.75">(GMT+05:45) Kathmandu</option>
                            <option timeZoneId="59" gmtAdjustment="GMT+06:00" useDaylightTime="1" value="6">(GMT+06:00) Almaty, Novosibirsk</option>
                            <option timeZoneId="60" gmtAdjustment="GMT+06:00" useDaylightTime="0" value="6">(GMT+06:00) Astana, Dhaka</option>
                            <option timeZoneId="61" gmtAdjustment="GMT+06:30" useDaylightTime="0" value="6.5">(GMT+06:30) Yangon (Rangoon)</option>
                            <option timeZoneId="62" gmtAdjustment="GMT+07:00" useDaylightTime="0" value="7">(GMT+07:00) Bangkok, Hanoi, Jakarta</option>
                            <option timeZoneId="63" gmtAdjustment="GMT+07:00" useDaylightTime="1" value="7">(GMT+07:00) Krasnoyarsk</option>
                            <option timeZoneId="64" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi</option>
                            <option timeZoneId="65" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Kuala Lumpur, Singapore</option>
                            <option timeZoneId="66" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Irkutsk, Ulaan Bataar</option>
                            <option timeZoneId="67" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Perth</option>
                            <option timeZoneId="68" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Taipei</option>
                            <option timeZoneId="69" gmtAdjustment="GMT+09:00" useDaylightTime="0" value="9">(GMT+09:00) Osaka, Sapporo, Tokyo</option>
                            <option timeZoneId="70" gmtAdjustment="GMT+09:00" useDaylightTime="0" value="9">(GMT+09:00) Seoul</option>
                            <option timeZoneId="71" gmtAdjustment="GMT+09:00" useDaylightTime="1" value="9">(GMT+09:00) Yakutsk</option>
                            <option timeZoneId="72" gmtAdjustment="GMT+09:30" useDaylightTime="0" value="9.5">(GMT+09:30) Adelaide</option>
                            <option timeZoneId="73" gmtAdjustment="GMT+09:30" useDaylightTime="0" value="9.5">(GMT+09:30) Darwin</option>
                            <option timeZoneId="74" gmtAdjustment="GMT+10:00" useDaylightTime="0" value="10">(GMT+10:00) Brisbane</option>
                            <option timeZoneId="75" gmtAdjustment="GMT+10:00" useDaylightTime="1" value="10">(GMT+10:00) Canberra, Melbourne, Sydney</option>
                            <option timeZoneId="76" gmtAdjustment="GMT+10:00" useDaylightTime="1" value="10">(GMT+10:00) Hobart</option>
                            <option timeZoneId="77" gmtAdjustment="GMT+10:00" useDaylightTime="0" value="10">(GMT+10:00) Guam, Port Moresby</option>
                            <option timeZoneId="78" gmtAdjustment="GMT+10:00" useDaylightTime="1" value="10">(GMT+10:00) Vladivostok</option>
                            <option timeZoneId="79" gmtAdjustment="GMT+11:00" useDaylightTime="1" value="11">(GMT+11:00) Magadan, Solomon Is., New Caledonia</option>
                            <option timeZoneId="80" gmtAdjustment="GMT+12:00" useDaylightTime="1" value="12">(GMT+12:00) Auckland, Wellington</option>
                            <option timeZoneId="81" gmtAdjustment="GMT+12:00" useDaylightTime="0" value="12">(GMT+12:00) Fiji, Kamchatka, Marshall Is.</option>
                            <option timeZoneId="82" gmtAdjustment="GMT+13:00" useDaylightTime="0" value="13">(GMT+13:00) Nuku'alofa</option>
                          </select>
                        </td>
                      </tr>
                      <tr />
                      </tbody>
                    </table>
                  </div> <!-- end .table-responsive-->
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- end row -->
      <VerifyIdentity />
      <b-modal
        id="my-modal-upload"
        class="modal fade add-cc"
        tabindex="-1"
        role="dialog"
        title="Change user photo"
        aria-labelledby="add-credit-card"
        aria-hidden="true"
        size="lg"
        style="display: none;"
      >
        <template v-slot:default>
          <div class="modal-body">
            <vue-dropify type="file" accept=".jpeg, .pdf, .gif" required />
          </div>
        </template>
        <template v-slot:modal-footer="{close}">
          <button type="button" class="btn btn-success">Upload</button>
        </template>

        <!-- /.modal-content -->
      </b-modal>

    </template>
    <template v-slot:modal-footer="{close}">
      <button
        type="button" variant="success"
        class="btn btn-success"
        @click="close()
        setData()"
        >
        Save
      </button>
    </template>
  </b-modal>
</template>

<script>
  import VueDropify from 'vue-dropify'
  import VerifyIdentity from '../Account/VerifyIdentity'
  import $ from 'jquery'
  export default {
    name: 'TeamModal',
    components: {
      VerifyIdentity,
      VueDropify
    },
    props: {
      userData: {
        type: Object,
        default: () => {}
      },
      userIndex: {
        type: Number,
        default: null
      }
    },
    data() {
      return {
        modalShow: true,
        userInfo: []
        // userInfo: {
        //   firstName: 'Stephen',
        //   lastName: 'Meritt',
        //   phone: '+1 202 555 0128',
        //   email: 'stephen@magnetic.com'
        // }
      }
    },
    beforeDestroy() {
      console.log('ededed')
    },
    methods: {
      setData() {
        this.$emit('get-data', { userInfo: this.userInfo, userIndex: this.userIndex })
      },
      handleVerifyIdentity() {
        this.$bvModal.show('verify-identity-modal')
      }
    }
  }
</script>

<style lang="sass" scoped>
.select_wrapp
  position: relative
  z-index: 2
  &:after
    pointer-events: none
    z-index: 0
    content: ''
    position: absolute
    right: 15px
    top: 0
    bottom: 0
    margin: auto
    width: 0
    height: 0
    border-style: solid
    border-width: 6px 4px 0 4px
    border-color: #000000 transparent transparent transparent
.b_transfer_time
  .select_wrapp
    width: 55px
    &:after
      right: 0
  select
    width: 100%
.b_ready_calls_sms
  margin-top: 30px
  & > div
    padding: 10px 0
    font-weight: 700
    display: flex
    justify-content: space-between

</style>
<style lang="sass">
.b_ready_calls_sms
  .custom-control-input:checked ~ .custom-control-label::before
    color: #28a745
    border-color: #28a745
    background-color: #28a745
  .custom-control-label:before
    background-color: #dc3545
    border: none
</style>
