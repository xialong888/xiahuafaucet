# 福建厦华卫浴有限公司 — 独立站设计合同 (DESIGN.md)

本文件定义了福建厦华卫浴有限公司 (Fujian Xiahua Sanitary Ware Co., Ltd.) B2B 外贸独立站的视觉规范、页面结构、组件清单及资源映射。

## 1. 产品目标与目标受众 (Product Goal & Audience)
*   **核心目标 (Goal):** 建立高端、专业的 B2B 卫浴出口品牌形象，吸引东南亚、南美、中东等海外买家、代理商及工程承包商，并通过高效的询盘 (RFQ) 和 WhatsApp 直接沟通进行获客转化。
*   **目标受众 (Audience):** 卫浴建材批发商、分销商、卫浴零售商、国际采购商、建筑工程采购经理。
*   **核心卖点亮点 (Selling Points):**
    1.  **ABS 材料龙头手柄:** 优质 ABS 注塑，超强防腐蚀、抗压耐摔，表面金属镀铬或哑光黑处理，支持定制。
    2.  **高端洁具及花洒滑套:** 高灵活性滑套及淋浴管件升降配合件，阻尼顺滑，耐磨经久。
    3.  **精工卫浴五金配件:** 实心铜/不锈钢核心配件，10万次开关测试，符合多国卫浴标准。

## 2. 视觉方向与参考风格 (Visual Direction & Reference Style)
*   **整体风格 (Theme):** 企业专业风 (Enterprise & Premium B2B)
*   **基调氛围 (Atmosphere):** 专业严谨、坚实信任、现代高端、多语言本地化。
*   **设计原则 (Design Principles):**
    *   **信任优先:** 首屏突出真实的企业工厂和高质量产品细节，避免粗糙的 AI 渐变。
    *   **流线型 RFQ:** 在核心产品卡片、大图以及底部提供一键发起询盘或通过 WhatsApp 沟通的触发入口。
    *   **多语无缝切换:** 鉴于目标市场覆盖广泛（东南亚、中东、南美等），支持 5 种语言（英文、俄文、葡萄牙文、印度语/Hindi、中文）一键瞬时无损本地化切换。

## 3. 参考来源 (Reference Sources)
*   `vendor/open-design/adapter/STATIC_POLICY.md`
*   `vendor/open-design/upstream/design-systems/corporate/DESIGN.md`
*   `vendor/open-design/upstream/design-systems/corporate/tokens.css`
*   `vendor/open-design/upstream/craft/anti-ai-slop.md`

## 4. 供应商对齐 (Vendor Grounding)
*   **选定设计系统基线 (Selected Baseline):** `corporate` (企业高端视觉基准)
*   **Token 来源 (Token Source):** 抽取 `corporate/tokens.css` 的核心 CSS 变量，确保具有高对比度和商务质感。
*   **防 AI 废话检查 (Anti-AI-Slop Check):** 坚决不用泛滥的霓虹紫粉渐变，不用堆砌无意义的 stock 卡片，首屏提供强烈的主导作用与产品实体图。文案突出真实产线、制造参数（如 "100% Salt Spray Test Checked"）而非夸大其词的 "World's Greatest Bathroom Solution"。

## 5. 色彩 Token (Color Tokens)
采用深沉信任蓝与干净卫浴白作为主色调：
*   **背景色 (Background):** `--bg: #f5f8ff;` (清爽的淡天蓝色卫浴背景)
*   **面板色 (Surface):** `--surface: #ffffff;` (纯白，用于产品卡片、正文容器)
*   **主色/强调色 (Primary/Accent):** `--accent: #1e40af;` (企业深蓝，传递制造工业与信赖感)
*   **文字颜色 (Foreground):** `--fg: #0f172a;` (深炭黑，高可读性)
*   **次级文字 (Muted Text):** `--muted: #475569;` (优雅灰)
*   **边框线 (Border):** `--border: #cbd5e1;` (细腻冷灰)

## 6. 排版与字体 (Typography)
*   **展示标题字体 (Display Font):** `Inter, system-ui, sans-serif`
*   **正文字体 (Body Font):** `Inter, system-ui, sans-serif`
*   **行高与字距 (Leading & Tracking):**
    *   正文行高: `1.5`
    *   标题字距: `-0.02em` 突出硬朗工业感

