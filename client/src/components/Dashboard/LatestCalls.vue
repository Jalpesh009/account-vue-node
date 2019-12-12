<template>
  <div id="latest-calls" class="card-box">
    <h4 class="header-title mt-0 mb-3">Latest calls</h4>
    <LatestCallsItems :calls-data="latestCalls" />
    <p>Yesterday</p>
    <LatestCallsItems :calls-data="yesterdayCalls" />

  </div> <!--cardbox-->
</template>

<script>
import LatestCallsItems from './LatestCallsItems.vue'
export default {
  name: 'LatestCalls',
  components: {
    LatestCallsItems
  },
  data() {
    return {
      latestCalls: [
        {
          id: 0,
          image: 'assets/images/users/user-3.jpg',
          name: 'Nick Cave',
          intent: 'Support Call',
          number: '+61 1900 654 321',
          time: '01:15 PM'
        },
        {
          id: 1,
          image: 'assets/images/users/user-4.jpg',
          name: 'Leonard Cohen',
          intent: 'Support Call',
          number: '+1 613 555 0181',
          time: '11:23 PM'
        },
        {
          id: 2,
          image: 'assets/images/users/user-3.jpg',
          name: 'Michelle Gurevich',
          intent: 'Caller wanting a free trial',
          number: '+1 623 731 2618',
          time: '08:43 PM'
        }
      ],
      yesterdayCalls: [

        {
          id: 3,
          image: 'assets/images/users/user-2.jpg',
          name: 'Stephen Merrit',
          intent: 'Payment',
          number: '+61 1900 654 321',
          time: '08:24 PM'
        },
        {
          id: 4,
          image: 'assets/images/users/unknown.png',
          name: 'Joshua Tillman',
          intent: 'Sales call',
          number: '+1 315 545 0036',
          time: '05:36 PM'
        }
      ]
    }
  },
  methods: {
  }
}
</script>
<style scoped>
</style>
