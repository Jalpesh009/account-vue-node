<template>
  <!-- Start Content-->
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div id="call-types" class="card-box">
          <div class="row">
            <div class="col-lg-4">
              <button
                id="create-type"
                class="btn btn-success btn-xs waves-effect waves-light float-right"
                data-toggle="modal"
                data-target=".add-new-type"
                data-backdrop="static"
                data-keyboard="false"
                @click="addTypeModalShow"
              >
                <i class="fas fa-plus"/>
                <span class="ml-1">Create new call type</span>
              </button>
              <h4 class="header-title mt-0 mb-3">Call history</h4>
              <hr >
              <Treeview
                @showRuleModal="addRuleModalShow"
                @showDeleteRuleModal="deleteRuleModalShow"
              />
            </div>
            <!-- col-lg-4 -->
            <div class="col-lg-8">
              <hr class="pt-3" >
              <div class="rule-item">
                <h5 class="float-left">Your caller is likely to say...</h5>
                <div class="box-icons">
                  <div class="box-icon">
                    <i
                      v-tippy="{ placement : 'top', arrow: true }"
                      id="add-phrases-btn"
                      class="fa fa-plus"
                      content="Add another phrase"
                    />
                  </div>
                </div>
                <input
                  id="rule"
                  type="text"
                  name="rule"
                  class="form-control form-control-sm"
                  value="Can you help me sing up for a paid account?"
                >
                <div id="more-phrases" class="mt-2"/>
              </div>
              <div class="row">
                <div class="rule-item col-lg-12 mt-2">
                  <h5 class="float-left">Assigned users</h5>
                  <div class="box-icons">
                    <div class="box-icon mr-2">
                      <i class="fas fa-share-alt-square"/>
                    </div>
                    <div class="box-icon mr-2">
                      <i :class="{active: microphoneIsActive }" class="fas fa-microphone-slash" @click="switchMicrofonStatus"/>
                    </div>
                    <div class="box-icon">
                      <i class="fas fa-list"/>
                    </div>
                  </div>
                </div>
              </div>
              <div id="assign-users">
                <div class="assign-user d-inline-block">
                  <div id="test" class="float-right delete-user-btn">
                    <i class="fas fa-trash"/>
                  </div>
                  <img
                    src="assets/images/users/user-2.jpg"
                    class="contact-image img-center text-center d-block rounded-circle avatar-md"
                    alt="profile-image"
                  >
                  <div class="contact-name text-center">
                    <h5>Stephen Meritt</h5>
                  </div>
                  <button
                    class="btn btn-success btn-xs btn-block waves-effect waves-light transfer-enabled"
                  >
                    <span>Transfer online</span>
                  </button>
                </div>

                <div class="assign-user">
                  <div class="float-right delete-user-btn">
                    <i class="fas fa-trash"/>
                  </div>
                  <img
                    src="assets/images/users/user-2.jpg"
                    class="contact-image img-center text-center d-block rounded-circle avatar-md"
                    alt="profile-image"
                  >
                  <div class="contact-name text-center">
                    <h5>Stephen Meritt</h5>
                  </div>
                  <button
                    class="btn btn-success btn-xs btn-block waves-effect waves-light transfer transfer-enabled"
                  >
                    <span>Transfer online</span>
                  </button>
                </div>

                <div class="assign-user">
                  <div class="float-right delete-user-btn">
                    <i class="fas fa-trash"/>
                  </div>
                  <img
                    src="assets/images/users/user-2.jpg"
                    class="contact-image img-center text-center d-block rounded-circle avatar-md"
                    alt="profile-image"
                  >
                  <div class="contact-name text-center">
                    <h5>Stephen Meritt</h5>
                  </div>
                  <button
                    class="btn btn-success btn-xs btn-block waves-effect waves-light transfer-enabled"
                  >
                    <span>Transfer online</span>
                  </button>
                </div>

                <div class="assign-user">
                  <div class="float-right delete-user-btn">
                    <i class="fas fa-trash"/>
                  </div>
                  <img
                    src="assets/images/users/user-2.jpg"
                    class="contact-image img-center text-center d-block rounded-circle avatar-md"
                    alt="profile-image"
                  >
                  <div class="contact-name text-center">
                    <h5>Stephen Meritt</h5>
                  </div>
                  <button
                    class="btn btn-success btn-xs btn-block waves-effect waves-light transfer transfer-enabled"
                  >
                    <span>Transfer online</span>
                  </button>
                </div>

                <div class="assign-user">
                  <div class="float-right delete-user-btn">
                    <i class="fas fa-trash"/>
                  </div>
                  <img
                    src="assets/images/users/user-2.jpg"
                    class="contact-image img-center text-center d-block rounded-circle avatar-md"
                    alt="profile-image"
                  >
                  <div class="contact-name text-center">
                    <h5>Stephen Meritt</h5>
                  </div>
                  <button
                    class="btn btn-success btn-xs btn-block waves-effect waves-light transfer-enabled"
                  >
                    <span>Transfer online</span>
                  </button>
                </div>

                <a href="#" class="assign-user add-user" @click="addUserModalShow">
                  <div class="d-flex flex-column h-100">
                    <div class="m-auto">
                      <i class="fas fa-plus"/>
                      <p class="font-16">Assign new user</p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="rule-item d-flex flex-column">
                    <h5 class="float-left">Calendar Management</h5>
                    <button v-google-signin-button="clientId" type="button" class="google-button form-control form-control-sm">
                      <img class="google-logo" src="assets/images/google-logo.png" >
                      <span class="google-button__text">Sign in with Google</span>
                    </button>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="rule-item">
                    <h5 class="float-left">FAQs</h5>
                    <Select2 :options="options" />
                  </div>
                </div>
                <!-- col-lg-6-->
              </div>
              <!-- row-->
              <div class="row">
                <div class="col-lg-6">
                  <div class="rule-item">
                    <h5 class="float-left">Zapier integration</h5>
                    <select class="form-control form-control-sm">
                      <option value="none">None</option>
                      <option
                        disabled="disabled"
                      >Events (Option not enabled when calendar is connected)</option>
                    </select>
                  </div>
                </div>
                <!-- col-lg-6-->

                <div class="col-lg-6">
                  <div class="rule-item">
                    <h5 class="float-left">Payments integration</h5>
                    <input
                      id="payments-integration"
                      type="text"
                      name="payments-integration"
                      class="form-control form-control-sm"
                      placeholder="Enter your payment form url here"
                    >
                  </div>
                </div>
                <!-- col-lg-6-->
              </div>
              <!-- row-->
              <div class="row">
                <div class="col-lg-6">
                  <div class="rule-item">
                    <h5>Form data</h5>
                    <div id="custom-form">
                      <div id="custom-form-header">
                        <h5 class="ml-1 float-left">Custom form</h5>
                        <div class="custom-form-button float-right">
                          <i
                            v-tippy="{ placement : 'top', arrow: true }"
                            id="add-custom-field-btn"
                            class="fa fa-plus tltp mt-2 mr-2"
                            content="Add field"
                            data-toggle="modal"
                            data-target=".add-new-field"
                            data-backdrop="static"
                            data-keyboard="false"
                            @click="addFieldModalShow"
                          />
                        </div>
                      </div>
                      <div id="custom-form-body">
                        <div class="row">

                          <div
                            v-for="(item, index) in formGenerator"
                            :class="{
                              'col-sm-6 col-lg-12 col-xl-6' : item.inputType !== 'textarea'
                            }"
                            :key="index"
                            class="col-12"
                          >
                            <div class="field">
                              <div class="label">
                                {{ item.label }}
                                <span class="label-additional">({{ item.labelAdditional }})</span>
                              </div>
                              <input v-if="item.inputType === 'input'" :type="item.type" :value="item.preFilled" class="form-control form-control-sm" >
                              <input v-if="item.inputType === 'date'" type="date" class="form-control form-control-sm" >
                              <textarea
                                v-if="item.inputType === 'textarea'"
                                type="textarea"
                                style="height: 75px;"
                                class="form-control form-control-sm">
                                {{ item.preFilled }}
                              </textarea>
                              <select v-if="item.inputType === 'select'" :required="item.required" class="form-control form-control-sm">
                                <option disabled="disabled">{{ item.preFilled }}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- col-lg-6-->

                <div class="col-lg-6">
                  <div class="rule-item">
                    <h5>Call taker instructions</h5>
                    <vue-editor v-model="content" :editor-toolbar="customToolbar"/>
                  </div>
                </div>
                <!-- col-lg-6-->
              </div>
              <!-- row-->
            <div class="float-right mt-4">
              <button class="btn btn-danger waves-effect waves-light btn-sm">Delete</button>
              <button class="btn btn-success waves-effect waves-light btn-sm ml-2">Save</button>
            </div>
            </div>

            <!-- col-lg-8 -->
          </div>
          <!-- end row -->
        </div>
      </div>
    </div>
    <!-- end row -->
    <AddTypeModal />
    <AddRuleModal/>
    <DeleteRuleModal/>
    <AddUserModal/>
    <AddFieldModal @get-field-setting="setToFormGenerator($event)"/>
  </div>
  <!-- container-fluid -->
