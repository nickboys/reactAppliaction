/**
 * Created by JianHuangsh on 2017/12/22.
 */
import {createStore} from 'redux'
import rootReducer from '../reducers/index'

// export default function counter(initState) {
//     return createStore(counter, initState) //初始化创建
// }
let store=createStore(rootReducer);
export default store