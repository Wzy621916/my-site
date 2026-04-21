<template>
  <div class="python-course">
    <div class="course-header">
      <h2>Python基础课程 - AI时代商务数据分析师学习路径</h2>
      <nav class="course-nav">
        <router-link to="/" class="nav-link">首页</router-link>
        <router-link to="/python-course" class="nav-link active">课程章节</router-link>
        <router-link to="/" class="nav-link">返回个人主页</router-link>
      </nav>
    </div>
    
    <div class="course-main">
      <aside class="sidebar">
        <div class="sidebar-content">
          <h3>课程导航</h3>
          <div class="chapter-list">
            <div 
              v-for="(chapter, index) in chapters" 
              :key="index"
              class="chapter-item"
              :class="{ active: currentChapter === index }"
              @click="currentChapter = index"
            >
              <div class="chapter-icon">{{ chapter.icon }}</div>
              <div class="chapter-info">
                <div class="chapter-title">{{ chapter.title }}</div>
                <div class="chapter-desc">{{ chapter.description }}</div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      
      <main class="content-area">
        <div v-if="currentChapter === 0" class="chapter-page">
          <h1>{{ chapters[0].title }}</h1>
          <section class="topic-section">
            <h3>课程简介</h3>
            <p>欢迎来到Python基础课程！本课程专为AI时代商务数据分析师设计，帮助您快速掌握Python编程基础。</p>
          </section>
          
          <section class="topic-section">
            <h3>学习目标</h3>
            <p>在完成本课程后，您将能够：</p>
            <ul>
              <li>理解Python基础语法和编程思维</li>
              <li>掌握常用数据类型和数据结构</li>
              <li>熟练使用条件判断和循环</li>
              <li>编写和调用函数</li>
              <li>处理字符串和文本数据</li>
              <li>具备数据预处理的编程基础</li>
            </ul>
          </section>

          <CodeRunner 
            title="课程开始前的小测试"
            :initialCode="introCode"
          />
        </div>
        
        <div v-else-if="currentChapter === 1" class="chapter-page">
          <h1>{{ chapters[1].title }}</h1>
          
          <section class="topic-section">
            <h3>什么是变量？</h3>
            <p>变量是存储数据的容器，就像一个有名字的盒子，我们可以往里面放东西，也可以随时取出或修改里面的内容。</p>
            <CodeRunner 
              title="变量定义示例"
              :initialCode="varCode1"
            />
          </section>

          <section class="topic-section">
            <h3>常用数据类型</h3>
            <p>Python支持多种数据类型，让我们来认识几种最常用的：</p>
            <div class="type-card">
              <h4>1. 整数 (Integer)</h4>
              <p>没有小数部分的数字，可以是正的、负的或零。</p>
            </div>
            <div class="type-card">
              <h4>2. 浮点数 (Float)</h4>
              <p>带有小数部分的数字，用于表示精度要求较高的数值。</p>
            </div>
            <div class="type-card">
              <h4>3. 字符串 (String)</h4>
              <p>文本数据，用单引号或双引号括起来。</p>
            </div>
            <div class="type-card">
              <h4>4. 布尔值 (Boolean)</h4>
              <p>只有两个值：True（真）或 False（假）。</p>
            </div>
            <CodeRunner 
              title="数据类型示例"
              :initialCode="varCode2"
            />
          </section>

          <section class="topic-section">
            <h3>变量命名规则</h3>
            <ul>
              <li>变量名可以包含字母、数字和下划线（_）</li>
              <li>变量名不能以数字开头</li>
              <li>变量名不能使用Python的保留关键字（如if、for等）</li>
              <li>建议使用有意义的名字，如name、age等</li>
            </ul>
            <CodeRunner 
              title="命名规则练习"
              :initialCode="varCode3"
            />
          </section>
        </div>
        
        <div v-else-if="currentChapter === 2" class="chapter-page">
          <h1>{{ chapters[2].title }}</h1>
          
          <section class="topic-section">
            <h3>条件判断</h3>
            <p>条件判断让程序能够根据不同的情况做出不同的响应，就像人生中的选择一样。</p>
            <CodeRunner 
              title="if条件判断示例"
              :initialCode="controlCode1"
            />
          </section>

          <section class="topic-section">
            <h3>if-else 语句</h3>
            <p>如果条件满足，做一件事；否则，做另一件事。</p>
            <CodeRunner 
              title="if-else示例"
              :initialCode="controlCode2"
            />
          </section>

          <section class="topic-section">
            <h3>if-elif-else 多重判断</h3>
            <p>当有多个条件需要判断时，可以使用elif（else if的缩写）。</p>
            <CodeRunner 
              title="多重条件判断示例"
              :initialCode="controlCode3"
            />
          </section>

          <section class="topic-section">
            <h3>for循环</h3>
            <p>for循环用于遍历可迭代对象（如列表、字符串等）中的每个元素。</p>
            <CodeRunner 
              title="for循环示例"
              :initialCode="controlCode4"
            />
          </section>

          <section class="topic-section">
            <h3>while循环</h3>
            <p>while循环在条件为True时会一直重复执行代码块。</p>
            <CodeRunner 
              title="while循环示例"
              :initialCode="controlCode5"
            />
          </section>
        </div>
        
        <div v-else-if="currentChapter === 3" class="chapter-page">
          <h1>{{ chapters[3].title }}</h1>
          
          <section class="topic-section">
            <h3>什么是函数？</h3>
            <p>函数是组织好的、可重复使用的代码块，用于执行特定任务。函数就像一个黑盒子，我们给它输入，它给我们输出。</p>
            <CodeRunner 
              title="函数定义和调用"
              :initialCode="funcCode1"
            />
          </section>

          <section class="topic-section">
            <h3>函数参数</h3>
            <p>函数可以接受参数，这些参数就像是给函数的输入数据。</p>
            <CodeRunner 
              title="带参数的函数"
              :initialCode="funcCode2"
            />
          </section>

          <section class="topic-section">
            <h3>返回值</h3>
            <p>函数可以通过return语句返回结果给调用者。</p>
            <CodeRunner 
              title="函数返回值示例"
              :initialCode="funcCode3"
            />
          </section>

          <section class="topic-section">
            <h3>默认参数</h3>
            <p>可以给函数参数设置默认值，这样在调用时如果不传递该参数，就会使用默认值。</p>
            <CodeRunner 
              title="默认参数示例"
              :initialCode="funcCode4"
            />
          </section>
        </div>
        
        <div v-else-if="currentChapter === 4" class="chapter-page">
          <h1>{{ chapters[4].title }}</h1>
          
          <section class="topic-section">
            <h3>列表 (List)</h3>
            <p>列表是Python中最常用的数据结构之一，它是一个有序的元素集合。</p>
            <CodeRunner 
              title="列表操作示例"
              :initialCode="structCode1"
            />
          </section>

          <section class="topic-section">
            <h3>字典 (Dictionary)</h3>
            <p>字典是键值对的集合，每个键都是唯一的，通过键可以快速找到对应的值。</p>
            <CodeRunner 
              title="字典操作示例"
              :initialCode="structCode2"
            />
          </section>

          <section class="topic-section">
            <h3>元组 (Tuple)</h3>
            <p>元组和列表类似，但元组是不可变的，创建后不能修改。</p>
            <CodeRunner 
              title="元组操作示例"
              :initialCode="structCode3"
            />
          </section>

          <section class="topic-section">
            <h3>集合 (Set)</h3>
            <p>集合是无序且不重复的元素集合。</p>
            <CodeRunner 
              title="集合操作示例"
              :initialCode="structCode4"
            />
          </section>
        </div>
        
        <div v-else-if="currentChapter === 5" class="chapter-page">
          <h1>{{ chapters[5].title }}</h1>
          
          <section class="topic-section">
            <h3>字符串基础</h3>
            <p>字符串在Python中是非常重要的数据类型，我们经常需要处理文本数据。</p>
            <CodeRunner 
              title="字符串定义示例"
              :initialCode="stringCode1"
            />
          </section>

          <section class="topic-section">
            <h3>常用字符串方法</h3>
            <p>Python提供了丰富的字符串处理方法。</p>
            <CodeRunner 
              title="字符串方法示例"
              :initialCode="stringCode2"
            />
          </section>

          <section class="topic-section">
            <h3>格式化字符串</h3>
            <p>格式化字符串可以让我们更方便地拼接变量和文本。</p>
            <CodeRunner 
              title="字符串格式化示例"
              :initialCode="stringCode3"
            />
          </section>
        </div>
        
        <div v-else-if="currentChapter === 6" class="chapter-page">
          <h1>{{ chapters[6].title }}</h1>
          
          <section class="topic-section">
            <h3>恭喜完成课程！</h3>
            <p>您已经完成了Python基础课程的学习！现在让我们通过一个综合练习来巩固所学知识。</p>
          </section>

          <section class="topic-section">
            <h3>综合练习：学生成绩管理</h3>
            <p>让我们用所学知识创建一个简单的学生成绩管理系统。</p>
            <CodeRunner 
              title="综合练习"
              :initialCode="finalCode"
            />
          </section>

          <section class="topic-section">
            <h3>下一步学习建议</h3>
            <ul>
              <li>学习 NumPy：进行数值计算</li>
              <li>学习 Pandas：处理表格数据</li>
              <li>学习 Matplotlib：数据可视化</li>
              <li>练习实际数据分析项目</li>
            </ul>
          </section>
        </div>

        <div class="chapter-navigation">
          <button 
            v-if="currentChapter > 0"
            @click="currentChapter--"
            class="nav-btn prev-btn"
          >
            ← 上一章
          </button>
          <button 
            v-if="currentChapter < chapters.length - 1"
            @click="currentChapter++"
            class="nav-btn next-btn"
          >
            下一章 →
          </button>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CodeRunner from '../components/CodeRunner.vue'

