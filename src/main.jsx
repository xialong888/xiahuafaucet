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
  Check,
  FileText
} from 'lucide-react';
import './styles.css';

// Multilingual Dictionary with high-fidelity PDF data
const trans = {
  en: {
    navHome: "Home",
    navProducts: "Products",
    navPatents: "Patents & Certifications",
    navAbout: "Factory Showroom",
    navFAQ: "FAQ",
    navContact: "Contact Us",
    heroBadge: "17+ Years of Precision Manufacturing | Pioneer of ABS Faucet Handles",
    heroTitle: "Global OEM/ODM Partner for Faucet Handles & Sanitary Fittings",
    heroLede: "Fujian Xialong Sanitary Ware Co., Ltd. (also known as Fujian Nan'an Luncang Xiahua Sanitary Ware Factory) is the pioneer of high-performance ABS faucet handles, adjustable shower sliders, and brass fittings since 2006. Supplying standard-setting global sanitary corporations.",
    btnRFQ: "Request a Quote",
    btnWhatsApp: "Inquiry on WhatsApp",
    statClients: "Cooperative Brands",
    statOutput: "Monthly Output (Pcs)",
    statExperience: "Years Experience",
    statQC: "Salt Spray Test Check",
    advantageTitle: "Our B2B Technical Advantages",
    advantageLede: "Why leading sanitary brand distributors in Southeast Asia, South America, and Middle East choose Fujian Xialong / Xiahua.",
    adv1Title: "First Inventor of ABS Handles",
    adv1Desc: "As the pioneer of plastic ABS faucet handles, we have defined industry standards for anti-corrosion, light-weight, and rust-free operations.",
    adv2Title: "Authorized Patent Protection",
    adv2Desc: "Our designs are backed by multiple Chinese national patents (e.g., ZL 2016 2 0363475.1), assuring bulletproof intellectual property safety.",
    adv3Title: "100% Quality Assurance",
    adv3Desc: "Advanced injection molders and pressure benches coupled with strict manual testing prevent retail complaints entirely.",
    adv4Title: "24-Hour Rapid Prototyping",
    adv4Desc: "Direct in-house mold tooling allows lightning-fast sampling and shipping to keep your supply chain running smoothly.",
    catalogTitle: "Core Product Catalog",
    catalogLede: "Explore our export-tested products. Click 'View Specifications' for technical spec sheets, patents, and wholesale volume pricing.",
    catAll: "All Accessories",
    catHandles: "ABS Faucet Handles",
    catSliders: "Shower Sliders & Sleeves",
    catHardware: "Bathroom Hardware",
    specModel: "Model",
    specMaterial: "Material",
    specFinish: "Finish",
    specCert: "Compliance",
    btnDetail: "View Specifications",
    factoryTitle: "Our Factory & Quality Control",
    factoryLede: "Established on 2006-02-27 in Nan'an Luncang Plumbing High-Tech Park, Quanzhou, Fujian.",
    factParagraph1: "Fujian Xialong Sanitary Ware Co., Ltd. (also known as Fujian Nan'an Luncang Xiahua Sanitary Ware Factory) was established in 2006 in Luncang, Nan'an, Quanzhou, Fujian, the world-renowned capital of plumbing and sanitary fittings. Our facility features a dedicated 3,000+ sqm production area, housing advanced high-precision injection-molding equipment, automated plating lines, and strict water/air pressure test benches.",
    factParagraph2: "Operating with 80 highly skilled workers and top-tier quality inspectors, we have built stable, long-term partnerships with major sanitary corporations. Over the past 17 years, our insistence on using virgin premium materials and strict ISO9001-compliant production has earned the absolute trust of global importers, wholesales, and engineering procurement managers across Southeast Asia, South America, and the Middle East.",
    patentTitle: "National Patents & Certifications",
    patentLede: "Fujian Xialong (Xiahua) holds multiple utility model patents registered under the State Intellectual Property Office of China, ensuring elite design authority.",
    pat1Name: "Utility Model Patent: Easy-to-Manufacture Mixing Valve Handle",
    pat1Num: "Patent No: ZL 2016 2 0363475.1",
    pat1Auth: "Authorized: 2016-09-07 | SIPO China",
    pat2Name: "Utility Model Patent: Mixing Valve Handle for Precise Adjustment",
    pat2Num: "Patent No: ZL 2016 2 0363465.8",
    pat2Auth: "Authorized: 2016-09-07 | SIPO China",
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
    formSuccessDesc: "Thank you for contacting Fujian Xialong / Xiahua. Our export team will contact you via email or WhatsApp within 12 hours.",
    btnClose: "Close",
    footerCopyright: "© 2026 Fujian Xialong Sanitary Ware Co., Ltd. (Fujian Nan'an Luncang Xiahua Faucet Factory) All rights reserved.",
    footerAddress: "Address: Luncang Plumbing High-Tech Zone, Nan'an, Quanzhou, Fujian, China",
    modalRFQTitle: "Inquire About",
    modalBtnSubmit: "Submit Inquiry for this Model",
    specSheet: "Technical Specifications Sheet"
  },
  ru: {
    navHome: "Главная",
    navProducts: "Продукция",
    navPatents: "Патенты и Сертификаты",
    navAbout: "О Заводе",
    navFAQ: "Вопросы",
    navContact: "Контакты",
    heroBadge: "17+ Лет высокоточного производства | Пионер ручек смесителя из ABS",
    heroTitle: "Глобальный партнер OEM/ODM для ручек смесителей и фитингов",
    heroLede: "Fujian Xialong Sanitary Ware Co., Ltd. (также известный как завод сантехники Сяхуа) — пионер в производстве высококачественных пластиковых ручек для смесителей из ABS, регулируемых держателей для душа и сантехнической арматуры с 2006 года.",
    btnRFQ: "Запросить цену",
    btnWhatsApp: "Запрос в WhatsApp",
    statClients: "Партнерских брендов",
    statOutput: "Месячный объем (шт.)",
    statExperience: "Лет опыта",
    statQC: "Проверка солевым туманом",
    advantageTitle: "Наши стратегические преимущества B2B",
    advantageLede: "Почему ведущие дистрибьюторы сантехнических брендов в Юго-Восточной Азии, Южной Америке и на Ближнем Востоке выбирают нас.",
    adv1Title: "Первый изобретатель ручек из ABS",
    adv1Desc: "Как пионер в области ручек смесителей из ABS пластика, мы определили отраслевые стандарты защиты от коррозии, легкости и долговечности.",
    adv2Title: "Официальная патентная защита",
    adv2Desc: "Наши проекты защищены многочисленными национальными патентами Китая (например, ZL 2016 2 0363475.1), обеспечивая безопасность вашей интеллектуальной собственности.",
    adv3Title: "100% гарантия качества",
    adv3Desc: "Современные термопластавтоматы, испытательные стенды высокого давления и ручной контроль качества полностью исключают протечки.",
    adv4Title: "Разработка прототипа за 24 часа",
    adv4Desc: "Собственный цех пресс-форм позволяет быстро создавать прототипы и отправлять образцы для бесперебойной работы вашей сети поставок.",
    catalogTitle: "Основной каталог продукции",
    catalogLede: "Изучите нашу продукцию, проверенную экспортом. Нажмите 'Посмотреть спецификации' для получения оптовых цен и патентов.",
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
    factoryLede: "Основано 2006-02-27 в индустриальном парке сантехники Луньцань, Наньань, Цюаньчжоу, Фуцзянь.",
    factParagraph1: "Компания Fujian Xialong Sanitary Ware Co., Ltd. (также известная как завод сантехники Сяхуа) была основана в 2006 году в городе Луньцань — всемирно известной столице сантехнического литья. Наша фабрика площадью более 3000 кв.м оснащена автоматизированными инжекционными линиями, цехом гальваники и передовыми испытательными стендами.",
    factParagraph2: "На заводе работают 80 высококвалифицированных рабочих и первоклассных инспекторов качества. За последние 17 лет наше стремление использовать только первичное сырье и соответствие стандартам ISO9001 принесли нам абсолютное доверие импортеров и дистрибьюторов в Юго-Восточной Азии, Южной Америке и на Ближнем Востоке.",
    patentTitle: "Национальные патенты и сертификаты",
    patentLede: "Fujian Xialong (Xiahua) владеет многочисленными патентами на полезные модели, зарегистрированными Государственным управлением интеллектуальной собственности Китая.",
    pat1Name: "Патент на полезную модель: Простая в производстве ручка смесителя",
    pat1Num: "Номер патента: ZL 2016 2 0363475.1",
    pat1Auth: "Авторизован: 2016-09-07 | SIPO Китай",
    pat2Name: "Патент на полезную модель: Ручка смесителя для точной регулировки",
    pat2Num: "Номер патента: ZL 2016 2 0363465.8",
    pat2Auth: "Авторизован: 2016-09-07 | SIPO Китай",
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
    formSuccessDesc: "Спасибо за обращение в Fujian Xialong. Наша команда свяжется с вами по электронной почте или WhatsApp в течение 12 часов.",
    btnClose: "Закрыть",
    footerCopyright: "© 2026 Fujian Xialong Sanitary Ware Co., Ltd. Все права защищены. B2B Сайт.",
    footerAddress: "Адрес: Промышленная зона Луньцань, Наньань, Цюаньчжоу, Фуцзянь, Китай",
    modalRFQTitle: "Запрос по продукту",
    modalBtnSubmit: "Отправить запрос по этой модели",
    specSheet: "Лист технических характеристик"
  },
  pt: {
    navHome: "Início",
    navProducts: "Produtos",
    navPatents: "Patentes & Certificações",
    navAbout: "Nossa Fábrica",
    navFAQ: "FAQ",
    navContact: "Contato",
    heroBadge: "17+ Anos de Manufatura de Precisão | Pioneiro de Volantes de ABS",
    heroTitle: "Parceiro Global OEM/ODM para Volantes de Torneira e Metais Sanitários",
    heroLede: "A Fujian Xialong Sanitary Ware Co., Ltd. (também conhecida como Fábrica de Metais Sanitários Xiahua) é pioneira na produção de volantes de torneira em ABS, deslizadores de chuveiro e conexões de latão de alta performance desde 2006. Fornecedora de grandes corporações globais.",
    btnRFQ: "Solicitar Orçamento",
    btnWhatsApp: "Consultar no WhatsApp",
    statClients: "Marcas Parceiras",
    statOutput: "Produção Mensal (Pçs)",
    statExperience: "Anos de Experiência",
    statQC: "Teste de Névoa Salina",
    advantageTitle: "Nossas Vantagens Técnicas B2B",
    advantageLede: "Por que os principais distribuidores no Sudeste Asiático, América do Sul e Oriente Médio escolhem a Fujian Xialong / Xiahua.",
    adv1Title: "Primeiro Inventor de Volantes de ABS",
    adv1Desc: "Como pioneiros no volante de torneira em plástico ABS, definimos os padrões do setor contra corrosão, leveza e durabilidade.",
    adv2Title: "Proteção de Patente Autorizada",
    adv2Desc: "Nossos designs são respaldados por múltiplas patentes nacionais chinesas (ex: ZL 2016 2 0363475.1), garantindo segurança jurídica intelectual absoluta.",
    adv3Title: "Controle de Qualidade 100% Rigoroso",
    adv3Desc: "Máquinas injetoras de precisão e testes hidráulicos avançados eliminam 100% de quaisquer reclamações de vazamento por parte dos consumidores.",
    adv4Title: "Prototipagem Rápida em 24 Horas",
    adv4Desc: "Ferramentaria interna de moldes própria garante desenvolvimento de amostras rápido para otimizar sua linha de importação.",
    catalogTitle: "Catálogo de Produtos",
    catalogLede: "Explore nossos produtos certificados para exportação. Clique em 'Ver Especificações' para ver dados técnicos e patentes.",
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
    factoryLede: "Fundada em 27/02/2006 na Zona de Alta Tecnologia de Metais Sanitários de Luncang, Nan'an, Quanzhou, Fujian.",
    factParagraph1: "A Fujian Xialong Sanitary Ware Co., Ltd. (também conhecida como Fábrica de Metais Sanitários Xiahua) foi fundada em 2006 em Luncang, Nan'an, Quanzhou, a renomada capital de metais sanitários da China. Nossa fábrica possui área industrial própria de mais de 3.000m² com injetoras de última geração.",
    factParagraph2: "Operando com uma equipe de 80 operários e inspetores altamente qualificados, fornecemos peças premium em ABS e latão. Nosso foco em conformidade e qualidade rígida ISO9001 garantiu parcerias estáveis de longo prazo com grandes importadores e marcas no Sudeste Asiático, América do Sul e Oriente Médio.",
    patentTitle: "Patentes Nacionais & Certificações",
    patentLede: "A Fujian Xialong (Xiahua) detém várias patentes de modelos de utilidade devidamente registradas no órgão oficial de patentes da China.",
    pat1Name: "Patente de Modelo de Utilidade: Volante de Misturador Fácil de Produzir",
    pat1Num: "Patente nº: ZL 2016 2 0363475.1",
    pat1Auth: "Autorizado: 07/09/2016 | SIPO China",
    pat2Name: "Patente de Modelo de Utilidade: Volante de Ajuste Preciso de Temperatura",
    pat2Num: "Patente nº: ZL 2016 2 0363465.8",
    pat2Auth: "Autorizado: 07/09/2016 | SIPO China",
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
    formSuccessDesc: "Obrigado por entrar em contato com a Fujian Xialong. Nossa equipe de exportação entrará em contato por e-mail ou WhatsApp em até 12 horas.",
    btnClose: "Fechar",
    footerCopyright: "© 2026 Fujian Xialong Sanitary Ware Co., Ltd. Todos os direitos reservados. Site B2B de Exportação.",
    footerAddress: "Endereço: Zona de Fabricação de Luncang, Nan'an, Quanzhou, Fujian, China",
    modalRFQTitle: "Consultar Sobre",
    modalBtnSubmit: "Enviar Consulta para este Modelo",
    specSheet: "Ficha de Especificações Técnicas"
  },
  hi: {
    navHome: "होम",
    navProducts: "उत्पाद",
    navPatents: "पेटेंट और प्रमाण पत्र",
    navAbout: "फैक्टरी ताकत",
    navFAQ: "अक्सर पूछे जाने वाले प्रश्न",
    navContact: "संपर्क करें",
    heroBadge: "17+ वर्ष परिशुद्धता विनिर्माण | एबीएस नल हैंडल के अग्रणी",
    heroTitle: "नल हैंडल और सेनेटरी फिटिंग के लिए वैश्विक OEM/ODM भागीदार",
    heroLede: "फ़ुज़ियान शियालॉन्ग सेनेटरी वेयर कंपनी लिमिटेड (शिआहुआ सेनेटरी वेयर फैक्ट्री) 2006 से उच्च-प्रदर्शन वाले एबीएस नल हैंडल, शावर स्लाइडर और पीतल फिटिंग के निर्माण में अग्रणी है।",
    btnRFQ: "कोटेशन के लिए अनुरोध",
    btnWhatsApp: "व्हाट्सएप पर पूछताछ",
    statClients: "सहयोगी ब्रांड",
    statOutput: "मासिक उत्पादन (टुकड़े)",
    statExperience: "वर्षों का अनुभव",
    statQC: "नमक स्प्रे परीक्षण जांच",
    advantageTitle: "हमारे बी2बी तकनीकी लाभ",
    advantageLede: "क्यों अग्रणी सेनेटरी वितरक फ़ुज़ियान शियालॉन्ग / शियाहुआ को चुनते हैं।",
    adv1Title: "एबीएस हैंडल के पहले आविष्कारक",
    adv1Desc: "एबीएस नल हैंडल के अग्रणी के रूप में, हमने संक्षारण प्रतिरोध, हल्के वजन और टिकाऊ संचालन के लिए उद्योग मानकों को परिभाषित किया है।",
    adv2Title: "अधिकृत पेटेंट सुरक्षा",
    adv2Desc: "हमारे डिजाइन कई चीनी राष्ट्रीय पेटेंट (उदा. ZL 2016 2 0363475.1) द्वारा समर्थित हैं, जो आपकी बौद्धिक संपदा की सुरक्षा सुनिश्चित करते हैं।",
    adv3Title: "100% गुणवत्ता आश्वासन",
    adv3Desc: "उन्नत इंजेक्शन मोल्डिंग मशीनें और कड़े परीक्षण दबाव बेंच रिसाव की संभावना को पूरी तरह से समाप्त करते हैं।",
    adv4Title: "24-घंटे रैपिड प्रोटोटाइप",
    adv4Desc: "इन-हाउस मोल्ड डिजाइन और टूलिंग आपूर्ति श्रृंखला को सुचारू रखने के लिए त्वरित नमूना प्रेषण की अनुमति देती है।",
    catalogTitle: "मुख्य उत्पाद सूची (Catalog)",
    catalogLede: "हमारे निर्यात-परीक्षणित उत्पादों का अन्वेषण करें। थोक मूल्य निर्धारण और पेटेंट विनिर्देशों के लिए क्लिक करें।",
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
    factoryLede: "फ़ुज़ियान, चीन के नान'आन लुनचांग नलसाजी विनिर्माण पार्क में 27-02-2006 को स्थापित।",
    factParagraph1: "फ़ुज़ियान शियालॉन्ग सेनेटरी वेयर कंपनी लिमिटेड की स्थापना 2006 में लुनचांग, नान'आन, फ़ुज़ियान में हुई थी। हमारा 3000+ वर्गमीटर का विनिर्माण संयंत्र उच्च-परिशुद्धता इंजेक्शन-मोल्डिंग लाइनों और परीक्षण बेंचों से लैस है।",
    factParagraph2: "80 कुशल श्रमिकों और समर्पित निरीक्षकों के साथ, हम वैश्विक卫浴 ब्रांडों को दोषरहित उत्पाद प्रदान करते हैं। पिछले 17 वर्षों में हमारे सख्त विनिर्माण ने दक्षिण पूर्व एशिया, दक्षिण अमेरिका और मध्य पूर्व के खरीदारों का विश्वास जीता है।",
    patentTitle: "राष्ट्रीय पेटेंट और प्रमाण पत्र",
    patentLede: "फ़ुज़ियान शियालॉन्ग (शियाहुआ) के पास चीन के पेटेंट कार्यालय (SIPO) द्वारा अधिकृत कई पेटेंट अधिकार हैं, जो हमारे डिजाइन की मौलिकता की गारंटी देते हैं।",
    pat1Name: "उपयोगिता मॉडल पेटेंट: निर्माण में आसान नल मिक्सर हैंडल",
    pat1Num: "पेटेंट नंबर: ZL 2016 2 0363475.1",
    pat1Auth: "अधिकृत तिथि: 2016-09-07 | SIPO चीन",
    pat2Name: "उपयोगिता मॉडल पेटेंट: सटीक तापमान और पानी के समायोजन के लिए नल हैंडल",
    pat2Num: "पेटेंट नंबर: ZL 2016 2 0363465.8",
    pat2Auth: "अधिकृत तिथि: 2016-09-07 | SIPO चीन",
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न (FAQ)",
    faqLede: "आपकी खरीद प्रक्रिया में मार्गदर्शन के लिए उपयोगी उत्तर।",
    contactTitle: "आरएफक्यू (RFQ) जमा करें",
    contactLede: "हमारा निर्यात प्रबंधक 12 घंटे के भीतर विस्तृत कोटेशन के साथ उत्तर देगा।",
    formName: "पूरा नाम",
    formEmail: "व्यावसायिक ईमेल",
    formWhatsApp: "व्हाट्सएप / फोन नंबर",
    formCompany: "कंपनी का नाम",
    formCategory: "लक्षित श्रेणी",
    formMsg: "खरीद आवश्यकताएं और मात्रा (मॉडल, मात्रा, पैकिंग आदि)",
    formSubmit: "आरएफक्यू जमा करें",
    formSuccessTitle: "पूछताछ सफलतापूर्वक सबमिट की गई!",
    formSuccessDesc: "फ़ुज़ियान शियालॉन्ग से संपर्क करने के लिए धन्यवाद। हमारी निर्यात टीम 12 घंटे के भीतर आपसे संपर्क करेगी।",
    btnClose: "बंद करें",
    footerCopyright: "© 2026 फ़ुज़ियान शियालॉन्ग सेनेटरी वेयर कंपनी लिमिटेड। सर्वाधिकार सुरक्षित।",
    footerAddress: "पता: लुनचांग विनिर्माण क्षेत्र, नान'आन, क्वानझोउ, फ़ुज़ियान, चीन",
    modalRFQTitle: "के बारे में पूछताछ",
    modalBtnSubmit: "इस मॉडल के लिए पूछताछ भेजें",
    specSheet: "तकनीकी विनिर्देश शीट"
  },
  zh: {
    navHome: "独立站首页",
    navProducts: "核心产品",
    navPatents: "国家专利与资质",
    navAbout: "企业厂区 showroom",
    navFAQ: "大宗采销答疑",
    navContact: "提交询盘",
    heroBadge: "始于 2006 年 | 首创塑料 ABS 材质水龙头手柄先驱 | 17 年精工制造",
    heroTitle: "全球大型卫浴品牌可信赖的龙头手柄及五金配件 OEM/ODM 合作伙伴",
    heroLede: "福建夏龙卫浴有限公司（又名福建南安仑苍厦华卫浴洁具制造厂），坐落于中国水暖之都南安仑苍。自 2006 年创立以来，首创 ABS 材质龙头手柄，彻底解决传统手柄易腐蚀、高成本痛点。17年耕耘，已成为多家国际知名卫浴集团的长期战略供应商。",
    btnRFQ: "大宗采购询盘 (RFQ)",
    btnWhatsApp: "WhatsApp 业务直联",
    statClients: "大型合作卫浴品牌",
    statOutput: "月注塑精密件产能 (套)",
    statExperience: "精工制造沉淀 (年)",
    statQC: "乙酸盐雾耐腐蚀通过率",
    advantageTitle: "夏龙（厦华）三大核心制造壁垒",
    advantageLede: "依托中国顶尖的卫浴产业集群和高精制造设备，为全球批发商提供完美的供应链防线。",
    adv1Title: "塑料 ABS 手柄首创发明者",
    adv1Desc: "作为全球塑料 ABS 龙头手柄制造先驱，我们拥有深厚的多层高附着力电镀核心技术，耐酸蚀、永不生锈、手感润滑。",
    adv2Title: "中国国家专利授权保障",
    adv2Desc: "自主研发成果均已获得中华人民共和国国家知识产权局实用新型专利授权（如 ZL 2016 2 0363475.1 等），采购出海无侵权风险。",
    adv3Title: "100% 气密与水压双重测试",
    adv3Desc: "拥有全自动高频注塑机组、气密测试台，严格执行 ISO9001 质量体系，从源头确保产品零瑕疵出厂，免除终端索赔风险。",
    adv4Title: "24 小时开模与极速样板",
    adv4Desc: "自有磨具设计与数控精密雕刻车间。调整或开发新磨具最快仅需 24 小时出样，大幅缩减您的工程及开发周期。",
    catalogTitle: "核心卫浴配件产品大类",
    catalogLede: "已通过国际工程与零售市场严格验证的核心零配件。点击“查看技术规格”获取专属规格书与专利批文说明。",
    catAll: "全部卫浴零配件",
    catHandles: "ABS 龙头手柄系列",
    catSliders: "花洒滑套与升降洁具系列",
    catHardware: "精工铜/不锈钢阀芯及五金",
    specModel: "产品型号",
    specMaterial: "核心主材",
    specFinish: "表面镀层工艺",
    specCert: "权威合规/专利",
    btnDetail: "查看技术规格",
    factoryTitle: "现代化厂房与质量控制体系",
    factoryLede: "工厂于 2006-02-27 创立于福建南安仑苍镇水暖高新技术园区。",
    factParagraph1: "福建夏龙卫浴有限公司（又名福建南安仑苍厦华卫浴洁具制造厂）座落于举世闻名的中国水暖卫浴制造中心——福建省泉州南安市仑苍镇水暖高新技术园区。我们拥有一座面积逾3000平方米的现代化工业厂房，引进了国内外先进的自动化精密注塑机、模具精密数控雕刻机、电镀表面处理流水线以及全套气密性/液压疲劳测试设备。",
    factParagraph2: "工厂现有在职资深技工 80 余人，由经验丰富的检验人员层层把关，严格遵循 ISO9001 质量管理体系运行。作为首创塑料 ABS 材质水龙头手柄的先驱，过去17年间我们与多家知名中大型卫浴企业建立了长期、稳固的开模与贴牌代工战略合作关系。诚实、守信、积极、创新是我们始终坚守的核心信条，我们全力跟随客户需求，提供最可靠的产品供应链服务。",
    patentTitle: "国家实用新型专利证书展示",
    patentLede: "夏龙卫浴（厦华手柄）系列研发产品已获得国家知识产权局多项实用新型专利授权，确保您的采购合规无忧、技术卓越。",
    pat1Name: "国家实用新型专利：便于生产的混水阀手柄",
    pat1Num: "专利号: ZL 2016 2 0363475.1",
    pat1Auth: "授权公告日: 2016年09月07日 | 中华人民共和国国家知识产权局",
    pat2Name: "国家实用新型专利：便于准确调节的混水阀手柄",
    pat2Num: "专利号: ZL 2016 2 0363465.8",
    pat2Auth: "授权公告日: 2016年09月07日 | 中华人民共和国国家知识产权局",
    faqTitle: "国际大宗采销问答 (FAQ)",
    faqLede: "为您解答起订量、定制流程、样板寄送及国际物流等最关切的问题。",
    contactTitle: "提交大宗采购询盘意向 (RFQ)",
    contactLede: "我们的资深大客户经理和外贸专员将在 12 小时内为您提供最精准的阶梯批发报价与全套技术规格文件。",
    formName: "采购负责人姓名",
    formEmail: "企业邮箱",
    formWhatsApp: "WhatsApp / 手机号码",
    formCompany: "采购企业名称",
    formCategory: "意向采购类目",
    formMsg: "详细采购规格及采购量描述（如型号、所需定制、包装及目的港要求）",
    formSubmit: "向工厂提交大宗采购询盘",
    formSuccessTitle: "询盘提交成功！",
    formSuccessDesc: "非常感谢您对夏龙（厦华）卫浴精密配件厂的信任。我们的外贸经理将立刻跟进并提供报价单。",
    btnClose: "关闭页面",
    footerCopyright: "© 2026 福建夏龙卫浴有限公司 (福建南安仑苍厦华卫浴洁具制造厂) 保留所有权利。出口专属信通道。",
    footerAddress: "地址: 中国·福建·泉州市南安市仑苍镇水暖高新技术园区",
    modalRFQTitle: "针对此专利型号发起采购询盘",
    modalBtnSubmit: "提交该型号采购申请",
    specSheet: "技术数据规格表"
  }
};

