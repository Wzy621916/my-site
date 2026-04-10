<template>
  <div class="python-course">
    <h2>Python基础课程</h2>
    
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
      <div v-if="activeTab === 'basics'" class="tab-content">
        <h3>1. 基础语法</h3>
        
        <section class="topic">
          <h4>1.1 变量和数据类型</h4>
          <pre class="code-block">
# 变量赋值
name = "Python"
age = 30
height = 1.75
is_student = True

# 数据类型
print(type(name))  # &lt;class 'str'&gt;
print(type(age))   # &lt;class 'int'&gt;
print(type(height))  # &lt;class 'float'&gt;
print(type(is_student))  # &lt;class 'bool'&gt;
          </pre>
        </section>
        
        <section class="topic">
          <h4>1.2 运算符</h4>
          <pre class="code-block">
# 算术运算符
x = 10
y = 3
print(x + y)  # 13
print(x - y)  # 7
print(x * y)  # 30
print(x / y)  # 3.3333333333333335
print(x // y)  # 3 (整除)
print(x % y)  # 1 (取余)
print(x ** y)  # 1000 (幂)

# 比较运算符
print(x > y)  # True
print(x < y)  # False
print(x == y)  # False
print(x != y)  # True

# 逻辑运算符
print(x > 5 and y < 5)  # True
print(x > 5 or y > 5)  # True
print(not (x > y))  # False
          </pre>
        </section>
        
        <section class="topic">
          <h4>1.3 字符串操作</h4>
          <pre class="code-block">
# 字符串定义
str1 = "Hello"
str2 = 'World'
str3 = """多行
字符串"""

# 字符串拼接
print(str1 + " " + str2)  # Hello World

# 字符串格式化
name = "Alice"
age = 25
print(f"My name is {name}, I'm {age} years old.")  # My name is Alice, I'm 25 years old.

# 字符串方法
text = "  Hello Python  "
print(text.strip())  # Hello Python
print(text.lower())  #   hello python  
print(text.upper())  #   HELLO PYTHON  
print(text.replace("Python", "World"))  #   Hello World  
          </pre>
        </section>
      </div>
      
      <div v-if="activeTab === 'control'" class="tab-content">
        <h3>2. 控制流</h3>
        
        <section class="topic">
          <h4>2.1 条件语句</h4>
          <pre class="code-block">
# if语句
age = 18
if age >= 18:
    print("成年人")
elif age >= 13:
    print("青少年")
else:
    print("儿童")

# 三元运算符
s = "成年人" if age >= 18 else "未成年人"
print(s)
          </pre>
        </section>
        
        <section class="topic">
          <h4>2.2 循环语句</h4>
          <pre class="code-block">
# for循环
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# 遍历数字范围
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# while循环
count = 0
while count < 5:
    print(count)
    count += 1

# break和continue
for i in range(10):
    if i == 5:
        break  # 跳出循环
    if i % 2 == 0:
        continue  # 跳过当前循环
    print(i)
          </pre>
        </section>
      </div>
      
      <div v-if="activeTab === 'functions'" class="tab-content">
        <h3>3. 函数</h3>
        
        <section class="topic">
          <h4>3.1 函数定义和调用</h4>
          <pre class="code-block">
# 定义函数
def greet(name):
    """打招呼函数"""
    return f"Hello, {name}!"

# 调用函数
print(greet("Alice"))  # Hello, Alice!

# 默认参数
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Bob"))  # Hello, Bob!
print(greet("Bob", "Hi"))  # Hi, Bob!

# 可变参数
def sum_numbers(*args):
    return sum(args)

print(sum_numbers(1, 2, 3, 4))  # 10

# 关键字参数
def person_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

person_info(name="Alice", age=25, city="New York")
          </pre>
        </section>
        
        <section class="topic">
          <h4>3.2  Lambda函数</h4>
          <pre class="code-block">
# Lambda函数
double = lambda x: x * 2
print(double(5))  # 10

# Lambda函数与内置函数结合
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# 过滤
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # [2, 4]
          </pre>
        </section>
      </div>
      
      <div v-if="activeTab === 'data-structures'" class="tab-content">
        <h3>4. 数据结构</h3>
        
        <section class="topic">
          <h4>4.1 列表 (List)</h4>
          <pre class="code-block">
# 列表定义
fruits = ["apple", "banana", "cherry"]

# 访问元素
print(fruits[0])  # apple
print(fruits[-1])  # cherry

# 修改元素
fruits[1] = "orange"
print(fruits)  # ['apple', 'orange', 'cherry']

# 列表方法
fruits.append("grape")  # 添加元素
print(fruits)  # ['apple', 'orange', 'cherry', 'grape']

fruits.remove("apple")  # 删除元素
print(fruits)  # ['orange', 'cherry', 'grape']

fruits.sort()  # 排序
print(fruits)  # ['cherry', 'grape', 'orange']
          </pre>
        </section>
        
        <section class="topic">
          <h4>4.2 字典 (Dictionary)</h4>
          <pre class="code-block">
# 字典定义
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# 访问元素
print(person["name"])  # Alice
print(person.get("age"))  # 25

# 修改元素
person["age"] = 26
print(person)  # {'name': 'Alice', 'age': 26, 'city': 'New York'}

# 添加元素
person["job"] = "Engineer"
print(person)  # {'name': 'Alice', 'age': 26, 'city': 'New York', 'job': 'Engineer'}

# 遍历字典
for key, value in person.items():
    print(f"{key}: {value}")
          </pre>
        </section>
        
        <section class="topic">
          <h4>4.3 元组 (Tuple)</h4>
          <pre class="code-block">
# 元组定义
colors = ("red", "green", "blue")

# 访问元素
print(colors[0])  # red

# 元组是不可变的
# colors[0] = "yellow"  # 会报错

# 元组解包
a, b, c = colors
print(a, b, c)  # red green blue
          </pre>
        </section>
        
        <section class="topic">
          <h4>4.4 集合 (Set)</h4>
          <pre class="code-block">
# 集合定义
numbers = {1, 2, 3, 4, 5}

# 添加元素
numbers.add(6)
print(numbers)  # {1, 2, 3, 4, 5, 6}

# 删除元素
numbers.remove(3)
print(numbers)  # {1, 2, 4, 5, 6}

# 集合运算
a = {1, 2, 3}
b = {3, 4, 5}
print(a.union(b))  # {1, 2, 3, 4, 5}
print(a.intersection(b))  # {3}
print(a.difference(b))  # {1, 2}
          </pre>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('basics')
const tabs = [
  { id: 'basics', title: '基础语法' },
  { id: 'control', title: '控制流' },
  { id: 'functions', title: '函数' },
  { id: 'data-structures', title: '数据结构' }
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
}

@media (max-width: 768px) {
  .python-course h2 {
    font-size: 1.8rem;
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