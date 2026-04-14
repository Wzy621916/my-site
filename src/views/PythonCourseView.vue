<template>
  <div class="python-course">
    <h2>Python基础课程 - AI时代商务数据分析师学习路径</h2>
    
    <div class="course-nav">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        :class="['tab-btn', { active: activeTab === tab.id }]"
        @click="activeTab = tab.id"
      >
        {{ tab.title }}
      </button>
    </div>
    
    <div class="course-content">
      <div v-if="activeTab === 'core-principles'" class="tab-content">
        <h3>一、核心原则：学习"AI刚需部分"，而非Python全部</h3>
        
        <section class="topic">
          <h4>1.1 学习目标</h4>
          <p>在AI编程工具日益成熟的今天，学习Python基础的目标不再是成为"全栈开发者"，而是成为"能驾驭AI工具的智能数据分析师"。</p>
          <p>结合商务数据分析与应用专业和AI辅助编程的时代背景，我们的学习内容必须高度聚焦、精准高效。</p>
        </section>
        
        <section class="topic">
          <h4>1.2 学习优先级</h4>
          <ul>
            <li><strong>第一优先级：</strong>Python语言与数据处理核心（约1-2个月）</li>
            <li><strong>第二优先级：</strong>理解"够用的数学"，而非精通公式</li>
            <li><strong>第三优先级：</strong>实战应用：从"调用模型"到"驾驭AI"</li>
            <li><strong>贯穿始终：</strong>与AI协作的新时代学习法</li>
          </ul>
        </section>
      </div>
      
      <div v-if="activeTab === 'python-core'" class="tab-content">
        <h3>二、Python语言与数据处理核心</h3>
        
        <section class="topic">
          <h4>2.1 基础语法（适合小白的详细教程）</h4>
          
          <div class="sub-topic">
            <h5>2.1.1 变量与数据类型</h5>
            <p><strong>什么是变量？</strong>变量就像是一个容器，用来存储数据。在Python中，我们可以用等号（=）来给变量赋值。</p>
            <pre class="code-block">
# 基本数据类型
# 字符串（用引号包围的文本）
name = "Python"  # 字符串
print(name)  # 输出：Python

# 整数（没有小数点的数字）
age = 30        # 整数
print(age)  # 输出：30

# 浮点数（有小数点的数字）
height = 1.75   # 浮点数
print(height)  # 输出：1.75

# 布尔值（只有True和False两个值）
is_student = True  # 布尔值
print(is_student)  # 输出：True
            </pre>
            
            <p><strong>常用数据结构 - 列表</strong>：列表是一种有序的集合，可以存储多个不同类型的元素。</p>
            <pre class="code-block">
# 创建列表
fruits = ["apple", "banana", "cherry"]
print(fruits)  # 输出：['apple', 'banana', 'cherry']

# 访问列表元素（索引从0开始）
print(fruits[0])  # 输出：apple
print(fruits[1])  # 输出：banana
print(fruits[-1])  # 输出：cherry（负索引表示从末尾开始）

# 修改列表元素
fruits[1] = "orange"
print(fruits)  # 输出：['apple', 'orange', 'cherry']

# 添加元素
fruits.append("grape")
print(fruits)  # 输出：['apple', 'orange', 'cherry', 'grape']

# 删除元素
fruits.remove("apple")
print(fruits)  # 输出：['orange', 'cherry', 'grape']
            </pre>
            
            <p><strong>常用数据结构 - 字典（特别重要）</strong>：字典是一种键值对的集合，非常适合存储结构化数据。</p>
            <pre class="code-block">
# 创建字典
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}
print(person)  # 输出：{'name': 'Alice', 'age': 25, 'city': 'New York'}

# 访问字典元素（通过键）
print(person["name"])  # 输出：Alice
print(person.get("age"))  # 输出：25（使用get方法更安全）

# 修改字典元素
person["age"] = 26
print(person)  # 输出：{'name': 'Alice', 'age': 26, 'city': 'New York'}

# 添加新的键值对
person["job"] = "Engineer"
print(person)  # 输出：{'name': 'Alice', 'age': 26, 'city': 'New York', 'job': 'Engineer'}

# 遍历字典
for key, value in person.items():
    print(f"{key}: {value}")
