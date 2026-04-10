# 王子一个人主页

这是一个独立的个人主页网站，包含个人信息、教育背景、技能特长以及Python基础课程学习内容。

## 项目结构

```
my-site/
├── src/
│   ├── router/          # 路由配置
│   │   └── index.js
│   ├── views/           # 页面组件
│   │   ├── AboutView.vue     # 关于我页面
│   │   ├── HomeView.vue      # 首页
│   │   └── PythonCourseView.vue  # Python基础课程页面
│   ├── App.vue          # 主应用组件
│   └── main.js          # 应用入口
├── index.html           # HTML模板
├── package.json         # 项目配置和依赖
├── vite.config.js       # Vite配置
└── README.md            # 项目说明
```

## 技术栈

- Vue 3
- Vue Router
- Vite

## 功能模块

1. **首页**：个人简介和网站内容概览
2. **关于我**：个人信息、教育背景、技能特长和兴趣爱好
3. **Python基础课程**：Python基础语法、数据结构、函数与模块

## 本地运行

1. 安装依赖
   ```bash
   npm install
   ```

2. 启动开发服务器
   ```bash
   npm run dev
   ```

3. 构建生产版本
   ```bash
   npm run build
   ```

## 部署

构建后的文件位于 `dist` 目录，可以部署到任何静态网站托管服务，如 GitHub Pages、Vercel、Netlify 等。
