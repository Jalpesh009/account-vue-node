<template>
  <!-- Start Content-->
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div id="calls-accordion" class="card-box accordion">
          <h4 class="header-title mt-0 mb-3">To Do's</h4>
          <ul id="upcoming" class="sortable-list list-unstyled taskList">
            <li v-for="(item, index) in todos" :key="index">
            <div class="kanban-box d-flex w-100 justify-content-between" >

                <div class="kanban-detail w-100 justify-content-between">
                  <ul class="list-unstyled list-inline mb-0 d-flex justify-content-between align-center flex-wrap">
                    <li class="list-inline-item d-flex align-center ">
                      <img
                        :src="item.image"
                        class="rounded-circle avatar-md caller-image"
                        alt="Caller-image"
                      >
                      <div class="text ml-1">
                        <span class="font-weight-bold caller-name">{{ item.name }}</span>
                        <br >
                        <span class="caller-number">{{ item.todo }}</span>
                      </div>
                    </li>
                    <!--<li class="list-inline-item caller-info">-->
                    <!--</li>-->
                    <li class="buttons_todo">
                      <button
                        v-for="(button, index) in item.buttons"
                        :key="index"
                        type="button"
                        class="btn btn-outline-primary"
                        @click="$router.push(button.href)"
                      >
                        {{ button.text }}
                      </button>
                    </li>
                    <li>
                      <textarea type="text" placeholder="Add a note" />
                    </li>
                  </ul>
                </div>
              <div class="checkbox-wrapper">
                <div class="checkbox checkbox-success checkbox-single">
                  <input
                    id="singleCheckbox4"
                    type="checkbox"
                    value="option4"
                    aria-label="Single checkbox Two"
                  >
                  <label/>
                </div>
              </div>

            </div>
            </li>
          </ul>
        </div>
        <!--cardbox-->
      </div>
      <!-- col-lg-12 -->
   </div>
    <!-- end row -->
  </div>
  <!-- container-fluid -->
</div></div></template>

<script>
import TodoItem from '../components/Todos/TodoItem'

export default {
  components: {
    TodoItem
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          image: 'assets/images/users/user-3.jpg',
          name: 'Nick Cave',
          todo: 'Send Invoice',
          buttons: [
            {
              text: 'Call now',
              href: 'calls'
            }
          ]
        },
        {
          id: 2,
          image: 'assets/images/users/user-4.jpg',
          name: 'Leonard Cohen',
          todo: 'Fax',
          buttons: [
            {
              text: 'Call now',
              href: 'calls'
            }
          ]
        },
        {
          id: 2,
          image: 'assets/images/users/user-2.jpg',
          name: 'Stephen Merrit',
          todo: 'Schedule a meeting',
          buttons: [
            {
              text: 'Call now',
              href: 'calls'
            }
          ]
        },
        {
          id: 2,
          image: 'assets/images/users/unknown.png',
          name: 'Joshua Tillman',
          todo: 'Send invoice',
          buttons: [
            {
              text: 'Call now',
              href: 'calls'
            },
            {
              text: 'Call now',
              href: 'calls'
            },
            {
              text: 'Call now',
              href: 'calls'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/custom/pages/_todos.scss";
.m_checkbox
  padding-top: 16px
.list-inline-item
  .text
    width: 150px
.sortable-list
  li
    padding: 10px 0
.checkbox-wrapper
  padding: 0 5px
.buttons_todo
  padding: 0 20px
  button + button
    margin-left: 5px
</style>
