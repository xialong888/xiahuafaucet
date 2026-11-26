// ---------------------------------------------------------------------------
// Single source of truth for brand + contact facts.
// Change a value here and it propagates everywhere the site renders these facts.
// Items marked PENDING must be confirmed by the business owner before go-live.
// ---------------------------------------------------------------------------

export const BRAND = {
  // Legal English name used in titles / JSON-LD. Owner decision pending (see review notes).
  legalName: 'Fujian Xiahua Sanitary Ware Co., Ltd.',
  // Secondary entity that appears in body copy on the current site.
  factoryAlias: 'Fujian Nan’an Luncang Xiahua Sanitary Ware Factory',
  // How both names are presented together, in one sentence.
  combinedName:
    'Fujian Xiahua Sanitary Ware Co., Ltd. (also known as Fujian Nan’an Luncang Xiahua Sanitary Ware Factory)',

  founded: 2006,
  // 2006 -> 2026 = 20 years. Replaces the outdated "17+".
  yearsLabel: '20+',
  yearsText: '20+ Years of Precision Manufacturing',

  // PENDING: switch to sales@xiahuafaucet.com once the domain mailbox is live.
  rfqEmail: 'sales@xiahuafaucet.com',
  // Fallback mailbox that is actually monitored today.
  fallbackEmail: '375039134@qq.com',

  phone: '+86 189 6575 8892',
  whatsapp: '8618965758892',

  siteUrl: 'https://www.xiahuafaucet.com',

  patents: [
    { no: 'ZL 2016 2 0363475.1', title: 'Easy-to-Manufacture Mixing Valve Handle', granted: '2016-09-07' },
    { no: 'ZL 2016 2 0363465.8', title: 'Mixing Valve Handle for Precise Adjustment', granted: '2016-09-07' },
    { no: 'ZL 2025 2 0342911.6', title: 'Shower Bar Slider (Quick-Install Shower Head Socket)', granted: '2026-05-12' },
  ],
};

export const waLink = (text) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    text || 'Hello, I am interested in Xiahua faucet handles and shower accessories.'
  )}`;

export const rfqMailto = (subject, body) =>
  `mailto:${BRAND.rfqEmail}?cc=${BRAND.fallbackEmail}&subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