const currentChapter = ref(0)

const chapters = [
  {
    title: '课程介绍',
    description: '了解课程内容和学习目标',
    icon: '📚'
  },
  {
    title: '变量与数据类型',
    description: '学习Python基础数据类型',
    icon: '🔢'
  },
  {
    title: '控制流程',
    description: '掌握条件判断和循环',
    icon: '🔄'
  },
  {
    title: '函数',
    description: '学习定义和使用函数',
    icon: '⚡'
  },
  {
    title: '数据结构',
    description: '列表、字典、元组、集合',
    icon: '📦'
  },
  {
    title: '字符串操作',
    description: '处理文本数据',
    icon: '📝'
  },
  {
    title: '总结与练习',
    description: '综合练习和学习建议',
    icon: '🎯'
  }
]

const introCode = `# 课程开始前的小测试
# 请尝试运行这段代码，看看会输出什么

print("欢迎来到Python基础课程！")
print("让我们开始学习之旅吧！")

# 试试修改下面的数字
a = 10
b = 20
print(f"{a} + {b} = {a + b}")`

const varCode1 = `# 变量定义示例

# 定义变量并赋值
name = "小王"
age = 25
height = 1.75
is_student = True

# 打印变量
print("姓名：", name)
print("年龄：", age)
print("身高：", height, "米")
print("是否是学生：", is_student)

# 修改变量值
age = 26
print("修改后的年龄：", age)`

