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
  padding: 4rem 1rem;
  background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%);
  border-radius: 12px;
  margin-bottom: 2.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hero h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 0.9rem 1.8rem;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
}

.btn.secondary {
  background: linear-gradient(90deg, #f093fb 0%, #f5576c 100%);
  box-shadow: 0 4px 12px rgba(240, 147, 251, 0.3);
}

.btn.secondary:hover {
  box-shadow: 0 6px 16px rgba(240, 147, 251, 0.4);
}

.intro {
  margin-bottom: 2.5rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-left: 4px solid #667eea;
}

.intro h3 {
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  color: #333;
  font-weight: 600;
}

.intro p {
  color: #666;
  line-height: 1.7;
  font-size: 1.05rem;
}

.features {
  margin-top: 2.5rem;
}

.features h3 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #333;
  font-weight: 600;
  text-align: center;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.feature-item {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  transition: all 0.3s ease;
  border-top: 4px solid transparent;
  background: linear-gradient(white, white) padding-box, linear-gradient(135deg, #667eea, #764ba2) border-box;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.feature-item h4 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 600;
}

.feature-item p {
  color: #666;
  line-height: 1.6;
  flex-grow: 1;
}

.feature-btn {
  display: inline-block;
  padding: 0.6rem 1.5rem;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  align-self: flex-start;
  margin-top: auto;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.feature-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

@media (max-width: 768px) {
  .hero {
    padding: 3rem 1rem;
  }
  
  .hero h2 {
    font-size: 2rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
  
  .intro,
  .feature-item {
    padding: 1.5rem;
  }
}
</style>