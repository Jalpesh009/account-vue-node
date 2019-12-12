<template>
  <li>
    <span>{{ task }}</span>
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" :id="['todo-' + id]" />
      <label class="custom-control-label" :for="['todo-' + id]"></label>
    </div>
    <input type="text" placeholder="Leave a note" />
  </li>
</template>

<script>
export default {
    name: 'TodoItem',
    props: ['id', 'task']
};
</script>