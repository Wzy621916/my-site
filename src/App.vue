<template>
  <div class="app">
    <header class="header">
      <h1>Python基础课程</h1>
      <nav class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/python-course/basics">基础语法</router-link>
        <router-link to="/python-course/data-structures">数据结构</router-link>
        <router-link to="/python-course/functions">函数与模块</router-link>
      </nav>
    </header>
    <main class="main">
      <router-view />
    </main>
    <footer class="footer">
      <p>© 2026 Python基础课程</p>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.header {
  background-color: #333;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  margin: 0;
  font-size: 1.5rem;
}

.nav {
  display: flex;
  gap: 1rem;
}

.nav a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav a.router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: bold;
}

.main {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: auto;
}
</style>