// High-Fidelity Product Database linked directly to real photos
const products = [
  {
    id: 1,
    category: "handles",
    nameMap: {
      en: "Patented Premium Chrome ABS Lever Handle",
      ru: "Запатентованная хромированная ручка из ABS",
      pt: "Volante Alavanca de ABS Cromado Patenteado",
      hi: "पेटेंट प्रीमियम क्रोम एबीएस लीवर हैंडल",
      zh: "夏龙专利型加厚多层电镀高光 ABS 龙头杠杆式单手柄"
    },
    model: "XH-ABS-101",
    materialMap: { en: "Virgin Heavy ABS (Patent Grade)", ru: "Первичный прочный ABS", pt: "ABS Virgem de Alto Impacto", hi: "उच्च ग्रेड वर्जिन एबीएस", zh: "进口高纯度全新绝缘级 ABS 原料" },
    finishMap: { en: "9-Class Multi-layer Electroplated Chrome", ru: "Многослойный глянцевый хром 9 класса", pt: "Cromagem Multicamada Classe 9", hi: "इलेक्ट्रोप्लेटेड क्रोम", zh: "9级加厚酸铜镍铬联合电镀 (如镜面般平整)" },
    certMap: { en: "ZL 2016 2 0363475.1 | BS EN 200", ru: "Патент ZL 2016 2 0363475.1", pt: "Patente ZL 2016 2 0363475.1 / AS200", hi: "पेटेंट ZL 2016 2 0363475.1", zh: "中国实用新型专利 ZL 2016 2 0363475.1 | 符合 BS EN 200" },
    descMap: {
      en: "Built exactly according to our Chinese national patent. Multilayered chrome passes 48h acetic acid salt spray testing. Excellent ergonomics, perfect for professional sanitary brand integration.",
      ru: "Создан строго в соответствии с китайским национальным патентом. Многослойный хром выдерживает 48-часовой солевой туман. Идеально для брендов.",
      pt: "Desenvolvido em total conformidade com nossa patente nacional. Cromagem premium aprovada em teste de névoa salina de 48h.",
      hi: "हमारे चीनी राष्ट्रीय पेटेंट के अनुसार निर्मित। जंग प्रतिरोधी और चमकदार सतह।",
      zh: "严格按照国家实用新型专利 ZL 2016 2 0363475.1 制造。注塑壁厚提升30%，防滑阻尼平衡优异，能通过48小时严苛乙酸雾测试，历久不剥落。"
    },
    img: "/assets/images/product-abs-handle.jpg"
  },
  {
    id: 2,
    category: "sliders",
    nameMap: {
      en: "Adjustable ABS Shower Slide Sleeves & Rails",
      ru: "Регулируемый держатель душевой лейки на штангу",
      pt: "Suporte Deslizante de Chuveiro Ajustável em ABS",
      hi: "समायोज्य एबीएस शावर रेल स्लाइड आस्तीन",
      zh: "高顺滑自锁式 ABS 升降花洒滑套滑块配件"
    },
    model: "XH-SHSL-202",
    materialMap: { en: "Reinforced ABS + Built-in Friction Pads", ru: "Армированный ABS с силиконовой прокладкой", pt: "ABS Reforçado + Pastilha de Fricção", hi: "प्रबलित एबीएस + घर्षण पैड", zh: "高阻尼防磨韧性 ABS + 内置高阻尼耐老化硅胶片" },
    finishMap: { en: "High Gloss Polished Chrome / Matte White", ru: "Зеркальный хром / матовый белый", pt: "Cromado Brilhante / Branco Fosco", hi: "दर्पण पॉलिश क्रोम", zh: "镜面高光电镀铬 / 原装环保乳白双色" },
    certMap: { en: "SGS 100,000 Wear Cycles Checked", ru: "Испытано SGS на 100 000 циклов износа", pt: "Certificado de Desgaste SGS 100 mil ciclos", hi: "एसजीएस पहनने के परीक्षण प्रमाणित", zh: "通过 SGS 10万次循环往复摩擦耐磨性无损寿命认证" },
    descMap: {
      en: "Precision slider sleeve for standard 22mm/25mm shower tubes. Advanced self-locking mechanism prevents heavy brass handheld showers from slipping or wobbling.",
      ru: "Прецизионный держатель для стандартных штанг 22 мм и 25 мм. Плотная фиксация предотвращает сползание тяжелых душевых леек.",
      pt: "Suporte deslizante para barras padrão de 22mm e 25mm. Mecanismo de travamento ultra-firme impedindo a queda da ducha.",
      hi: "आसान स्लाइड रेल समायोजन की अनुमति देता है। 22 मिमी / 25 मिमी मानक शावर छड़ के लिए उपयुक्त।",
      zh: "适配国际标准 22mm 及 25mm 淋浴管。独创内自锁重摩擦力结构，挂载 1.5kg 重载黄铜花洒不产生滑落、不晃动，移动手感如丝绸般顺滑。"
    },
    img: "/assets/images/product-shower-slider.jpg"
  },
  {
    id: 3,
    category: "hardware",
    nameMap: {
      en: "Patented Knurled Grip Chrome Handle Control",
      ru: "Запатентованная хромированная ручка-регулятор с накаткой",
      pt: "Volante de Acionamento com Textura Serrilhada Patenteada",
      hi: "पेटेंट ग्रिप क्रोम हैंडल कंट्रोल",
      zh: "国家专利型精工双色滚花防滑龙头单柄/温控旋钮手柄"
    },
    model: "XH-BRFC-303",
    materialMap: { en: "Virgin Heavy ABS + Internal Copper Splines", ru: "Ударопрочный ABS + медные шлицы", pt: "ABS Injetado + Encaixe Interno de Bronze", hi: "भारी एबीएस + आंतरिक तांबा स्प्लिन", zh: "高抗冲击 ABS 主体 + 内部抗咬合高硬度精密铜阀齿" },
    finishMap: { en: "Knurled Pattern Grip + Platinum Chrome", ru: "Текстура с накаткой + платиновый хром", pt: "Textura Serrilhada + Cromagem Platinum", hi: "पैटर्न ग्रिप + क्रोम", zh: "高精度防滑滚花纹理 + 物理铂金电镀工艺 (防油防指纹)" },
    certMap: { en: "ZL 2016 2 0363465.8 | WRAS Compliant", ru: "Патент ZL 2016 2 0363465.8 / WRAS", pt: "Patente ZL 2016 2 0363465.8 / WRAS", hi: "पेटेंट ZL 2016 2 0363465.8", zh: "中国实用新型专利 ZL 2016 2 0363465.8 | 涉水材料符合 WRAS" },
    descMap: {
      en: "Incorporates our Chinese national patent ZL 2016 2 0363465.8 for precise water mixing. Features premium textured knurling for smooth grip even with soap on hands. Highly requested in high-end shower lines.",
      ru: "Соответствует нашему китайскому патенту ZL 2016 2 0363465.8 на точное смешивание воды. Не скользит в мыльных руках.",
      pt: "Incorpora nossa patente para mistura de água super precisa. Textura serrilhada de alto atrito facilitando o acionamento.",
      hi: "सटीक पानी के मिश्रण के लिए पेटेंट। चिकनी पकड़ के लिए पैटर्न डिजाइन।",
      zh: "采用国家实用新型专利 ZL 2016 2 0363465.8 精准控温结构。表面精密加工的防滑滚花图案，即便手覆肥皂水也依然能精准转动调节，是五星级酒店淋浴器代工首选配件。"
    },
    img: "/assets/images/product-hardware.jpg"
  },
  {
    id: 4,
    category: "hardware",
    nameMap: {
      en: "Heavy gravity-casted solid brass body",
      ru: "Латунный корпус смесителя для раковины и ванны",
      pt: "Corpo de Torneira Monocomando de Latão Maciço",
      hi: "ठोस पीतल स्नान और बेसिन नल शरीर",
      zh: "出厂全检 99g 黄金净重精工龙头把手与阀壳"
    },
    model: "XH-FC-03",
    materialMap: { en: "Gravity-Cast Solid Brass / Low Lead", ru: "Тяжелая литая латунь с низким содержанием свинца", pt: "Latão Maciço de Baixo Chumbo", hi: "भारी कास्ट पीतल", zh: "H59-1 环保重力浇铸国标黄铜" },
    finishMap: { en: "High Gloss Anti-scratch Multiplating", ru: "Зеркальный хром высокой плотности", pt: "Cromado Brilhante Espelhado", hi: "मिरर क्रोम", zh: "镜面精抛 + 多层防护酸性耐腐蚀电镀" },
    certMap: { en: "SGS Multi-Metal Analysis Approved", ru: "Сертификат SGS на отсутствие тяжелых металлов", pt: "Aprovado em Análise de Metais Pesados SGS", hi: "SGS भारी धातु विश्लेषण स्वीकृत", zh: "通过国家建筑材料测试中心及 SGS 无重金属无害解析" },
    descMap: {
      en: "Heavy cast solid brass core, weighed on precision balance to guarantee strict 99g weight and Wall-thickness tolerance. Prevents burst under cold winter pressure.",
      ru: "Тяжелый латунный корпус, отлитый под давлением. Проверен на весах на соответствие весу 99 г для защиты от замерзания и разрывов зимой.",
      pt: "Corpo de latão maciço fundido por gravidade. Peso de 99g aferido em balança de precisão para garantir durabilidade contra intempéries.",
      hi: "भारी पीतल शरीर 99g वजन की गारंटी देता है। शून्य हवा के बुलबुले।",
      zh: "主体采用精密重力浇铸，出厂逐个精密电子天平复称，保证其 99克 的扎实净重与壁厚。无气孔沙眼，彻底断绝寒冷冬季管道上冻时壳体膨胀开裂的风险。"
    },
    img: "/assets/images/hero-faucet.jpg"
  }
];

