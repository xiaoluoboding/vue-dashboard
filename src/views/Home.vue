<template>
  <div class="home">
    <header>
      <h1>Vue Dashboard</h1>
      <h2>Built with <a href="https://cube.dev/" target="_blank" rel="noopener noreferrer">Cube.js</a> + <a href="https://vueblocks.github.io/ve-charts/#/">ve-charts</a> + <a href="https://xiaoluoboding.github.io/vue-smart-widget/#/home">vue-smart-widget</a></h2>
    </header>
    <Dashboard/>
  </div>
</template>

<script>
import Dashboard from '@/components/Dashboard'

export default {
  name: 'App',
  components: {
    Dashboard
  }
}
</script>

<style scoped>
header {
  text-align: center;
  color: #2c3e50;
}
</style>
