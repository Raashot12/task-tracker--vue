<template>
  <button @click="onClick()" :style="{background: color}" class="btn">{{ text }}</button>
</template>
<script>
export default {
  name: 'ButtonComponent',
  props: {
    text: String,
    color: String
  },
  methods: {
    onClick() {
      this.$emit("btn-click" )
    }
  },
}
</script>

<style scoped>
button{
  cursor: pointer;
  outline: none;
  color: white;
  font-weight: bold;
  padding: 5px 12px;
  border: none;
  border-radius: 5px;
  font-family: 'Inter', sans-serif;
}
</style>