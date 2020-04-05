//下面我们创建这个应用将要响应的消息类型，src/constants/index.tsx。



export const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
export type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;


export const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM';
export type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;

//这里的const/type模式允许我们以容易访问和重构的方式使用TypeScript的 字符串字面量 类型。

