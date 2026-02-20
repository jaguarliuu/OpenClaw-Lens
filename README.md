# OpenClaw Lens

🔍 **Agent 输出文件预览平台**

一个基于 React + GitHub Pages 的轻量级内容预览平台，让 OpenClaw 用户能够自动同步和预览 Agent 生成的文档、HTML 和图片。

## ✨ 特性

- ✅ **零成本** - 基于 GitHub Pages，完全免费
- ✅ **一键安装** - 自动化脚本，无需手动配置
- ✅ **自动同步** - Skill 驱动，无需手动操作
- ✅ **现代化 UI** - 黑白配色，简洁大方
- ✅ **多格式支持** - Markdown、HTML、图片

## 🚀 快速开始

### 方式 1：一键安装（推荐）

```bash
# 下载并运行安装脚本
curl -fsSL https://raw.githubusercontent.com/jaguarliuu/OpenClaw-Lens/main/install.sh | bash
```

安装脚本会：
1. Clone 模板仓库
2. 配置 Git remote
3. 设置 OpenClaw Skill
4. 推送到你的 GitHub
5. 输出预览地址

### 方式 2：手动安装

```bash
# 1. 使用 GitHub 模板创建仓库
# 点击 "Use this template" → "Create a new repository"

# 2. Clone 仓库
git clone https://github.com/你的用户名/你的仓库名.git
cd 你的仓库名

# 3. 安装依赖
npm install

# 4. 创建本地配置
cp .env.example .env.local
# 编辑 .env.local 填写你的配置

# 5. 启动开发服务器
npm run dev
```

## 📖 使用方法

### 同步文件到预览仓库

使用 `preview-sync` skill（自动配置）或手动复制：

```bash
# 手动复制文件
cp /path/to/your/file.md public/agents/kira/

# 提交并推送
git add public/agents/kira/file.md
git commit -m "Add file"
git push
```

1-2 分钟后，文件会自动出现在你的预览站点。

## 📂 目录结构

```
OpenClaw-Lens/
├── src/              # React 源码
│   ├── components/   # UI 组件
│   ├── pages/        # 页面
│   ├── hooks/        # API Hooks
│   └── config/       # 配置
├── public/
│   └── agents/       # Agent 输出目录
│       ├── kira/     # Kira 的文件
│       ├── ha/       # Ha 的文件
│       └── hen/      # Hen 的文件
├── skill/            # Skill 文件
│   ├── SKILL.md      # Skill 文档
│   └── preview-sync.sh
└── docs/             # 文档
```

## 🔧 配置

### 环境变量

创建 `.env.local` 文件（开发环境）：

```env
VITE_GITHUB_OWNER=your-username
VITE_GITHUB_REPO=your-repo-name
```

生产环境会自动从 GitHub Pages URL 推断，无需配置。

### GitHub Pages

1. 进入 Settings → Pages
2. Source 选择 "GitHub Actions"
3. 等待自动部署

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
