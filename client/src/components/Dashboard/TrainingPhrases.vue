<template>
  <div v-if="(Array.isArray(trainingPhraseInputs) && trainingPhraseInputs.length)" class="card training-phrases">
    <div class="card-header">
      Flagged training phrases
      <div class="float-right header-button">
        <i :class="{'fa-minus-square': listIsOpen, 'fa-caret-square-down': !listIsOpen}" class="minimize-button fas" @click="listIsOpen = !listIsOpen"/>
      </div>
    </div>
    <div v-show="listIsOpen" class="card-body">
      <div class="training-phrases-list">
        <div class="table-responsive">
          <table class="table table-borderless text-left table-striped account mb-0">
            <tbody>
            <tr v-for="(item, index) in trainingPhraseInputs" :key="index">
              <td>
                <input :value="item" type="text" disabled="diabled" class="training-phrase-input">
              </td>
              <td class="buttons-cell">
                <div class="training-phrases-icon"/>
                <button data-backdrop="static" data-keyboard="false" class="phrase-assign btn btn-primary waves-effect waves-light btn-sm width-xs mr-2" @click="$bvModal.show('assign-phrase')">
                  <i class="fas fa-share mr-1"/>
                  <span>Assign</span>
                </button>
                <button data-toggle="modal" data-backdrop="static" data-keyboard="false" class="phrase-create btn btn-success waves-effect waves-light btn-sm width-xs mr-2" @click="$bvModal.show('create-phrase')">
                  <i class="fas fa-plus mr-1"/>
                  <span>Create</span>
                </button>
                <button class="phrase-dismiss btn btn-secondary waves-effect waves-light btn-sm width-xs mr-2" @click="removeItem(index)">
                  <i class="fas fa-times mr-1"/>
                  <span>Dismiss</span>
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div> <!-- end .table-responsive-->
      </div>
      <b-modal
        id="assign-phrase"
        class="modal fade assign-phrase"
        title="Assign this phrase to a call rule"
        tabindex="-1"
        role="dialog"
        centered
        aria-labelledby="assign-phrase"
        size="lg"
      >
        <template v-slot:modal-header="{close}">
          <h4 class="modal-title">Assign this phrase to a call rule</h4>
          <button type="button" class="close" @click="close">×</button>
        </template>
        <template v-slot:default>
          <p>Choose a call rule to assign this phrase to:</p>
          <select class="form-control">
            <optgroup v-for="(item, index) in assignPhraseSelect" :label="item.label" :key="index">
              <option v-for="(option, optionIndex) in item.options" :key="optionIndex + '' + index">
                {{ option }}
              </option>
            </optgroup>
          </select>
        </template>
        <template v-slot:modal-footer="{close}">
          <button type="button" class="btn btn-success" @click="close">Assign</button>
        </template>
      </b-modal>
      <b-modal
        id="create-phrase"
        class="modal fade assign-phrase"
        title="Create a new call rule to add this phrase to:"
        tabindex="-1"
        role="dialog"
        centered
        aria-labelledby="create-phrase"
        size="lg"
      >
        <template v-slot:modal-header="{close}">
          <h4 class="modal-title" >Create a new call rule to add this phrase to:</h4>
          <button type="button" class="close" @click="close">×</button>
        </template>
        <template v-slot:default>
          <p>Choose a call type in which you want to create new call rule:</p>
          <select class="form-control">
            <option v-for="(option, optionIndex) in createPhraseSelect" :key="optionIndex">
              {{ option }}
            </option>
          </select>
        </template>
        <template v-slot:modal-footer="{close}">
          <button type="button" class="btn btn-success" @click="close">Assign</button>
        </template>
      </b-modal>
    </div>

  </div>
</template>

<script>
  import JQuery from 'jquery'
  let $ = JQuery
  export default {
    name: 'TrainingPhrases',
    props: {
      trainingPhraseInputs: {
        type: Array,
        default: () => ['Phrase 1', 'Phrase 2']
      }
    },
    data() {
      return {
        listIsOpen: false,
        assignPhraseSelect: [
          {
            label: 'New sales enquiry',
            options: ['Virtual reception services', 'Can you help me sign up for a paid account?', 'How much are your plans and packages?', 'How can I get a free trial of the service?']
          },
          {
            label: 'Accounts payable/Receivable',
            options: ['How to update my credit card details?', 'There is a mistake or issue with my account or invoice, can you help?']
          },
          {
            label: 'Telemarketing/Cold calls',
            options: ['Can I speak to the owner of the business?']
          }
        ],
        createPhraseSelect: [
          'New sales enquiry',
          'Accounts payable/Receivable',
          'Existing clients',
          'Telemarketing/Cold calls',
          'Employment enquiries'
        ]
      }
    },
    methods: {
      removeItem(index) {
        this.$emit('remove-phrase-input', index)
      }
    }
  }
</script>

<style scoped>
  .training-phrases .card-header {
    padding: .5rem 1rem .5rem 1.5rem;
    font-size: 1rem;
    font-family: 'Karla';
    background-color: #ff5b5b;
    color:#fff;
    font-weight: 600;
  }

  .training-phrases table td {
    padding: 0.5rem;
  }

  .buttons-cell {
    width: 350px !important;
  }
  .header-button .minimize-button {
    cursor: pointer;
  }
  @media (max-width: 990px) {
    #call-types .col-lg-8 {
      border-left: none;
    }

    .training-phrases-list span {
      display: none;
    }

    .training-phrases-list button {
      padding: 0.25rem;
      min-width: 30px !important;
    }

    .training-phrases-list i {
      margin-right: 0 !important;
    }

    .buttons-cell {
      width: 155px !important;
    }

  }

</style>
