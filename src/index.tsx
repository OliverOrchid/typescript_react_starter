import Hello from './components/Hello';
import './CssIndex.css';

import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
                <Hello name='TypeScript' enthusiasmLevel={10} />, 


                // "as xxxElement " 语法是推荐语法, 不会像以前版本的语法容易引发歧义
                 //此处的document.getElementById('root') as HTMLElement。 这
                //个语法叫做类型断言，有时也叫做转换。 当你比类型检查器更清楚一个表达式的类型的时候，你可以通
                // 过这种方式通知TypeScript。
                // 这里，我们之所以这么做是因为getElementById的返回值类型是HTMLElement | null。 简单地
                // 说，getElementById返回null是当无法找对对应id元素的时候。 我们假设getElementById总是成
                // 功的，因此我们要使用as语法告诉TypeScript这点。
                // TypeScript还有一种感叹号（!）结尾的语法，它会从前面的表达式里移除null和undefined。 所以我
                // 们也可以写成document.getElementById('root')!，但在这里我们想写的更清楚些。
                document.getElementById('root') as HTMLElement,  


                                                                                );
