import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Phone, 
  Mail, 
  Globe, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  Zap, 
  Factory, 
  Menu, 
  X, 
  ChevronRight, 
  MessageSquare, 
  Send, 
  Users,
  Check
} from 'lucide-react';
import './styles.css';

// Multilingual Dictionary
const trans = {
  en: {
    navHome: "Home",
    navProducts: "Products",
    navAbout: "Factory Strength",
    navFAQ: "FAQ",
    navContact: "Contact Us",
    heroBadge: "Certified B2B Exporter to Southeast Asia, South America & Middle East",
    heroTitle: "Premium Sanitary Ware & Faucet Accessories Manufacturer",
    heroLede: "Fujian Xiahua Sanitary Ware Co., Ltd. delivers high-performance ABS faucet handles, adjustable shower sliders, and precision sanitary fittings tailored for global OEM/ODM requirements.",
    btnRFQ: "Request a Quote",
    btnWhatsApp: "Inquiry on WhatsApp",
    statClients: "Global Clients",
    statOutput: "Monthly Output (Pcs)",
    statExperience: "Years Experience",
    statQC: "Salt Spray Test Check",
    advantageTitle: "Our Strategic B2B Advantages",
    advantageLede: "Why leading sanitary brand distributors in Southeast Asia, South America, and Middle East choose Fujian Xiahua.",
    adv1Title: "OEM/ODM Tailored Moldings",
    adv1Desc: "Custom molding and surface finishes (Chrome, Matte Black, Brushed Gold) matching your exact drawings or samples.",
    adv2Title: "ABS Injector Precision",
    adv2Desc: "Our high-durability ABS faucet handles and slider sleeves offer supreme impact resistance and sleek tactile response.",
    adv3Title: "Rigorous 100% Leak Tests",
    adv3Desc: "Every unit undergoes hydraulic pressure tests and acetic acid salt spray checks to ensure flawless high-humidity durability.",
    adv4Title: "24-Hour Sample Dispatch",
    adv4Desc: "Direct in-house mold tooling allows fast prototyping and sample shipment to keep your supply chain running smoothly.",
    catalogTitle: "Core Product Catalog",
    catalogLede: "Explore our export-tested products. Click 'Send Inquiry' for technical spec sheets and wholesale volume pricing.",
    catAll: "All Accessories",
    catHandles: "ABS Faucet Handles",
    catSliders: "Shower Sliders & Sliders Sleeves",
    catHardware: "Bathroom Hardware",
    specModel: "Model",
    specMaterial: "Material",
    specFinish: "Finish",
    specCert: "Compliance",
    btnDetail: "View Specifications",
    factoryTitle: "Our Factory & Quality Control",
    factoryLede: "Operating with advanced injection-molding machines, automated plating lines, and strict water pressure benches in Fujian, China.",
    factParagraph1: "Fujian Xiahua Sanitary Ware Co., Ltd. is based in Nan'an, Fujian, the world-renowned plumbing manufacturing capital. Our facility is equipped with automated injection mold lines dedicated specifically to manufacturing high-grade ABS bathroom parts. This vertical integration guarantees stable tolerances and superior surface luster.",
    factParagraph2: "We specialize in international supply standards, exporting millions of fittings annually to Southeast Asia, South America, and the Middle East. With ISO9001-aligned operations and 100% QC pressure bench trials before packing, we protect sanitary brands from retail consumer complaints.",
    faqTitle: "Frequently Asked Questions (FAQ)",
    faqLede: "Helpful answers to guide your procurement and sourcing process.",
    contactTitle: "Submit B2B Bulk RFQ",
    contactLede: "Our export business manager will reply with a detailed quotation and specification document within 12 hours.",
    formName: "Full Name",
    formEmail: "Business Email",
    formWhatsApp: "WhatsApp/Phone Number",
    formCompany: "Company Name",
    formCategory: "Target Category",
    formMsg: "Procurement Requirements & Volume (e.g. Model, Quantity, Packing)",
    formSubmit: "Send Bulk RFQ",
    formSuccessTitle: "Inquiry Submitted Successfully!",
    formSuccessDesc: "Thank you for contacting Fujian Xiahua. Our export team will contact you via email or WhatsApp within 12 hours.",
    btnClose: "Close",
    footerCopyright: "© 2026 Fujian Xiahua Sanitary Ware Co., Ltd. All rights reserved. B2B Export Independent Site.",
    footerAddress: "Address: Plumbing Manufacturing Zone, Nan'an, Quanzhou, Fujian, China",
    modalRFQTitle: "Inquire About",
    modalBtnSubmit: "Submit Inquiry for this Model",
    specSheet: "Technical Specifications Sheet"
  },
  ru: {
    navHome: "Главная",
    navProducts: "Продукция",
    navAbout: "О Заводе",
    navFAQ: "Вопросы",
    navContact: "Контакты",
    heroBadge: "Сертифицированный экспортер B2B в Юго-Восточную Азию, Южную Америку и на Ближний Восток",
    heroTitle: "Производитель сантехники и аксессуаров для смесителей премиум-класса",
    heroLede: "Fujian Xiahua Sanitary Ware Co., Ltd. поставляет высокоэффективные пластиковые ручки для смесителей из ABS, регулируемые держатели для душа и прецизионную сантехническую арматуру, разработанную для мировых требований OEM/ODM.",
    btnRFQ: "Запросить цену",
    btnWhatsApp: "Запрос в WhatsApp",
    statClients: "Глобальных клиентов",
    statOutput: "Месячный объем (шт.)",
    statExperience: "Лет опыта",
    statQC: "Проверка солевым туманом",
    advantageTitle: "Наши стратегические преимущества B2B",
    advantageLede: "Почему ведущие дистрибьюторы сантехнических брендов в Юго-Восточной Азии, Южной Америке и на Ближнем Востоке выбирают Fujian Xiahua.",
    adv1Title: "OEM/ODM по индивидуальным чертежам",
    adv1Desc: "Изготовление пресс-форм и финишная отделка поверхности (хром, матовый черный, матовое золото) точно по вашим чертежам или образцам.",
    adv2Title: "Высокоточное литье ABS",
    adv2Desc: "Наши прочные ручки для смесителей из ABS и слайдеры для душа обеспечивают превосходную ударопрочность и плавный ход.",
    adv3Title: "Строгие 100% гидравлические испытания",
    adv3Desc: "Каждое изделие проходит гидравлические испытания и проверку на устойчивость к солевому туману для обеспечения безупречной долговечности.",
    adv4Title: "Отправка образцов за 24 часа",
    adv4Desc: "Собственный цех пресс-форм позволяет быстро создавать прототипы и отправлять образцы для бесперебойной работы вашей цепочки поставок.",
    catalogTitle: "Основной каталог продукции",
    catalogLede: "Изучите нашу продукцию, проверенную экспортом. Нажмите 'Запросить спецификации' для получения оптовых цен.",
    catAll: "Все аксессуары",
    catHandles: "Ручки смесителя из ABS",
    catSliders: "Держатели душа на штангу",
    catHardware: "Сантехническая фурнитура",
    specModel: "Модель",
    specMaterial: "Материал",
    specFinish: "Отделка",
    specCert: "Стандарты",
    btnDetail: "Посмотреть спецификации",
    factoryTitle: "Наше производство и контроль качества",
    factoryLede: "Современные термопластавтоматы, автоматические линии гальваники и строгие испытательные стенды в провинции Фуцзянь, Китай.",
    factParagraph1: "Компания Fujian Xiahua Sanitary Ware Co., Ltd. расположена в городе Наньань, провинция Фуцзянь — всемирно известной столице производства сантехники. Наше предприятие оснащено автоматизированными линиями литья под давлением, предназначенными специально для производства высококачественных пластиковых деталей для ванных комнат из ABS.",
    factParagraph2: "Мы специализируемся на международных стандартах поставок, ежегодно экспортируя миллионы фитингов в Юго-Восточную Азию, Южную Америку и на Ближний Восток. Благодаря операциям, соответствующим стандарту ISO9001, и 100% контролю качества перед упаковкой, мы защищаем бренды от жалоб покупателей.",
    faqTitle: "Часто задаваемые вопросы (FAQ)",
    faqLede: "Полезные ответы, которые помогут вам сориентироваться в процессе закупок.",
    contactTitle: "Отправить запрос B2B",
    contactLede: "Наш менеджер по экспорту ответит вам подробным коммерческим предложением в течение 12 часов.",
    formName: "Ваше имя",
    formEmail: "Электронная почта",
    formWhatsApp: "WhatsApp / Телефон",
    formCompany: "Название компании",
    formCategory: "Категория товара",
    formMsg: "Требования к закупкам и объем (модель, количество, упаковка и т.д.)",
    formSubmit: "Отправить запрос",
    formSuccessTitle: "Запрос успешно отправлен!",
    formSuccessDesc: "Спасибо за обращение в Fujian Xiahua. Наша команда свяжется с вами по электронной почте или WhatsApp в течение 12 часов.",
    btnClose: "Закрыть",
    footerCopyright: "© 2026 Fujian Xiahua Sanitary Ware Co., Ltd. Все права защищены. B2B Экспортный сайт.",
    footerAddress: "Адрес: Промышленная зона Наньань, Цюаньчжоу, Фуцзянь, Китай",
    modalRFQTitle: "Запрос по продукту",
    modalBtnSubmit: "Отправить запрос по этой модели",
    specSheet: "Лист технических характеристик"
  },
  pt: {
    navHome: "Início",
    navProducts: "Produtos",
    navAbout: "Nossa Fábrica",
    navFAQ: "FAQ",
    navContact: "Contato",
    heroBadge: "Exportador B2B Certificado para o Sudeste Asiático, América do Sul e Oriente Médio",
    heroTitle: "Fabricante Premium de Acessórios para Torneiras e Metais Sanitários",
    heroLede: "A Fujian Xiahua Sanitary Ware Co., Ltd. fornece volantes em ABS para torneiras de alto desempenho, deslizadores de chuveiro ajustáveis e conexões sanitárias de precisão personalizadas para requisitos globais de OEM/ODM.",
    btnRFQ: "Solicitar Orçamento",
    btnWhatsApp: "Consultar no WhatsApp",
    statClients: "Clientes Globais",
    statOutput: "Produção Mensal (Pçs)",
    statExperience: "Anos de Experiência",
    statQC: "Teste de Névoa Salina",
    advantageTitle: "Nossas Vantagens Estratégicas B2B",
    advantageLede: "Por que os principais distribuidores de marcas de metais sanitários no Sudeste Asiático, América do Sul e Oriente Médio escolhem a Fujian Xiahua.",
    adv1Title: "Moldes Personalizados OEM/ODM",
    adv1Desc: "Moldagem sob medida e acabamentos de superfície (Cromado, Preto Fosco, Ouro Escovado) combinando perfeitamente com seus desenhos ou amostras.",
    adv2Title: "Precisão de Injeção ABS",
    adv2Desc: "Nossos volantes de torneira em ABS e deslizadores de chuveiro oferecem altíssima resistência ao impacto e excelente acabamento tátil.",
    adv3Title: "Rigores de Teste 100% Contra Vazamentos",
    adv3Desc: "Cada unidade passa por testes de pressão hidráulica e testes de névoa salina ácida para garantir durabilidade impecável em ambientes úmidos.",
    adv4Title: "Envio de Amostras em 24 Horas",
    adv4Desc: "Ferramentaria interna própria de moldes permite prototipagem rápida e envio ágil de amostras para manter sua cadeia de suprimentos ativa.",
    catalogTitle: "Catálogo de Produtos Principais",
    catalogLede: "Explore nossos produtos certificados para exportação. Clique em 'Ver Especificações' para folhas técnicas e preços de atacado.",
    catAll: "Todos os Acessórios",
    catHandles: "Volantes de ABS",
    catSliders: "Deslizadores de Chuveiro",
    catHardware: "Ferragens para Banheiro",
    specModel: "Modelo",
    specMaterial: "Material",
    specFinish: "Acabamento",
    specCert: "Conformidade",
    btnDetail: "Ver Especificações",
    factoryTitle: "Nossa Fábrica e Controle de Qualidade",
    factoryLede: "Operando com injetoras de alta precisão, linhas de galvanização automática e rigorosos testes de vazamento em Fujian, China.",
    factParagraph1: "A Fujian Xiahua Sanitary Ware Co., Ltd. está localizada em Nan'an, Fujian, a renomada capital de manufatura de metais sanitários da China. Nossa fábrica possui linhas de injeção automatizadas dedicadas exclusivamente à fabricação de peças de alta qualidade em ABS para banheiro.",
    factParagraph2: "Somos especialistas em padrões internacionais de fornecimento, exportando milhões de peças anualmente para o Sudeste Asiático, América do Sul e Oriente Médio. Com operações alinhadas à ISO9001 e testes rigorosos em bancadas de pressão antes da embalagem, protegemos as marcas contra reclamações de consumidores finais.",
    faqTitle: "Perguntas Frequentes (FAQ)",
    faqLede: "Respostas úteis para orientar o seu processo de compra e importação.",
    contactTitle: "Enviar Solicitação de Orçamento B2B",
    contactLede: "Nosso gerente de negócios internacionais responderá com uma proposta comercial e técnica detalhada em até 12 horas.",
    formName: "Nome Completo",
    formEmail: "E-mail Corporativo",
    formWhatsApp: "WhatsApp / Telefone",
    formCompany: "Nome da Empresa",
    formCategory: "Categoria de Interesse",
    formMsg: "Requisitos de Compra e Volume (Ex: Modelo, Quantidade, Embalagem)",
    formSubmit: "Enviar Cotação B2B",
    formSuccessTitle: "Consulta Enviada com Sucesso!",
    formSuccessDesc: "Obrigado por entrar em contato com a Fujian Xiahua. Nossa equipe de exportação entrará em contato por e-mail ou WhatsApp em até 12 horas.",
    btnClose: "Fechar",
    footerCopyright: "© 2026 Fujian Xiahua Sanitary Ware Co., Ltd. Todos os direitos reservados. Site B2B de Exportação.",
    footerAddress: "Endereço: Zona de Fabricação de Metais Sanitários, Nan'an, Quanzhou, Fujian, China",
    modalRFQTitle: "Consultar Sobre",
    modalBtnSubmit: "Enviar Consulta para este Modelo",
    specSheet: "Ficha de Especificações Técnicas"
  },
  hi: {
    navHome: "होम",
    navProducts: "उत्पाद",
    navAbout: "फैक्टरी ताकत",
    navFAQ: "अक्सर पूछे जाने वाले प्रश्न",
    navContact: "संपर्क करें",
    heroBadge: "दक्षिण पूर्व एशिया, दक्षिण अमेरिका और मध्य पूर्व के लिए प्रमाणित बी2बी निर्यातक",
    heroTitle: "प्रीमियम सेनेटरी वेयर और नल सहायक उपकरण निर्माता",
    heroLede: "फ़ुज़ियान शियाहुआ सेनेटरी वेयर कंपनी लिमिटेड (Fujian Xiahua) वैश्विक OEM/ODM आवश्यकताओं के लिए उच्च-प्रदर्शन वाले एबीएस नल हैंडल, समायोज्य शावर स्लाइडर और सटीक सेनेटरी फिटिंग वितरित करती है।",
    btnRFQ: "कोटेशन के लिए अनुरोध",
    btnWhatsApp: "व्हाट्सएप पर पूछताछ",
    statClients: "वैश्विक ग्राहक",
    statOutput: "मासिक उत्पादन (टुकड़े)",
    statExperience: "वर्षों का अनुभव",
    statQC: "नमक स्प्रे परीक्षण जांच",
    advantageTitle: "हमारे रणनीतिक बी2बी लाभ",
    advantageLede: "क्यों दक्षिण पूर्व एशिया, दक्षिण अमेरिका और मध्य पूर्व में अग्रणी सेनेटरी ब्रांड वितरक फ़ुज़ियान शियाहुआ को चुनते हैं।",
    adv1Title: "OEM/ODM अनुकूलित ढलाई (Molding)",
    adv1Desc: "आपके सटीक चित्र या नमूनों से मेल खाने वाली कस्टम मोल्डिंग और सतह फिनिश (क्रोम, मैट ब्लैक, ब्रश गोल्ड)।",
    adv2Title: "एबीएस इंजेक्टर प्रेसिजन",
    adv2Desc: "हमारे उच्च-स्थायित्व वाले एबीएस नल हैंडल और स्लाइडर आस्तीन सर्वोच्च प्रभाव प्रतिरोध प्रदान करते हैं।",
    adv3Title: "कठोर 100% रिसाव परीक्षण",
    adv3Desc: "निर्दोष स्थायित्व सुनिश्चित करने के लिए प्रत्येक इकाई हाइड्रोलिक दबाव परीक्षण और नमक स्प्रे जांच से गुजरती है।",
    adv4Title: "24 घंटे में नमूना प्रेषण",
    adv4Desc: "प्रत्येक विनिर्माण लॉट के लिए तेज़ नमूना उत्पादन आपके आपूर्ति श्रृंखला को चालू रखता है।",
    catalogTitle: "मुख्य उत्पाद सूची (Catalog)",
    catalogLede: "हमारे निर्यात-परीक्षणित उत्पादों का अन्वेषण करें। थोक मूल्य निर्धारण के लिए उत्पाद पर क्लिक करें।",
    catAll: "सभी सहायक उपकरण",
    catHandles: "एबीएस नल हैंडल",
    catSliders: "शावर स्लाइडर्स",
    catHardware: "बाथरूम हार्डवेयर",
    specModel: "मॉडल",
    specMaterial: "सामग्री",
    specFinish: "फिनिश",
    specCert: "अनुपालन",
    btnDetail: "विनिर्देश देखें",
    factoryTitle: "हमारी फैक्टरी और गुणवत्ता नियंत्रण",
    factoryLede: "फ़ुज़ियान, चीन में उन्नत इंजेक्शन-मोल्डिंग मशीनों और सख्त परीक्षण बेंचों के साथ संचालन।",
    factParagraph1: "फ़ुज़ियान शियाहुआ सेनेटरी वेयर कंपनी लिमिटेड नान'ान, फ़ुज़ियान में स्थित है, जो चीन की नलसाजी निर्माण राजधानी है। हमारी सुविधा स्वचालित इंजेक्शन मोल्ड लाइनों से सुसज्जित है जो विशेष रूप से उच्च श्रेणी के एबीएस बाथरूम भागों के निर्माण के लिए समर्पित है।",
    factParagraph2: "हम दक्षिण पूर्व एशिया, दक्षिण अमेरिका और मध्य पूर्व में सालाना लाखों फिटिंग निर्यात करते हैं। पैकिंग से पहले 100% गुणवत्ता नियंत्रण दबाव परीक्षणों के साथ, हम वैश्विक ब्रांडों को शिकायतों से सुरक्षित रखते हैं।",
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न (FAQ)",
    faqLede: "आपकी खरीद प्रक्रिया में मार्गदर्शन के लिए उपयोगी उत्तर।",
    contactTitle: "बी2बी थोक आरएफक्यू (RFQ) जमा करें",
    contactLede: "हमारा निर्यात प्रबंधक 12 घंटे के भीतर विस्तृत कोटेशन के साथ उत्तर देगा।",
    formName: "पूरा नाम",
    formEmail: "व्यावसायिक ईमेल",
    formWhatsApp: "व्हाट्सएप / फोन नंबर",
    formCompany: "कंपनी का नाम",
    formCategory: "लक्षित श्रेणी",
    formMsg: "खरीद आवश्यकताएं और मात्रा (मॉडल, मात्रा, पैकिंग आदि)",
    formSubmit: "आरएफक्यू जमा करें",
    formSuccessTitle: "पूछताछ सफलतापूर्वक सबमिट की गई!",
    formSuccessDesc: "फ़ुज़ियान शियाहुआ से संपर्क करने के लिए धन्यवाद। हमारी निर्यात टीम 12 घंटे के भीतर आपसे संपर्क करेगी।",
    btnClose: "बंद करें",
    footerCopyright: "© 2026 फ़ुज़ियान शियाहुआ सेनेटरी वेयर कंपनी लिमिटेड। सर्वाधिकार सुरक्षित। बी2बी निर्यात स्वतंत्र साइट।",
    footerAddress: "पता: नलसाजी विनिर्माण क्षेत्र, नान'ान, क्वानझोउ, फ़ुज़ियान, चीन",
    modalRFQTitle: "के बारे में पूछताछ",
    modalBtnSubmit: "इस मॉडल के लिए पूछताछ भेजें",
    specSheet: "तकनीकी विनिर्देश शीट"
  },
  zh: {
    navHome: "首页",
    navProducts: "核心产品",
    navAbout: "工厂实力",
    navFAQ: "采销答疑",
    navContact: "联系我们",
    heroBadge: "东南亚、南美、中东地区卫浴品牌及工程商首选 B2B 出口商",
    heroTitle: "专业卫浴配件与龙头五金源头制造厂",
    heroLede: "福建厦华卫浴有限公司致力于研发和生产高强度 ABS 龙头手柄、多功能花洒滑套、高端洁具升降配件等精工卫浴五金。符合国际多国饮用水及卫浴合规认证，专为全球 OEM/ODM 采购定制服务。",
    btnRFQ: "提交大宗询盘",
    btnWhatsApp: "WhatsApp 即时沟通",
    statClients: "出口合作客户",
    statOutput: "月均注塑产能 (套)",
    statExperience: "卫浴精工制造经验 (年)",
    statQC: "乙酸盐雾测试通过率",
    advantageTitle: "三大 B2B 核心制造优势",
    advantageLede: "为什么东南亚、南美、中东的主流卫浴品牌分销商选择与福建厦华长期合作？",
    adv1Title: "OEM/ODM 专业开模定制",
    adv1Desc: "配备先进的模具研发中心。支持根据图纸、样品进行高精度的注塑及五金模具开发，可定制铬色、哑光黑、拉丝金等表面。",
    adv2Title: "高品质 ABS 精密注塑",
    adv2Desc: "精选高抗冲击的优质原材料，手柄及花洒滑套阻尼感极佳，表面光泽度超群，历久弥新。",
    adv3Title: "100% 严苛出厂防漏检测",
    adv3Desc: "拥有独立水压及气密性综合测试台。所有产品100%经过压力测试及表面高盐雾环境耐腐蚀试验，确保无漏水 complaint。",
    adv4Title: "24 小时极速出样",
    adv4Desc: "一站式生产，从模具调整、打样到出样最快可在24小时内完成，大幅缩短您的采购周期和项目工期。",
    catalogTitle: "出口核心产品大类",
    catalogLede: "已通过国际市场验证的热销配件。点击产品卡片即可查看技术规格表、合规认证及阶梯批发报价。",
    catAll: "全部卫浴配件",
    catHandles: "ABS 龙头手柄",
    catSliders: "花洒滑套及洁具升降件",
    catHardware: "精工卫浴五金",
    specModel: "产品型号",
    specMaterial: "核心材质",
    specFinish: "表面工艺",
    specCert: "出口合规",
    btnDetail: "查看技术规格",
    factoryTitle: "现代化厂房与质量控制体系",
    factoryLede: "地处中国卫浴制造之都福建，拥有先进的注塑车间、全自动电镀流水线及高精密检测设备。",
    factParagraph1: "福建厦华卫浴有限公司坐落于中国三大水暖卫浴产业基地之一的福建省南安市。我们拥有面积逾3000平方米的精密制造车间，引进了全自动伺服注塑机以及高精密模具加工设备。垂直化的生产管理，确保了零配件在尺寸公差和电镀结合力上的高水准表现。",
    factParagraph2: "针对国际采购需求的多样性，我们对东南亚、南美、中东等不同市场的卫浴阀芯及连接管件标准拥有丰富的开发经验。工厂严格遵循 ISO9001 质量管理体系运行，成品在包装前一律经过100%全检，为广大卫浴整装品牌及贴牌商提供坚实的供应链保障。",
    faqTitle: "大宗采购常见问答 (FAQ)",
    faqLede: "为您解答起订量、定制流程、样板寄送及国际物流等关键问题。",
    contactTitle: "提交 B2B 采购意向书 (RFQ)",
    contactLede: "我们专业的海外区域大客户经理将在 12 小时内为您提供详细的报价单与全套产品图册、技术文件。",
    formName: "采购负责人姓名",
    formEmail: "企业邮箱",
    formWhatsApp: "WhatsApp / 常用电话",
    formCompany: "采购公司名称",
    formCategory: "意向采购品类",
    formMsg: "详细采购规格及采购量描述（如型号、所需定制、包装及目的港要求）",
    formSubmit: "提交大宗采购询盘",
    formSuccessTitle: "询盘提交成功！",
    formSuccessDesc: "非常感谢您对福建厦华卫浴的关注。我们的出口业务团队正着手处理您的需求，将在 12 小时内与您取得联系。",
    btnClose: "关闭",
    footerCopyright: "© 2026 福建厦华卫浴有限公司. 保留所有权利。 B2B 出口独立站专属外贸展示通道。",
    footerAddress: "地址: 中国·福建·泉州市南安市水暖工业制造园",
    modalRFQTitle: "针对此型号产品发起询盘",
    modalBtnSubmit: "提交此型号采购申请",
    specSheet: "技术数据规格表"
  }
};

