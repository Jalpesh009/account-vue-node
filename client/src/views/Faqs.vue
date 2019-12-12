<template>
  <!-- Start Content-->
  <div class="container-fluid">
    <div class="row">
        <div class="col-xl-4">
          <button class="btn btn-success waves-effect waves-light mb-3" data-target=".add-faq" data-backdrop="static" data-keyboard="false" @click="$refs['my-modal'].show()"><i class="fas fa-plus mr-2"/>Add new questions</button>
        </div><!-- end col -->
    </div>
    <!-- end row -->

      <div class="row">
          <div class="col-lg-12">
            <div class="card-box">

              <h4 class="header-title mb-2">FAQs</h4>

              <div class="table-responsive">
                <template>
                  <div>
                    <b-table :items="items" :fields="fields" striped responsive="mb" thead-class="hidden_header" tbody-tr-class="tbody_tr_style" @row-clicked="expandAdditionalInfo">
                      <template slot="row-details" slot-scope="row">
                          <b-card>{{ row.item.answer }}</b-card>
                      </template>
                    </b-table>
                  </div>
                </template>
              </div>
            </div>
          </div>
          </div> <!-- end row -->

    <b-modal
      ref="my-modal"
      class="modal fade add-faq"
      title="New FAQ"
      tabindex="-1"
      role="dialog"
      aria-labelledby="add-faq"
      aria-hidden="true"
      size="lg"
      style="display: none;"
    >
      <template v-slot:default>
        <b-form class="form-horizontal" role="form">
          <div class="form-group row">
            <div class="col-sm-12">
              <b-form-input id="simpleinput" v-model="userQuestion" type="text" class="form-control" placeholder="Enter the question here.." />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12">
              <b-form-textarea id="example-textarea" v-model="userAnswer" class="form-control" rows="2" placeholder="Enter the answer.."/>
            </div>
          </div>
        </b-form>
        <h5 class="mt-3">Assign this question to one or more call rules</h5>
        <Select2 id="filterObject.domId" :options="dataOptions" :settings="select2Settings" :value.sync="setValues" multiple @change="updateValue($event)"/>
      </template>
      <template v-slot:modal-footer>
        <button :disabled="!(userQuestion && userAnswer)" type="button" class="btn btn-success" @click="addFAQ">Add</button>
      </template>
    </b-modal><!-- /.modal-dialog -->

  </div> <!-- container-fluid -->
</template>
<script>
import Select2 from 'v-select2-component'
export default {
  components: {
    Select2
  },
  data() {
    return {
      myValue: '',
      select2Settings: {
        multiple: true
      },
      dataOptions: [
        {
          text: 'New Sales Enquiry',
          children: [
            {
              id: 1,
              text: 'Virtual reception Services?'
            },
            {
              id: 2,
              text: 'Can you help me signing up for paid account?'
            },
            {
              id: 3,
              text: 'How much are your plans and packages?'
            },
            {
              id: 4,
              text: 'How can I get a free trial of the services?'
            }
          ]
        },
        {
          text: 'Accounts Payable/ Receivable',
          children: [
            {
              id: 5,
              text: 'How to update my credit card details?'
            },
            {
              id: 6,
              text: 'There is a mistake or issue with my account or invoice, can you help?'
            }
          ]
        },
        {
          text: 'Existing Clients',
          children: [
            {
              id: 7,
              text: 'Can I speak to my account manager?'
            },
            {
              id: 8,
              text: 'How do I update my call instructions?'
            },
            {
              id: 9,
              text: 'How do I fix an issue with my account?'
            },
            {
              id: 10,
              text: 'Integrations and features'
            },
            {
              id: 11,
              text: 'Techical support issue'
            },
            {
              id: 12,
              text: 'Update account details'
            },
            {
              id: 13,
              text: 'How do I make a complaint?'
            },
            {
              id: 14,
              text: 'How do I close my account?'
            }
          ]
        },
        {
          text: 'Speak with a Staff Member',
          children: [
            {
              id: 15,
              text: 'Wendy'
            },
            {
              id: 16,
              text: 'Steven Allen'
            }
          ]
        },
        {
          text: 'Employment Enquiries',
          children: [
            {
              id: 17,
              text: 'Can I verify someone\'s employment?'
            },
            {
              id: 18,
              text: 'How can I apply for a job?'
            }
          ]
        },
        {
          text: 'Telemarketing / Cold calls',
          children: [
            {
              id: 19,
              text: 'Can I speak to the owner of the business?'
            }
          ]
        }
      ],
      setValues: [],
      myOptions: ['op1', 'op2', 'op3'],
      userQuestion: '',
      userAnswer: '',
      fields: ['name'],
      items: [
        { name: 'How long is the free trial?', answer: 'answer', _showDetails: false },
        { name: 'What are the package costs?', answer: 'answer', _showDetails: false },
        { name: 'Are there any additional charges?', answer: 'answer', _showDetails: false },
        { name: 'Where can I get more information?', answer: 'answer', _showDetails: false },
        { name: 'Are operators/receptionists local?', answer: 'answer', _showDetails: false },
        { name: 'How do I get intergrated with my other cloud based applications?', answer: 'answer', _showDetails: false },
        { name: 'What is a trial phone number?', answer: 'answer', _showDetails: false }
      ]
    }
  },
  mounted() {
  },
  methods: {
    expandAdditionalInfo(row) {
      this.items.forEach(function (item) {
        if (item.name != row.name) {
          item._showDetails = false
        }
      })
      row._showDetails = !row._showDetails

      console.log(row)
    },
    restInputs(spy, key, value = false) {
      Object.keys(spy).forEach(function() { spy[key] = value })
      return spy
    },
    addFAQ() {
      if (this.userQuestion && this.userAnswer) {
        this.items.push({
          name: this.userQuestion,
          answer: this.userAnswer,
          _showDetails: false
        })
      }
      this.userQuestion = ''
      this.userAnswer = ''
      this.$refs['my-modal'].hide()
    }
  }
}
</script>
<style>
  .hidden_header {
    display: none;
  }
  .tbody_tr_style {
    cursor: pointer;
  }
  .tbody_tr_style .b-table-details {
    cursor: auto;
  }

</style>
