<template>
  <div class="python-functions">
    <h2>函数与模块</h2>
    
    <section class="topic">
      <h3>3.1 函数定义和调用</h3>
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
      <h3>3.2  Lambda函数</h3>
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
    
    <section class="topic">
      <h3>3.3 模块</h3>
      <pre class="code-block">
# 导入模块
import math
print(math.pi)  # 3.141592653589793
print(math.sqrt(16))  # 4.0

# 导入模块中的特定函数
from math import pi, sqrt
print(pi)  # 3.141592653589793
print(sqrt(25))  # 5.0

# 导入所有函数
from math import *
print(sin(0))  # 0.0
print(cos(0))  # 1.0

# 创建自己的模块
# 假设我们有一个名为 my_module.py 的文件
# 内容如下：
# def add(a, b):
#     return a + b
# 
# def subtract(a, b):
#     return a - b

# 导入自己的模块
# import my_module
# print(my_module.add(10, 5))  # 15
# print(my_module.subtract(10, 5))  # 5
      </pre>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.python-functions {
  max-width: 1000px;
  margin: 0 auto;
}

.python-functions h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
}

.topic {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.topic h3 {
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
  .python-functions h2 {
    font-size: 1.8rem;
  }
  
  .topic {
    padding: 1rem;
  }
}
</style>