const varCode2 = `# 数据类型示例

# 整数
integer_num = 42
print("整数：", integer_num, type(integer_num))

# 浮点数
float_num = 3.14159
print("浮点数：", float_num, type(float_num))

# 字符串
greeting = "Hello, Python!"
print("字符串：", greeting, type(greeting))

# 布尔值
is_sunny = True
print("布尔值：", is_sunny, type(is_sunny))

# 类型转换
num_str = "123"
num = int(num_str)
print("字符串转整数：", num, type(num))`

const varCode3 = `# 变量命名规则练习

# 正确的命名方式
my_name = "张三"
user_age = 28
_count = 10
price1 = 99.9

print("我的名字：", my_name)
print("用户年龄：", user_age)

# 试试运行下面错误的命名（请注释掉正确的代码，取消下面的注释）
# 1number = 10  # 不能以数字开头
# my-name = "abc"  # 不能有连字符
# class = "Python"  # 不能使用关键字`

const controlCode1 = `# if条件判断示例

age = 18

if age >= 18:
    print("你已经成年了！")
    print("可以独立做决定了")

print("程序继续执行...")

# 试试修改age的值看看结果`

const controlCode2 = `# if-else示例

score = 75

if score >= 60:
    print("恭喜，你及格了！")
else:
    print("很遗憾，你需要补考。")

# 试试修改score的值`

const controlCode3 = `# 多重条件判断示例

score = 85

if score >= 90:
    grade = "优秀"
elif score >= 80:
    grade = "良好"
elif score >= 70:
    grade = "中等"
elif score >= 60:
    grade = "及格"
else:
    grade = "不及格"

print(f"分数：{score}，等级：{grade}")

# 试试修改score值`

const controlCode4 = `# for循环示例

# 遍历列表
fruits = ["苹果", "香蕉", "橙子", "葡萄"]
print("水果列表：")
for fruit in fruits:
    print("-", fruit)

# 计算1到10的和
sum_total = 0
for i in range(1, 11):
    sum_total += i
print(f"\\n1到10的和：{sum_total}")

# 使用enumerate
print("\\n带索引的遍历：")
for index, fruit in enumerate(fruits, 1):
    print(f"{index}. {fruit}")`

