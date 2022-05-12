# ym's developing foundations functions


## how to write a readme.md?
 - https://github.com/othneildrew/Best-README-Template
  - https://github.com/RichardLitt/standard-readme
  - https://github.com/dbader/readme-template
  - https://silentlad.com/how-to-write-beautiful-and-meaningful-readme.md

  
  ## 实践记录
  1. 提交规范:

  `pnpm add -D commitizen cz-conventional-changelog`

执行`git cz` or `npm run commit`(.json 里添加命令)

2.  提交前执行test

`pnpm add -D gHooks` 和 ` pnpm add -D yorkie`
执行报错，待解决...
不用安装  "husky": "^7.0.4", 配置即可。

 ```json
     "gitHooks": {
    "pre-commit": "npm run test"
  } 
  
  ```
3. use babel to support ES6
 - install babel
```cmd
 pnpm add -D babel-cli
```
- use roll-up to build project

```cmd
pnpm add -D rollup   
```

- add build directive to run build in package.json
```json
  // "build": "rm -rf dist types && tsc",
    "build": "rollup --config",
```
rollup.config.js 文件的配置参考官网。
打包之后的文件与webpack的
 // "build": "rm -rf dist types && tsc",
## some issiue unsolved
1. semantic-release-cli  setup 

```cmd
ode:assert:400
    throw err;
    ^

AssertionError [ERR_ASSERTION] [ERR_ASSERTION]: The expression evaluated to a falsy value:

  assert(_.isObject(msg), msg)

    at TravisClient._authenticateAccessToken

 ```


 