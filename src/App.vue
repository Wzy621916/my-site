<template>
  <div class="app">
    <header class="header">
      <h1>王子一的个人主页</h1>
      <nav class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于我</router-link>
        <router-link to="/python-course">Python基础课程</router-link>
      </nav>
    </header>
    <main class="main">
      <router-view />
    </main>
    <footer class="footer">
      <p>© 2026 王子一个人主页</p>
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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.header {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header h1 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav {
  display: flex;
  gap: 1.5rem;
}

.nav a {
  color: white;
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.nav a:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.nav a.router-link-active {
  background: rgba(255, 255, 255, 0.3);
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.main {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.footer {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 1.5rem;
  margin-top: auto;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.footer p {
  margin: 0;
  font-weight: 500;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .nav {
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .main {
    padding: 1rem;
  }
}
</style>