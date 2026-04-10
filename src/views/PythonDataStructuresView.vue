<template>
  <div class="python-data-structures">
    <h2>数据结构</h2>
    
    <section class="topic">
      <h3>2.1 列表 (List)</h3>
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
      <h3>2.2 字典 (Dictionary)</h3>
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
      <h3>2.3 元组 (Tuple)</h3>
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
      <h3>2.4 集合 (Set)</h3>
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
</template>

<script setup>
</script>

<style scoped>
.python-data-structures {
  max-width: 1000px;
  margin: 0 auto;
}

.python-data-structures h2 {
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
  .python-data-structures h2 {
    font-size: 1.8rem;
  }
  
  .topic {
    padding: 1rem;
  }
}
</style>