# Redux三大概念（Action、Reducer和Store）

## start
```sh
$ yarn global add babel-cli  # 全局 babel 编译工具
$ yarn install # 安装依赖包
```
## build
```sh
# 将ES6编译成ES5, node运行
$ babel src -d dist
$ node ./dist/index.js

# 或者 通过babel-node直接运行ES6
$ babel-node ./src/index.js
```