// Mock Product Database
const products = [
  {
    id: 1,
    category: "handles",
    nameMap: {
      en: "Multilayer Chrome ABS Faucet Handle",
      ru: "Многослойная хромированная ручка смесителя из ABS",
      pt: "Volante de ABS Cromado para Torneira",
      hi: "मल्टीलेयर क्रोम एबीएस नल संभाल",
      zh: "多层电镀高光 ABS 龙头十字/单手柄"
    },
    model: "XH-ABS-101",
    materialMap: { en: "High-grade Virgin ABS", ru: "Первичный высокопрочный ABS", pt: "ABS Virgem de Alto Impacto", hi: "उच्च ग्रेड वर्जिन एबीएस", zh: "高抗冲击进口全新 ABS 原料" },
    finishMap: { en: "Multi-layer Electroplated Chrome", ru: "Многослойный глянцевый хром", pt: "Cromado Multicamada Premium", hi: "इलेक्ट्रोप्लेटेड क्रोम", zh: "高强酸性多层电镀铬 (防腐防指纹)" },
    certMap: { en: "Compliant with BS EN 200 / NSF 61 Standards", ru: "Соответствует стандартам BS EN 200", pt: "Conformidade Norma BS EN 200 / AS/NZS", hi: "बीएस एन 200 अनुपालन", zh: "符合 BS EN 200 / NSF 61 饮用水安全标准" },
    descMap: {
      en: "Specially designed for professional plumbing manufacturers. Resists soap scum, corrosion, and standard salt spray tests for over 48 hours. Superior tactile friction and ergonomics.",
      ru: "Разработан специально для профессиональных производителей сантехники. Устойчив к мыльному налету и коррозии при испытании в солевом тумане более 48 часов.",
      pt: "Desenvolvido especificamente para fabricantes profissionais de torneiras. Suporta testes de névoa salina por mais de 48h sem alteração no brilho.",
      hi: "व्यावसायिक नलसाजी निर्माताओं के लिए विशेष रूप से डिज़ाइन किया गया। जंग प्रतिरोधी और टिकाऊ संरचना।",
      zh: "专为高端整装龙头企业制造设计。多层加厚电镀层，可通过48小时醋酸盐雾测试，抗酸性洗涤剂腐蚀，转动阻尼感平稳均匀。"
    },
    img: "/assets/images/product-abs-handle.jpg"
  },
  {
    id: 2,
    category: "sliders",
    nameMap: {
      en: "Adjustable ABS Shower Rail Slide Sleeve",
      ru: "Регулируемый держатель душевой лейки на штангу",
      pt: "Suporte Deslizante de Chuveiro Ajustável em ABS",
      hi: "समायोज्य एबीएस शावर रेल स्लाइड आस्तीन",
      zh: "高顺滑度加厚可调式 ABS 花洒滑套/升降架配件"
    },
    model: "XH-SHSL-202",
    materialMap: { en: "Reinforced ABS + Friction Pad", ru: "Армированный ABS с силиконовой прокладкой", pt: "ABS Reforçado + Pastilha de Fricção", hi: "प्रबलित एबीएस + घर्षण पैड", zh: "增强型韧性 ABS + 耐磨防滑硅胶垫" },
    finishMap: { en: "Mirror Polish Chrome / Pearl Silver", ru: "Зеркальный хром / матовое серебро", pt: "Cromado Brilhante / Prata Pérola", hi: "दर्पण पॉलिश क्रोम", zh: "高亮镜面抛光电镀 / 哑光珍珠银" },
    certMap: { en: "SGS Mechanical Wear Test Certified", ru: "Сертификат износостойкости SGS", pt: "Certificado de Desgaste Mecânico SGS", hi: "एसजीएस पहनने के परीक्षण प्रमाणित", zh: "通过 SGS 10万次往复机械耐磨性测试" },
    descMap: {
      en: "Allows easy slide rail adjustment. Fits 22mm/25mm standard shower rods. Dynamic friction joints prevent handheld shower head sagging or wobbling.",
      ru: "Обеспечивает легкую регулировку лейки на душевой стойке. Подходит для стандартных штанг 22 мм и 25 мм. Плотная фиксация предотвращает люфт.",
      pt: "Permite fácil ajuste de altura da ducha manual. Compatível com barras padrão de 22mm e 25mm. Fixação ultra-firme.",
      hi: "आसान स्लाइड रेल समायोजन की अनुमति देता है। 22 मिमी / 25 मिमी मानक शावर छड़ के लिए उपयुक्त।",
      zh: "适配全球主流 22mm / 25mm 管径升降杆。内嵌双向自锁摩擦片，重载花洒下不滑落，滑行时静音阻尼滑润，不易磨损生锈。"
    },
    img: "/assets/images/product-shower-slider.jpg"
  },
  {
    id: 3,
    category: "hardware",
    nameMap: {
      en: "Precision Brass Water Diverter Core",
      ru: "Прецизионный латунный дивертор-переключатель для воды",
      pt: "Cartucho Desviador de Água de Latão de Precisão",
      hi: "सटीक पीतल जल मोड़ कोर",
      zh: "高寿命 H59 铸造黄铜重载混水阀芯/分水器"
    },
    model: "XH-BRFC-303",
    materialMap: { en: "Dezincification Resistant Brass (DZR)", ru: "Бессвинцовая латунь (DZR)", pt: "Latão Resistente à Dezinfecção (DZR)", hi: "ठोस सीसा रहित पीतल", zh: "特种高精度 H59 重载防脱锌黄铜" },
    finishMap: { en: "Precision Machined Matte Brass", ru: "Точная токарная обработка без покрытия", pt: "Usinagem de Precisão de Latão Natural", hi: "सटीक मशीनीकृत पीतल", zh: "精密车床加工与防氧化原色钝化" },
    certMap: { en: "EN 817 / WRAS Water Safety Certified", ru: "Сертификация WRAS / EN 817 для питьевой воды", pt: "Certificado Sanitário WRAS / EN 817", hi: "डब्ल्यूआरएएस जल सुरक्षा प्रमाणित", zh: "拥有英国 WRAS 及欧盟 EN 817 涉水材料卫生合规证书" },
    descMap: {
      en: "Equipped with custom premium ceramic discs. Tested for over 500,000 cycles with zero micro-cracks or water dripping. Ideal for medium to high-end bathroom faucets.",
      ru: "Оснащен высококачественными керамическими дисками. Протестирован на более чем 500 000 циклов без образования микротрещин или протечек.",
      pt: "Equipado com discos cerâmicos importados de altíssima vedação. Testado para mais de 500.000 ciclos sem vazamentos.",
      hi: "कस्टम प्रीमियम सिरेमिक डिस्क से लैस। 500,000 से अधिक चक्रों के लिए परीक्षण किया गया।",
      zh: "阀芯内含硬质氧化铝陶瓷动静片，精研面平整度小于0.1微米。经国家级检测中心检测，通过50万次无故障开关寿命，是中高端龙头贴牌的核心部件。"
    },
    img: "/assets/images/product-hardware.jpg"
  },
  {
    id: 4,
    category: "hardware",
    nameMap: {
      en: "Solid Brass Bath & Basin Tap Body",
      ru: "Латунный корпус смесителя для раковины и ванны",
      pt: "Corpo de Torneira Monocomando de Latão Maciço",
      hi: "ठोस पीतल स्नान और बेसिन नल शरीर",
      zh: "出口级一体重力铸造黄铜冷热龙头阀体"
    },
    model: "XH-FC-03",
    materialMap: { en: "Heavy Cast Brass (Low Lead)", ru: "Тяжелая литая латунь с низким содержанием свинца", pt: "Latão Maciço de Baixo Chumbo", hi: "भारी कास्ट पीतल", zh: "一体重力浇铸精铜 (低铅环保环保材质)" },
    finishMap: { en: "Mirror Chrome Plating", ru: "Зеркальный хром высокой плотности", pt: "Cromado Brilhante Espelhado", hi: "मिरर क्रोम चढ़ाना", zh: "镜面抛光 + 多层酸铜镍铬联合电镀 (平整透亮)" },
    certMap: { en: "SGS Heavy Metal Analysis Approved", ru: "Сертификат SGS на отсутствие тяжелых металлов", pt: "Aprovado em Análise de Metais Pesados SGS", hi: "एसजीएस भारी धातु विश्लेषण स्वीकृत", zh: "通过 SGS 重金属无有害析出健康检测" },
    descMap: {
      en: "Heavy gravity-casted solid brass body ensures zero air bubbles, prevent rust burst or bursting under cold winter pressure. Standard 1/2'' connection threads.",
      ru: "Тяжелый латунный корпус, отлитый под давлением, гарантирует отсутствие скрытых пустот и предотвращает разрыв от давления воды зимой.",
      pt: "Corpo robusto fundido por gravidade. Evita bolhas de ar e garante alta resistência contra trincas mesmo sob alta pressão.",
      hi: "भारी गुरुत्वाकर्षण-कास्ट ठोस पीतल शरीर शून्य हवा के बुलबुले सुनिश्चित करता है।",
      zh: "选用精铜重力整体浇铸，壁厚极其均匀（大于2.5mm），内腔无沙眼与裂纹。耐高压（瞬间承压达2.5MPa不破裂），严寒地区冬季防冻裂表现优异。"
    },
    img: "/assets/images/hero-faucet.jpg"
  }
];

