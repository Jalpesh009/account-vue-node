<template>
<div>
  <b-modal :id="id" size="lg" hide-footer @show="resetModal">
    <template v-slot:modal-title>
      <h4 id="verify-email" class="modal-title">Credit card information and ownership proof</h4>
    </template>
    <div v-show="step == 1">
      <div class="modal-body">
        <h5>STEP 1: Provide your credit card information</h5>
        <p>In order to get your paid account up and running, you need to add a payment card to your account and provide the following information:</p>
        <VCreditCard direction="row" @change="creditInfoChanged"/>
      </div>
      <div class="modal-footer">
        <button id="verification-button1" :disabled="validate1" type="button" class="btn btn-primary" @click="step = 2">Next</button>
      </div>
    </div>
    <div v-show="step == 2">
      <div class="modal-body">
        <h5>STEP 2: Upload photos proving ownership of your card</h5>
        <p class="text-center">This is a required step in card verification procedure.</p>
        <h5 class="text-center pt-1">Selfie with Payment Card</h5>
        <VueDropzone id="dzSelfie" ref="dzSelfie" :options="dropzoneOption" @vdropzone-file-added="uploadSelfie" @vdropzone-removed-file="removeSelfie"/>
        <h5 class="pt-2">Photo requirements</h5>
        <ul>
          <li>Look straight at the camera.</li>
          <li>Background colour should be light and neutral.</li>
          <li>Photo of you should be in <strong>colour.</strong></li>
          <li>Your face must be clearly <strong>visible</strong>. Please <strong>do not</strong> wear sunglasses, a hat, or a headband.</li>
          <li>Information in your document must be easily readable.</li>
          <li>In case of a low-quality photo or scan, the Compliance Officer may ask you to upload it again.</li>
        </ul>
      </div>
      <div class="modal-footer">
        <button id="verification-button2" type="button" class="btn btn-success" @click="onComplete">Add card</button>
      </div>
    </div>
  </b-modal>
  <vue-snotify/>
</div>
</template>

<script>
import 'jquery-validation'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import firebase from 'firebase'
import JQuery from 'jquery'
import VCreditCard from 'v-credit-card'
import 'v-credit-card/dist/VCreditCard.css'
import {
    mapState
} from 'vuex'
let $ = JQuery

export default {
  name: 'AddCreditCard',
  components: {
    VueDropzone: vue2Dropzone,
    VCreditCard
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: (vm) => ({
    dropzoneOption: {
      url: '/',
      addRemoveLinks: true,
      method: 'put',
      chunking: true,
      forceChunking: true,
      autoQueue: false,
      autoProcessQueue: false,
      dictDefaultMessage: "<i class='mdi mdi-cloud-upload'></i>Click or drag and drop image",
      acceptedFiles: 'image/*',
      maxFiles: 1
    },
    selfieImage: null,
    step: 1,
    data: {
      name: '',
      cardNumber: '',
      expiration: '',
      security: '',
      selfieImage: null
    },
    validate1: true,
    finished: false
  }),
  computed: {
    ...mapState('auth', {
      currentUser: (state) => state.user
    })
  },
  methods: {
    onComplete () {
      this.$store.dispatch('billing/addCreditCard', {
        'name': this.data.name,
        'card_number': this.data.cardNumber,
        'expiration': this.data.expiration,
        'security': this.data.security,
        'selfie_download_url': this.data.selfieImage.downloadUrl,
        'selfie_full_path': this.data.selfieImage.fullPath,
        'user_id': this.currentUser.user_id
      }).then(() => {
        this.$snotify.success('Successfully added', 'Success!',
          {
           timeout: 3000,
           showProgressBar: true,
           closeOnClick: true,
           pauseOnHover: true
          }
        )
        this.hide()
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
      this.finished = true
    },
    resetModal () {
      this.step = 1
    },
    show () {
      this.$bvModal.show(this.id)
    },
    hide () {
      this.$bvModal.hide(this.id)
    },
    creditInfoChanged (values) {
      let validate1 = false
      for (const key in values) {
        if (values[key] === '') validate1 = true
        this.data[key] = values[key]
      }
      this.validate1 = validate1
    },
    storage_upload (filedata, filehandle, dropzoneId, cb) {
      let progressBar = $('#' + dropzoneId + ' .dz-progress')[0]
      let task
      let uuidString = this.uuidv4()
      let storageRef = firebase.storage().ref(this.currentUser.user_id + '/' + uuidString)

      task = storageRef.putString(filedata, 'data_url')
      progressBar.opacity = 1

      task
          .on(firebase.storage.TaskEvent.STATE_CHANGED,
              function progress(snapshot) {
                  let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                  progressBar.children[0].style.width = progress + '%'
              },
              function(error) {
                  console.log(error)
              },
              function() {
                  task.snapshot.ref.getMetadata().then(function(meta) {
                      task.snapshot.ref.getDownloadURL().then(function(downloadUrl) {
                          var response = {
                            publicURL: downloadUrl,
                            metainfo: meta
                          }
                          return cb(response)
                      })
                  })

                  progressBar.style.opacity = 0
              }
          )
    },
    removeSelfie (file) {
      if (this.finished) return
      let storageRef = firebase.storage().ref('/')
      let that = this
      storageRef.child(that.data.selfieImage.fullPath).delete().then(() => {
        this.$snotify.success('Successfully removed', 'Success!',
          {
           timeout: 3000,
           showProgressBar: true,
           closeOnClick: true,
           pauseOnHover: true
          }
        )
      }).catch(error => {
        console.log('Something is wrong')
        console.log(error)
      })
    },
    uploadSelfie (file) {
      let reader = new FileReader()
      let that = this
      reader.onload = function(event) {
          // event.target.result contains base64 encoded image
          that.storage_upload(event.target.result, file, 'dzSelfie', (r) => {
            that.data.selfieImage = {
              downloadUrl: r.publicURL,
              fullPath: r.metainfo.fullPath
            }
          })
      }
      reader.readAsDataURL(file)
    },
    uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0
        let v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
      })
    }
  }
}
</script>
