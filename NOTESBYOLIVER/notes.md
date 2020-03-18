# NotesBYOLIVER 

## ***Vocabulary***

```
infer vt. 推断
analyze vt 分析
view of types 类型视图
```



## STH  NEED TO KNOW

> 部分资料源自博主大神, 将会奉上相关网址



这篇快速上手指南会教你如何将TypeScript与React结合起来使用。 在最后，你将学到：

- 使用TypeScript和React创建工程
- 使用TSLint进行代码检查
- 使用Jest和Enzyme进行测试，以及
- 使用Redux管理状态

我们会使用create-react-app工具快速搭建工程环境。

这里假设你已经在使用Node.js和npm。 并且已经了解了React的基础知识



## 1# Typescript + React 的项目初始化 基础知识#

> If you've previously installed `create-react-app` globally via `npm install -g create-react-app`, we recommend you uninstall the package using `npm uninstall -g create-react-app` to ensure that `npx` always uses the latest version.



### Get Started Immediately

You **don’t** need to install or configure tools like webpack or Babel. They are preconfigured and hidden so that you can focus on the code.

Create a project, and you’re good to go.



### [#](https://create-react-app.dev/docs/getting-started/#creating-an-app)Creating an App

**You’ll need to have Node >= 8.10 on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

#### [#](https://create-react-app.dev/docs/getting-started/#npx)npx

```
npx create-react-app my-app
```

*(npx comes with npm 5.2+ and higher, see instructions for older npm versions)*

#### [#](https://create-react-app.dev/docs/getting-started/#npm)npm

```
npm init react-app my-app
```

*npm init <initializer> is available in npm 6+*

#### [#](https://create-react-app.dev/docs/getting-started/#yarn)Yarn

```
yarn create react-app my-app
```

*yarn create is available in Yarn 0.25+*





### #Selecting a template

You can now optionally start a new app from a template by appending `--template [template-name]` to the creation command.

If you don't select a template, we'll create your project with our base template.

Templates are always named in the format `cra-template-[template-name]`, however you only need to provide the `[template-name]` to the creation command.

```
npx create-react-app my-app --template [template-name]
```

> You can find a list of available templates by searching for ["cra-template-*"](https://www.npmjs.com/search?q=cra-template-*) on npm.

Our [Custom Templates](https://create-react-app.dev/docs/custom-templates) documentation describes how you can build your own template.

### [#](https://create-react-app.dev/docs/getting-started/#creating-a-typescript-app)Creating a TypeScript app

You can start a new TypeScript app using templates. To use our provided TypeScript template, append `--template typescript` to the creation command.

```
npx create-react-app my-app --template typescript
```

If you already have a project and would like to add TypeScript, see our [Adding TypeScript](https://create-react-app.dev/docs/adding-typescript) documentation.

### [#](https://create-react-app.dev/docs/getting-started/#selecting-a-package-manager)Selecting a package manager

When you create a new app, the CLI will use [Yarn](https://yarnpkg.com/) to install dependencies (when available). If you have Yarn installed, but would prefer to use npm, you can append `--use-npm` to the creation command. For example:

```
npx create-react-app my-app --use-npm
```

 

## 2#SFC (Stateless Functional Component)--另附PDF##

当我们的组件具有某些状态的时候，使用类的方式是很有用处的。 但在这个例子里我们不需要考虑状态 - 事实上，在React.Component我们把状态指定为了object，因此使用SFC开发模式更简 洁。 当在创建可重用的通用UI组件的时候，在表现层使用组件局部状态比较适合。 针对我们应用的生命 周期，我们会审视应用是如何通过Redux轻松地管理普通状态的。 

> 我觉得我们在开发中经常忽略掉的一个模式就是所谓的Stateless Functional Component，不过这是我个人最爱的React组件优化模式，没有之一。我喜爱这种模式不仅仅因为它们能够减少大量的模板代码，而且因为它们能够有效地提高组件的性能表现。总而言之，SFC能够让你的应用跑的更快，长的更帅。   
>
> 直观来看，SFC就是指那些仅有一个渲染函数的组件，不过这简单的改变就可以避免很多的无意义的检测与内存分配。下面我们来看一个实践的例子来看下SFC的具体作用，



## 3#Web开发入门与最佳实践 @github_zuopf

```
https://github.com/zuopf769/Web-Frontend-Introduction-And-Best-Practices	
```



##  4#结合两种库(vue、react)+一种框架(angular)谈谈MVC、MVP、MVVM三种架构设计--另附PDF

### 1#

react我们不说了，官网上明明白白说了，人家是一个library，用于构建用户界面。

vue的官方文档是说vue的核心库也只是关注视图（View）层。

所以，实际上来说，和angular有完整的解决方案不同，狭义的vue.js和react.js实际上只是library，还并不是一个framework，因为他们没有一整套的解决方案。

换句话来说，现在我们所讨论的vue、react，都是我们将他们武装之后，他们有了一整套解决方案了。成为了一个框架，我们再来讨论他们的架构模式。

> 下面两层是不变的，先提前声明：
>
> Model（数据模型）: 原始数据模型的管理。
>
> View（视图）：用户接触操作的页面。

### 2#

Controller（应用逻辑控制层）: 控制原始数据的流动 . 具体说来, 是将用户的操作反馈给Model，通知其进行数据更新。

 

## 5#TS语法之 TypeAssertion(类型断言)

> 内容节选自, 其作者为 ***Basarat***
>   ``https://basarat.gitbook.io/typescript/type-system/type-assertion``
>
> 中文译文参考
> ``https://jkchao.github.io/typescript-book-chinese/typings/typeAssertion.html#as-foo-与-foo``



