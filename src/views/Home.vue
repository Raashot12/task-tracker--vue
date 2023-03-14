<template>
  <AddTask @add-task="addTask" v-show="showAddTask" />
  <Tasks
    @delete-task="deleteTask"
    @toggle-reminder="toggleReminder"
    :tasks="tasks"
  />
</template>

<script>
import Tasks from "@/components/Tasks.vue"
import AddTask from "@/components/AddTask.vue"
export default {
  name: "HomeComponent",
  props: {
    showAddTask: Boolean,
  },
  components: {
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
    }
  },
  methods: {
    async addTask(newTask) {
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newTask),
      })
      const data = await res.json()
      this.tasks = [...this.tasks, data]
    },
    async deleteTask(id) {
      if (confirm("Are you sure")) {
        const res = await fetch(`api/tasks/${id}`, {
          method: "DELETE",
        })
        res.status === 200
          ? (this.tasks = this.tasks.filter(value => value.id !== id))
          : alert("Error deleting task")
      }
    },
    async toggleReminder(id) {
      const taskToggle = await this.fetchTask(id)
      const updateTask = {...taskToggle, reminder: !taskToggle.reminder}

      const res = await fetch(`api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updateTask),
      })
      const data = await res.json()
      this.tasks = this.tasks.map(task =>
        task.id === id ? {...task, reminder: data.reminder} : task
      )
    },

    async fetchTasks() {
      const res = await fetch("api/tasks")
      const data = await res.json()
      return data
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`)
      const data = await res.json()
      return data
    },
  },

  async created() {
    this.tasks = await this.fetchTasks()
  },
}
</script>
