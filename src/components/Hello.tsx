//src/components/Hello.tsx

import  React from  'react';
import './CssHello.css'; //create-react-app包含的工具（Webpack和一些加载器）允许我们导入样式表文件。 当我们构建应用
                         // 的时候，所有导入的.css文件会被拼接成一个输出文件。
                         // 须注意,导入CSS文件时, 要写明文件后缀!
export interface Props{
    name:string;
    enthusiasmLevel?: number; //enthusiasmLevel 是可选的且为number类型（你可以通过在 参数名 尾部追加 "?" 将其指定为 可选型参数）。

    //现在我们修改src/components/Hello.tsx，让它可以修改状态。 我们将添加两个可选的回调属性到Props，它们分别是onIncrement和onDecrement：
    onIncrement?: () => void; //onIncrement 是可选的且为 function 类型（你可以通过在 参数名 尾部追加 "?" 将其指定为 可选型参数）
    onDecrement?: () => void;  //关于void , 另见 notesBYOLIVER.md~12#
}

function Hello({name,enthusiasmLevel=1,onIncrement,onDecrement}:Props){ // 此行 创建了一个 函数式组件 , 函数Hello的参数表解构了Props对象(见L7,颇类似Python) 
                                                //也可以理解为  指定Hello函数类型为  名为Props的interface，类似于C语言的重载机制
    if(enthusiasmLevel <=0){
        throw new Error('You could be a little more enthusiastic. :D');

    }

    return(
        <div className="StyleOfHello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}  
              </div>

            <div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
              </div>
                                                                        
          </div>
                                                                                );

}
/*
通常情况下，我们应该给onIncrement和onDecrement写一些测试，它们是在各自的按钮被点击时调用。 试一试以便掌握编写测试的窍门。

*/

export default Hello; 

function getExclamationMarks(numOfChars: number){
    return Array(numOfChars+1).join('!');
    /*
    join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。
    如果数组只有一个元素，那么将返回该项目而不使用分隔符。

    js的数组若不手动赋值,则每个元素均为"undefined",视觉上表现为"虚无"
    */


}

//现在我们的组件更新好了，可以把它放在一个容器里了。 接下来我们 去创建一个文件 Hello.tsx 吧