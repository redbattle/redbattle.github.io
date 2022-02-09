### 文档使用方法
- 本地启动
  ```
  npm run dev
  ```

### 目录结构
  ```
  ├── .github   (可选，GitHub 相关文件)
  │   ├── workflows
  │   │   ├── baiduPush.yml (可选，百度定时自动推送)
  │   │   └── ci.yml (可选，自动部署)
  ├── docs (必须，不要修改文件夹名称)
  │   ├── .vuepress (用于存放全局的配置、样式、静态资源等，同官方)
  │   ├── @pages (此文件夹是自动生成的，存放分类页、标签页、归档页对应的.md文件，一般不需要改动)
  │   ├── _posts (专门用于存放碎片化博客文章，里面的.md文件不需要遵循命名约定，不会生成结构化侧边栏和目录页。)
  │   ├── <结构化目录>
  │   └── index.md (首页)
  ├── vdoing (可选，本地的vdoing主题)
  ├── utils  (可选，vdoing主题使用的node工具)
  │   ├── modules
  │   ├── config.yml (可选，批量操作front matter配置)
  │   ├── editFrontmatter.js (可选，批量操作front matter工具)
  ├── baiduPush.sh (可选，百度推送命令脚本)
  ├── deploy.sh (可选，部署命令脚本)
  │
  └── package.json
  ```
- 目录级别说明
  - 源目录（一般是docs）底下的级别现在我们称之为一级目录，一级目录的下一级为二级目录，以此类推，最多到四级目录。

  - 一级目录 
    - .vuepress、@pages、_posts、index.md 或 README.md 这些文件(文件夹)不参与数据生成。
    - 序号非必须。（如一些专栏，可以不用序号)
  - 二级目录
    - 该级别下可以同时放文件夹和.md文件，但是两者序号要连贯（参考下面的例子中的其他）。
    - 必须有序号
  - 三级目录
    - 必须有序号
    (同上)
  - 四级目录 v1.6.0 +
    - 该级别下只能放.md文件。
    - 必须有序号
  - 所有级别内至少有一个文件或文件夹

- 构建结构化站点配置
  ```
  // config.js
  module.exports = {
    themeConfig: {
      sidebar: 'structuring' //  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
    }
  }
  ```

### 自动生成
- 当你没有给.md文件的front matter (opens new window)指定标题(title)、时间(date)、永久链接(permalink)、分类(categories)、标签(tags)时，在运行开发服务npm run dev或打包npm run build时将自动为你生成这些数据，你也可以自己手动设置这些数据，当你手动设置之后，相应的数据就不会再自动生成。

- front matter 示例
  ```
  ---
  title: 《JavaScript教程》笔记
  date: 2020-01-12 11:51:53
  permalink: /pages/d8cae9
  categories:
    - 前端
    - JavaScript
  tags:
    -
  ---
  ```
