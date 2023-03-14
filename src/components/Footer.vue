<template>
  <footer>
    <p>Copyright &copy; 2021</p>
    <router-link to="/about">About</router-link>
  </footer>
</template>
<script>
export default {
  name: "FooterComponent",
}
</script>
<style scoped>
a {
  color: #333;
  font-weight: 500;
}
footer {
  font-family: "Inter", sans-serif;
  margin-top: 30px;
  text-align: center;
}
</style>
