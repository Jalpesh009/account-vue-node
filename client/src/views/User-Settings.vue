<template>
  <div id="add-edit-member" class="add-edit-member">
    <div class="row">
      <div class="col-lg-12">
        <div class="card-box">
          <div class="row">
            <div class="col-lg-3 text-center">
              <a data-toggle="modal" href="#" data-backdrop="static" data-keyboard="false" @click="$bvModal.show('user-avatar-upload')">
                <div class="img-hover">
                  <img :src="user_avatar_img" class="rounded-circle avatar-xxxl img-thumbnail" alt="profile-image" />
                  <div class="img-overlay">
                    Upload
                    <br />
                    <i class="fas fa-camera" />
                  </div>
                </div>
              </a>
              <p class="h2 pt-0 mt-2 mb-1">{{ `${userInfo.first_name} ${userInfo.last_name}` }}</p>
              <div class="b_transfer_time">
                <h4 class="title">Do not transfer form</h4>
                <div class="wrapper">
                  <label for="transfer_from" class="select_wrapp">
                    <select id="transfer_from" v-model="userInfo.start_time" name="transfer_from">
                      <option value="24">12 am</option>
                      <option value="1">1 am</option>
                      <option value="2">2 am</option>
                      <option value="3">3 am</option>
                      <option value="4">4 am</option>
                      <option value="5">5 am</option>
                      <option value="6">6 am</option>
                      <option value="7">7 am</option>
                      <option value="8">8 am</option>
                      <option value="9">9 am</option>
                      <option value="10">10 am</option>
                      <option value="11">11 am</option>
                      <option value="12">12 pm</option>
                      <option value="13">1 pm</option>
                      <option value="14">2 pm</option>
                      <option value="15">3 pm</option>
                      <option value="16">4 pm</option>
                      <option value="17">5 pm</option>
                      <option value="18">6 pm</option>
                      <option value="19">7 pm</option>
                      <option value="20">8 pm</option>
                      <option value="21">9 pm</option>
                      <option value="22">10 pm</option>
                      <option value="23">11 pm</option>
                    </select>
                  </label>
                  -
                  <label for="transfer_to" class="select_wrapp">
                    <select id="transfer_to" v-model="userInfo.end_time" name="transfer_to">
                      <option value="24">12 am</option>
                      <option value="1">1 am</option>
                      <option value="2">2 am</option>
                      <option value="3">3 am</option>
                      <option value="4">4 am</option>
                      <option value="5">5 am</option>
                      <option value="6">6 am</option>
                      <option value="7">7 am</option>
                      <option value="8">8 am</option>
                      <option value="9">9 am</option>
                      <option value="10">10 am</option>
                      <option value="11">11 am</option>
                      <option value="12">12 pm</option>
                      <option value="13">1 pm</option>
                      <option value="14">2 pm</option>
                      <option value="15">3 pm</option>
                      <option value="16">4 pm</option>
                      <option value="17">5 pm</option>
                      <option value="18">6 pm</option>
                      <option value="19">7 pm</option>
                      <option value="20">8 pm</option>
                      <option value="21">9 pm</option>
                      <option value="22">10 pm</option>
                      <option value="23">11 pm</option>
                    </select>
                  </label>
                </div>
              </div>
              <div class="b_ready_calls_sms">
                <div class="calls">
                  <span>Ready for calls</span>
                  <b-form-checkbox v-model="userInfo.status_call" value="1" unchecked-value="0" name="check-button" switch />
                </div>
                <div class="sms">
                  <span>No SMS</span>
                  <b-form-checkbox v-model="userInfo.status_sms" value="1" unchecked-value="0" name="check-button1" switch />
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
                        <td>
                          <input v-model="userInfo.first_name" type="text" name="entity" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" class="column-header">Last Name</th>
                        <td>
                          <input v-model="userInfo.last_name" type="text" name="region" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" class="column-header">Contact Number</th>
                        <td>
                          <input v-model="userInfo.phone_number" type="tel" name="ABN" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" class="column-header">Gender</th>
                        <td class="select_wrapp">
                          <select v-model="userInfo.gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" class="column-header">Account type</th>
                        <td>
                          <select v-model="userInfo.type_id" class="select_wrapp">
                            <option value="null">Select Type</option>
                            <option value="1">Demo-1 Type</option>
                            <option value="2">Demo-2 Type</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" class="column-header">Email</th>
                        <td>
                          <input v-model="userInfo.email" type="text" name="email" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" class="column-header">Password</th>
                        <td>
                          <input v-model="userInfo.password" placeholder="Type new password..." type="password" name="password" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" class="column-header">Time zone</th>
                        <td class="select_wrapp">
                          <select v-model="userInfo.time_zone_id">
                            <option value="1">(GMT-12:00) International Date Line West</option>
                            <option value="2">(GMT-11:00) Midway Island, Samoa</option>
                            <option value="3">(GMT-10:00) Hawaii</option>
                            <option value="4">(GMT-09:00) Alaska</option>
                            <option value="5">(GMT-08:00) Pacific Time (US & Canada)</option>
                            <option value="6">(GMT-08:00) Tijuana, Baja California</option>
                            <option value="7">(GMT-07:00) Arizona</option>
                            <option value="8">(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
                            <option value="9">(GMT-07:00) Mountain Time (US & Canada)</option>
                            <option value="10">(GMT-06:00) Central America</option>
                            <option value="11">(GMT-06:00) Central Time (US & Canada)</option>
                            <option value="12">(GMT-06:00) Guadalajara, Mexico City, Monterrey</option>
                            <option value="13">(GMT-06:00) Saskatchewan</option>
                            <option value="14">(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option>
                            <option value="15">(GMT-05:00) Eastern Time (US & Canada)</option>
                            <option value="16">(GMT-05:00) Indiana (East)</option>
                            <option value="17">(GMT-04:00) Atlantic Time (Canada)</option>
                            <option value="18">(GMT-04:00) Caracas, La Paz</option>
                            <option value="19">(GMT-04:00) Manaus</option>
                            <option value="20">(GMT-04:00) Santiago</option>
                            <option value="21">(GMT-03:30) Newfoundland</option>
                            <option value="22">(GMT-03:00) Brasilia</option>
                            <option value="23">(GMT-03:00) Buenos Aires, Georgetown</option>
                            <option value="24">(GMT-03:00) Greenland</option>
                            <option value="25">(GMT-03:00) Montevideo</option>
                            <option value="26">(GMT-02:00) Mid-Atlantic</option>
                            <option value="27">(GMT-01:00) Cape Verde Is.</option>
                            <option value="28">(GMT-01:00) Azores</option>
                            <option value="29">(GMT+00:00) Casablanca, Monrovia, Reykjavik</option>
                            <option value="30">(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London</option>
                            <option value="31">(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option>
                            <option value="32">(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option>
                            <option value="33">(GMT+01:00) Brussels, Copenhagen, Madrid, Paris</option>
                            <option value="34">(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option>
                            <option value="35">(GMT+01:00) West Central Africa</option>
                            <option value="36">(GMT+02:00) Amman</option>
                            <option value="37">(GMT+02:00) Athens, Bucharest, Istanbul</option>
                            <option value="38">(GMT+02:00) Beirut</option>
                            <option value="39">(GMT+02:00) Cairo</option>
                            <option value="40">(GMT+02:00) Harare, Pretoria</option>
                            <option value="41">(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</option>
                            <option value="42">(GMT+02:00) Jerusalem</option>
                            <option value="43">(GMT+02:00) Minsk</option>
                            <option value="44">(GMT+02:00) Windhoek</option>
                            <option value="45">(GMT+03:00) Kuwait, Riyadh, Baghdad</option>
                            <option value="46">(GMT+03:00) Moscow, St. Petersburg, Volgograd</option>
                            <option value="47">(GMT+03:00) Nairobi</option>
                            <option value="48">(GMT+03:00) Tbilisi</option>
                            <option value="49">(GMT+03:30) Tehran</option>
                            <option value="50">(GMT+04:00) Abu Dhabi, Muscat</option>
                            <option value="51">(GMT+04:00) Baku</option>
                            <option value="52">(GMT+04:00) Yerevan</option>
                            <option value="53">(GMT+04:30) Kabul</option>
                            <option value="54">(GMT+05:00) Yekaterinburg</option>
                            <option value="55">(GMT+05:00) Islamabad, Karachi, Tashkent</option>
                            <option value="56">(GMT+05:30) Sri Jayawardenapura</option>
                            <option value="57">(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
                            <option value="58">(GMT+05:45) Kathmandu</option>
                            <option value="59">(GMT+06:00) Almaty, Novosibirsk</option>
                            <option value="60">(GMT+06:00) Astana, Dhaka</option>
                            <option value="61">(GMT+06:30) Yangon (Rangoon)</option>
                            <option value="62">(GMT+07:00) Bangkok, Hanoi, Jakarta</option>
                            <option value="63">(GMT+07:00) Krasnoyarsk</option>
                            <option value="64">(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi</option>
                            <option value="65">(GMT+08:00) Kuala Lumpur, Singapore</option>
                            <option value="66">(GMT+08:00) Irkutsk, Ulaan Bataar</option>
                            <option value="67">(GMT+08:00) Perth</option>
                            <option value="68">(GMT+08:00) Taipei</option>
                            <option value="69">(GMT+09:00) Osaka, Sapporo, Tokyo</option>
                            <option value="70">(GMT+09:00) Seoul</option>
                            <option value="71">(GMT+09:00) Yakutsk</option>
                            <option value="72">(GMT+09:30) Adelaide</option>
                            <option value="73">(GMT+09:30) Darwin</option>
                            <option value="74">(GMT+10:00) Brisbane</option>
                            <option value="75">(GMT+10:00) Canberra, Melbourne, Sydney</option>
                            <option value="76">(GMT+10:00) Hobart</option>
                            <option value="77">(GMT+10:00) Guam, Port Moresby</option>
                            <option value="78">(GMT+10:00) Vladivostok</option>
                            <option value="79">(GMT+11:00) Magadan, Solomon Is., New Caledonia</option>
                            <option value="80">(GMT+12:00) Auckland, Wellington</option>
                            <option value="81">(GMT+12:00) Fiji, Kamchatka, Marshall Is.</option>
                            <option value="82">(GMT+13:00) Nuku'alofa</option>
                          </select>
                        </td>
                      </tr>
                      <tr />
                    </tbody>
                  </table>
                </div>
                <!-- end .table-responsive-->
              </form>
            </div>
            <div class="d-flex w-100 justify-content-end">
              <button type="button" variant="success" class="btn btn-success" @click="saveData">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
    <b-modal id="user-avatar-upload" class="modal fade add-cc" tabindex="-1" role="dialog" title="Change user photo" aria-labelledby="add-credit-card" aria-hidden="true" size="lg">
      <template v-slot:default>
        <div class="modal-body">
          <vue-dropify type="file" accept=".jpeg, .pdf, .gif" required @upload="uploadAvtar" @change="chnageAvtar" />
        </div>
      </template>
      <template v-slot:modal-footer="{close}">
        <button type="button" class="btn btn-success" @click="uploadAvtarToServer">Upload</button>
      </template>
    </b-modal>

    <b-modal id="verify-email-modal" class="verify-email" title="Verify your email" hide-footer>
      <template v-slot:default>
        <div class="text-center text-center d-flex align-items-center flex-column">
          <p>
            We have sent a confirmation email to Please enter the confirmation code below:
          </p>
          <input v-model="verificationCode" class="form-control" type="number" placeholder="00000" />
          <b-button variant="success" class="mt-3" @click="handleVerifyEmail">Verify</b-button>
        </div>
      </template>
    </b-modal>

    <b-modal id="verify-number-modal" class="verify-number" title="Verify your phone number" hide-footer>
      <template v-slot:default>
        <div class="text-center text-center d-flex align-items-center flex-column">
          <p>
            We have sent a confirmation text to Please enter the confirmation code below:
          </p>
          <input v-model="verificationCode" class="form-control" type="number" placeholder="00000" />
         <b-button variant="success" class="mt-3" @click="handleVerifyNumber">Verify</b-button>
        </div>
      </template>
    </b-modal>

    <VerifyIdentity />
  </div>
</template>
<script>

import VueDropify from "vue-dropify";
import firebase from "firebase";
import { mapState } from "vuex";
import * as _ from "lodash";
import VerifyIdentity from "../components/Account/VerifyIdentity";
export default {
  name: "UserSettings",
  components: {
    VerifyIdentity,
    VueDropify
  },

  data() {
    return {
      tempUserAvatar: null,
      isBothChange: false,
      difference: [],
      userInfo: {},
      verificationId: "",
      verificationCode: ""
    };
  },

  created() {
    this.userInfo = Object.assign({}, this.currentUser);
  },

  computed: {
    ...mapState("auth", {
      currentUser: state => state.user
    }),
    user_avatar_img: function ()  {
      if(this.userInfo.photo_id){
        return this.userInfo.photo_id;
      }else if(this.userInfo.gender=='female'){
        return 'assets/images/users/profile-female.png'
      }
      return 'assets/images/users/unknown.png'
    }
  },

  methods: {
    uploadAvtar(payload) {
      console.log("uploadAvtar payload", payload);
      this.tempUserAvatar = payload;
    },
    chnageAvtar(payload) {
      console.log("chnageAvtar payload", payload);
    },
    uploadAvtarToServer() {
      if (this.tempUserAvatar) {
        let storageRef = firebase
          .storage()
          .ref(`KYC/ORG_ID/${this.currentUser.user_id}/${this.currentUser.first_name}`);
        let uploadTask = storageRef.put(this.tempUserAvatar[0]);
        uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
          snapshot => {},
          error => {},
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              this.userInfo.photo_id = downloadURL;
              this.$bvModal.hide("user-avatar-upload");
            });
          }
        );
      } else {
        //console.log("uploadAvtarToServer Out", this.tempUserAvatar);
      }
    },
    differenceObj(object, base) {
      function changes(object, base) {
        return _.transform(object, function(result, value, key) {
          if (!_.isEqual(value, base[key])) {
            result[key] =
              _.isObject(value) && _.isObject(base[key])
                ? changes(value, base[key])
                : value;
          }
        });
      }
      return changes(object, base);
    },
    sendVerifyEmail() {
      this.verificationCode = "";
      this.$store
        .dispatch("auth/sendVerificationEmail", {
          email: this.difference.email,
          first_name: this.userInfo.first_name,
          last_name: this.userInfo.last_name
        })
        .then(resp => {
          this.verificationId = resp.data.result.id;
          this.$bvModal.show("verify-email-modal");
        })
        .catch(err => {
          this.$snotify.error(err, "Error!", {
            timeout: 3000,
            showProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true
          });
        });
    },
    handleVerifyEmail() {
      if (this.verificationCode) {
        this.$store
          .dispatch("auth/verifyCode", {
            id: this.verificationId,
            code: this.verificationCode
          })
          .then(resp => {
            if (resp.data.result.verify) {
              this.$snotify.success("Successfully verified", "Success!", {
                timeout: 3000,
                showProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true
              });
              this.$bvModal.hide("verify-email-modal");
              if (this.isBothChange) {
                this.sendVerifyNumber();
              } else {
                this.saveProfileData(this.difference);
              }
            }
          })
          .catch(err => {
            this.$snotify.error(err, "Error!", {
              timeout: 3000,
              showProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true
            });
          });
      } else {
        this.$snotify.error("verification Code is not empty", "Error!", {
          timeout: 3000,
          showProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true
        });
      }
    },
    sendVerifyNumber() {
      this.verificationCode = "";
      this.$store
        .dispatch("auth/sendVerificationSms", {
          number: this.difference.phone_number,
          first_name: this.userInfo.first_name,
          last_name: this.userInfo.last_name
        })
        .then(resp => {
          this.verificationId = resp.data.result.id;
          this.$bvModal.show("verify-number-modal");
        })
        .catch(err => {
          this.$snotify.error(err, "Error!", {
            timeout: 3000,
            showProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true
          });
        });
    },
    handleVerifyNumber() {
      if (this.verificationCode) {
        this.$store
          .dispatch("auth/verifyCode", {
            id: this.verificationId,
            code: this.verificationCode
          })
          .then(resp => {
            if (resp.data.result.verify) {
              this.$snotify.success("Successfully verified", "Success!", {
                timeout: 3000,
                showProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true
              });
              this.$bvModal.hide("verify-number-modal");
              this.saveProfileData(this.difference);
            }
          })
          .catch(err => {
            this.$snotify.error(err, "Error!", {
              timeout: 3000,
              showProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true
            });
          });
      } else {
        this.$snotify.error("verification Code is not empty", "Error!", {
          timeout: 3000,
          showProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true
        });
      }
    },
    saveProfileData(data) {
      this.$store
        .dispatch("auth/saveSetting", data)
        .then(resp => {          
          if (resp.data.result.auth) {
            this.$snotify.success("Profile Successfully saved", "Success!", {
              timeout: 3000,
              showProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true
            });
          }
          this.userInfo = JSON.parse(JSON.stringify(resp.data.result.user));;
        })
        .catch(err => {
          console.log("err....", err);
          this.$snotify.error(err, "Error!", {
            timeout: 3000,
            showProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true
          });
        });
    },
    saveData() {
      const update = this.userInfo;
      const orig = this.currentUser;
      console.log("update", update);
      console.log("orig", orig);
      this.difference = JSON.parse(JSON.stringify(this.differenceObj(update, orig)));
      //console.log("difference", this.difference);
      if (!_.isEmpty(this.difference)) {
        if (this.difference.email && this.difference.phone_number) {
          this.isBothChange = true;
          this.sendVerifyEmail();
        } else if (this.difference.email) {
          this.sendVerifyEmail();
        } else if (this.difference.phone_number) {
          this.sendVerifyNumber();
        } else {
          this.saveProfileData(this.difference);
        }
      } else {
        this.$snotify.warning("Change at least one field", "Warning!", {
          timeout: 3000,
          showProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true
        });
      }
    }
  }
};


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
  .img-hover
    width: 60%
</style>
