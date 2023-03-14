<template>
  <div :key="task.id" v-for="task in tasks" class="items">
    <Task @toggle-reminder="$emit('toggle-reminder', task.id)"  @delete-task="$emit('delete-task', task.id)"  :task="task" />
  </div>
</template>

<script>
import Task from "./Task"
export default {
  name: "TasksComponent",
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
  emits: ['delete-task', 'toggle-reminder']
}
</script>
<style scoped>
.items{
  margin-top: 15px;
}
</style>
