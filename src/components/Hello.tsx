//src/components/Hello.tsx

import * as React from  'react';
import './Hello.css'; //create-react-app包含的工具（Webpack和一些加载器）允许我们导入样式表文件。 当我们构建应用
                      // 的时候，所有导入的.css文件会被拼接成一个输出文件。

export interface Props{
    name:string;
    enthusiasmLevel?: number; //enthusiasmLevel 是可选的且为number类型（你可以通过 参数名 后部追加 "?" 将其指定为 可选型参数）。
}

function Hello({name,enthusiasmLevel=1}:Props){ // 此行 创建了一个 函数式组件 , 函数Hello的参数表解构了Props对象(见L7,颇类似Python) 
    if(enthusiasmLevel <=0){
        throw new Error('You could be a little more enthusiastic.');

    }

    return(
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
                                </div>
                                </div>
    );

}



export default Hello; 


function getExclamationMarks(numOfChars: number){
    return Array(numOfChars).join('!');
}