# 输出：
# name: Alice
# age: 26
# city: New York
# job: Engineer
            </pre>
            
            <div class="practice">
              <h6>练习题</h6>
              <ol>
                <li>创建一个名为<code>student</code>的字典，包含姓名、年龄、专业三个键值对。</li>
                <li>向字典中添加一个新的键值对：班级。</li>
                <li>修改年龄的值。</li>
                <li>打印出字典中的所有信息。</li>
              </ol>
            </div>
          </div>
          
          <div class="sub-topic">
            <h5>2.1.2 控制流程</h5>
            <p><strong>条件判断</strong>：根据条件决定执行不同的代码块。</p>
            <pre class="code-block">
# 条件判断
age = 18
if age >= 18:
    print("成年人")
elif age >= 13:
    print("青少年")
else:
    print("儿童")
# 输出：成年人

# 多个条件
score = 85
if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
elif score >= 60:
    print("及格")
else:
    print("不及格")
# 输出：良好
            </pre>
            
            <p><strong>for循环</strong>：用于遍历可迭代对象（如列表、元组、字符串等）。</p>
            <pre class="code-block">
# 遍历列表
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
# 输出：
# apple
# banana
# cherry

# 遍历字符串
word = "Python"
for letter in word:
    print(letter)
# 输出：
# P
# y
# t
# h
# o
# n

# 使用range函数生成数字序列
for i in range(5):
    print(i)
# 输出：
# 0
# 1
# 2
# 3
# 4

# range(start, end, step)
for i in range(1, 10, 2):
    print(i)
# 输出：
# 1
# 3
# 5
# 7
# 9
            </pre>
            
            <p><strong>while循环</strong>：只要条件为真，就一直执行循环体。</p>
            <pre class="code-block">
# while循环
count = 0
while count < 5:
    print(count)
    count += 1  # 不要忘记更新计数器，否则会陷入无限循环！
# 输出：
# 0
# 1
# 2
# 3
# 4

# 计算1到100的和
sum = 0
n = 1
while n <= 100:
    sum += n
    n += 1
print(f"1到100的和是：{sum}")
# 输出：1到100的和是：5050
            </pre>
            
            <p><strong>break和continue</strong>：控制循环的执行。</p>
            <pre class="code-block">
# break：跳出循环
for i in range(10):
    if i == 5:
        break  # 当i等于5时，跳出循环
    print(i)
# 输出：0 1 2 3 4

# continue：跳过当前循环，继续下一次循环
for i in range(10):
    if i % 2 == 0:
        continue  # 当i是偶数时，跳过当前循环
    print(i)
# 输出：1 3 5 7 9
            </pre>
            
            <div class="practice">
              <h6>练习题</h6>
              <ol>
                <li>使用for循环遍历一个列表，打印出所有元素。</li>
                <li>使用while循环计算1到50的和。</li>
                <li>使用if-elif-else语句根据分数等级输出对应的评价。</li>
                <li>使用break语句，当循环到数字7时跳出循环。</li>
              </ol>
            </div>
          </div>
          
          <div class="sub-topic">
            <h5>2.1.3 函数</h5>
            <p><strong>什么是函数？</strong>函数是一段可重用的代码块，用于执行特定的任务。</p>
            <pre class="code-block">
# 定义函数
def greet(name):
    """打招呼函数"""
    return f"Hello, {name}!"

# 调用函数
result = greet("Alice")
print(result)  # 输出：Hello, Alice!

# 无参数函数
def say_hello():
    print("Hello, World!")

say_hello()  # 输出：Hello, World!

# 带默认参数的函数
def calculate_total(price, tax=0.08):
    """计算总价（价格 + 税费）"""
    return price * (1 + tax)

# 使用默认税率
print(calculate_total(100))  # 输出：108.0

# 自定义税率
print(calculate_total(100, 0.1))  # 输出：110.0

# 带多个参数的函数
def add(a, b):
    return a + b

print(add(3, 5))  # 输出：8
            </pre>
            
            <p><strong>可变参数</strong>：可以接受任意数量的参数。</p>
            <pre class="code-block">
# 可变参数（*args）
def sum_numbers(*args):
    """计算任意数量数字的和"""
    return sum(args)

print(sum_numbers(1, 2, 3, 4))  # 输出：10
print(sum_numbers(10, 20, 30))  # 输出：60