## 7. 页面结构与交互路由 (Page Structure & Navigation)
网站采用单页高效动态架构（支持一键平滑滚动，并包含产品细节动态模态弹窗与多语切换，提供极佳的移动端操作体验）：
1.  **Header (导航栏):** 厦华卫浴企业Logo、核心栏目（产品中心、关于我们、工厂优势、联系我们）、**5国语言 Selector**、**WhatsApp 直联按钮**。
2.  **Hero Section (首屏展位):** 福建厦华卫浴核心标语 + 工业级核心产品精美展图 + 快捷 RFQ 转化按钮。
3.  **Products Catalog (产品大类展示):**
    *   分类1：ABS Faucet Handles (ABS龙头手柄系列)
    *   分类2：Sanitary Ware & Shower Sliders (洁具及花洒滑套系列)
    *   分类3：Bathroom Hardware & Accessories (卫浴五金配件系列)
    *   支持点击产品打开 **Detail Modal**（查看多角度图、核心参数、以及专属 RFQ 表单）。
4.  **B2B Factory Strengths (制造实力与出口资质):**
    *   展示工厂核心数据：3,000+ ㎡ 生产基地，多台先进高精度注塑机与测试设备。
    *   核心市场背书：东南亚、南美、中东核心出口商，支持 OEM/ODM 定制，24小时极速出样。
5.  **RFQ Lead Form (询盘联系表单):** 专为大宗采购设计的表单：姓名、邮箱、公司、所需产品类别、详细采购规格要求。
6.  **FAQ Section (常见采销答疑):** 针对 MOQ（起订量）、定制化（OEM/ODM）、包装物流、样板申请等核心买家关切进行专业解答。
7.  **Footer (页脚):** 5国语言声明、联系邮箱、WhatsApp、海外办公地（或虚拟仓库展示）、隐私条例与版权链接。

## 8. 多语言对照资源 (Multilingual Translation Resources)
支持五种语言一键切换，具体文本对照字典：
*   **EN:** English (Default)
*   **RU:** Русский (俄文 - 针对中东、欧亚等地区)
*   **PT:** Português (葡萄牙文 - 针对南美巴西等主要采购国)
*   **HI:** हिन्दी (印度语 - 针对南亚高增长建材市场)
*   **ZH:** 中文 (中文母语展示，用于国内买办对账与信任复核)

## 9. 图像清单 (Image Manifest)

| 本地路径 / 线上 URL | 来源 | 模式 | 用途 |
|------------------|--------|------------|-------|
| `public/assets/images/hero-faucet.jpg` | `unsplash:photo-1584622650111-993a426fbf0a` | local | 首页 Hero 主产品展示图 (奢华浴室龙头) |
| `public/assets/images/product-abs-handle.jpg` | `unsplash:photo-1613214149922-f1809c99b414` | local | ABS 龙头手柄产品卡片大图 (现代金属拉丝龙头手柄) |
| `public/assets/images/product-shower-slider.jpg` | `unsplash:photo-1585412727339-54e4bae3bbf9` | local | 花洒滑套及洁具系列卡片大图 (高端花洒淋浴配件) |
| `public/assets/images/product-hardware.jpg` | `unsplash:photo-1552321554-5fefe8c9ef14` | local | 卫浴五金配件卡片大图 (精工五金龙头接口及挂件) |
| `public/assets/images/factory-b2b.jpg` | `unsplash:photo-1504917595217-d4dc5ebe6122` | local | 工厂实力与质检设备背景展示图 (高端制造精密车间) |
| `public/assets/images/flag-en.svg` | Inline SVG | local | 语言切换国旗标志 - 英国/英语 |
| `public/assets/images/flag-ru.svg` | Inline SVG | local | 语言切换国旗标志 - 俄罗斯 |
| `public/assets/images/flag-pt.svg` | Inline SVG | local | 语言切换国旗标志 - 巴西/葡萄牙 |
| `public/assets/images/flag-hi.svg` | Inline SVG | local | 语言切换国旗标志 - 印度 |
| `public/assets/images/flag-zh.svg` | Inline SVG | local | 语言切换国旗标志 - 中国 |
