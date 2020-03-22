//src/components/Hello.tsx

import  React from  'react';
import './CssHello.css'; //create-react-app包含的工具（Webpack和一些加载器）允许我们导入样式表文件。 当我们构建应用
                         // 的时候，所有导入的.css文件会被拼接成一个输出文件。
                         // 须注意,导入CSS文件时, 要写明文件后缀!

export interface Props{
    name:string;
    enthusiasmLevel?: number; //enthusiasmLevel 是可选的且为number类型（你可以通过 参数名 后部追加 "?" 将其指定为 可选型参数）。
}

function Hello({name,enthusiasmLevel=1}:Props){ // 此行 创建了一个 函数式组件 , 函数Hello的参数表解构了Props对象(见L7,颇类似Python) 
    if(enthusiasmLevel <=0){
        throw new Error('You could be a little more enthusiastic.');

    }

    return(
        <div className="StyleOfHello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
                                                                    </div>
                                                                        </div>
                                                                                );

}

export default Hello; 

function getExclamationMarks(numOfChars: number){
    return Array(numOfChars+1).join('!');
    /*
    join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。
    如果数组只有一个元素，那么将返回该项目而不使用分隔符。

    js的数组若不手动赋值,则每个元素均为"undefined",视觉上表现为"虚无"
    */


}

