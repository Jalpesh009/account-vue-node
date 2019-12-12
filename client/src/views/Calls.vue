<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div id="calls-accordion" class="card-box accordion">
          <h4 class="header-title mt-0 mb-3">Call history</h4>
          <CallItem
            v-for="call in calls"
            :key="call.id"
            :id="call.id"
            :image="call.image"
            :name="call.name"
            :intent="call.intent"
            :number="call.number"
            :company_name="call.company_name"
            :duration="call.duration"
            :cost="call.cost"
            :message="call.message"
            :cal_badge="call.calendarBadge"
            :cal_phone="call.calendarPhone"
            :cal_contact="call.contactBadge"
            :cal_email="call.emailBadge"
            :call_type="call.callType"
            :call_rule="call.callRule"
          ></CallItem>
          <!-- call-item -->
        </div>
        <!--cardbox-->
      </div>
      <!-- col-lg-12 -->
    </div>
    <!-- end row -->
  </div>
</template>

<script>
import CallItem from "../components/Calls/CallItem";
import $ from 'jquery'

export default {
  components: {
    CallItem
  },
  data() {
    return {
      calls: [
        {
          id: 1,
          image: "../assets/images/users/user-3.jpg",
          name: "Nick Cave",
          intent: "Support Call",
          number: "+61 1900 654 321",
          company_name: "JCP IT",
          callType: "Good",
          callRule: "Strong",
          duration: 3,
          cost: 2.55,
          message:
            "Urgent!! Please return Jake’s call, he cancelled his account in April, but payment is still being charged to his account.Transfer Unavailable Regards, Donna",
          calendarBadge: false,
          calendarPhone: true,
          contactBadge: false,
          emailBadge: true
        },
        {
          id: 2,
          image: "../assets/images/users/user-4.jpg",
          name: "Leonard Cohen",
          intent: "Support Call",
          number: "+1 613 555 0181",
          company_name: "JCP IT",
          callType: "Good",
          callRule: "Strong",
          duration: 3,
          cost: 2.55,
          message:
            "Urgent!! Please return Jake’s call, he cancelled his account in April, but payment is still being charged to his account.Transfer Unavailable Regards, Donna",
          calendarBadge: true,
          calendarPhone: false,
          contactBadge: false,
          emailBadge: true
        },
        {
          id: 3,
          image: "../assets/images/users/user-5.jpg",
          name: "Michelle Gurevich",
          intent: "Free Trial",
          number: "+1 623 731 2618",
          company_name: "JCP IT",
          callType: "Good",
          callRule: "Strong",
          duration: 3,
          cost: 2.55,
          message:
            "Urgent!! Please return Jake’s call, he cancelled his account in April, but payment is still being charged to his account.Transfer Unavailable Regards, Donna",
          calendarBadge: false,
          calendarPhone: true,
          contactBadge: true,
          emailBadge: false
        },
        {
          id: 4,
          image: "../assets/images/users/user-2.jpg",
          name: "Stephen Meritt",
          intent: "Payment",
          number: "+1 202 555 0128",
          company_name: "JCP IT",
          callType: "Good",
          callRule: "Strong",
          duration: 3,
          cost: 2.55,
          message:
            "Urgent!! Please return Jake’s call, he cancelled his account in April, but payment is still being charged to his account.Transfer Unavailable Regards, Donna",
          calendarBadge: false,
          calendarPhone: false,
          contactBadge: false,
          emailBadge: false
        },
        {
          id: 5,
          image: "../assets/images/users/unknown.png",
          name: "Joshua Tillman",
          intent: "Sales call",
          number: "+1 315 545 0036",
          company_name: "JCP IT",
          callType: "Good",
          callRule: "Strong",
          duration: 3,
          cost: 2.55,
          message:
            "Urgent!! Please return Jake’s call, he cancelled his account in April, but payment is still being charged to his account.Transfer Unavailable Regards, Donna",
          calendarBadge: false,
          calendarPhone: false,
          contactBadge: true,
          emailBadge: true
        },
        {
          id: 6,
          image: "../assets/images/users/unknown.png",
          name: "Damien Rice",
          intent: "Information",
          number: "+353 73 518 6729",
          company_name: "TMF",
          callType: "Good",
          callRule: "Strong",
          duration: 3,
          cost: 1.85,
          message:
            "John is running a small business. He is wanting to speak with someone on the phone. There will be up to 12 people using the service as the business grows. John would like to know what calendar support you have.",
          calendarBadge: false,
          calendarPhone: true,
          contactBadge: false,
          emailBadge: false
        }
      ]
    };
  },
  mounted() {
    if (this.$route.query.call) {
$('#call-header-' + this.$route.query.call).trigger('click')
    }
  }
};
</script>
