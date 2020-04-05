//写好展示组件 [./src/components/Hello.tsx]之后，就可以把它放在一个容器组件中。 让我们来创建一个 容器组件 src/containers/Hello.tsx，在开始的地方使用下列导入语句。

import Hello from '../components/Hello';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';

//import { Dispatch } from 'react-redux'; //Dispatch 被react-redux官方所抛弃，故而只能使用L9所示的方法
import {Dispatch} from 'redux'  // 基于redux导入 库函数Dispatch

export const FUCK ='FUCK'
/*
两个关键要素 :  展示组件（即../components/Hello） 和react-redux的connect函数。 

须知，connect可以将我们的 展示组件 转换成一个容器，但是必须借助以下两个函数：

    mapStateToProps将当前store里的数据以我们的组件需要的形式传递到组件。
    mapDispatchToProps利用dispatch函数，创建callBack型props 将 actions送到store。
*/


//现在开始D

//回想一下，我们的应用 (即：src/components/Hello.tsx)包含两个属性：languageName和enthusiasmLevel。该展示组件Hello.tsx，希望得到一个name和一个enthusiasmLevel。 mapStateToProps会从store得到相应的数据。 下面让我们继续往下写。

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName,
  }
}

//注意mapStateToProps仅创建了展示组件Hello需要的四个属性中的两个。 我们还想要传入 两个callBack : 即 onIncrement和onDecrement 。
//mapDispatchToProps函数需要传入一个dispatch。 该dispatch可以将actions传入store来触发更新，
//基于上述，我们要先创建 两个callBack， callBack会在特定时候 调用dispatch。

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) { //重载interface + 句点语法引用EnthusiasmAction
    return {
      onIncrement: () => dispatch(actions.incrementEnthusiasm()),
      onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    }
  }


//最后，我们可以调用connect了。 connect首先会接收mapStateToProps和mapDispatchToProps作为实参 ，然后返回另一个函数，我们用返回的那个函数来包裹我们的展示组件。 最终的容器组件是通过下面的代码定义的：
export default connect(mapStateToProps, mapDispatchToProps)(Hello);


