<template>
  <div class="home">
    <section class="hero">
      <h2>欢迎来到王子一的个人主页</h2>
      <p>我是25届商务数据分析与应用专业的学生，在广东科学技术职业学院读书</p>
      <div class="hero-buttons">
        <router-link to="/about" class="btn">了解更多</router-link>
        <router-link to="/python-course" class="btn secondary">Python课程</router-link>
      </div>
    </section>
    
    <section class="intro">
      <h3>个人简介</h3>
      <p>我是王子一，一名商务数据分析与应用专业的学生，热爱编程和数据分析。我喜欢使用Python进行数据处理和分析，希望通过不断学习和实践，成为一名优秀的数据分析师。</p>
    </section>
    
    <section class="features">
      <h3>网站内容</h3>
      <div class="feature-grid">
        <div class="feature-item">
          <h4>关于我</h4>
          <p>了解我的个人信息、教育背景、技能特长和兴趣爱好</p>
          <router-link to="/about" class="feature-btn">查看详情</router-link>
        </div>
        <div class="feature-item">
          <h4>Python基础课程</h4>
          <p>学习Python基础语法、数据结构、函数与模块等核心概念</p>
          <router-link to="/python-course" class="feature-btn">开始学习</router-link>
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

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
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

.btn.secondary {
  background-color: #333;
}

.btn.secondary:hover {
  background-color: #555;
}

.intro {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.intro h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 0.5rem;
}

.intro p {
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-item h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.feature-item p {
  color: #666;
  line-height: 1.5;
  flex-grow: 1;
}

.feature-btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s;
  align-self: flex-start;
  margin-top: auto;
}

.feature-btn:hover {
  background-color: #45a049;
}

@media (max-width: 768px) {
  .hero {
    padding: 2rem 1rem;
  }
  
  .hero h2 {
    font-size: 1.8rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>