</template>

<script>
import GoogleSignInButton from 'vue-google-signin-button-directive'
import $ from 'jquery'
import Select2 from 'v-select2-component'
import { VueEditor } from 'vue2-editor'
import Treeview from '../components/Types/Treeview'
import AddTypeModal from '../components/Types/AddTypeModal'
import AddRuleModal from '../components/Types/AddRuleModal'
import DeleteRuleModal from '../components/Types/DeleteRuleModal'
import AddUserModal from '../components/Types/AddUserModal'
import AddFieldModal from '../components/Types/AddFieldModal'

export default {
  components: {
    Select2,
    VueEditor,
    Treeview,
    AddTypeModal,
    AddRuleModal,
    DeleteRuleModal,
    AddUserModal,
    AddFieldModal
  },
  directives: {
    GoogleSignInButton
  },
  data() {
    return {
      clientId: 'Your_Google_Client-Id',
      options: [
        'How long is the free trial?',
        'What are the package costs?',
        'Are there any additional charges?',
        'Where can I get more information?',
        'Are operators/receptionsts local?',
        'How do I get intergrated with my other cloud based applications?',
        'What is a trial phone number?'
      ],
      formGenerator: [
        {
          label: 'Name',
          labelAdditional: 'Default',
          preFilled: '',
          required: false,
          inputType: 'input'
        },
        {
          label: 'Phone',
          type: 'text',
          labelAdditional: 'Default',
          preFilled: '',
          required: false,
          inputType: 'input'
        },
        {
          label: 'Message',
          type: 'tel',
          labelAdditional: 'Default',
          preFilled: '',
          required: false,
          inputType: 'textarea'
        }
      ],
      content: '',
      customToolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' }
        ],
        ['image', 'code-block']
      ],
      config: {
        readOnly: true,
        placeholder: 'Compose an epic...'
      },
      microphoneIsActive: false
    }
  },
  mounted() {
    $('.treeview-animated').mdbTreeview()

    $(document).on('click', '.delete-type-btn', function() {
      var grandparent = $(this)
        .parent()
        .parent()
      var type_name
      type_name = grandparent
        .children('.closed')
        .children('span')
        .html()
      $('#delete-type-btn').click(function() {
        grandparent.remove()
        $('.delete-type').modal('hide')
        toastr.success('Call type "' + type_name + '" deleted succesfully.')
      })
    })

    var $list

    $(document).on('click', '.add-rule-btn', function() {
      $list = $(this)
        .parent()
        .next()
    })
    $(document).on('click', '#create-rule-btn', function() {
      var rule_name = $('#call-rule-name:text').val()
      var type_name
      $list.append(
        '<li class="treeview-animated-element"><span class="call-rule">' +
          rule_name +
          '</span></li>'
      )
      $list.siblings('.closed').addClass('open')
      type_name = $list
        .siblings('.closed')
        .children('span')
        .html()
      $list
        .siblings('.closed')
        .children('.fa-caret-right')
        .addClass('down')
      $list.addClass('active')
      $('.treeview-animated').mdbTreeview()
      $('.add-new-rule').modal('hide')
      $('#call-rule-name').val('')
      toastr.success(
        'Call rule "' + rule_name + '" added to "' + type_name + '".'
      )
    })

    $(document).on('click', '#create-type-btn', function() {
      var $typelist
      $typelist = $('.treeview-animated-list')
      var type_name = $('#call-type-name:text').val()
      $typelist.append(
        '<li class="treeview-animated-items"><a class="closed"><i class="fas fa-caret-right mr-2"></i><span>' +
          type_name +
          '</span></a><span class="call-rule-buttons"><i class="fas add-rule-btn fa-plus" data-toggle="modal" data-target=".add-new-rule" data-backdrop="static" data-keyboard="false"></i><i class="fas delete-type-btn fa-trash" data-toggle="modal" data-target=".delete-type" data-backdrop="static" data-keyboard="false"></i></span><ul class="nested"><li class="treeview-animated-element"><span class="call-rule">New call rule</span></li></ul></li>'
      )
      $typelist = $('.treeview-animated-list')
      var last = $('.treeview-animated-items').last()
      var closed = last.children('.closed')
      closed.addClass('open')
      last.children('.nested').addClass('active')
      closed.children('.fa-caret-right').addClass('down')
      $('.treeview-animated').mdbTreeview()
      $('.add-new-type').modal('hide')
      toastr.success('Call type "' + type_name + '" created.')
      $('#call-type-name').val('')
    })

    var name
    var img
    var assign

    $(document).on('click', 'div.delete-user-btn', function() {
      name = $(this)
        .next()
        .next()
        .children()
        .html()
      img = $(this)
        .next()
        .attr('src')
      assign = $('#assign-users-modal')
      assign.append(
        '<div class="assign-modal"><img src="' +
          img +
          '" class="contact-image img-center text-center d-block rounded-circle avatar-md" alt="profile-image"><div class="contact-name text-center"><h5>' +
          name +
          ' </h5></div><button class="btn btn-success btn-xs btn-block waves-effect waves-light add-user-btn">Assign</button></div>'
      )
      var parent = $(this).parent()
      parent.remove()
      countUsers()
    })

    $(document).on('click', 'button.add-user-btn', function() {
      name = $(this)
        .prev()
        .children()
        .html()
      img = $(this)
        .prev()
        .prev()
        .attr('src')
      assign = $('#assign-users')
      $(
        '<div class="assign-user"><div class="float-right delete-user-btn"><i class="fas fa-trash tltp" content="Unassign user" v-tippy="{ placement : \'top\',  arrow: true }"></i></div><img src="' +
          img +
          '" class="contact-image img-center text-center d-block rounded-circle avatar-md" alt="profile-image"><div class="contact-name text-center"><h5>' +
          name +
          ' </h5></div><button class="btn btn-xs btn-block transfer">Transfer online</button></div>'
      ).insertBefore('.assign-user:last')
      tippy('.tltp')
      countUsers()
      $(this)
        .parent()
        .remove()
    })

    $(document).on('click', '.transfer', function() {
      if ($(this).hasClass('transfer-disabled')) {
        $(this).removeClass('transfer-disabled')
        $(this).html('Transfer online')
      } else {
        $(this).addClass('transfer-disabled')
        $(this).html('Transfer disabled')
      }
    })

    function countUsers() {
      var m = $('#assign-users > .assign-user').length
      var assignuser = $('.assign-user')
      if (m > 2) {
        $('.distribution').removeClass('icon-disabled')
        $('.escalation').removeClass('icon-disabled')
      } else {
        $('.distribution').addClass('icon-disabled')
        $('.escalation').addClass('icon-disabled')
      }
    }

    countUsers()

    $(document).on('click', '.assign-users-icon', function() {
      if ($(this).hasClass('assign-users-icon-active')) {
        $(this).removeClass('assign-users-icon-active')
      } else {
        $(this).addClass('assign-users-icon-active')
      }
    })

    $(document).on('click', '.warm-call', function() {
      if ($(this).hasClass('warm-call-active')) {
        $(this).removeClass('warm-call-active')
      } else {
        $(this).addClass('warm-call-active')
      }
    })

    $(document).on('click', '#add-phrases-btn', function() {
      var phrases = $('#more-phrases')
      phrases.append(
        '<div class="phrase"><input type="text" class="form-control" placeholder="Enter another phrase"><span class="phrase-buttons"><i class="fas delete-phrase-btn fa-trash"></i></span></div>'
      )
      phrases.css('border-width', '1px')
    })

    $(document).on('click', '.delete-phrase-btn', function() {
      var phrases = $('#more-phrases')
      console.log(m)
      var target = $(this)
        .parent()
        .parent()
      target.remove()
      var m = $('.phrase').length
      if (m == 0) {
        phrases.css('border-width', '0px')
      }
    })
  },
  methods: {
    setToFormGenerator(payload) {
      console.log(payload)
      this.formGenerator.push(payload)
    },
    onEditorBlur(quill) {
      console.log('editor blur!', quill)
    },
    onEditorFocus(quill) {
      console.log('editor focus!', quill)
    },
    onSelectionChange(range) {
      console.log('selection change!', range)
    },
    addTypeModalShow() {
      this.$bvModal.show('add-new-type')
    },
    addRuleModalShow() {
      this.$bvModal.show('add-new-rule')
    },
    deleteRuleModalShow() {
      this.$bvModal.show('delete-rule')
    },
    addUserModalShow() {
      this.$bvModal.show('add-new-user')
    },
    addFieldModalShow() {
      this.$bvModal.show('add-new-field')
    },
    switchMicrofonStatus() {
      this.microphoneIsActive = !this.microphoneIsActive
    },
    OnGoogleAuthSuccess (idToken) {
      // Receive the idToken and make your magic with the backend
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    }
  }
}
</script>
<style>
.fa-microphone-slash {
  color: #ff5b5b
}
.fa-microphone-slash.active {
  color: #10c469
}
.fa-microphone-slash:hover {
  color: #10c469;
}
</style>
