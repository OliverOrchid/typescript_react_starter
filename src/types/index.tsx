/*
 定义Redux保存的state的数据结构。 
 创建src/types/index.tsx文件，它保存了state的数据结构的定义，我们在整个程序里都能用到。

*/

export interface StoreState{
    languageName:string;
    enthusiasmLevel: number;
}


//这里我们想让languageName表示 WebPCApp所使用的编程语言（例如，TypeScript或者JavaScript）; enthusiasmLevel是可变的。 在写我们的第一个容器组件的时候，就会明白为什么要令states与props不同。


