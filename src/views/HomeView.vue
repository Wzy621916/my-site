<template>
  <div class="home">
    <section class="hero">
      <h2>欢迎来到我的个人主页</h2>
      <p>这里记录了我的学习历程和个人成长</p>
      <router-link to="/python-course" class="btn">开始学习Python基础课程</router-link>
    </section>
    
    <section class="about">
      <h3>关于我</h3>
      <p>我是一名热爱学习的开发者，致力于不断提升自己的技术能力。本网站是我记录学习过程和分享知识的平台。</p>
    </section>
    
    <section class="features">
      <h3>网站功能</h3>
      <div class="feature-grid">
        <div class="feature-item">
          <h4>Python基础课程</h4>
          <p>从基础语法到数据结构，全面学习Python编程</p>
        </div>
        <div class="feature-item">
          <h4>学习记录</h4>
          <p>记录我的学习过程和心得体会</p>
        </div>
        <div class="feature-item">
          <h4>技术分享</h4>
          <p>分享我在学习和开发过程中的经验</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home {
  max-width: 1000px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  padding: 3rem 1rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.hero h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.hero p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #666;
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #45a049;
}

.about {
  margin-bottom: 2rem;
}

.about h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.about p {
  color: #666;
  line-height: 1.6;
}

.features {
  margin-top: 2rem;
}

.features h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.feature-item {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.feature-item h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.feature-item p {
  color: #666;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .hero {
    padding: 2rem 1rem;
  }
  
  .hero h2 {
    font-size: 1.8rem;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>