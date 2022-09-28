<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">AT- Marco Antonio Ferreira</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/Lembrete" class="nav-link">Lembretes</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Adicionar Lembrete</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <h2>AT Marco Antonio Ferreira</h2>
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    name: "app"
  };
</script>

<style scoped>
  .container h2 {
    text-align: center;
    margin: 25px auto;
  }
</style>
