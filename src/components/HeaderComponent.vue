
<template lang="">
  <div>
  <h4>{{title}}</h4>
  <Button :color="showAddTask ? 'red': 'green'" @btn-click="$emit('btn-click')" :text="showAddTask ? 'Close': 'Add Task'" v-show="homePage"  />
  </div>
</template>
<script>
import Button from './Button.vue';
export default {
  name: 'HeaderComponent',
  props: {
    title: String,
    showAddTask: Boolean
  },
  components: {
    Button
  },
  computed: {
    homePage() {
      if ( this.$route.path === '/' ) {
        return true
      } else {
        return false
      }
    }
  },
  emits: ['btn-click'],

}
</script>
<style scoped>
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-family: 'Inter', sans-serif;
}
h4{
  margin: 0;
}
</style>
