//创建一些actions以及创建这些actions的函数，src/actions/index.tsx

import * as constants from '../constants'


//TypeScript 的 interface 自主定义如下：
export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

//限定actions的 类型
export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

//创建 interface 的 instance ， 具体如下所示
//须知， instance可以为 var型，或function型
export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM  //重载interface的 placeholder
    }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM  //重载interface的 placeholder
    }
}

//我们创建了两个 interface，它们负责增加操作和减少操作的行为。 还定义了一个action（EnthusiasmAction），它描述了哪些action是可以增加或减少的。 最后，定义了两个 instanceOfInterface 用来创建实际的action。

//这里有一些清晰的模版，你可以参考类似redux-actions的库。  [https://www.npmjs.com/package/redux-actions]