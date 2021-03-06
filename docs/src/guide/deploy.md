# 构建&部署

## 构建

项目开发完成之后，执行以下命令进行构建

```bash
yarn build
```

构建打包成功之后，会在根目录生成 dist 文件夹，里面就是构建打包好的文件

### 旧版浏览器兼容

在 **.env.production** 内

设置 `VITE_LEGACY=true` 即可打包出兼容旧版浏览器的代码

```bash
VITE_LEGACY = true
```

### 预览

发布之前可以在本地进行预览

```bash
# 先执行打包，打包结束后执行预览
yarn preview
# 直接预览本地 dist 文件目录
yarn preview:dist
```

### 分析构建文件体积

如果你的构建文件很大，可以通过项目内置 [rollup-plugin-analyzer](https://github.com/doesdev/rollup-plugin-analyzer) 插件进行代码体积分析，从而优化你的代码。

```bash
yarn report
```

运行之后，在自动打开的页面可以看到具体的体积分布，以分析哪些依赖有问题。
