# 《山海经》地理信息交互式网站 - 部署与运行指南

## 方案一：本地运行

### 前提条件
- 安装 [Node.js](https://nodejs.org/) (推荐版本 16.x 或更高)
- 安装 npm 或 pnpm 包管理器

### 步骤
1. 解压下载的 `shanhaijing_map_project.zip` 文件
2. 打开命令行终端，进入解压后的目录
3. 安装依赖：
   ```bash
   npm install
   # 或者使用 pnpm
   pnpm install
   ```
4. 启动开发服务器：
   ```bash
   npm run dev
   # 或者使用 pnpm
   pnpm run dev
   ```
5. 在浏览器中访问 `http://localhost:5173` 即可查看网站

## 方案二：部署到静态网站托管平台

### 选项 A：使用已构建的静态文件（推荐）

1. 解压下载的 `shanhaijing_map_project.zip` 文件
2. 找到其中的 `dist` 目录，这是已经构建好的静态网站文件
3. 将 `dist` 目录中的所有文件上传到您选择的静态网站托管平台：
   - [GitHub Pages](https://pages.github.com/)
   - [Vercel](https://vercel.com/)
   - [Netlify](https://www.netlify.com/)
   - [Cloudflare Pages](https://pages.cloudflare.com/)
   - 或任何其他静态网站托管服务

### 选项 B：自行构建并部署

1. 解压下载的 `shanhaijing_map_project.zip` 文件
2. 打开命令行终端，进入解压后的目录
3. 安装依赖：
   ```bash
   npm install
   # 或者使用 pnpm
   pnpm install
   ```
4. 构建项目：
   ```bash
   npm run build
   # 或者使用 pnpm
   pnpm run build
   ```
5. 构建完成后，将生成的 `dist` 目录中的所有文件上传到您选择的静态网站托管平台

## 常见问题解答

### Q: 网站无法正常显示地图怎么办？
A: 请确保您的浏览器已启用 JavaScript，并且没有被防火墙或内容拦截器阻止。

### Q: 如何修改网站内容或添加新的地理实体？
A: 您可以编辑 `src/data/entities.js` 文件，按照现有格式添加或修改地理实体数据，然后重新构建项目。

### Q: 如何更换地图底图？
A: 您可以替换 `public/assets/` 目录下的 `ancient_map.jpg` 和 `modern_map.jpg` 文件，保持相同的文件名。

### Q: 如何联系开发者获取更多帮助？
A: 如有任何问题或需要进一步的帮助，请随时联系我们。

## 技术说明

本项目使用以下技术栈开发：
- React 18
- Leaflet.js (地图库)
- Vite (构建工具)
- Tailwind CSS (样式框架)

所有数据均存储在前端代码中，无需后端服务器或数据库支持，便于静态部署。