# 关键字参数（**kwargs）
def person_info(**kwargs):
    """打印个人信息"""
    for key, value in kwargs.items():
        print(f"{key}: {value}")

person_info(name="Alice", age=25, city="New York")
# 输出：
# name: Alice
# age: 25
# city: New York
            </pre>
            
            <div class="practice">
              <h6>练习题</h6>
              <ol>
                <li>定义一个函数，接受两个参数，返回它们的乘积。</li>
                <li>定义一个函数，接受一个列表参数，返回列表中所有元素的和。</li>
                <li>定义一个带默认参数的函数，计算矩形的面积。</li>
                <li>使用可变参数定义一个函数，计算任意数量数字的平均值。</li>
              </ol>
            </div>
          </div>
          
          <div class="sub-topic">
            <h5>2.1.4 面向对象编程基础</h5>
            <p><strong>什么是面向对象编程？</strong>面向对象编程（OOP）是一种编程范式，它将数据和操作数据的方法封装在一起。</p>
            <pre class="code-block">
# 定义类
class Student:
    def __init__(self, name, age):
        """构造函数，初始化对象"""
        self.name = name  # 实例变量
        self.age = age
    
    def introduce(self):
        """介绍自己"""
        return f"我叫{self.name}，今年{self.age}岁"

# 创建对象（实例化）
student1 = Student("王子一", 20)
student2 = Student("Alice", 19)

# 调用对象的方法
print(student1.introduce())  # 输出：我叫王子一，今年20岁
print(student2.introduce())  # 输出：我叫Alice，今年19岁

# 访问对象的属性
print(student1.name)  # 输出：王子一
print(student1.age)  # 输出：20
            </pre>
            
            <p><strong>类的继承</strong>：子类可以继承父类的属性和方法。</p>
            <pre class="code-block">
# 父类
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"我叫{self.name}，今年{self.age}岁"

# 子类（继承Person）
class Student(Person):
    def __init__(self, name, age, major):
        super().__init__(name, age)  # 调用父类的构造函数
        self.major = major  # 子类特有的属性
    
    def introduce(self):
        # 重写父类的方法
        return f"我叫{self.name}，今年{self.age}岁，专业是{self.major}"

# 创建学生对象
student = Student("王子一", 20, "商务数据分析与应用")
print(student.introduce())  # 输出：我叫王子一，今年20岁，专业是商务数据分析与应用
            </pre>
            
            <div class="practice">
              <h6>练习题</h6>
              <ol>
                <li>定义一个<code>Car</code>类，包含品牌、型号、年份等属性，以及一个<code>display_info</code>方法。</li>
                <li>创建两个<code>Car</code>对象，并调用它们的<code>display_info</code>方法。</li>
                <li>定义一个<code>ElectricCar</code>子类，继承自<code>Car</code>类，添加电池容量属性。</li>
              </ol>
            </div>
          </div>
          
          <div class="sub-topic">
            <h5>2.1.5 文件操作与异常处理</h5>
            <p><strong>文件操作</strong>：Python提供了内置的文件操作功能。</p>
            <pre class="code-block">
# 写入文件
with open("data.txt", "w", encoding="utf-8") as f:
    f.write("Hello, Python!\n")
    f.write("这是一个测试文件。")

