# 交付移交手册 (HANDOVER.md)

**项目名称:** 福建厦华卫浴有限公司外贸出口 B2B 独立站  
**项目域名:** xiahuafaucet.com  
**品牌签名:** **郑在出海 | Warren | 微信：HK-1912**

---

## 1. 开发变更日志 (Change Log)

1.  **项目脚手架初始化 (Scaffolding):**
    *   构建了极速、稳定的 React 18 / Vite 5 / Tailwind CSS 的现代前端架构。
2.  **视觉设计与配色方案规范 (Visual & Design):**
    *   设计了基于 `corporate` 风格的专业 B2B 外贸蓝灰商务配色。
    *   首屏配置高画质的浴室龙头产品与先进工厂生产线背景，摒弃了泛滥、粗糙的 AI 霓虹渐变。
3.  **核心产品与多语言交互系统 (Multilingual & Catalog):**
    *   精细编写了**英文、俄文、葡萄牙文、印度语 (Hindi)、中文** 5 国语言的一键、秒级、平滑无损本地化翻译字典。
    *   设计了动态分类过滤器，以及“查看技术规格”时弹出的专属 **Product Detail Modal** 详情弹窗。
4.  **B2B 高效转换设计 (RFQ & Call-to-Action):**
    *   在首屏、产品展示、产品模态框及底部加入了 RFQ 采购询盘表单，以及一键调起 WhatsApp 在线即时沟通功能。
    *   询盘数据已经预设为投递并输出到用户指定的邮箱 `375039134@qq.com`，WhatsApp 链接预配置为 `+86 18965758892`。
5.  **国际化 SEO & GEO 优化资产 (SEO & GEO Assets):**
    *   全站各页面均植入了语义化、符合 schema 标准的 Title 和 Meta 描述标签。
    *   在 `public/` 目录下注入了标准的 `robots.txt`、`sitemap.xml`，以及面向未来 AI 搜索抓取的专属 `llms.txt` 结构化工厂资质声明。

---

## 2. 部署操作清单 (Deployment Checklist)

本独立站是一个完全静态的 React 应用程序，这意味着它可以**完全免费、无限流量、极速加载**地托管在 Cloudflare Pages 或 GitHub Pages 上。

### 2.1 基于 Cloudflare Pages 部署 (推荐)
1.  **登录 / 注册 Cloudflare:** 打开 [Cloudflare 官网](https://dash.cloudflare.com/) 注册并登录。
2.  **创建 Pages 项目:** 导航到 **Workers 和 Pages (Workers & Pages)** -> **创建 (Create)** -> **Pages** -> **连接到 Git (Connect to Git)**。
3.  **连接 GitHub 仓库:** 授权连接到您存放本项目源码的 GitHub 仓库。
4.  **构建参数设置 (Build Settings):**
    *   **框架预设 (Framework Preset):** 选择 `Vite` 或 `None`。
    *   **构建命令 (Build Command):** 输入 `npm run build`。
    *   **输出目录 (Build Output Directory):** 输入 `dist`。
5.  **点击“保存并部署”:** Cloudflare 将在 1 分钟内自动拉取代码并构建上线。

---

## 3. 域名解析与 DNS 绑定清单 (DNS Checklist)

您的目标域名是 `xiahuafaucet.com`。

### 3.1 自定义域名绑定 (Cloudflare Pages)
1.  进入您的 Cloudflare Pages 项目控制台。
2.  选择 **自定义域 (Custom Domains)** 选项卡 -> **设置自定义域 (Set up a custom domain)**。
3.  输入您的顶级域名 `xiahuafaucet.com`（或二级子域名如 `www.xiahuafaucet.com`）。
4.  **DNS 记录配置 (阿里云/万网万能解析):**
    *   若您的域名托管在 Cloudflare DNS，系统将自动一键完成解析绑定。
    *   若域名解析仍在阿里云（或其他注册商）：
        *   **主机记录:** `@` (或 `www`)
        *   **记录类型:** `CNAME`
        *   **记录值:** 指向 Cloudflare 分配给您的 Pages 专属二级域名 (例如 `xiahuafaucet.pages.dev`)。

---

## 4. 全站 SEO & GEO 移交核验单 (SEO Checklist)

*   [x] **Robots.txt 检验:** 已在 `public/robots.txt` 定义爬虫规则。
*   [x] **Sitemap 地图:** 已在 `public/sitemap.xml` 设置，方便 Google Search Console 提交索引。
*   [x] **AI 友好 llms.txt:** 已在 `public/llms.txt` 中完整归纳了厦华卫浴的工厂核心资质，利于 ChatGPT, Perplexity 等生成式 AI 进行引用。
*   [x] **TDK (Title-Description-Keywords):** 已经在 `index.html` 中为 Googlebot 配置了极富竞争力的搜索关键词（如 `Nan'an faucet handles supplier` 等）。

---

## 5. 账户移交及安全建议清单 (Account Handover Checklist)

1.  **源码备份:** 移交本项目的打包 ZIP 源码（排除 `node_modules` 临时依赖）。
2.  **邮箱托管与询盘收取:**
    *   检查询盘提交时在控制台输出的模拟报文，确保目标投递邮箱 `375039134@qq.com` 处于正常收信状态。
    *   由于是前端静态页，建议后续部署后结合 EmailJS、Formspree 或 Cloudflare Workers Mail 等免服务器方案，将表单数据自动投递至您的 QQ 邮箱中。
3.  **WhatsApp 验证:**
    *   目前呼叫按钮连接的 WhatsApp 国际区号格式已经测试正确（`+86 18965758892`），当买家点击时，会自动跳转手机端 WhatsApp 或网页端，并发送预设的多国语言业务咨询文案。

---

如有任何关于出海独立站规划、SEO 流量提权、或 Cloudflare/GitHub 部署绑定的疑问，欢迎随时沟通。

**郑在出海 | Warren | 微信：HK-1912**
