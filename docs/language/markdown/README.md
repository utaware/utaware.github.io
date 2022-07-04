---
date: 2022-07-03
category:
  - language
tag:
  - Markdown
---

# Markdown

## 标题(Headline)

* H1: # Header 1
* H2: ## Header 2
* H3: ### Header 3
* H4: #### Header 4
* H5: ##### Header 5
* H6: ###### Header 6

## 块引用(Blockquote)

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

```md
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
```

## 列表(list)

- Red
- Green
- Blue

1. Bird
2. McHale
3. Parish

```md
- Red
- Green
- Blue

1. Bird
2. McHale
3. Parish
```

## 代码(code)

`javascript`

```js
const a = 1;
```

````md
`javascript`

```js
const a = 1;
```
````

## 分割线(divide line)

```md
---
```

## 链接(link)

[MDN](https://developer.mozilla.org/zh-CN/)

[Google][]

[google]: http://google.com/

```md
<!-- 链接过长会很影响内容 -->
[MDN](https://developer.mozilla.org/zh-CN/)
<!-- 参考链接: 更加易读与整理 -->
[Google][]
<!-- 推荐标识标签均使用小写 -->
[google]: http://google.com/
```

## 图片(image)

![bilibili](https://www.bilibili.com/favicon.ico "bilibili")

```md
<!-- 也可以使用连接的参考式方式 -->
![bilibili](https://www.bilibili.com/favicon.ico "bilibili")
```
