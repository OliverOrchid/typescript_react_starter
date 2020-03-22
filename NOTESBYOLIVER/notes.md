# NotesBYOLIVER 

## ***Vocabulary***

```
###############################
infer vt. 推断
analyze vt 分析
view of types 类型视图
yarn  n. 纱线 , 奇谈，故事
manifest n. 货单 清单
verbose adj. 冗长的；啰嗦的
Enzyme [ˈenzaɪm] n. (生物)酶

###############################
jest n.  笑话 ,玩笑,笑柄
mock vt. 模拟 , 模仿 
simulate [ˈsɪmjuleɪt] vt 模仿  adj. 模仿的,假装的
emulate  [ˈemjuleɪt] vt. 模仿  n. 仿效,仿真
manipulate [məˈnɪpjuleɪt] vt. 操纵；操作；巧妙地处理；篡改
traverse vt. 遍历
intuitive /ɪnˈtʃuː.ɪ.tɪv/ adj. 直观(易懂,无歧义)的 , 直觉的；凭直觉获知的 

######################################
flexible /ˈflek.sə.bəl/ adj. 可变动的；灵活的；可变通的
mimic  /ˈmɪm.ɪk/ 现在分词为 "mimic-king"  v. （为逗乐而）模仿，学…的样子 n.善于模仿之人
peer /pɪər/   n. 同等社会地位（或能力）的人 adj. 同等的
extrapolate [ɪkˈstræpəleɪt]  vt. 类推 , 外推,推断
credit vt.  感谢声明; 归功于；赞颂
```

