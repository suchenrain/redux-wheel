import {
    createStore
} from 'redux';
import todoApp from './reducers';
import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './actions';


let store = createStore(todoApp);

//打印初始状态
console.log(store.getState())

//输出state的每次更新
const unsubscription = store.subscribe(() => {
    console.log(store.getState())
})

//发起一系列 action
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// 销毁监听
unsubscription()