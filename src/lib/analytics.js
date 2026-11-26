// ---------------------------------------------------------------------------
// Analytics layer.
// Pushes GA4-compatible events into window.dataLayer so that a GTM container
// can map them to GA4 without further code changes. If GA4 is loaded directly
// (window.gtag available) events are also forwarded to gtag.
// ---------------------------------------------------------------------------

export const track = (event, params = {}) => {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, params);
    }
  } catch (e) {
    /* analytics must never break the page */
  }
};

// Called once on boot. IDs are injected at build time (VITE_GA_ID / VITE_GTM_ID)
// or left empty until the business creates its GA4 property / GTM container.
export const initAnalytics = () => {
  const gtmId = import.meta.env?.VITE_GTM_ID;
  const gaId = import.meta.env?.VITE_GA_ID;

  window.dataLayer = window.dataLayer || [];

  if (gtmId) {
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(s);
  } else if (gaId) {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(s);
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', gaId, { send_page_view: false });
  }
};

// Delegated listeners: one place covers every WhatsApp / email / video trigger
// in the page, including ones rendered later by React.
export const bindGlobalTracking = () => {
  const onClick = (e) => {
    const a = e.target?.closest?.('a');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    if (href.includes('wa.me')) {
      track('click_whatsapp', { link_location: a.dataset.loc || 'inline' });
    } else if (href.startsWith('mailto:')) {
      track('click_email', { link_location: a.dataset.loc || 'inline' });
    } else if (/\.(pdf|dwg|step|zip)$/i.test(href)) {
      track('file_download', { file_name: href.split('/').pop() });
    }
  };
  document.addEventListener('click', onClick, true);

  const onPlay = (e) => {
    if (e.target?.tagName === 'VIDEO') {
      track('video_play', { video_src: (e.target.currentSrc || '').split('/').pop() });
    }
  };
  document.addEventListener('play', onPlay, true);

  return () => {
    document.removeEventListener('click', onClick, true);
    document.removeEventListener('play', onPlay, true);
  };
};