const controlCode5 = `# while循环示例

# 计数
count = 1
while count <= 5:
    print(f"当前计数：{count}")
    count += 1

# 猜数字游戏
secret_number = 7
guess = 0
print("\\n猜数字游戏（1-10）")
while guess != secret_number:
    guess = int(input("请输入你猜的数字："))
    if guess < secret_number:
        print("太小了！")
    elif guess > secret_number:
        print("太大了！")

print("恭喜你猜对了！")`

const funcCode1 = `# 函数定义和调用示例

# 定义一个简单的问候函数
def greet():
    print("你好！")
    print("欢迎学习Python！")

# 调用函数
greet()
greet()  # 可以多次调用`

const funcCode2 = `# 带参数的函数示例

def greet_person(name):
    print(f"你好，{name}！")

def add(a, b):
    result = a + b
    print(f"{a} + {b} = {result}")

# 调用函数
greet_person("小明")
greet_person("小红")
add(3, 5)
add(10, 20)`

const funcCode3 = `# 函数返回值示例

def add(a, b):
    return a + b

def calculate_area(width, height):
    area = width * height
    return area

# 使用返回值
sum_result = add(5, 3)
print("求和结果：", sum_result)

room_area = calculate_area(4, 5)
print("房间面积：", room_area, "平方米")`

const funcCode4 = `# 默认参数示例

def greet(name, greeting="你好"):
    print(f"{greeting}，{name}！")

# 使用默认问候语
greet("小明")
greet("小红")

# 使用自定义问候语
greet("小华", "早上好")
greet("小李", "晚上好")`

const structCode1 = `# 列表操作示例

# 创建列表
fruits = ["苹果", "香蕉", "橙子"]
print("原始列表：", fruits)

# 添加元素
fruits.append("葡萄")
print("添加后：", fruits)

# 插入元素
fruits.insert(1, "芒果")
print("插入后：", fruits)

# 访问元素
print("第一个元素：", fruits[0])
print("最后一个元素：", fruits[-1])

# 切片
print("前3个：", fruits[:3])

# 长度
print("列表长度：", len(fruits))`

const structCode2 = `# 字典操作示例

# 创建字典
student = {
    "name": "张三",
    "age": 20,
    "major": "商务数据分析"
}
print("学生信息：", student)

# 访问值
print("姓名：", student["name"])
print("专业：", student.get("major"))

# 添加键值对
student["grade"] = "大三"
print("添加年级后：", student)

# 遍历字典
print("\\n遍历字典：")
for key, value in student.items():
    print(f"{key}: {value}")`

const structCode3 = `# 元组操作示例

# 创建元组
coordinates = (10, 20)
print("坐标：", coordinates)

# 访问元组元素
x, y = coordinates
print(f"x: {x}, y: {y}")

# 元组是不可变的（不能修改）
# coordinates[0] = 15  # 这会报错

# 元组的优点：性能好，数据安全
colors = ("红", "绿", "蓝")
print("颜色：", colors)
print("长度：", len(colors))`

const structCode4 = `# 集合操作示例

# 创建集合
numbers = {1, 2, 3, 4, 5}
print("集合：", numbers)

# 添加元素
numbers.add(6)
print("添加6后：", numbers)

# 自动去重
numbers.add(3)  # 3已存在，不会变化
print("去重后：", numbers)

# 集合运算
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
print("交集：", set1 & set2)
print("并集：", set1 | set2)
print("差集：", set1 - set2)`

const stringCode1 = `# 字符串定义示例

# 单引号和双引号都可以
str1 = 'Hello World'
str2 = "Python编程"
print(str1)
print(str2)

# 多行字符串
str3 = '''这是第一行
这是第二行
这是第三行'''
print("\\n多行字符串：")
print(str3)

# 字符串拼接
first = "Hello"
second = "World"
combined = first + " " + second
print("\\n拼接：", combined)

# 字符串重复
print("重复：", "Python" * 3)`

const stringCode2 = `# 常用字符串方法示例

text = "  Hello, Python Programming!  "
print("原始：", repr(text))

# 去除空白
trimmed = text.strip()
print("去除空白：", repr(trimmed))

# 大小写
print("大写：", trimmed.upper())
print("小写：", trimmed.lower())
print("首字母大写：", trimmed.title())

# 查找和替换
print("是否包含'Python'：", "Python" in trimmed)
print("替换：", trimmed.replace("Python", "Java"))

# 分割
words = trimmed.split()
print("分割成单词：", words)

# 长度
print("字符串长度：", len(trimmed))`

