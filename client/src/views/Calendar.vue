<template>
<div class="row">
  <div class="col-lg-12">
    <div class="row">
      <div class="col-lg-2">
        <div class="widget">
          <div class="widget-body">
            <button data-toggle="modal" data-target="#add-category" class="btn btn-lg btn-success font-16 btn-block waves-effect waves-light" @click="addCategoryModalShow">
              <i class="fa fa-plus mr-1"/> Create New
            </button>
            <div id="external-events" class="mt-3">
              <p>Drag and drop your event or click in the calendar</p>
              <draggable v-model="myArray" group="people" @start="drag=true" @end="drag=false">
                <div
                        v-for="element in myArray"
                        :key="element.id"
                        :class="element.className"
                        >
                  <i class="mdi mdi-checkbox-blank-circle mr-2 vertical-middle"/>
                  {{ element.name }}
                </div>
              </draggable>
            </div>
            <!-- checkbox -->
            <div class="custom-control custom-checkbox mt-3">
              <input id="drop-remove" type="checkbox" class="custom-control-input">
              <label class="custom-control-label" for="drop-remove">Remove after drop</label>
            </div>
          </div>
        </div>
      </div> <!-- end col-->
      <div class="col-lg-10">
        <div class="card-box">
          <FullCalendar :plugins="calendarPlugins"
                        :events="events"
                        default-view="dayGridMonth"
                        @dateClick="handleDateClick"/>
        </div>
      </div> <!-- end col -->
    </div>  <!-- end row -->
    <AddEventModal @inputChange="handleChange" @selectChange="handleSelect" @addCalendarEvent="handleAddEvent"/>
    <AddCategoryModal @inputChange="handleChange" @selectChange="handleSelect" @addCalendarCategory="handleAddCategory"/>

  </div>
    <!-- end col-12 -->
</div> <!-- end row -->
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import draggable from 'vuedraggable'

import AddEventModal from '../components/Calendar/AddEventModal'
import AddCategoryModal from '../components/Calendar/AddCategoryModal'

export default {
    components: {
      FullCalendar,
      dayGridPlugin,
      AddEventModal,
      AddCategoryModal,
      timeGridPlugin,
      interactionPlugin,
      draggable
    },
    data: () => ({
      password: '',
      email: '',
      errorMsg: '',
      myArray: [],
      calendarPlugins: [
        // plugins must be defined in the JS
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin // needed for dateClick
      ],
      droppable: true,
      events: [],
      value: '',
      selectedValue: '',
      eventDate: ''
    }),
    methods: {
        login () {
            const {
                email,
                password
            } = this
            let that = this
            this.$store.dispatch('auth/login', { email, password })
                   .then(() => {
                     that.$router.push('/dashboard')
                   })
                   .catch(err => console.log(err))
        },
        handleSignup (event) {
          this.$router.push('/signup')
        },
        addEventModalShow() {
          this.$bvModal.show('event-modal')
        },
        addCategoryModalShow() {
          this.$bvModal.show('add-category')
        },
      handleChange(event) {
          this.value = event.target.value
      },
      handleSelect(event) {
        this.selectedValue = event.target.value
      },
      handleAddEvent(event) {
          if (this.value) {
            if (this.selectedValue === '') {
              this.events.push({
                title: this.value,
                date: this.eventDate,
                'className': 'bg-success' + ' ' + 'external-event'
              })
            } else {
              this.events.push({
                title: this.value,
                date: this.eventDate,
                color: '#10c469',
                'className': 'bg-' + this.selectedValue + ' ' + 'external-event'
              })
            }
            this.value = ''
            this.$bvModal.hide('event-modal')
          }
      },

      handleAddCategory(event) {
        if (this.value) {
          if (this.selectedValue === '') {
            this.events.push({
              'name': this.value,
              'order': this.myArray.length + 1,
              'fixed': false,
              'className': 'bg-success' + ' ' + 'external-event'
            })
          } else {
            this.myArray.push({
              'name': this.value,
              'order': this.myArray.length + 1,
              'fixed': false,
              'className': 'bg-' + this.selectedValue + ' ' + 'external-event'
            })
          }
          this.value = ''
          this.$bvModal.hide('add-category')
        }
      },

      handleDateClick(arg) {
        this.eventDate = arg.date;
        this.addEventModalShow();
      }
}
}
</script>

<style lang="scss" scoped>
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
</style>
