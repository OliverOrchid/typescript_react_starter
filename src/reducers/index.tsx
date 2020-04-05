//现在我们可以开始写第一个reducer了！ Reducers是函数，它们负责生成应用state的拷贝使之产生变化，但它并没有副作用,因为它是纯洁函数。

//我们的reducer将放在src/reducers/index.tsx文件里。 它的功能是保证增加操作会让感叹级别加1，减少操作则要将感叹级别减1，但是这个级别必须不小于1。

export const FUCK='FUCK!'

import { EnthusiasmAction } from '../actions'
import { StoreState } from '../types/index'
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index'

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {  //重载interface,传入两个参数 state 和 action
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { 
          ...state, //复制 old_state 即：已有的状态
          enthusiasmLevel: state.enthusiasmLevel + 1 } //在old_state的基础上，添加一个新的状态，最终完成状态更新操作 ，生成new_state

    case DECREMENT_ENTHUSIASM:
      return { 
          ...state,  //复制old_state 即：已有的状态
          enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) }//在old_state的基础上，剔除一个旧状态，完成状态更新操作,生成new_state
    default:
        return state
  }
}

//注意我们使用了_对象展开符_ 即 '...' ，当替换enthusiasmLevel时，它可以对状态进行 复制。 将enthusiasmLevel属性放在末尾是十分关键的，否则它将被旧的状态覆盖。

//你可能想要对reducer写一些测试。 因为reducers是纯函数，它们可以传入任意的数据。 针对每个输入，可以测试reducers生成的新的状态。 可以考虑使用Jest的toEqual方法。