const stringCode3 = `# 字符串格式化示例

name = "小明"
age = 25
score = 95.5

# 方式1：f-string（推荐）
print(f"我叫{name}，今年{age}岁，分数{score}")

# 方式2：format方法
print("我叫{}，今年{}岁，分数{}".format(name, age, score))

# 格式化数字
print(f"分数保留两位小数：{score:.2f}")
print(f"百分比：{score/100:.1%}")

# 对齐
print("左边对齐：{:<10}".format(name))
print("右边对齐：{:>10}".format(name))
print("居中对齐：{:^10}".format(name))`

const finalCode = `# 综合练习：学生成绩管理

class GradeManager:
    def __init__(self):
        self.students = []
    
    def add_student(self, name, scores):
        student = {
            "name": name,
            "scores": scores
        }
        self.students.append(student)
    
    def calculate_average(self, scores):
        return sum(scores) / len(scores)
    
    def get_student_grade(self, avg_score):
        if avg_score >= 90:
            return "优秀"
        elif avg_score >= 80:
            return "良好"
        elif avg_score >= 70:
            return "中等"
        elif avg_score >= 60:
            return "及格"
        else:
            return "不及格"
    
    def print_report(self):
        print("=" * 50)
        print("学生成绩报告")
        print("=" * 50)
        for student in self.students:
            avg = self.calculate_average(student["scores"])
            grade = self.get_student_grade(avg)
            print(f"学生：{student['name']}")
            print(f"成绩：{student['scores']}")
            print(f"平均分：{avg:.1f}")
            print(f"等级：{grade}")
            print("-" * 50)

# 使用成绩管理系统
manager = GradeManager()

# 添加学生
manager.add_student("张三", [85, 90, 88, 92])
manager.add_student("李四", [78, 82, 80, 75])
manager.add_student("王五", [95, 92, 98, 90])
manager.add_student("赵六", [55, 60, 58, 62])

# 打印报告
manager.print_report()`
</script>

<style scoped>
.python-course {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.course-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.course-header h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.course-nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1.2rem;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.course-main {
  display: flex;
  gap: 1.5rem;
  flex: 1;
  min-height: 0;
}

.sidebar {
  width: 320px;
  flex-shrink: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.sidebar-content {
  padding: 1.5rem;
}

.sidebar-content h3 {
  margin-bottom: 1rem;
  color: #333;
  font-size: 1.2rem;
  font-weight: 600;
}

.chapter-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.chapter-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.chapter-item:hover {
  background: #f5f7fa;
  transform: translateX(4px);
}

.chapter-item.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.chapter-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.chapter-info {
  flex: 1;
  min-width: 0;
}

.chapter-title {
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 0.1rem;
}

.chapter-desc {
  font-size: 0.8rem;
  opacity: 0.8;
}

.content-area {
  flex: 1;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  overflow-y: auto;
}

.chapter-page h1 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
  padding-bottom: 1rem;
  border-bottom: 3px solid #667eea;
}

.topic-section {
  margin-bottom: 2rem;
}

.topic-section h3 {
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  color: #444;
  font-weight: 600;
}

.topic-section p {
  color: #666;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.topic-section ul {
  color: #666;
  line-height: 1.8;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.topic-section li {
  margin-bottom: 0.5rem;
}

.type-card {
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 0.8rem;
  border-left: 4px solid #667eea;
}

.type-card h4 {
  margin-bottom: 0.3rem;
  color: #333;
  font-size: 1rem;
}

.type-card p {
  margin-bottom: 0;
  font-size: 0.9rem;
}

.chapter-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e0e0e0;
}

.nav-btn {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.prev-btn {
  background: #f0f0f0;
  color: #333;
}

.prev-btn:hover {
  background: #e0e0e0;
  transform: translateX(-4px);
}

.next-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.next-btn:hover {
  transform: translateX(4px);
  box-shadow: 0 6px 12px rgba(102, 126, 234, 0.3);
}

@media (max-width: 1024px) {
  .course-main {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
  }
  
  .sidebar-content {
    padding: 1rem;
  }
  
  .chapter-list {
    flex-direction: row;
    overflow-x: auto;
    gap: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
  .chapter-item {
    flex-shrink: 0;
    flex-direction: column;
    gap: 0.3rem;
    padding: 0.6rem 0.8rem;
    text-align: center;
    min-width: 100px;
  }
  
  .chapter-icon {
    font-size: 1.2rem;
  }
  
  .chapter-title {
    font-size: 0.85rem;
  }
  
  .chapter-desc {
    display: none;
  }
}

@media (max-width: 640px) {
  .course-header {
    padding: 1.2rem;
  }
  
  .course-header h2 {
    font-size: 1.4rem;
  }
  
  .content-area {
    padding: 1.2rem;
  }
  
  .chapter-page h1 {
    font-size: 1.4rem;
  }
}
</style>
