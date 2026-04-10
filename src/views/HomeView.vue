<template>
  <div class="home">
    <section class="hero">
      <h2>欢迎来到Python基础课程</h2>
      <p>从零开始学习Python编程，掌握基础编程素养</p>
      <router-link to="/python-course/basics" class="btn">开始学习</router-link>
    </section>
    
    <section class="about">
      <h3>课程介绍</h3>
      <p>本课程旨在帮助初学者掌握Python编程的基础知识，包括基础语法、数据结构、函数与模块等核心概念。通过本课程的学习，您将建立扎实的编程基础，为进一步学习Python高级特性和应用开发打下坚实的基础。</p>
    </section>
    
    <section class="features">
      <h3>课程内容</h3>
      <div class="feature-grid">
        <div class="feature-item">
          <h4>Python基础语法</h4>
          <p>学习变量、数据类型、运算符、字符串操作等基本概念</p>
          <router-link to="/python-course/basics" class="feature-btn">开始学习</router-link>
        </div>
        <div class="feature-item">
          <h4>数据结构</h4>
          <p>掌握列表、字典、元组、集合等常用数据结构</p>
          <router-link to="/python-course/data-structures" class="feature-btn">开始学习</router-link>
        </div>
        <div class="feature-item">
          <h4>函数与模块</h4>
          <p>学习函数定义、Lambda函数、模块导入与使用</p>
          <router-link to="/python-course/functions" class="feature-btn">开始学习</router-link>
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
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>