// High-Fidelity FAQs
const faqs = [
  {
    qMap: {
      en: "Does Fujian Xialong / Xiahua hold genuine patents for these designs?",
      ru: "Имеет ли Fujian Xialong / Xiahua подлинные патенты на эти конструкции?",
      pt: "A Fujian Xialong / Xiahua possui patentes autênticas para estes produtos?",
      hi: "क्या फ़ुज़ियान शियालॉन्ग / शियाहुआ के पास इन डिज़ाइनों के लिए वास्तविक पेटेंट हैं?",
      zh: "夏龙卫浴（厦华手柄厂）的这些专利是真的吗？"
    },
    aMap: {
      en: "Yes, absolutely. We hold valid national utility model patents issued by the State Intellectual Property Office (SIPO) of China (e.g. ZL 2016 2 0363475.1 and ZL 2016 2 0363465.8). This protects our buyers from patent disputes when exporting globally.",
      ru: "Да, безусловно. Мы владеем действующими национальными патентами на полезные модели, выданными Государственным ведомством по интеллектуальной собственности (SIPO) Китая. Это защищает наших покупателей.",
      pt: "Sim, absolutamente. Detemos patentes válidas emitidas pelo órgão oficial de marcas e patentes da China (SIPO), garantindo proteção jurídica total a todos os nossos distribuidores.",
      hi: "हाँ, बिल्कुल। हमारे पास चीनी राष्ट्रीय पेटेंट अधिकार हैं, जो हमारे खरीदारों को पेटेंट विवादों से सुरक्षित रखते हैं।",
      zh: "是的，完全属实。我们所有的专利产品均已获得中华人民共和国国家知识产权局审核并授权，并在网站上公示了实物证书及专利编号。这能百分之百保障大宗出口采购商在海外市场免受专利诉讼侵权风险。"
    }
  },
  {
    qMap: {
      en: "What is your factory's production history and capacity?",
      ru: "Какова история производства и мощность вашего завода?",
      pt: "Qual é o histórico de produção e capacidade de sua fábrica?",
      hi: "आपकी फैक्टरी का उत्पादन इतिहास और क्षमता क्या है?",
      zh: "工厂的生产历史与生产线产能如何？"
    },
    aMap: {
      en: "Our factory was founded on 2006-02-27 in the Nan'an Plumbing High-Tech Park in Fujian. We operate over 3,000 sqm of modern workshop with 80 highly skilled workers, yielding over 800,000 sets of precision injection and hardware faucet accessories monthly.",
      ru: "Наш завод был основан 2006-02-27 в индустриальном парке сантехники в провинции Фуцзянь. Мы управляем заводом площадью более 3000 кв.м с 80 высококлассными рабочими, выпуская более 800 000 комплектов в месяц.",
      pt: "Nossa fábrica foi fundada em 27/02/2006 em Fujian, China. Operamos com uma área produtiva de mais de 3.000m² e 80 trabalhadores experientes, com capacidade produtiva de mais de 800.000 volantes mensais.",
      hi: "हमारी फैक्टरी की स्थापना 27-02-2006 को हुई थी। 80 कुशल कर्मचारियों के साथ, हम मासिक 800,000 टुकड़ों का उत्पादन करते हैं।",
      zh: "本厂始建于 2006-02-27，深耕水龙头手柄及五金制造已有17年。厂房占地面积超3000平方米，现稳定运行多台伺服注塑及磨具CNC机组，月精密五金注塑配件产能超过80万件。"
    }
  },
  {
    qMap: {
      en: "Do you support custom molding (OEM/ODM)?",
      ru: "Поддерживаете ли вы индивидуальные пресс-формы (OEM/ODM)?",
      pt: "Vocês suportam moldagem personalizada (OEM/ODM)?",
      hi: "क्या आप कस्टम मोल्डिंग (OEM/ODM) का समर्थन करते हैं?",
      zh: "工厂支持 OEM/ODM 定制开模服务吗？"
    },
    aMap: {
      en: "Yes. Custom B2B tooling is our core specialty. We have an in-house mold-making department that can adjust, modify, or create brand-new molds from your engineering drawings or physical samples within 24 hours.",
      ru: "Да. Изготовление пресс-форм под заказ — наша главная специализация. Собственный цех пресс-форм позволяет модифицировать или проектировать новые формы по вашим чертежам за 24 часа.",
      pt: "Sim. O desenvolvimento de ferramentaria própria é a nossa especialidade. Nossa equipe interna projeta e otimiza novos moldes de acordo com seus desenhos técnicos em tempo recorde.",
      hi: "हाँ। कस्टम मोल्डिंग हमारी मुख्य विशेषता है। हम आपके चित्र के अनुसार 24 घंटे के भीतर मोल्ड बना सकते हैं।",
      zh: "支持。大宗定制开模是我们的核心业务。工厂建有独立的模具开发与精密数控CNC车间。能够根据您的 CAD/3D 图纸或实物样板，最快在 24 小时内完成出样及开模修正。"
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

  const getWhatsAppLink = (text) => {
    const defaultText = text || "Hello, I am interested in Fujian Xialong / Xiahua patented bathroom accessories.";
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
          
          {/* Logo with Real Corporate Logo Image fallback to factory icon */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <img 
                src="/assets/images/logo.jpg" 
                alt="Xiahua Logo" 
                className="h-11 w-auto object-contain rounded-lg border border-slate-100 shadow-sm"
                onError={(e) => {
                  e.target.style.display = 'none'; // If real logo fails, hide it and default icon takes over
                }}
              />
              <div className="bg-blue-800 text-white p-2 rounded-lg flex items-center justify-center">
                <Factory size={20} className="stroke-[2.5]" />
              </div>
            </div>
            <div className="text-left">
              <span className="font-extrabold text-lg text-slate-900 tracking-tight block leading-none">XIALONG SANITARY</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1 block">Xiahua Faucet Handles</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-sm font-semibold text-slate-700 hover:text-blue-800 transition-colors">{t.navHome}</a>
            <a href="#products" className="text-sm font-semibold text-slate-700 hover:text-blue-800 transition-colors">{t.navProducts}</a>
            <a href="#patents" className="text-sm font-semibold text-slate-700 hover:text-blue-800 transition-colors">{t.navPatents}</a>
            <a href="#factory" className="text-sm font-semibold text-slate-700 hover:text-blue-800 transition-colors">{t.navAbout}</a>
            <a href="#faq" className="text-sm font-semibold text-slate-700 hover:text-blue-800 transition-colors">{t.navFAQ}</a>
            <a href="#contact" className="text-sm font-semibold text-slate-700 hover:text-blue-800 transition-colors">{t.navContact}</a>
          </nav>

          {/* Language Selector & CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Lang Dropdown */}
            <div className="relative flex items-center gap-1.5 bg-slate-100 p-2 rounded-lg border border-slate-200">
              <Globe size={16} className="text-slate-500" />
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value)}
                className="bg-transparent text-sm font-bold text-slate-700 cursor-pointer focus:outline-none pr-1.5 animate-fade-in"
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
          <div className="flex lg:hidden items-center gap-3">
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
          <div className="lg:hidden border-t border-slate-200 bg-white py-4 px-6 space-y-4 animate-fade-in shadow-inner text-left">
            <nav className="flex flex-col gap-3">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-700">{t.navHome}</a>
              <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-700">{t.navProducts}</a>
              <a href="#patents" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-700">{t.navPatents}</a>
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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute top-12 left-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-12 right-12 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide text-blue-300">
                <ShieldCheck size={14} className="stroke-[2.5]" />
                <span>{t.heroBadge}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold tracking-tight leading-[1.1] text-white">
                {t.heroTitle}
              </h1>
              <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
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

              {/* B2B Technical Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800">
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white">100+</span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.statClients}</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white">800K+</span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.statOutput}</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white">17+</span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.statExperience}</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white">100%</span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.statQC}</span>
                </div>
              </div>

            </div>

            {/* Right Hero Image Frame (Fidelity Balance test representation) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[420px] lg:max-w-none rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 p-3">
                <img 
                  src="/assets/images/hero-faucet.jpg" 
                  alt="Sleek chrome handle being weighed on a balance" 
                  className="w-full h-[380px] object-cover rounded-2xl grayscale-[5%] brightness-95"
                />
                <div className="absolute inset-x-3 bottom-3 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent p-5 rounded-2xl flex flex-col justify-end text-left">
                  <span className="text-xs font-extrabold text-blue-400 uppercase tracking-widest">{t.specModel}: XH-FC-03</span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-1">99g Heavy Duty Solid Cast Brass</h3>
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
                <FileText size={24} className="stroke-[2]" />
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
                <Zap size={24} className="stroke-[2]" />
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

                  <div className="p-6 space-y-4">
                    <h3 className="font-extrabold text-slate-900 text-base leading-snug line-clamp-2 min-h-[44px] text-left">
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

      {/* NATIONAL PATENTS SECTION (High-Fidelity PDF integration) */}
      <section id="patents" className="py-20 bg-white border-t border-slate-200" data-component="patent-showcase">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-400/30 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wide text-yellow-800 uppercase">
              <Award size={14} />
              <span>SIPO China Authorized Patents</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.patentTitle}
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              {t.patentLede}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Patent 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white p-2">
                  <img src="/assets/certs/cert-utility-patent.jpg" alt="Utility Model Patent Certificate" className="w-full h-72 object-cover object-top rounded-xl" />
                </div>
                <div className="text-left space-y-2">
                  <span className="text-[10px] font-black tracking-widest text-blue-700 uppercase bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">Patent ZL2016</span>
                  <h3 className="font-extrabold text-slate-900 text-base leading-snug">{t.pat1Name}</h3>
                  <p className="text-xs font-bold text-slate-500">{t.pat1Num}</p>
                </div>
              </div>
              <div className="text-left pt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-400">
                {t.pat1Auth}
              </div>
            </div>

            {/* Patent 2 */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white p-2">
                  <img src="/assets/certs/cert-02.jpg" alt="Utility Model Patent Certificate 2" className="w-full h-72 object-cover object-top rounded-xl" />
                </div>
                <div className="text-left space-y-2">
                  <span className="text-[10px] font-black tracking-widest text-blue-700 uppercase bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">Patent ZL2016</span>
                  <h3 className="font-extrabold text-slate-900 text-base leading-snug">{t.pat2Name}</h3>
                  <p className="text-xs font-bold text-slate-500">{t.pat2Num}</p>
                </div>
              </div>
              <div className="text-left pt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-400">
                {t.pat2Auth}
              </div>
            </div>

            {/* Patent 3 */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white p-2">
                  <img src="/assets/certs/cert-03.jpg" alt="Utility Model Patent Certificate 3" className="w-full h-72 object-cover object-top rounded-xl" />
                </div>
                <div className="text-left space-y-2">
                  <span className="text-[10px] font-black tracking-widest text-blue-700 uppercase bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">SIPO Patent</span>
                  <h3 className="font-extrabold text-slate-900 text-base leading-snug">Design Integrity & Structure Authorization</h3>
                  <p className="text-xs font-bold text-slate-500">Official Seal Verified</p>
                </div>
              </div>
              <div className="text-left pt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-400">
                Authorized By SIPO People's Republic of China
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FACTORY AND QC SECTION */}
      <section id="factory" className="py-20 bg-slate-50 border-t border-slate-200" data-component="factory-showroom">
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
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 p-3 bg-white">
              <img 
                src="/assets/images/factory-b2b.jpg" 
                alt="Production Workshop of Fujian Xialong / Xiahua" 
                className="w-full h-[400px] object-cover rounded-2xl"
              />
              <div className="absolute top-6 left-6 bg-blue-800 text-white py-1.5 px-3 rounded-lg text-xs font-bold tracking-widest uppercase shadow-md">
                Fujian Xialong Head Office Building
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
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2.5 text-sm font-bold text-slate-800">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                  <span>ISO 9001:2015 Manufacturing Quality Certified</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-bold text-slate-800">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                  <span>SIPO China Authorized Core Technology Backed</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-bold text-slate-800">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                  <span>100% Hydraulic & Pneumatic Leak Test Certified before Packing</span>
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

                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">{t.formMsg}</label>
                  <textarea 
                    rows={4}
                    value={rfqMsg}
                    onChange={(e) => setRfqMsg(e.target.value)}
                    placeholder="Tell us what you are looking for (e.g. Model XH-ABS-101, 5000pcs, custom laser logo...)"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

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
              <h3 className="text-xl font-extrabold tracking-tight">FUJIAN XIALONG SANITARY WARE CO., LTD.</h3>
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
                <div className="bg-slate-50 rounded-2xl p-2 border border-slate-200">
                  <img 
                    src={selectedProduct.img} 
                    alt={selectedProduct.nameMap[lang]} 
                    className="w-full h-56 object-cover rounded-xl"
                  />
                </div>

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