# 读取文件
with open("data.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print(content)
# 输出：
# Hello, Python!
# 这是一个测试文件。

# 逐行读取
with open("data.txt", "r", encoding="utf-8") as f:
    for line in f:
        print(line.strip())  # strip()去除换行符
# 输出：
# Hello, Python!
# 这是一个测试文件。

# 追加内容
with open("data.txt", "a", encoding="utf-8") as f:
    f.write("\n追加的内容。")

# 再次读取
with open("data.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print(content)
# 输出：
# Hello, Python!
# 这是一个测试文件。
# 追加的内容。
            </pre>
            
            <p><strong>异常处理</strong>：处理程序运行过程中可能出现的错误。</p>
            <pre class="code-block">
# 基本的异常处理
try:
    result = 10 / 0  # 会引发ZeroDivisionError
except ZeroDivisionError:
    print("除数不能为零！")
finally:
    print("操作完成。")
# 输出：
# 除数不能为零！
# 操作完成。

# 捕获多个异常
try:
    num = int(input("请输入一个数字："))
    result = 10 / num
    print(f"结果是：{result}")
except ValueError:
    print("请输入有效的数字！")
except ZeroDivisionError:
    print("除数不能为零！")
except Exception as e:
    print(f"发生了未知错误：{e}")
finally:
    print("程序结束。")
            </pre>
            
            <div class="practice">
              <h6>练习题</h6>
              <ol>
                <li>创建一个文件，写入你的个人信息。</li>
                <li>读取并打印该文件的内容。</li>
                <li>使用异常处理，处理可能出现的文件不存在错误。</li>
                <li>在文件末尾追加一条新信息。</li>
              </ol>
            </div>
          </div>
          
          <div class="learning-tips">
            <h5>学习提示</h5>
            <ul>
              <li><strong>实践是最好的学习方法</strong>：不要只看代码，要自己动手编写和运行。</li>
              <li><strong>使用注释</strong>：在代码中添加注释，解释代码的功能和逻辑。</li>
              <li><strong>从小例子开始</strong>：先编写简单的代码，再逐步增加复杂度。</li>
              <li><strong>使用AI工具</strong>：当遇到问题时，可以向AI工具（如ChatGPT）寻求帮助。</li>
              <li><strong>保持耐心</strong>：学习编程需要时间，不要急于求成。</li>
            </ul>
          </div>
        </section>
        
        <section class="topic">
          <h4>2.2 AI与数据分析"三剑客"（重中之重，必须熟练）</h4>
          
          <div class="sub-topic">
            <h5>2.2.1 NumPy - 数值计算库</h5>
            <pre class="code-block">
import numpy as np

# 创建数组
arr = np.array([1, 2, 3, 4, 5])
print(arr)

# 数组运算
print(arr + 2)  # 每个元素加2
print(arr * 2)  # 每个元素乘2

# 多维数组
matrix = np.array([[1, 2, 3], [4, 5, 6]])
print(matrix.shape)  # 形状
print(matrix[0, 1])  # 访问元素
            </pre>
          </div>
          
          <div class="sub-topic">
            <h5>2.2.2 Pandas - 数据处理库（核心）</h5>
            <pre class="code-block">
import pandas as pd

# 创建DataFrame
data = {
    "name": ["Alice", "Bob", "Charlie"],
    "age": [25, 30, 35],
    "city": ["New York", "London", "Paris"]
}
df = pd.DataFrame(data)
print(df)

# 数据读取
# df = pd.read_csv("data.csv")
# df = pd.read_excel("data.xlsx")

# 数据清洗
df.dropna()  # 删除缺失值
df.drop_duplicates()  # 删除重复值

# 数据筛选
young_people = df[df["age"] < 30]
print(young_people)

# 数据分组
age_group = df.groupby("age").size()
print(age_group)
            </pre>
          </div>
          
          <div class="sub-topic">
            <h5>2.2.3 Matplotlib / Seaborn - 数据可视化库</h5>
            <pre class="code-block">
import matplotlib.pyplot as plt
import seaborn as sns

# 折线图
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]
plt.plot(x, y)
plt.title("折线图")
plt.xlabel("X轴")
plt.ylabel("Y轴")
# plt.show()

# 柱状图
data = [10, 20, 30, 40, 50]
labels = ["A", "B", "C", "D", "E"]
plt.bar(labels, data)
# plt.show()

# 散点图
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]
plt.scatter(x, y)
# plt.show()
            </pre>
          </div>
        </section>
        
        <section class="topic">
          <h4>2.3 阶段目标</h4>
          <p>能独立用Pandas处理一个真实的业务数据集（如销售报表），完成清洗和基本分析，并用图表清晰呈现关键发现。</p>
        </section>
      </div>
      
      <div v-if="activeTab === 'math'" class="tab-content">
        <h3>三、关键支撑：理解"够用的数学"，而非精通公式</h3>
        
        <section class="topic">
          <h4>3.1 线性代数核心</h4>
          <p>理解向量、矩阵、矩阵乘法的意义。因为AI模型底层（如神经网络）本质上是大量的矩阵运算。</p>
          <pre class="code-block">
import numpy as np

# 向量
vector = np.array([1, 2, 3])
print("向量:", vector)

# 矩阵
matrix = np.array([[1, 2], [3, 4]])
print("矩阵:\n", matrix)

