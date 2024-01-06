# Gulp 压缩静态资源工具

这是一个使用 [`gulp`](https://github.com/gulpjs/gulp) 的脚本工具，用于压缩静态资源文件。

## 入门指南

### 压缩单一文件

```bash
npm run gulp:html
# 或者
npm run gulp:css
# ...
```

### 压缩全部文件

```bash
# 带有日志
npm run gulp
# 忽略日志
npm run build
```

### 修改和压缩 JSON 文件

JSON 文件可以根据你的过滤规则进行修改并压缩输出。<br/>
例如，以下是一个删除 JSON 中 name 字段的示例：

```js
function minifyJson() {
	return src('src/*.json')
		.pipe(
			jsonEditor((json) => {
				// 删除JSON中的name字段
				delete json.name;
				return json;
			})
		)
		.pipe(jsonminify())
		.pipe(dest('dist'));
}
```
