# OpenClaw Lens

🔍 **Agent 输出文件预览平台**

一个基于 React + GitHub Pages 的轻量级内容预览平台，让 OpenClaw 用户能够自动同步和预览 Agent 生成的文档、HTML 和图片。

## ✨ 特性

- ✅ **零成本** - 基于 GitHub Pages，完全免费
- ✅ **一键安装** - 使用 GitHub Template，无需 npm 发布
- ✅ **自动同步** - Skill 驱动，无需手动操作
- ✅ **现代化 UI** - 黑白配色，简洁大方
- ✅ **多格式支持** - Markdown、HTML、图片

## 🚀 快速开始

### 步骤 1：创建你的仓库

1. 访问 **[OpenClaw-Lens 模板](https://github.com/jaguarliuu/OpenClaw-Lens)**
2. 点击 **"Use this template"** → **"Create a new repository"**
3. 输入仓库名称（如：`my-openclaw-lens`）
4. 点击 **"Create repository"**

### 步骤 2：运行安装脚本

```bash
# 下载并运行安装脚本
curl -fsSL https://raw.githubusercontent.com/jaguarliuu/OpenClaw-Lens/main/install.sh | bash
```

脚本会询问：
- GitHub 用户名
- 仓库名称
- Agent 名称

### 步骤 3：启用 GitHub Pages

1. 进入你的仓库 **Settings** → **Pages**
2. **Source** 选择 **"GitHub Actions"**
3. 等待自动部署（1-2 分钟）

### 步骤 4：访问预览站点

访问：`https://你的用户名.github.io/仓库名/`

## 📖 使用方法

### 添加文件到预览

使用 `preview-sync` skill 或手动添加：

```bash
# 方式 1：使用 Skill（推荐）
preview-sync /path/to/file.md kira

# 方式 2：手动复制
cp /path/to/file.md public/agents/kira/
git add . && git commit -m "Add file" && git push
```

1-2 分钟后，文件会自动出现在预览站点。

### 支持 Agent

每个 Agent 对应一个目录：

```
public/agents/
├── kira/       # Kira 的文件
├── ha/         # Ha 的文件
└── hen/        # Hen 的文件
```

### 支持格式

- ✅ **Markdown** (.md) - 渲染预览
- ✅ **HTML** (.html) - iframe 沙箱预览
- ✅ **图片** (.png, .jpg, .gif) - 图片预览
- ✅ **代码** (.js, .py, .java) - 语法高亮

## 📂 目录结构

```
OpenClaw-Lens/
├── src/              # React 源码
│   ├── components/   # UI 组件
│   ├── pages/        # 页面
│   ├── hooks/        # API Hooks
│   └── config/       # 配置
├── public/
│   └── agents/       # Agent 输出目录（初始为空）
├── skill/            # Skill 文件
└── docs/             # 文档
```

## 🔧 配置

### 环境变量（开发环境）

创建 `.env.local`：

```env
VITE_GITHUB_OWNER=your-username
VITE_GITHUB_REPO=your-repo-name
```

生产环境自动从 URL 推断，无需配置。

### 本地开发

```bash
npm install
npm run dev
```

访问 http://localhost:5173

## 📚 文档

- [设计文档](docs/plans/2026-02-20-openclaw-preview-design.md)
- [实施计划](docs/plans/2026-02-20-openclaw-preview-implementation.md)
- [Skill 文档](skill/SKILL.md)

## 🛠️ 技术栈

- **前端**: React 18 + Vite + TailwindCSS v4
- **数据源**: GitHub API
- **部署**: GitHub Pages + GitHub Actions
- **Skill**: Shell Script

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT

---

**由 Kira ⚡ 构建**
