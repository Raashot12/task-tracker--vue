<template>
  <div class="container">
    <HeaderComponent
      title="Task Tracker"
      @btn-click="toggleAddTask"
      :showAddTask="showAddTask"
    />

    <router-view :showAddTask="showAddTask"></router-view>
    <Footer />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue"
import Footer from "./components/Footer.vue"
export default {
  name: "App",
  components: {
    HeaderComponent,
    Footer,
  },
  data() {
    return {
      showAddTask: false,
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
  },
}
</script>

<style>
.container {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px auto;
  border: 1px solid green;
  border-radius: 5px;
  max-width: 550px;
  width: 100%;
  padding: 20px 20px;
}
#app {
  padding: 15px;
}
body {
  padding: 0;
  margin: 0;
  font-family: "Inter", sans-serif;
}
*::before,
*::after {
  padding: 0;
  margin: 0;
}
</style>
