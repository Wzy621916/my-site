<template>
  <div class="python-basics">
    <h2>Python基础语法</h2>
    
    <section class="topic">
      <h3>1.1 变量和数据类型</h3>
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
      <h3>1.2 运算符</h3>
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
      <h3>1.3 字符串操作</h3>
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
</template>

<script setup>
</script>

<style scoped>
.python-basics {
  max-width: 1000px;
  margin: 0 auto;
}

.python-basics h2 {
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
  .python-basics h2 {
    font-size: 1.8rem;
  }
  
  .topic {
    padding: 1rem;
  }
}
</style>