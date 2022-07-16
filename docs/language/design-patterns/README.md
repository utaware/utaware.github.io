---
date: 2022-07-15
category:
  - language
tag:
  - design
---

# 设计模式

设计模式代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。

设计模式是一套被反复使用的、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了重用代码、让代码更容易被他人理解、保证代码可靠性。 毫无疑问，设计模式于己于他人于系统都是多赢的，设计模式使代码编制真正工程化，设计模式是软件工程的基石，如同大厦的一块块砖石一样。

## 原则

*   **S – Single Responsibility Principle 单一职责原则**
    *   一个程序只做好一件事
    *   如果功能过于复杂就拆分开，每个部分保持独立
*   **O – OpenClosed Principle 开放/封闭原则**
    *   对扩展开放，对修改封闭
    *   增加需求时，扩展新代码，而非修改已有代码
*   L – Liskov Substitution Principle 里氏替换原则
    *   子类能覆盖父类
    *   父类能出现的地方子类就能出现
*   I – Interface Segregation Principle 接口隔离原则
    *   保持接口的单一独立
    *   类似单一职责原则，这里更关注接口
*   D – Dependency Inversion Principle 依赖倒转原则
    *   面向接口编程，依赖于抽象而不依赖于具体
    *   使用方只关注接口而不关注具体类的实现

## 分类

### 创建型

> 这些设计模式提供了一种在创建对象的同时隐藏创建逻辑的方式，而不是使用 new 运算符直接实例化对象。这使得程序在判断针对某个给定实例需要创建哪些对象时更加灵活。

*   工厂模式（Factory Pattern）
*   抽象工厂模式（Abstract Factory Pattern）
*   单例模式（Singleton Pattern）
*   建造者模式（Builder Pattern）
*   原型模式（Prototype Pattern）

### 结构型模式

> 这些设计模式关注类和对象的组合。继承的概念被用来组合接口和定义组合对象获得新功能的方式。

*   适配器模式（Adapter Pattern）
*   桥接模式（Bridge Pattern）
*   过滤器模式（Filter、Criteria Pattern）
*   组合模式（Composite Pattern）
*   装饰器模式（Decorator Pattern）
*   外观模式（Facade Pattern）
*   享元模式（Flyweight Pattern）
*   代理模式（Proxy Pattern）

### 行为型模式

> 这些设计模式特别关注对象之间的通信。

*   责任链模式（Chain of Responsibility Pattern）
*   命令模式（Command Pattern）
*   解释器模式（Interpreter Pattern）
*   迭代器模式（Iterator Pattern）
*   中介者模式（Mediator Pattern）
*   备忘录模式（Memento Pattern）
*   观察者模式（Observer Pattern）
*   状态模式（State Pattern）
*   空对象模式（Null Object Pattern）
*   策略模式（Strategy Pattern）
*   模板模式（Template Pattern）
*   访问者模式（Visitor Pattern）

### J2EE 模式

这些设计模式特别关注表示层。这些模式是由 Sun Java Center 鉴定的。

*   MVC 模式（MVC Pattern）
*   业务代表模式（Business Delegate Pattern）
*   组合实体模式（Composite Entity Pattern）
*   数据访问对象模式（Data Access Object Pattern）
*   前端控制器模式（Front Controller Pattern）
*   拦截过滤器模式（Intercepting Filter Pattern）
*   服务定位器模式（Service Locator Pattern）
*   传输对象模式（Transfer Object Pattern）
