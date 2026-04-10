import{_ as u,c as o,a as n,F as c,r as p,b as i,d as a,e as d,o as r,n as b,t as f}from"./index-CGxWm9eq.js";const q={class:"python-course"},g={class:"course-nav"},y=["onClick"],m={class:"course-content"},v={key:0,class:"tab-content"},h={key:1,class:"tab-content"},k={key:2,class:"tab-content"},x={key:3,class:"tab-content"},_={__name:"PythonCourseView",setup(H){const e=d("basics"),l=[{id:"basics",title:"基础语法"},{id:"control",title:"控制流"},{id:"functions",title:"函数"},{id:"data-structures",title:"数据结构"}];return(w,t)=>(r(),o("div",q,[t[4]||(t[4]=n("h2",null,"Python基础课程",-1)),n("div",g,[(r(),o(c,null,p(l,s=>n("button",{key:s.id,class:b(["tab-btn",{active:e.value===s.id}]),onClick:A=>e.value=s.id},f(s.title),11,y)),64))]),n("div",m,[e.value==="basics"?(r(),o("div",v,[...t[0]||(t[0]=[i(`<h3 data-v-2f1e97b7>1. 基础语法</h3><section class="topic" data-v-2f1e97b7><h4 data-v-2f1e97b7>1.1 变量和数据类型</h4><pre class="code-block" data-v-2f1e97b7># 变量赋值
name = &quot;Python&quot;
age = 30
height = 1.75
is_student = True

# 数据类型
print(type(name))  # &lt;class &#39;str&#39;&gt;
print(type(age))   # &lt;class &#39;int&#39;&gt;
print(type(height))  # &lt;class &#39;float&#39;&gt;
print(type(is_student))  # &lt;class &#39;bool&#39;&gt;
          </pre></section><section class="topic" data-v-2f1e97b7><h4 data-v-2f1e97b7>1.2 运算符</h4><pre class="code-block" data-v-2f1e97b7># 算术运算符
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
print(x &gt; y)  # True
print(x &lt; y)  # False
print(x == y)  # False
print(x != y)  # True

# 逻辑运算符
print(x &gt; 5 and y &lt; 5)  # True
print(x &gt; 5 or y &gt; 5)  # True
print(not (x &gt; y))  # False
          </pre></section><section class="topic" data-v-2f1e97b7><h4 data-v-2f1e97b7>1.3 字符串操作</h4><pre class="code-block" data-v-2f1e97b7># 字符串定义
str1 = &quot;Hello&quot;
str2 = &#39;World&#39;
str3 = &quot;&quot;&quot;多行
字符串&quot;&quot;&quot;

# 字符串拼接
print(str1 + &quot; &quot; + str2)  # Hello World

# 字符串格式化
name = &quot;Alice&quot;
age = 25
print(f&quot;My name is {name}, I&#39;m {age} years old.&quot;)  # My name is Alice, I&#39;m 25 years old.

# 字符串方法
text = &quot;  Hello Python  &quot;
print(text.strip())  # Hello Python
print(text.lower())  #   hello python  
print(text.upper())  #   HELLO PYTHON  
print(text.replace(&quot;Python&quot;, &quot;World&quot;))  #   Hello World  
          </pre></section>`,4)])])):a("",!0),e.value==="control"?(r(),o("div",h,[...t[1]||(t[1]=[n("h3",null,"2. 控制流",-1),n("section",{class:"topic"},[n("h4",null,"2.1 条件语句"),n("pre",{class:"code-block"},`# if语句
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
          `)],-1),n("section",{class:"topic"},[n("h4",null,"2.2 循环语句"),n("pre",{class:"code-block"},`# for循环
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
          `)],-1)])])):a("",!0),e.value==="functions"?(r(),o("div",k,[...t[2]||(t[2]=[n("h3",null,"3. 函数",-1),n("section",{class:"topic"},[n("h4",null,"3.1 函数定义和调用"),n("pre",{class:"code-block"},`# 定义函数
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
          `)],-1),n("section",{class:"topic"},[n("h4",null,"3.2 Lambda函数"),n("pre",{class:"code-block"},`# Lambda函数
double = lambda x: x * 2
print(double(5))  # 10

# Lambda函数与内置函数结合
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# 过滤
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # [2, 4]
          `)],-1)])])):a("",!0),e.value==="data-structures"?(r(),o("div",x,[...t[3]||(t[3]=[i(`<h3 data-v-2f1e97b7>4. 数据结构</h3><section class="topic" data-v-2f1e97b7><h4 data-v-2f1e97b7>4.1 列表 (List)</h4><pre class="code-block" data-v-2f1e97b7># 列表定义
fruits = [&quot;apple&quot;, &quot;banana&quot;, &quot;cherry&quot;]

# 访问元素
print(fruits[0])  # apple
print(fruits[-1])  # cherry

# 修改元素
fruits[1] = &quot;orange&quot;
print(fruits)  # [&#39;apple&#39;, &#39;orange&#39;, &#39;cherry&#39;]

# 列表方法
fruits.append(&quot;grape&quot;)  # 添加元素
print(fruits)  # [&#39;apple&#39;, &#39;orange&#39;, &#39;cherry&#39;, &#39;grape&#39;]

fruits.remove(&quot;apple&quot;)  # 删除元素
print(fruits)  # [&#39;orange&#39;, &#39;cherry&#39;, &#39;grape&#39;]

fruits.sort()  # 排序
print(fruits)  # [&#39;cherry&#39;, &#39;grape&#39;, &#39;orange&#39;]
          </pre></section><section class="topic" data-v-2f1e97b7><h4 data-v-2f1e97b7>4.2 字典 (Dictionary)</h4><pre class="code-block" data-v-2f1e97b7># 字典定义
person = {
    &quot;name&quot;: &quot;Alice&quot;,
    &quot;age&quot;: 25,
    &quot;city&quot;: &quot;New York&quot;
}

# 访问元素
print(person[&quot;name&quot;])  # Alice
print(person.get(&quot;age&quot;))  # 25

# 修改元素
person[&quot;age&quot;] = 26
print(person)  # {&#39;name&#39;: &#39;Alice&#39;, &#39;age&#39;: 26, &#39;city&#39;: &#39;New York&#39;}

# 添加元素
person[&quot;job&quot;] = &quot;Engineer&quot;
print(person)  # {&#39;name&#39;: &#39;Alice&#39;, &#39;age&#39;: 26, &#39;city&#39;: &#39;New York&#39;, &#39;job&#39;: &#39;Engineer&#39;}

# 遍历字典
for key, value in person.items():
    print(f&quot;{key}: {value}&quot;)
          </pre></section><section class="topic" data-v-2f1e97b7><h4 data-v-2f1e97b7>4.3 元组 (Tuple)</h4><pre class="code-block" data-v-2f1e97b7># 元组定义
colors = (&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;)

# 访问元素
print(colors[0])  # red

# 元组是不可变的
# colors[0] = &quot;yellow&quot;  # 会报错

# 元组解包
a, b, c = colors
print(a, b, c)  # red green blue
          </pre></section><section class="topic" data-v-2f1e97b7><h4 data-v-2f1e97b7>4.4 集合 (Set)</h4><pre class="code-block" data-v-2f1e97b7># 集合定义
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
          </pre></section>`,5)])])):a("",!0)])]))}},P=u(_,[["__scopeId","data-v-2f1e97b7"]]);export{P as default};
