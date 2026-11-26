import React from 'react';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import useSeo from '../lib/useSeo';
import { BRAND, waLink } from '../lib/site';

export default function NotFound({ path }) {
  useSeo({
    title: 'Page not found (404) | Xiahua Sanitary',
    description: 'The page you requested does not exist. Browse our ABS faucet handles, shower sliders or contact the export team.',
    canonical: `${BRAND.siteUrl}${path || '/'}`,
    robots: 'noindex,follow',
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-800">Error 404</p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        This page does not exist
      </h1>
      <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
        The link may be outdated. The catalogue, product specifications and RFQ form are all reachable from the
        homepage.
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-800 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-900"
        >
          <ArrowLeft size={16} /> Back to homepage
        </a>
        <a
          href={waLink('Hello, I could not find a page on your website.')}
          data-loc="404"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-emerald-700 ring-1 ring-emerald-200 hover:bg-emerald-50"
        >
          <MessageCircle size={16} /> Ask on WhatsApp
        </a>
      </div>
    </div>
  );
}
