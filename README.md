# OpenClaw Lens

🔍 **Agent 输出文件预览平台**

一个基于 React + GitHub Pages 的轻量级内容预览平台，让 OpenClaw 用户能够自动同步和预览 Agent 生成的文档、HTML 和图片。

## ✨ 特性

- ✅ **零成本** - 基于 GitHub Pages，完全免费
- ✅ **一键安装** - GitHub Template + 自动配置脚本
- ✅ **自动同步** - Skill 驱动，无需手动操作
- ✅ **现代化 UI** - 黑白配色，简洁大方
- ✅ **多格式支持** - Markdown、HTML、图片

## 🚀 快速开始

### 方式 1：GitHub Template（推荐）

#### Step 1: 创建仓库

1. 访问 [OpenClaw-Lens](https://github.com/jaguarliuu/OpenClaw-Lens)
2. 点击 **"Use this template"** → **"Create a new repository"**
3. 输入仓库名称（如：`my-openclaw-lens`）
4. 点击 **"Create repository"**

#### Step 2: 运行安装脚本

在本地终端运行：

```bash
# 替换 YOUR_USERNAME 和 YOUR_REPO 为你的信息
curl -fsSL https://raw.githubusercontent.com/jaguarliuu/OpenClaw-Lens/main/install.sh | bash -s -- YOUR_USERNAME YOUR_REPO
```

示例：
```bash
curl -fsSL https://raw.githubusercontent.com/jaguarliuu/OpenClaw-Lens/main/install.sh | bash -s -- johndoe my-openclaw-lens
```

#### Step 3: 启用 GitHub Pages

1. 进入你的仓库 **Settings** → **Pages**
2. **Source** 选择 **"GitHub Actions"**
3. 等待自动部署（约 1-2 分钟）

#### Step 4: 访问预览站点

```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

### 方式 2：手动安装

```bash
# 1. Clone 你的仓库
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO

# 2. 运行安装脚本
chmod +x install.sh
./install.sh

# 3. 按提示输入信息

# 4. 推送到 GitHub
git push
```

## 📖 使用方法

### 同步文件到预览仓库

安装完成后，使用 `preview-sync` skill（自动配置）：

```bash
# 在 OpenClaw 中
preview-sync /path/to/your/file.md
```

或手动复制：

```bash
# 复制文件到对应 agent 目录
cp /path/to/your/file.md public/agents/kira/

# 提交并推送
git add public/agents/kira/file.md
git commit -m "Add file"
git push
```

1-2 分钟后，文件会自动出现在你的预览站点。

### 文件组织结构

```
public/agents/
├── kira/           # Kira 的文件
│   ├── report.md
│   └── data.json
├── ha/             # Ha 的文件
│   └── article.html
└── hen/            # Hen 的文件
    └── daily.md
```

## 🎯 第一次使用

刚创建的仓库是空的，没有任何 agent 或文件。这是正常的！

**开始使用：**

1. 使用 `preview-sync` 添加第一个文件
2. 推送到 GitHub
3. 刷新预览页面
4. 看到你的第一个 agent 和文件

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
│   ├── SKILL.md      # Skill 文档
│   └── preview-sync.sh
├── install.sh        # 一键安装脚本
└── docs/             # 文档
```

## 🔧 配置

### 环境变量

创建 `.env.local` 文件（开发环境）：

```env
VITE_GITHUB_OWNER=your-username
VITE_GITHUB_REPO=your-repo-name
```

**生产环境会自动从 GitHub Pages URL 推断，无需配置。**

### GitHub Pages

1. Settings → Pages
2. Source: **GitHub Actions**
3. 等待自动部署

## 🐛 故障排查

### 页面显示 "No agents found"

**原因：** 仓库里还没有文件

**解决：**
1. 使用 `preview-sync` 添加文件
2. 推送到 GitHub
3. 等待 1-2 分钟
4. 刷新页面

### 404 错误

**原因：** GitHub Pages 还没部署完成

**解决：**
1. 检查 Settings → Pages 是否启用
2. 确认 Source 是 "GitHub Actions"
3. 等待 GitHub Actions 运行完成

### 样式不显示

**原因：** TailwindCSS 配置问题

**解决：**
1. 检查 `npm install` 是否成功
2. 确认 `src/styles/index.css` 存在
3. 重新运行 `npm run build`

## 🛠️ 技术栈

- **前端**: React 18 + Vite + TailwindCSS v4
- **数据源**: GitHub API
- **部署**: GitHub Pages + GitHub Actions
- **Skill**: Shell Script

## 📚 文档

- [设计文档](docs/plans/2026-02-20-openclaw-preview-design.md)
- [实施计划](docs/plans/2026-02-20-openclaw-preview-implementation.md)
- [Skill 文档](skill/SKILL.md)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT

---

**由 Kira ⚡ 构建**
