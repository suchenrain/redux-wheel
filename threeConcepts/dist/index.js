'use strict';

var _redux = require('redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default);

//打印初始状态
console.log(store.getState());

//输出state的每次更新
var unsubscription = store.subscribe(function () {
    console.log(store.getState());
});

//发起一系列 action
store.dispatch((0, _actions.addTodo)('Learn about actions'));
store.dispatch((0, _actions.addTodo)('Learn about reducers'));
store.dispatch((0, _actions.addTodo)('Learn about store'));
store.dispatch((0, _actions.toggleTodo)(0));
store.dispatch((0, _actions.toggleTodo)(1));
store.dispatch((0, _actions.setVisibilityFilter)(_actions.VisibilityFilters.SHOW_COMPLETED));

// 销毁监听
unsubscription();