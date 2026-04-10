<template>
  <div class="about">
    <h2>关于我</h2>
    
    <section class="profile">
      <div class="profile-info">
        <h3>个人信息</h3>
        <ul>
          <li><strong>姓名：</strong>王子一</li>
          <li><strong>专业：</strong>商务数据分析与应用</li>
          <li><strong>年级：</strong>25届</li>
          <li><strong>学校：</strong>广东科学技术职业学院</li>
        </ul>
      </div>
    </section>
    
    <section class="education">
      <h3>教育背景</h3>
      <div class="education-item">
        <h4>广东科学技术职业学院</h4>
        <p>商务数据分析与应用专业 | 2021年9月 - 2024年6月</p>
        <p>主修课程：数据分析基础、Python编程、统计学、数据库原理、商务智能等</p>
      </div>
    </section>
    
    <section class="skills">
      <h3>技能特长</h3>
      <div class="skills-grid">
        <div class="skill-item">
          <h4>数据分析</h4>
          <p>掌握数据收集、清洗、分析和可视化技能，能够使用Excel、Python等工具进行数据分析</p>
        </div>
        <div class="skill-item">
          <h4>Python编程</h4>
          <p>熟悉Python基础语法、数据结构、函数与模块，能够编写简单的数据分析脚本</p>
        </div>
        <div class="skill-item">
          <h4>数据可视化</h4>
          <p>能够使用Matplotlib、Seaborn等库创建数据可视化图表，展示分析结果</p>
        </div>
        <div class="skill-item">
          <h4>数据库</h4>
          <p>了解SQL语言，能够进行基本的数据库查询和操作</p>
        </div>
      </div>
    </section>
    
    <section class="interests">
      <h3>兴趣爱好</h3>
      <ul class="interests-list">
        <li>编程与开发</li>
        <li>数据分析与挖掘</li>
        <li>人工智能</li>
        <li>阅读</li>
        <li>运动</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about {
  max-width: 1000px;
  margin: 0 auto;
}

.about h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
}

.profile {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.profile-info h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #333;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 0.5rem;
}

.profile-info ul {
  list-style: none;
  padding: 0;
}

.profile-info li {
  margin-bottom: 0.5rem;
  color: #666;
}

.education {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.education h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #333;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 0.5rem;
}

.education-item h4 {
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: #333;
}

.education-item p {
  margin-bottom: 0.5rem;
  color: #666;
  line-height: 1.5;
}

.skills {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.skills h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #333;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 0.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.skill-item {
  background-color: white;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.skill-item h4 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.skill-item p {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
}

.interests {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.interests h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #333;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 0.5rem;
}

.interests-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.interests-list li {
  background-color: #4CAF50;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .about h2 {
    font-size: 1.8rem;
  }
  
  .profile,
  .education,
  .skills,
  .interests {
    padding: 1rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .interests-list {
    flex-direction: column;
  }
  
  .interests-list li {
    width: fit-content;
  }
}
</style>