# 矩阵乘法
matrix1 = np.array([[1, 2], [3, 4]])
matrix2 = np.array([[5, 6], [7, 8]])
result = np.dot(matrix1, matrix2)
print("矩阵乘法结果:\n", result)
            </pre>
        </section>
        
        <section class="topic">
          <h4>3.2 概率统计核心</h4>
          <p>理解均值、方差、标准差描述数据分布，理解条件概率和正态分布。</p>
          <pre class="code-block">
import numpy as np

# 计算均值、方差、标准差
data = np.array([1, 2, 3, 4, 5])
mean = np.mean(data)
variance = np.var(data)
std_dev = np.std(data)

print(f"均值: {mean}")
print(f"方差: {variance}")
print(f"标准差: {std_dev}")

# 正态分布模拟
normal_data = np.random.normal(0, 1, 1000)  # 均值为0，标准差为1的正态分布
print(f"正态分布数据均值: {np.mean(normal_data)}")
print(f"正态分布数据标准差: {np.std(normal_data)}")
            </pre>
        </section>
        
        <section class="topic">
          <h4>3.3 微积分核心</h4>
          <p>理解导数、偏导数、梯度的直观概念（即"变化率"和"最快上升方向"）。</p>
          <p>这是理解模型如何通过"梯度下降"算法进行学习和优化的关键。</p>
        </section>
      </div>
      
      <div v-if="activeTab === 'ai-practice'" class="tab-content">
        <h3>四、实战应用：从"调用模型"到"驾驭AI"</h3>
        
        <section class="topic">
          <h4>4.1 机器学习入门与Scikit-learn实战（约2个月）</h4>
          
          <div class="sub-topic">
            <h5>4.1.1 经典算法</h5>
            <ul>
              <li>线性回归（预测数值）</li>
              <li>逻辑回归（分类入门）</li>
              <li>决策树/随机森林</li>
              <li>K-Means聚类</li>
            </ul>
          </div>
          
          <div class="sub-topic">
            <h5>4.1.2 核心流程</h5>
            <pre class="code-block">
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import pandas as pd

# 加载数据
# df = pd.read_csv("data.csv")

# 准备数据
# X = df[['feature1', 'feature2']]
# y = df['target']

# 划分训练集和测试集
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 选择模型
# model = LinearRegression()

# 训练模型
# model.fit(X_train, y_train)

# 预测
# y_pred = model.predict(X_test)

# 评估
# mse = mean_squared_error(y_test, y_pred)
# print(f"均方误差: {mse}")
            </pre>
          </div>
          
          <div class="sub-topic">
            <h5>4.1.3 实战项目建议</h5>
            <ul>
              <li>鸢尾花分类</li>
              <li>房价预测</li>
              <li>销售数据预测</li>
            </ul>
          </div>
        </section>
        
        <section class="topic">
          <h4>4.2 深度学习初探（可选）</h4>
          <p>当传统机器学习掌握后，可涉足深度学习。TensorFlow/Keras或PyTorch二选一即可。</p>
          <p>重点理解神经网络的基本构成、卷积神经网络（CNN）在图像识别中的应用，以及循环神经网络（RNN）在处理序列数据上的思路。</p>
        </section>
      </div>
      
      <div v-if="activeTab === 'ai-learning'" class="tab-content">
        <h3>五、贯穿始终的"新时代学习法"：与AI协作</h3>
        
        <section class="topic">
          <h4>5.1 智能辅助</h4>
          <p>利用如GitHub Copilot等工具，在编写代码时获得自动补全和建议，加速学习过程。</p>
        </section>
        
        <section class="topic">
          <h4>5.2 交互式学习</h4>
          <p>在Jupyter Notebook环境中边学边练，即时看到代码结果，这是数据科学领域的标准实践方式。</p>
          <pre class="code-block">
# Jupyter Notebook示例
import pandas as pd
import matplotlib.pyplot as plt

# 加载数据
df = pd.read_csv("sales_data.csv")

# 查看数据前几行
df.head()

