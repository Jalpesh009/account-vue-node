<template>
  <div id="statistics" class="card-box">
          <b-dropdown
            variant="link"
            class="float-right"
            right
            text="Right align"
            no-caret
            toggle-class="text-decoration-none"
          >
            <template v-slot:button-content>
              <a
                href="#"
                class="dropdown-toggle arrow-none card-drop"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="mdi mdi-dots-vertical" />
              </a>
            </template>
            <!--<div class="dropdown-menu dropdown-menu-right">-->
            <!-- item-->
            <b-dropdown-item href="javascript:void(0);" class="dropdown-item">Option 1</b-dropdown-item>
            <!-- item-->
            <b-dropdown-item href="javascript:void(0);" class="dropdown-item">Option 2</b-dropdown-item>
            <!-- item-->
            <b-dropdown-item href="javascript:void(0);" class="dropdown-item">Option 3</b-dropdown-item>
            <!-- item-->
            <b-dropdown-item href="javascript:void(0);" class="dropdown-item">Option 4</b-dropdown-item>
            <!--</div>-->
          </b-dropdown>
    <h4 class="header-title mt-0 mb-3">Statistics</h4>
    <div class="d-flex flex-wrap justify-content-center text-center">
      <div class="statistics-item d-flex flex-column align-items-center">
        <div id="statistics-operator" class="circle mb-2 d-flex justify-content-center align-items-center">{{ avgOprAnswerTime }}s</div>
        <p>Average answer time</p>
      </div>
      <div class="statistics-item d-flex flex-column align-items-center">
        <div id="statistics-user" class="circle mb-2 d-flex justify-content-center align-items-center">{{ avgUserAnswerTime }}s</div>
        <p>Average answer time</p>
      </div>
      <div class="statistics-item d-flex flex-column align-items-center">
        <div id="statistics-missed" class="circle mb-2 d-flex justify-content-center align-items-center">{{ missedCalls }}</div>
        <p>Missed calls</p>
      </div>
      <div class="statistics-item d-flex flex-column align-items-center">
        <div id="statistics-today" class="circle mb-2 d-flex justify-content-center align-items-center">{{ callsToday }}</div>
        <p>Calls today</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Statistics',
  props: {
    'avg-opr-answer-time': {
      type: [Number, String],
      required: false,
      default: () => 0
    },
    'avg-user-answer-time': {
      type: [Number, String],
      required: false,
      default: () => 0
    },
    'missed-calls': {
      type: [Number, String],
      required: false,
      default: () => 0
    },
    'calls-today': {
      type: [Number, String],
      required: false,
      default: () => 0
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.statistics-item {
  width: 150px !important;
}
</style>
