import React from 'react';
import { ArrowLeft, MessageCircle, Mail, ShieldCheck } from 'lucide-react';
import { BRAND, waLink } from '../lib/site';

const STRINGS = {
  en: { quote: 'Request a Quote', whatsapp: 'WhatsApp', home: 'Home' },
  vi: { quote: 'Yêu cầu báo giá', whatsapp: 'WhatsApp', home: 'Trang chủ' },
};

/**
 * Shared shell for the new standalone pages (product / blog / service).
 * Keeps the homepage untouched while giving every new URL a real, crawlable page.
 */
export default function PageShell({ children, crumb }) {
  const lang = typeof document !== 'undefined' ? document.documentElement.lang : 'en';
  const s = STRINGS[lang] || STRINGS.en;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <a href="/" className="flex items-center gap-2 text-sm font-extrabold tracking-tight text-slate-900">
            <ArrowLeft size={16} className="text-blue-700" />
            <span>XIAHUA SANITARY</span>
          </a>
          <div className="flex items-center gap-2">
            <a
              href={waLink()}
              data-loc="page-header"
              className="hidden items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-bold text-white hover:bg-emerald-700 sm:flex"
            >
              <MessageCircle size={14} /> {s.whatsapp}
            </a>
            <a
              href="#rfq"
              className="rounded-lg bg-blue-800 px-3 py-2 text-xs font-bold text-white hover:bg-blue-900"
            >
              {s.quote}
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        {crumb && (
          <nav className="mb-6 text-xs font-semibold text-slate-500">
            <a href="/" className="hover:text-blue-800">
              {s.home}
            </a>
            <span className="mx-1.5">/</span>
            <span className="text-slate-700">{crumb}</span>
          </nav>
        )}
        {children}
      </main>

      <footer className="mt-16 border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            {BRAND.legalName} &middot; Founded {BRAND.founded} &middot; Nan&rsquo;an, Quanzhou, Fujian, China
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${BRAND.rfqEmail}`}
              data-loc="page-footer"
              className="inline-flex items-center gap-1 hover:text-blue-800"
            >
              <Mail size={12} /> {BRAND.rfqEmail}
            </a>
            <span className="inline-flex items-center gap-1">
              <ShieldCheck size={12} /> ISO 9001:2015
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