# 绘制销售趋势
plt.plot(df['date'], df['sales'])
plt.title('销售趋势')
plt.xlabel('日期')
plt.ylabel('销售额')
plt.show()
            </pre>
        </section>
        
        <section class="topic">
          <h4>5.3 利用AI解惑</h4>
          <p>当你遇到不理解的概念、报错或需要代码示例时，可以向AI提问，让它为你解释、调试或生成示例代码。</p>
        </section>
      </div>
      
      <div v-if="activeTab === 'roadmap'" class="tab-content">
        <h3>六、学习路线图与时间规划</h3>
        
        <section class="topic">
          <h4>6.1 6-8个月规划（每天投入1-2小时）</h4>
          <ul>
            <li><strong>第1-2个月：</strong>攻克Python基础语法和"三剑客"（NumPy, Pandas, Matplotlib），目标能熟练处理数据。</li>
            <li><strong>第3个月：</strong>学习"够用的数学"核心概念，并与Python代码结合理解。</li>
            <li><strong>第4-5个月：</strong>学习机器学习基础算法，并用Scikit-learn完成2-3个入门实战项目。</li>
            <li><strong>第6-8个月：</strong>根据兴趣，选择进入深度学习或深化某个数据分析领域，并完成1-2个高质量的综合项目。</li>
          </ul>
        </section>
        
        <section class="topic">
          <h4>6.2 学习建议</h4>
          <ul>
            <li>不要盲目追求学习广度，深度掌握数据处理和核心模型原理</li>
            <li>不要只看不练，跑通一个项目胜过空读十篇教程</li>
            <li>不要急于求成，跳过基础直接啃深度学习会事倍功半</li>
            <li>与AI工具协作，提高学习效率</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('core-principles')
const tabs = [
  { id: 'core-principles', title: '核心原则' },
  { id: 'python-core', title: 'Python核心' },
  { id: 'math', title: '数学基础' },
  { id: 'ai-practice', title: 'AI实战' },
  { id: 'ai-learning', title: 'AI协作学习' },
  { id: 'roadmap', title: '学习路线图' }
]
</script>

<style scoped>
.python-course {
  max-width: 1000px;
  margin: 0 auto;
}

.python-course h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
}

.course-nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 0.5rem;
  overflow-x: auto;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 0.8rem 1.5rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  color: #666;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.tab-btn:hover {
  color: #333;
}

.tab-btn.active {
  color: #4CAF50;
  border-bottom-color: #4CAF50;
}

.course-content {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tab-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.topic {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.topic h4 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 0.5rem;
}

.topic h5 {
  font-size: 1rem;
  margin-bottom: 0.8rem;
  color: #555;
  margin-top: 1.5rem;
}

.topic p {
  margin-bottom: 1rem;
  color: #666;
  line-height: 1.6;
}

.topic ul {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.topic li {
  margin-bottom: 0.5rem;
  color: #666;
}

.sub-topic {
  margin-bottom: 1.5rem;
}

.code-block {
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
  line-height: 1.4;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.practice {
  background-color: #e8f5e8;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1.5rem;
  border-left: 4px solid #4CAF50;
}

.practice h6 {
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
  color: #2e7d32;
}

.practice ol {
  padding-left: 1.5rem;
  margin-bottom: 0;
}

.practice li {
  margin-bottom: 0.5rem;
  color: #333;
}

.practice code {
  background-color: #c8e6c9;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.85rem;
}

.learning-tips {
  background-color: #e3f2fd;
  padding: 1.5rem;
  border-radius: 6px;
  margin-top: 2rem;
  border-left: 4px solid #2196f3;
}

.learning-tips h5 {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #1565c0;
  border-bottom: none;
  padding-bottom: 0;
  margin-top: 0;
}

.learning-tips ul {
  padding-left: 1.5rem;
  margin-bottom: 0;
}

.learning-tips li {
  margin-bottom: 0.8rem;
  color: #333;
  line-height: 1.5;
}

.learning-tips strong {
  color: #1565c0;
}

@media (max-width: 768px) {
  .python-course h2 {
    font-size: 1.5rem;
  }
  
  .course-nav {
    flex-direction: column;
    gap: 0.5rem;
    border-bottom: none;
    padding-bottom: 0;
  }
  
  .tab-btn {
    border-bottom: none;
    border-left: 3px solid transparent;
    padding: 0.5rem 1rem;
  }
  
  .tab-btn.active {
    border-bottom-color: transparent;
    border-left-color: #4CAF50;
  }
  
  .course-content {
    padding: 1rem;
  }
  
  .topic {
    padding: 1rem;
  }
}
</style>