> 酶（enzyme）是由活细胞产生的、对其底物具有高度特异性和高度催化效能的[蛋白质](https://baike.baidu.com/item/%E8%9B%8B%E7%99%BD%E8%B4%A8/309120)或[RNA](https://baike.baidu.com/item/RNA/98142) ,属于生物催化剂





## STH  NEED TO KNOW

> 部分资料源自博主大神, 将会奉上相关网址



这篇快速上手指南会教你如何将TypeScript与React结合起来使用。 在最后，你将学到：

- 使用TypeScript和React创建工程

- 使用TSLint进行代码检查

- 使用Jest和Enzyme进行测试 

  > //PS: 此部分知识的相关教程资料严重缺损, 不建议耗费时间来学习
  >
  > 如果真的想要深入探究PCWebApp项目的生命周期的"测试环节",建议通过Google搜寻最新的更为完善更有发展前景的的测试工具集 , 不一定非要使用"Jest+Enzyme"工具集即不要一棵树上吊死... ...
  >
  > 
  >
  > 下面
  >
  > 

- 使用Redux管理 States变量

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



## 3#Web开发入门与最佳实践 @github_zpf

```
https://github.com/zuopf769/Web-Frontend-Introduction-And-Best-Practices	
```



##  4#结合两种库(vue、react)+一种框架(angular)谈谈MVC、MVP、MVVM三种架构设计--另附PDF

### (1)@小生嘘清谈#

react，官网上明明白白说了，人家是一个library，用于构建用户界面。

vue的官方文档是说vue的核心库也只是关注视图（View）层。

所以，实际上来说，和angular有完整的解决方案不同，狭义的vue.js和react.js实际上只是library，还并不是一个framework，因为他们没有一整套的解决方案。

换句话来说，现在我们所讨论的vue、react，都是我们将他们武装之后，他们有了一整套解决方案了。成为了一个框架，我们再来讨论他们的架构模式。

> 下面两层是不变的，先提前声明：
>
> Model（数据模型）: 原始数据模型的管理。
>
> View（视图）：用户接触操作的页面。

### (2)如何理解 "应用逻辑控制层"?#

Controller（应用逻辑控制层）: 控制原始数据的流动 . 具体说来, 是将用户的操作反馈给Model，通知其进行数据更新。

 

## 5#TS语法之 TypeAssertion(类型断言)

> 内容节选自, 其作者为 ***Basarat***
>   ``https://basarat.gitbook.io/typescript/type-system/type-assertion``
>
> 中文译文参考
> ``https://jkchao.github.io/typescript-book-chinese/typings/typeAssertion.html#as-foo-与-foo``



### (1)类型断言, 在某下状况下被认为是有害的

在很多情景下，断言能让你更容易的从遗留项目中迁移（甚至将其他代码粘贴复制到你的项目中），然而，你应该小心谨慎的使用断言。



让我们用最初的代码做为示例，如果你没有按约定添加属性，TS编译器并不会对此错误发出警告：

```
interface Foo {
  bar: number;
  bas: string;
}

const foo = {} as Foo;

// ahhh, 忘记了什么？
```

> 正如L8所示, 你还真的有可能忘了什么...

另外一个常见的想法是使用类型断言来提供代码的提示：

```
interface Foo {
  bar: number;
  bas: string;
}

const foo = <Foo>{
  // 编译器将会提供关于 Foo 属性的代码提示
  // 但是开发人员也很容易忘记添加所有的属性
  // 同样，如果 Foo 被重构，这段代码也可能被破坏（例如，一个新的属性被添加）。
};
```

> 这也会存在一个同样的问题，如果你忘记了某个属性，编译器同样也不会发出错误警告。



下面我们提供一种 应对 上述两种具备缺陷性的编码方式(即 更具备保障性的编码方式)

```
interface Foo {
  bar: number;
  bas: string;
}

const foo: Foo = {  
  // 编译器将会提供 Foo 属性的代码提示
};
```

> 正如L7所示, 在某些情景下，你可能需要创建一个临时的变量，但至少，你不会使用一个承诺（可能是假的），而是依靠类型推断来检查你的代码。
>
> L6,类似于Python的解构机制, 会把 对象Foo 的所有属性 提示给开发者



### (2) 万物都具备两面性 (@双重断言)

> 正如"中国特色社会主义" 借鉴了 万恶的资本主义的市场经济理论的精华 ,开创了公有制为主+民企为辅,双轨并行的经济发展制度
>
> 亦正如,2020-3-15日 ,西班牙卫生部长萨尔瓦多·伊拉（Salvador Illa）与国防、交通和内政三部门的部长一起召开联合发布会，宣布西班牙的医疗体系将执行"社会主义国有化"操作，所有私营医疗配置将置于西班牙国家政府的卫生系统的管理之下。 (参考西班牙《国家报》和《ABC报》16日的报道 )



类型断言，尽管我们已经证明了它并不是那么安全，但它也还是有用武之地。如下一个非常实用的例子所示，当使用者了解传入参数更具体的类型时，类型断言能按预期工作：

```
function handler(event: Event) {
  const mouseEvent = event as MouseEvent;
}
```

然而，如下例子中的代码将会报错，尽管使用者已经使用了类型断言：

```
function handler(event: Event) {
  const element = event as HTMLElement; // Error: 'Event' 和 'HTMLElement' 						//中的任何一个都不能赋值给另外一个
}
```

> 上述示例机制, 是为了在进行类型断言时提供额外的安全性，完全毫无根据的断言是危险的 



如果你仍然想使用那个类型，你可以使用双重断言。首先断言成兼容所有类型的 `any`，编译器将不会报错：

```
function handler(event: Event) {
  const element = (event as any) as HTMLElement; // 如果你想这么做，你可以使用 							//any
}
```

### (3)关于TypeAssertion的更多观点

类型断言 ,  当你比类型检查器更清楚一个表达式的类型的时候，你可以通过这种方式通知TypeScript。

这里，我们之所以这么做是因为`getElementById`的返回值类型是`HTMLElement || null`。 简单地说，`getElementById`返回`null`是当无法找对对应`id`元素的时候。 我们假设`getElementById`总是成功的，因此我们要使用`as`语法告诉TypeScript这点。



> TypeScript还有一种感叹号（`!`）结尾的语法，它会从前面的表达式里移除`null`和`undefined`。 所以我们也_可以_写成`document.getElementById('root')!`，但在这里我们想写的更清楚些。



## 6#有关 "Jest" 的基础知识

> Jest 是"针对JavaScript 的代码  语法正确性 和 目标期望值(即 是否得到预期返回值) 的 测试工具"
>
> Jest 是 Facebook 发布的一个开源的、基于 `Jasmine` 框架的 JavaScript 测试工具。提供了包括内置的测试环境 DOM API 、断言库、Mock 库等，还包含了 Spapshot Testing、 Instant Feedback 等特性。
>
> 本部分内容节选自
> ``https://jestjs.io/docs/zh-Hans/getting-started``



### (1)Jest的  配置文件( 即 项目初始化)

参考网址

``https://jestjs.io/docs/zh-Hans/configuration.html#defaults``



#### 通过三种方式 Configuring Jest 

Jest's configuration can be defined in 

> I : the `package.json` file of your project, 
>
> II: or through a `jest.config.js` file ,
>
> III: or 通过使用命令行即: `--config <path/to/file.js|cjs|mjs|json>` option. 



I : use your `package.json` to store Jest's config, the `"jest"` key should be used on the top level so Jest will know how to find your settings:

```
//方法I package.json文件
{
  "name": "my-project",
  "jest": {  //the "jest" key should be used on the top level 
    "verbose": true
  }
}
```

II: 或者通过 `jest.config.js`： //PS:推荐此方式

```
//方法II  jest.config.js文件
module.exports = {
  verbose: true,
};
```

III:

> 暂略!!!



#### Jest的更多配置选项 ,你可以随时添加 或 删除 

These options let you control Jest's behavior in your `package.json` file. The Jest philosophy is to work great by default, but sometimes you just need more configuration power.

您可以了解 Jest 的更多选项，以便在必要时扩展它们：

```
// jest.config.js
const {defaults} = require('jest-config');
module.exports = {
  // ...
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  // ...
};
```



### (2)基于Jest的测试工具集 简介

根据官网教程, 目前为止, 有3类 测试工具技术栈

#### 1>Jest+Babel

如果需要使用 [Babel](http://babeljs.io/)，可以通过 `yarn`来安装所需的依赖。

```
yarn add --dev babel-jest @babel/core @babel/preset-env
```

可以在工程的根目录下创建一个`babel.config.js`文件用于配置与你当前Node版本兼容的Babel：

```
// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

#### 2>Jest+Webpack

> 略

#### 3>Jest+TypeScript

1)方法I - 基于Babel

Jest supports TypeScript, via Babel. First make sure you followed the instructions on [using Babel](https://jestjs.io/docs/zh-Hans/getting-started#using-babel) above. Next install the `@babel/preset-typescript` via `yarn`:

> PS: Jest必须基于Babel 才可以与 "包含TypeScript的项目" 实现结合

```
yarn add --dev @babel/preset-typescript
```

Then add `@babel/preset-typescript` to the list of presets in your `babel.config.js`.

```
// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
+    '@babel/preset-typescript',
  ],
};
```

 

> 不过，在配合使用TypeScript与Babel时，仍然有一些 [注意事项](https://babeljs.io/docs/en/next/babel-plugin-transform-typescript.html#caveats) 。 因为 Babel 对 TypeScript 的支持是 transpilation，Jest 不会在运行时对你的测试进行类型检查。 



2)方法II - 基于"ts-jest"

> 参考网址 ``https://github.com/kulshekhar/ts-jest``
>
> 官网简介 : "Ts-jest" lets you use Jest to test projects written in TypeScript. 





### (3)Jest的实际应用

> 参考网址
>
> ``https://jestjs.io/docs/zh-Hans/getting-started``
>
> ---
>
> QUE: 基于教程进度 {{TS_zhongsp | @使用Jest编写测试}} , 现决定 暂时 转向 {8#关于"Enzyme"的基础知识}
>
> ANS: 结合本文的{{8#-(3)-2>}}和 "宿主体+寄生体"观点 
>
> ---
>
> Enzyme作为寄生体, 寄生于 "宿主体Jest"之中
>
>  [Enzyme](http://airbnb.io/enzyme/)是 "React系列生态系统" 的一个测试工具，相比于Jest ,它进一步的 "优化+简化" 了 针对ReactComponent 的 "行为测试" 的 编写流程。 

#### 1>安装Jest ,并初始化

如果你没使用过Jest，你可能先要把它安装为开发依赖项。

```
npm install -D jest jest-cli jest-config
```

我们对`Hello`组件有一些假设。 让我们在此重申一下：

> - 当这样写`<Hello name="Daniel" enthusiasmLevel={3} />`时，组件应被渲染成`<div>Hello Daniel!!!</div>`。
> - 若未指定`enthusiasmLevel`，组件应默认显示一个感叹号。
> - 若`enthusiasmLevel`为`0`或负值，它应抛出一个错误。

我们将针对这些需求为组件写一些注释。

#### 2>安装Enzyme , 并初始化

让我们把它安装为开发依赖项。注意我们同时安装了`enzyme`和`@types/enzyme`。 `enzyme`包指的是包含了实际运行的JavaScript代码包，而`@types/enzyme`则包含了声明文件（`.d.ts`文件）的包，以便TypeScript能够了解该如何使用Enzyme。 你可以在[这里](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html)了解更多关于`@types`包的信息。

```
npm install -D enzyme @types/enzyme     enzyme-adapter-react-16 @types/enzyme-adapter-react-16
```

> enzyme-adapter 的相关知识, 详见 {{8#}}



可选操作 : 如果你的react版本低于15.5.0，还需执行如下操作

```
npm install -D react-addons-test-utils
```





## 7# Yarn : Migrating from npm

``https://classic.yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison``

> 迁移项目 从NPM到 Yarn



## 8#关于"Enzyme"的基础知识

> GITHUB:	 ``https://github.com/enzymejs/enzyme``
>
> 官方APIDoc:     ``https://github.com/enzymejs/enzyme``
>
> 官网:	  ``https://enzymejs.github.io/``     PS:不知为何,无法访问!

### (1)Enzyme简介

> 前言: Enzyme , 由Airbnb开源  。获得了React 官方的推荐。

Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.

Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.

> 译文关键字:
>
> test your React Components' output => 测试工程项目的  "React下辖的各种组件"
>
> is meant to be intuitive and flexible => 旨在 更加的 直观易懂 和 灵活



### (2)Enzyme的项目初始化



***为了使用Enzyme, 我们必须执行它的初始化操作***

***类推到其他的软件开发中,这都是必由之路而不可越***



To get started with enzyme, you can simply install it via npm. You will need to install enzyme along with an Adapter corresponding to the version of react (or other UI Component library) you are using. For instance, if you are using enzyme with React 16, you can run:

> PS: 针对每一种 "React版本 " ,Enzyme都提供了相对应版本的 "Enzyme-Adapter" , 注意对号入座!

```
npm i --save-dev enzyme enzyme-adapter-react-16
```



> 上述方案适用于 "纯粹的React"项目
>
> 你可能会有疑问, 既然适用,为何还要扯上 "Jest"? 我认为,要从 "宿主体+寄生体"的角度来看待问题...



### (3)"Jest+Enzyme"技术栈的使用指南 ,"宿主体"之问得以解决



***上文提出了一个观点, 即"宿主体+寄生体", 接下来我们要在步骤II中解决宿主体的问题***

Enzyme is un-opinion-ated regarding which test runner or assertion library you use, and should be compatible with all major test runners and assertion libraries out there. The documentation and examples for enzyme use [mocha](https://mochajs.org/) and [chai](http://chaijs.com/), but you should be able to extrapolate to your framework of choice.

> test-runner 测试运行器 , Jest就是一款 test-runner
>
> ------
>
> you should be able to extrapolate to your framework of choice  你应当能够针对你所选择的framework进行类推

If you are interested in using enzyme with custom assertions and convenience functions for testing your React components, you can consider using:

> 如果你有兴趣基于自定义的assertions 和 convenience-functions 来运用 Enzyme 去测试你的 React-components , 你可以考虑如下几种方法

- [`chai-enzyme`](https://github.com/producthunt/chai-enzyme) with Mocha/Chai.
- [`jasmine-enzyme`](https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jasmine-enzyme) with Jasmine.
- [`jest-enzyme`](https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme) with Jest.       //PS: 喏,在这儿呢 , 这是针对 "Jest+Enzyme"技术栈的使用指南
- [`should-enzyme`](https://github.com/rkotze/should-enzyme) for should.js.
- [`expect-enzyme`](https://github.com/PsychoLlama/expect-enzyme) for expect.

***接下来 , 我将展开上述列表的第3项--即 {[`jest-enzyme`](https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme) with Jest}***

#### 1>方案I : 经典配置Configure with Jest

To run the setup file to configure Enzyme and the Adapter (as shown in the [Installation docs](https://enzymejs.github.io/enzyme/docs/installation/)) with Jest, set `setupFilesAfterEnv` (previously `setupTestFrameworkScriptFile`) in your config file (check [Jest's documentation](http://jestjs.io/docs/en/configuration) for the possible locations of that config file) to literally the string `<rootDir>` and the path to your setup file.

```
{
  "jest": {
    "setupFilesAfterEnv": ["<rootDir>src/setupTests.js"]
  }
}
```

#### 2>方案II : 适用于版本号不低于15的Jest

1) 简介 : Starting with version 15, Jest [no longer mocks modules by default](https://facebook.github.io/jest/blog/2016/09/01/jest-15.html). ***Because of this, you no longer have to add any special configuration for Jest to use it with enzyme.***

> ---
>
> mocks vt. 模仿 , 模拟, 伪装
>
> ---
>
> "you no longer have to add any special configuration for Jest to use it with Enzyme"!!!
>
> 这就解释了为什么不需要在 "宿主体-Jest" 中 进行初始化配置了, {{6#-(3)}}的QUE得以解决

2)具体步骤如下:  

> 严格意义上讲, 要想使用某种工具,则必须进行对应的初始化操作(一般都是需要新建一个json文件,当然也有可能是其他的什么鬼文件... ...)
>
> 但是,WTF , 老子看了一天的文档, 结果官方明确写明了 作为宿主体Jest  不需要新建文件, 而作为寄生体的Enzyme也提莫的不需要新建文件, 我淦!!! 
>
> 唯一要做的就是,安装好 工程依赖和依赖声明即可 , 我尼玛, 一天的时间浪费了... ...
>
> PS: 参考本工程的package.json文件 , 或许会巩固你的学习记忆... ...

1st,Install Jest  and its Babel + Typescript , 按照Jest文档操作即可

2nd, 执行操作{{8#--(2)}}

3rd, cd到项目根目录下, 执行 "npm test"

> 这里有个示例项目, 教你如何使用Enzyme + Jest
>
> ``github.com/vjwilson/enzyme-example-jest``

#### 4>Jest prior to version 15

If you are using Jest 0.9 – 14.0 with enzyme and using Jest's automocking feature, you will need to mark react and enzyme to be unmocked in your `package.json`:

`package.json`:

```
{
  "jest": {
    "unmockedModulePathPatterns": [
      "node_modules/react/",
      "node_modules/enzyme/"
    ]
  }
}
```



## 9#React生态系统-BYSue -- 另附PDF

``https://zhuanlan.zhihu.com/p/26270621``



## 10#React 与 ReactNative 区别-- 另附PDF

### 1>词汇表

```
react vi. 反应，作出反应；产生（化学）反应；