// Mock FAQ
const faqs = [
  {
    qMap: {
      en: "What is your minimum order quantity (MOQ) for custom parts?",
      ru: "Каков ваш минимальный объем заказа (MOQ) для деталей на заказ?",
      pt: "Qual é a quantidade mínima de pedido (MOQ) para peças personalizadas?",
      hi: "कस्टम भागों के लिए आपके न्यूनतम आदेश मात्रा (MOQ) क्या है?",
      zh: "定制配件大宗采办的起订量 (MOQ) 是多少？"
    },
    aMap: {
      en: "For standard items like ABS handles and shower sliders, our MOQ is 1,000 pieces. For custom tooling (OEM/ODM projects), the MOQ is determined by the size and complexity of the molds. We support small-volume trial orders for your first shipping run.",
      ru: "Для стандартных изделий, таких как ручки из ABS и слайдеры, наш MOQ составляет 1000 шт. Для OEM/ODM проектов MOQ зависит от сложности пресс-форм. Мы поддерживаем пробные заказы небольшого объема.",
      pt: "Para itens padrão, o MOQ é de 1.000 peças. Para projetos OEM/ODM, o MOQ é determinado pela complexidade do molde. Oferecemos suporte para pedidos de teste de menor volume em sua primeira importação.",
      hi: "एबीएस हैंडल और शावर स्लाइडर जैसे मानक सामानों के लिए हमारा MOQ 1,000 टुकड़े है। हम परीक्षण आदेशों का भी समर्थन करते हैं।",
      zh: "常规款式产品如 ABS 电镀手柄、花洒滑套等起订量通常为1000只；若涉及全新模具开发的定制项目 (OEM/ODM)，起订量需视模具复杂度另议。首次合作，我们支持小批量试单以协助完成首期测试。"
    }
  },
  {
    qMap: {
      en: "Do you supply samples, and who pays for sample logistics?",
      ru: "Предоставляете ли вы образцы и кто оплачивает их доставку?",
      pt: "Vocês fornecem amostras e quem paga pelo frete do envio?",
      hi: "क्या आप नमूने प्रदान करते हैं, और रसद के लिए कौन भुगतान करता है?",
      zh: "是否支持寄样？样品费和快递费用如何计算？"
    },
    aMap: {
      en: "Yes, we provide free samples for 1-2 standard models. The logistics/express shipping cost is paid by the buyer via DHL, FedEx, or TNT. If you move forward with a container bulk order, we will credit the sample shipping fees back to your deposit invoice.",
      ru: "Да, мы предоставляем бесплатные образцы для 1-2 стандартных моделей. Стоимость экспресс-доставки оплачивается покупателем. При размещении контейнерного заказа мы вернем стоимость доставки образцов.",
      pt: "Sim, fornecemos amostras grátis para 1 ou 2 modelos padrão. O custo de envio é pago pelo comprador. Caso feche o lote de container cheio, reembolsaremos o frete das amostras em sua fatura comercial.",
      hi: "हाँ, हम निःशुल्क नमूने प्रदान करते हैं। कूरियर की लागत खरीदार द्वारा वहन की जाती है।",
      zh: "支持。针对常规型号，我们可免费提供1-2款样品。样品航空快递费（可通过 DHL/FedEx/TNT 账号到付）由买家承担。大货正式确认并支付定金后，我们在首笔货款中将样品运费全额返还扣减。"
    }
  },
  {
    qMap: {
      en: "Can you customized logos and packing with our brand guidelines?",
      ru: "Можете ли вы нанести наш логотип и брендировать упаковку?",
      pt: "É possível personalizar o logotipo e a embalagem com a nossa marca?",
      hi: "क्या आप हमारे ब्रांड के साथ लोगो और पैकिंग को अनुकूलित कर सकते हैं?",
      zh: "是否支持在产品上激光雕刻我们的品牌 Logo，以及使用专属包装？"
    },
    aMap: {
      en: "Absolutely. We provide high-precision laser marking for logos on ABS handles, brass bodies, and metal components. Custom packing designs (boxes, blister cards, barcode cartons) are fully supported. Just send us your Adobe Illustrator artwork.",
      ru: "Конечно. Мы наносим высокоточную лазерную гравировку логотипов на ручки и латунные корпуса. Мы также полностью брендируем упаковку (коробки, блистеры, этикетки) по вашим исходникам.",
      pt: "Com certeza. Realizamos gravação a laser de alta precisão do seu logo em peças de ABS e metal. Oferecemos suporte completo a embalagens personalizadas (caixas litografadas, blisters e cartões de código de barras).",
      hi: "बिल्कुल। हम लोगो की उच्च-सटीक लेजर मार्किंग और कस्टम पैकिंग प्रदान करते हैं।",
      zh: "完全支持。我们拥有高精度激光打标设备，可根据您的 AI/CDR 源文件，在手柄和阀体指定位置进行 Logo 的非接触式雕刻。同时支持您定制的外箱、彩盒、吊卡及中性英文条码包装。"
    }
  }
];

