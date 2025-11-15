---
date: 2022-07-04
category:
  - language
tag:
  - YAML
---

# YAML

## 语法规则

* 大小写敏感
* 使用缩进表示层级关系
* 缩进时不允许使用 Tab 键，只允许使用空格。
* 缩进的空格数目不重要，只要相同层级的元素左侧对齐即可

::: tip 注释

`#` 表示注释，从这个字符一直到行尾，都会被解析器忽略

:::

## 数据结构

* 对象(objecy): 键值对的集合
  - 映射(mapping)
  - 哈希(hashes)
  - 字典(dictionary)

* 数组(array): 按次序排列的值
  - 序列(sequence)
  - 列表(list)

* 纯量(scalars): 单个的值
  - 原始值(primitive value)

### 对象

::: code-tabs

@tab yaml

```yaml
animal: pets
hash: { name: Steve, foo: bar }
```

@tab js

```js
{
  animal: "pets",
  hash: {
    name: "Steve",
    foo: "bar"
  }
}
```

:::

### 数组

::: code-tabs

@tab yaml

```yaml
languages:
  - Ruby
  - Perl
  - Python

animal: [Cat, Dog]
```

@tab js

```js
{
  languages: ["Ruby", "Perl", "Python"],
  animal: ["Cat", "Dog"]
}
```

:::

### 纯量

* String
* Boolean
* Int
* Float
* Null: 使用`~`表示
* 时间: 采用ISO8601格式
* 日期: 采用复合iso8601格式的年、月、日表示

::: code-tabs

@tab yaml

```yaml
isInt: 12
isFloat: 12.30
isBool: true
isNull: ~
iso8601: 2001-12-14t21:59:43.10-05:00
date: 1993-06-26
```

@tab js

```js
{
  isInt: 12,
  isFloat: 12.3,
  isBool: true,
  isNull: null,
  iso8601: 2001-12-15T02:59:43.100Z,
  // // new Date("1993-06-26").toISOString()
  date: 1993-06-26T00:00:00.000Z
}
```

:::

::: code-tabs

@tab yaml

```yaml
# 默认不使用引号
str1: 这是一行字符串
# 包含空格或特殊字符
str2: "内容: 字符串"
# 双引号不会对特殊字符转义
s1: '内容\n字符串'
s2: "内容\n字符串"
# 单引号之中如果还有单引号，必须连续使用两个单引号转义
str3: 'labor''s day'
# 字符串可以写成多行, 从第二行开始，必须有一个单空格缩进。换行符会被转为空格
str4: 这是一段
  多行
  字符串
# 多行字符串可以使用 | 保留换行符，也可以使用 > 折叠换行
str5: |
  Foo
  Bar
str6: >
  Foo
  Bar
# + 表示保留文字块末尾的换行，- 表示删除字符串末尾的换行
str7: |
  Foo
str8: |+
  Foo
str9: |-
  Foo
```

@tab js

```js
{
  str1: '这是一行字符串',
  str2: '内容: 字符串',
  s1: '内容 字符串',
  s2: '内容 字符串',
  str3: "labor's day",
  str4: '这是一段 多行 字符串',
  str5: 'Foo\nBar\n',
  str6: 'Foo Bar\n',
  str7: 'Foo\n',
  str8: 'Foo\n',
  str9: 'Foo'
}
```

:::

## 引用

> & 用来建立锚点(defaults)，<< 表示合并到当前数据，* 用来引用锚点

::: code-tabs

@tab yaml

```yaml
defaults: &defaults
  adapter: postgres
  host: localhost

development:
  database: myapp_development
  <<: *defaults

test:
  database: myapp_test
  <<: *defaults
```

@tab js

```js
{
  defaults: { adapter: 'postgres', host: 'localhost' },
  development: {
    database: 'myapp_development',
    adapter: 'postgres',
    host: 'localhost'
  },
  test: {
    database: 'myapp_test',
    adapter: 'postgres',
    host: 'localhost'
  }
}
```

:::

::: code-tabs

@tab yaml

```yaml
- &showell Steve
- Clark
- Brian
- Oren
- *showell
```

@tab js

```js
["Steve", "Clark", "Brian", "Oren", "Steve"];
```

:::

## 类型转换

> yaml强制转换用 !! 实现

::: code-tabs

@tab yaml

```yaml
e: !!str 123
f: !!str true
```
@tab js

```js
{ e: '123', f: 'true' }
```

:::