native  adj. 本国本地的；天然的；与生俱来的；天赋的 n. 本地人；土产；当地居民
```



### 2> ReactNative 的字面含义

其开发团队希望提供给用户一种最本初(最原生)的 移动APP体验.



> 何谓原生?
>
>  即 仅使用JS就可以为用户创建  功能丰富, 反应迅速 , 兼容性良好(跨平台), 运行稳定的 MobileAPP



### 3>部分摘要

(1)

React Native 是一款用来开发真正原生渲染的 iOS 和 Android 移动应用的 JavaScript 框架。React 是一款 Facebook 公司开源的 JavaScript 用户界面开发框架，React Native基于React 而产生。但 React 将浏览器作为渲染平台，而 React Native 的渲染平台则是移动设备。它们开发语法相似，都使用 JSX 语法进行开发，这种语法结合了 JavaScript 和类 XML 标记语言。

> PS:对于习惯了 Web 平台的 React 开发者来说，这意味着你可以使用熟悉的工具来开发真正原生的移动应用。

 (2)

 与React 相一致，React Native 也是通过编写JSX 来设计视图，并将视图标记和控制逻辑组合在一起成为一个文件。React 刚问世的时候，JSX 在业界引起了强烈的反响。对于许多Web 开发者来说，根据技术进行文件分离是理所当然的：保持CSS、HTML 和JavaScript文件的独立。然而将标记、控制逻辑，甚至样式合并成一门语言难免会让人觉得混乱

> 如何理解{将视图标记和控制逻辑组合在一起成为一个文件}?
>
> 我倾向于把 ViewTag(即"视图标记") 看做是 槽位(亦可叫做 "占位槽"), 所谓的槽位 就像是个水槽, 初始状态可能有水也可能一滴没有. 但是, 槽位的功能始终定位于 接收即将到来的 DataFlow(数据流)
>
> 把ControlLogic("控制逻辑")看作是 抽水机 , 定向抽取或定向排放 相应槽位的水流(DataFlow)

(3)

毋庸置疑，React Native 的桥接不可能暴露宿主平台全部的API。

如果你需要使用一个未支持的特性，完全可以自己动手添加到React Native 中。

当然，如果其他人已经集成，那就更好了，所以应该及时查看社区中的实现.

> 有关"桥接",参考 PDF附件-图2-2

 

##  11#"React项目"开发周期 的 "测试环节"的 简介

> 对于一个 PC-WebAPP 来说，理想的测试环节应该包含如下内容:
> 	单元测试（Unit tests），
> 	快照测试（Snapshot tests），
> 	端到端测试（EndToEnd tests）。

参考网址 : ``https://juejin.im/post/5c5018b8e51d457d1b7f7218``



### (1) 此处简单介绍一下 "快照测试"

> 作用对象: 是指对React项目的  Component   进行 UI测试
>
> 为什么要进行"快照测试"? : 每当你想要确保你的UI不会有期望之外的改变，快照测试是非常有用的工具。



A typical snapshot test case for a mobile app renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component.

> Google译文,仅供参考:移动应用程序的典型快照测试用例呈现了一个UI组件，拍摄了快照，然后将其与测试旁边存储的参考快照文件进行比较。 如果两个快照不匹配，则测试将失败：更改是意外的，或者参考快照需要更新为UI组件的新版本。



> !!!待商榷结论, 仅供参考,切勿轻信
>
> Jest 的快照测试不会拍摄图片，而是将 "React 树" 序列化成字符串，通过比较 先后两个字符串 来判断 UI 是否改变。
> 因为是字符序列 的对比，运行速度自然比 "传统快照测试" 效率更快。

 

### (2)基于项目需求选择 "测试技术栈"

| **测试种类** | 测试**技术栈**                       |
| ------------ | ------------------------------------ |
| 单元测试     | Jest + Enzyme   //PS:宿主体 + 寄生体 |
| 快照测试     | Jest                                 |
| E2E 测试     | jest-puppeteer                       |

Jest 是 Facebook 开源的 快照测试 工具,,从某种程度而言,Jest通常被视为一种test-runner。Jest自身包含多个成分:包括但不限于test-runner、assertion-library、spy、mock、snapshot  . 

Enzyme 是 Airbnb 开源的  "单元测试 "工具。它扩展了 React 官方的 TestUtils，通过 似jQuery 风格的 API 对 DOM 进行处理，减少了诸多重复代码，可以很方便的对渲染出来的结果进行断言。

jest-puppeteer 是一个同时包含 Jest 和 Puppeteer 的工具, 一款E2E测试工具。Puppeteer 是谷歌官方提供的 Headless Chrome Node API.

 

### (3)测试工具集 - 即 测试环节 所涵盖的各个工具



 

 