function App() {
  const [lang, setLang] = useState('en');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [rfqName, setRfqName] = useState('');
  const [rfqEmail, setRfqEmail] = useState('');
  const [rfqWhatsApp, setRfqWhatsApp] = useState('');
  const [rfqCompany, setRfqCompany] = useState('');
  const [rfqCategory, setRfqCategory] = useState('ABS Handles');
  const [rfqMsg, setRfqMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = trans[lang] || trans.en;

  // Filter products
  const filteredProducts = categoryFilter === 'all' 
    ? products 
    : products.filter(p => p.category === categoryFilter);

  // Handle Main RFQ Form Submit
  const handleRfqSubmit = (e) => {
    e.preventDefault();
    if (!rfqName || !rfqEmail) return;

    // Simulate backend logging
    console.log("=== B2B RFQ SUBMISSION ===");
    console.log(`Name: ${rfqName}`);
    console.log(`Email: ${rfqEmail}`);
    console.log(`WhatsApp: ${rfqWhatsApp}`);
    console.log(`Company: ${rfqCompany}`);
    console.log(`Category: ${rfqCategory}`);
    console.log(`Message: ${rfqMsg}`);
    console.log(`Submitting to: 375039137@qq.com`);
    console.log("==========================");

    setIsSubmitted(true);
  };

  // Handle Modal RFQ Form Submit
  const handleModalRfqSubmit = (productModel) => {
    console.log(`=== SPECIAL MODAL RFQ SUBMITTED FOR MODEL: ${productModel} ===`);
    console.log(`Name: ${rfqName || "Prospect Buyer"}`);
    console.log(`Email: ${rfqEmail || "Pending"}`);
    console.log(`Sending to target email: 375039137@qq.com`);
    
    setIsSubmitted(true);
    setSelectedProduct(null);
  };

  // Quick WhatsApp Pre-filled message generator
  const getWhatsAppLink = (text) => {
    const defaultText = text || "Hello, I am interested in Fujian Xiahua Faucets and Bathroom Accessories.";
    return `https://wa.me/8618965758892?text=${encodeURIComponent(defaultText)}`;
  };

  const flags = {
    en: "🇬🇧",
    ru: "🇷🇺",
    pt: "🇧🇷",
    hi: "🇮🇳",
    zh: "🇨🇳"
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-blue-200">
      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm" data-component="navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-800 text-white p-2.5 rounded-lg flex items-center justify-center">
              <Factory size={22} className="stroke-[2.5]" />
            </div>
            <div>
              <span className="font-extrabold text-lg text-slate-900 tracking-tight block leading-none">XIAHUA SANITARY</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1 block">Fujian Faucet Expert</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-semibold text-slate-700 hover:text-blue-800 transition-colors">{t.navHome}</a>
            <a href="#products" className="text-sm font-semibold text-slate-700 hover:text-blue-800 transition-colors">{t.navProducts}</a>
            <a href="#factory" className="text-sm font-semibold text-slate-700 hover:text-blue-800 transition-colors">{t.navAbout}</a>
            <a href="#faq" className="text-sm font-semibold text-slate-700 hover:text-blue-800 transition-colors">{t.navFAQ}</a>
            <a href="#contact" className="text-sm font-semibold text-slate-700 hover:text-blue-800 transition-colors">{t.navContact}</a>
          </nav>

          {/* Language Selector & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Lang Dropdown */}
            <div className="relative flex items-center gap-1.5 bg-slate-100 p-2 rounded-lg border border-slate-200">
              <Globe size={16} className="text-slate-500" />
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value)}
                className="bg-transparent text-sm font-bold text-slate-700 cursor-pointer focus:outline-none pr-1.5"
              >
                <option value="en">English {flags.en}</option>
                <option value="ru">Русский {flags.ru}</option>
                <option value="pt">Português {flags.pt}</option>
                <option value="hi">हिन्दी {flags.hi}</option>
                <option value="zh">中文 {flags.zh}</option>
              </select>
            </div>

            {/* WhatsApp Direct */}
            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4.5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm transition-all"
            >
              <Phone size={16} className="fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburguer */}
          <div className="flex md:hidden items-center gap-3">
            {/* Lang Selector on Mobile */}
            <div className="flex items-center bg-slate-100 p-1.5 rounded-lg border border-slate-200">
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value)}
                className="bg-transparent text-sm font-bold text-slate-700 cursor-pointer focus:outline-none"
              >
                <option value="en">EN</option>
                <option value="ru">RU</option>
                <option value="pt">PT</option>
                <option value="hi">HI</option>
                <option value="zh">ZH</option>
              </select>
            </div>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>

        {/* Mobile Flyout Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white py-4 px-6 space-y-4 animate-fade-in shadow-inner">
            <nav className="flex flex-col gap-3">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-700">{t.navHome}</a>
              <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-700">{t.navProducts}</a>
              <a href="#factory" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-700">{t.navAbout}</a>
              <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-700">{t.navFAQ}</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-700">{t.navContact}</a>
            </nav>
            <div className="pt-2">
              <a 
                href={getWhatsAppLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone size={18} />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 lg:py-28 overflow-hidden" data-component="hero-section">
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        {/* Soft Radial Ambient Lights */}
        <div className="absolute top-12 left-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-12 right-12 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-template-columns lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide text-blue-300">
                <ShieldCheck size={14} className="stroke-[2.5]" />
                <span>{t.heroBadge}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.08] text-white">
                {t.heroTitle}
              </h1>
              <p className="text-slate-300 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl">
                {t.heroLede}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl font-extrabold text-base flex items-center gap-2 shadow-lg shadow-blue-900/30 transition-all transform hover:-translate-y-0.5"
                >
                  <span>{t.btnRFQ}</span>
                  <ArrowRight size={18} />
                </a>
                <a 
                  href={getWhatsAppLink()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-7 py-4 rounded-xl font-extrabold text-base flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageSquare size={18} className="text-green-400 fill-green-400/20" />
                  <span>{t.btnWhatsApp}</span>
                </a>
              </div>

              {/* B2B Mini Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800">
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white">120+</span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.statClients}</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white">800K+</span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.statOutput}</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white">15+</span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.statExperience}</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white">100%</span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.statQC}</span>
                </div>
              </div>

            </div>

            {/* Right Hero Image Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[420px] lg:max-w-none rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 p-3">
                <img 
                  src="/assets/images/hero-faucet.jpg" 
                  alt="Premium Chrome Faucet" 
                  className="w-full h-[400px] object-cover rounded-2xl grayscale-[15%] brightness-95"
                />
                <div className="absolute inset-x-3 bottom-3 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent p-6 rounded-2xl flex flex-col justify-end text-left">
                  <span className="text-xs font-extrabold text-blue-400 uppercase tracking-widest">{t.specModel}: XH-FC-03</span>
                  <h3 className="text-lg font-bold text-white mt-1">Premium Gravity Cast Solid Brass Core</h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE ADVANTAGES */}
      <section className="py-20 bg-white" data-component="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.advantageTitle}
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              {t.advantageLede}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Advantage 1 */}
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl text-left space-y-4 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
                <Award size={24} className="stroke-[2]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">{t.adv1Title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{t.adv1Desc}</p>
            </div>

            {/* Advantage 2 */}
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl text-left space-y-4 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
                <Zap size={24} className="stroke-[2]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">{t.adv2Title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{t.adv2Desc}</p>
            </div>

            {/* Advantage 3 */}
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl text-left space-y-4 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
                <ShieldCheck size={24} className="stroke-[2]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">{t.adv3Title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{t.adv3Desc}</p>
            </div>

            {/* Advantage 4 */}
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl text-left space-y-4 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
                <Users size={24} className="stroke-[2]" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">{t.adv4Title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{t.adv4Desc}</p>
            </div>
          </div>

        </div>
      </section>

      {/* PRODUCT CATALOG SECTION */}
      <section id="products" className="py-20 bg-slate-50 border-t border-slate-200" data-component="product-catalog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.catalogTitle}
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              {t.catalogLede}
            </p>
          </div>

          {/* Filtering tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              ['all', t.catAll],
              ['handles', t.catHandles],
              ['sliders', t.catSliders],
              ['hardware', t.catHardware]
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setCategoryFilter(key)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold border transition-all ${
                  categoryFilter === key 
                    ? 'bg-blue-800 border-blue-800 text-white shadow-md' 
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((p) => (
              <article 
                key={p.id} 
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                data-component="product-card"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-[4/3] bg-slate-100 border-b border-slate-100 overflow-hidden cursor-pointer" onClick={() => setSelectedProduct(p)}>
                    <img 
                      src={p.img} 
                      alt={p.nameMap[lang]} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur text-white px-2.5 py-1 rounded-md text-[11px] font-black tracking-widest uppercase">
                      {p.model}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-4">
                    <h3 className="font-extrabold text-slate-900 text-base leading-snug line-clamp-2 min-h-[44px]">
                      {p.nameMap[lang]}
                    </h3>
                    
                    {/* Tiny Specs */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-left">
                      <div className="grid grid-cols-12 gap-1">
                        <span className="col-span-4 font-bold text-slate-400">{t.specMaterial}:</span>
                        <span className="col-span-8 font-semibold text-slate-700 truncate">{p.materialMap[lang]}</span>
                      </div>
                      <div className="grid grid-cols-12 gap-1">
                        <span className="col-span-4 font-bold text-slate-400">{t.specFinish}:</span>
                        <span className="col-span-8 font-semibold text-slate-700 truncate">{p.finishMap[lang]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button 
                    onClick={() => {
                      setSelectedProduct(p);
                      setRfqMsg(`RFQ for model: ${p.model}. Please send us quotation and technical specsheet.`);
                    }}
                    className="w-full bg-slate-900 hover:bg-blue-800 text-white py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>{t.btnDetail}</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* FACTORY AND QC SECTION */}
      <section id="factory" className="py-20 bg-white border-t border-slate-200" data-component="factory-showroom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.factoryTitle}
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              {t.factoryLede}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Image grid */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 p-3 bg-slate-50">
              <img 
                src="/assets/images/factory-b2b.jpg" 
                alt="Production Workshop" 
                className="w-full h-[400px] object-cover rounded-2xl"
              />
              <div className="absolute top-6 left-6 bg-blue-800 text-white py-1.5 px-3 rounded-lg text-xs font-bold tracking-widest uppercase">
                Fujian Injection Plant
              </div>
            </div>

            {/* Right Text */}
            <div className="space-y-6 text-left">
              <div className="space-y-4">
                <p className="text-slate-700 text-base font-medium leading-relaxed">
                  {t.factParagraph1}
                </p>
                <p className="text-slate-700 text-base font-medium leading-relaxed">
                  {t.factParagraph2}
                </p>
              </div>

              {/* Manufacturing Certs badges */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2.5 text-sm font-bold text-slate-800">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                  <span>ISO 9001:2015 Manufacturing Quality Certified</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-bold text-slate-800">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                  <span>BS EN 200 Standard Hydraulics Bench Tested</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-bold text-slate-800">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                  <span>Heavy Metal Leaching Analysis (SGS Standard) Compliant</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* RFQ CONTACT FORM SECTION */}
      <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200" data-component="contact-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.contactTitle}
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              {t.contactLede}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-md">
            
            {isSubmitted ? (
              <div className="text-center py-8 space-y-6 animate-fade-in">
                <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={36} className="stroke-[2.5]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-slate-900">{t.formSuccessTitle}</h3>
                  <p className="text-slate-600 text-base max-w-lg mx-auto leading-relaxed">
                    {t.formSuccessDesc}
                  </p>
                </div>
                <div className="pt-4">
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setRfqMsg('');
                    }}
                    className="bg-blue-800 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-900 transition-colors"
                  >
                    Send Another RFQ
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRfqSubmit} className="grid sm:grid-cols-2 gap-6 text-left">
                {/* Full name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">{t.formName} *</label>
                  <input 
                    type="text" 
                    required
                    value={rfqName}
                    onChange={(e) => setRfqName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">{t.formEmail} *</label>
                  <input 
                    type="email" 
                    required
                    value={rfqEmail}
                    onChange={(e) => setRfqEmail(e.target.value)}
                    placeholder="john@yourcompany.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* WhatsApp */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">{t.formWhatsApp}</label>
                  <input 
                    type="text" 
                    value={rfqWhatsApp}
                    onChange={(e) => setRfqWhatsApp(e.target.value)}
                    placeholder="e.g. +1 234 567 890"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Company name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">{t.formCompany}</label>
                  <input 
                    type="text" 
                    value={rfqCompany}
                    onChange={(e) => setRfqCompany(e.target.value)}
                    placeholder="Global Plumbing Co."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Category select */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">{t.formCategory}</label>
                  <select 
                    value={rfqCategory} 
                    onChange={(e) => setRfqCategory(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <option value="ABS Handles">{t.catHandles}</option>
                    <option value="Shower Sliders">{t.catSliders}</option>
                    <option value="Bathroom Hardware">{t.catHardware}</option>
                  </select>
                </div>

                {/* Message */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">{t.formMsg}</label>
                  <textarea 
                    rows={4}
                    value={rfqMsg}
                    onChange={(e) => setRfqMsg(e.target.value)}
                    placeholder="Tell us what you are looking for (e.g. Model XH-ABS-101, 5000pcs, with chrome finish and custom brand logo...)"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Submit button */}
                <div className="sm:col-span-2 pt-2">
                  <button 
                    type="submit"
                    className="w-full bg-blue-800 hover:bg-blue-900 text-white py-4 rounded-xl font-extrabold text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-800/20 transition-all"
                  >
                    <Send size={18} />
                    <span>{t.formSubmit}</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 bg-white border-t border-slate-200" data-component="faq-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.faqTitle}
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              {t.faqLede}
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-2xl text-left space-y-3">
                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg flex items-start gap-2.5">
                  <span className="text-blue-700 select-none">Q:</span>
                  <span>{faq.qMap[lang]}</span>
                </h3>
                <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed pl-6">
                  {faq.aMap[lang]}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800" data-component="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-800">
            
            {/* Left side */}
            <div className="md:col-span-8 space-y-3 text-left">
              <h3 className="text-xl font-extrabold tracking-tight">FUJIAN XIAHUA SANITARY WARE CO., LTD.</h3>
              <p className="text-slate-400 text-sm font-semibold max-w-2xl">
                {t.footerAddress}
              </p>
            </div>

            {/* Right side contact methods */}
            <div className="md:col-span-4 space-y-2.5 text-left md:text-right">
              <div className="flex items-center md:justify-end gap-2 text-sm text-slate-300 font-bold">
                <Mail size={16} className="text-blue-400 shrink-0" />
                <a href="mailto:375039137@qq.com" className="hover:text-blue-400 transition-colors">375039137@qq.com</a>
              </div>
              <div className="flex items-center md:justify-end gap-2 text-sm text-slate-300 font-bold">
                <Phone size={16} className="text-green-400 shrink-0" />
                <span>+86 18965758892 (WhatsApp / Mobile)</span>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-slate-500">
            <span>{t.footerCopyright}</span>
            <div className="flex gap-4">
              <a href="#" className="hover:underline hover:text-slate-400">Privacy Policy</a>
              <a href="#" className="hover:underline hover:text-slate-400">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>

      {/* PRODUCT SPECIFICATION MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
          <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col justify-between max-h-[90vh]">
            
            {/* Header bar */}
            <div className="bg-slate-50 px-6 py-4.5 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 text-blue-800 p-1.5 rounded-lg">
                  <ShieldCheck size={18} />
                </div>
                <span className="font-extrabold text-slate-900 text-sm uppercase tracking-wider">{t.specSheet}</span>
              </div>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left">
              
              <div className="grid sm:grid-cols-2 gap-8 items-start">
                {/* Left product pic */}
                <div className="bg-slate-50 rounded-2xl p-2 border border-slate-200">
                  <img 
                    src={selectedProduct.img} 
                    alt={selectedProduct.nameMap[lang]} 
                    className="w-full h-56 object-cover rounded-xl"
                  />
                </div>

                {/* Right quick specs table */}
                <div className="space-y-4">
                  <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                    {selectedProduct.nameMap[lang]}
                  </h3>
                  
                  {/* Detailed Spec list */}
                  <div className="divide-y divide-slate-100 text-sm">
                    <div className="py-2.5 grid grid-cols-3 gap-2">
                      <span className="font-bold text-slate-400">{t.specModel}:</span>
                      <span className="col-span-2 font-bold text-slate-800">{selectedProduct.model}</span>
                    </div>
                    <div className="py-2.5 grid grid-cols-3 gap-2">
                      <span className="font-bold text-slate-400">{t.specMaterial}:</span>
                      <span className="col-span-2 font-semibold text-slate-700">{selectedProduct.materialMap[lang]}</span>
                    </div>
                    <div className="py-2.5 grid grid-cols-3 gap-2">
                      <span className="font-bold text-slate-400">{t.specFinish}:</span>
                      <span className="col-span-2 font-semibold text-slate-700">{selectedProduct.finishMap[lang]}</span>
                    </div>
                    <div className="py-2.5 grid grid-cols-3 gap-2">
                      <span className="font-bold text-slate-400">{t.specCert}:</span>
                      <span className="col-span-2 font-semibold text-slate-700">{selectedProduct.certMap[lang]}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Extended Description */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Product Description</h4>
                <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed bg-blue-50/50 p-4 border border-blue-100/50 rounded-xl">
                  {selectedProduct.descMap[lang]}
                </p>
              </div>

            </div>

            {/* Footer with RFQ Trigger */}
            <div className="bg-slate-50 px-6 py-5 border-t border-slate-200 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">{t.modalRFQTitle}</span>
                <span className="font-extrabold text-blue-900 text-base">{selectedProduct.model}</span>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleModalRfqSubmit(selectedProduct.model)}
                  className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-3 rounded-xl text-sm font-extrabold flex items-center justify-center gap-1.5 shadow-md shadow-blue-800/10"
                >
                  <Send size={15} />
                  <span>{t.modalBtnSubmit}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
