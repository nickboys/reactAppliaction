/**
 * Created by JianHuangsh on 2017/12/22.
 */
import { combineReducers } from 'redux';
/**
 * 这是一个 reducer,形式为 (state, action) => state 的纯函数.
 * 描述了 action 如何把state转变成下一个 state.
 *
 * state 的形式取决于你, 可以使基本类型,数组,对象
 * 甚至是 Immutable.js 生成的数据结构. 唯一的要点是
 * 当state变化时需要返回全新的对象,而不是修改传入的参数.
 *
 * 下面的例子使用 'switch' 语句和字符串来做判断, 但你可以写帮助类(helper)
 * 根据不同的约定(如方法映射)来做判断,只要使用你的项目即可
 *
 * @param state
 * @param action
 * @returns {number}
 */

const initialState = {
    count : 0      // count = 0
    // loaded : false, // 异步请求是否加载
    // personList : [  // 人员列表
    //     {"name" : "lily", "age" : 21}
    // ]
};
 function count(state = initialState.count, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default :
            return state
    }
};
const rootReducer = combineReducers({
    count
})
export default rootReducer