<template>
  <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder': '', 'task']">
    <h3>{{ task.text }}
    <i @click="onDelete(task.id)" class='fas fa-times'></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: "TaskComponent",
  props: {
    task: Object,
  },
  methods: {
    onDelete( id ) {
      this.$emit('delete-task', id)
    }
  }
}
</script>
<style scoped>
.task{
font-family: 'Inter', sans-serif;
background: #f4f4f4;
margin: 5px;
padding: 10px 20px;
cursor: pointer
}
.fas{
  color: red;
}
.task h3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  font-size: 18px;
}
.task.reminder{
  border-left: 5px solid green;
}
p{
  margin: 4px;
}
</style>
