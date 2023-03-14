<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input
        type="text"
        v-model="text"
        name="text"
        placeholder="Add Task"
        class="textInput"
      />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input
        type="text"
        v-model="day"
        name="day"
        class="textInput"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input
        type="checkbox"
        v-model="reminder"
        name="reminder"
        class="checkboxInput"
      />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      text: "",
      day: "",
      reminder: false,
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      if (!this.text) {
        alert("Please add a task")
        return
      }
      if (!this.day) {
        alert("Please add a day & Time")
        return
      }
      const newTask = {
        // id: Math.floor(Math.random() * 100000),
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      }
      this.$emit("add-task", newTask)
      this.text = ""
      this.day = ""
      this.reminder = false
    },
  },
}
</script>
<style scoped>
.add-form {
  margin-bottom: 40px;
  width: 100%;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control .textInput {
  height: 40px;
  margin: 5px;
  display: block;
  width: 95%;
  padding: 3px 7px;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  outline: none;
  border: 1px solid gray;
  border-radius: 6px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  font-weight: 500;
  font-family: "Inter", sans-serif;
}
.checkboxInput {
  font-family: "Inter", sans-serif;
  height: 25px;
  width: 5%;
}
.btn-block {
  width: 100%;
  background-color: black;
  padding: 7px 10px;
  color: white;
  font-weight: 500;
  border-radius: 5px;
  font-family: "Inter", sans-serif;
  outline: none;
  border: none;
  cursor: pointer;
}
</style>
