import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle2, Copy } from 'lucide-react';
import { BRAND, waLink, rfqMailto } from '../lib/site';
import { track } from '../lib/analytics';

const FIELDS = [
  { key: 'name', label: 'Full Name *', type: 'text', required: true, ph: 'Jane Doe' },
  { key: 'email', label: 'Business Email *', type: 'email', required: true, ph: 'jane@company.com' },
  { key: 'company', label: 'Company', type: 'text', ph: 'Company Ltd.' },
  { key: 'country', label: 'Country', type: 'text', ph: 'Saudi Arabia' },
  { key: 'whatsapp', label: 'WhatsApp / Phone', type: 'text', ph: '+966 ...' },
  { key: 'qty', label: 'Estimated Quantity (pcs)', type: 'text', ph: '10,000' },
];

/**
 * Zero-dependency RFQ block: composes a complete email in the visitor's mail client
 * and offers a WhatsApp fallback, so no enquiry is silently lost before a form
 * endpoint (Formspree / Web3Forms) is connected.
 */
export default function RfqBlock({ model = '', intent = 'product' }) {
  const [form, setForm] = useState({});
  const [sent, setSent] = useState(false);
  const [mailto, setMailto] = useState('');
  const [copied, setCopied] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const compose = () => {
    const lines = [
      'Hello Xiahua team,',
      '',
      `I would like a quotation${model ? ` for model ${model}` : ''}.`,
      '',
      `Name: ${form.name || ''}`,
      `Company: ${form.company || ''}`,
      `Country: ${form.country || ''}`,
      `Business email: ${form.email || ''}`,
      `WhatsApp / Phone: ${form.whatsapp || ''}`,
      `Estimated quantity: ${form.qty || ''}`,
      `Interested in: ${model || intent}`,
      '',
      'Message:',
      form.message || '(none)',
      '',
      'Please reply with unit price, MOQ, packaging options and lead time.',
      `Sent from ${BRAND.siteUrl}`,
    ];
    return lines.join('\n');
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    const body = compose();
    const link = rfqMailto(
      `RFQ${model ? ` ${model}` : ''} — ${form.company || form.name} (${form.country || 'n/a'})`,
      body
    );
    track('generate_lead', {
      form_id: intent === 'product' ? 'rfq_product_page' : 'rfq_blog',
      model,
      quantity: form.qty,
      country: form.country,
      method: 'mailto_fallback',
    });
    setMailto(link);
    setSent(true);
    window.location.href = link;
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(compose());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      /* clipboard may be blocked */
    }
  };

  if (sent) {
    return (
      <div id="rfq" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
        <div className="flex items-center gap-2 text-emerald-800">
          <CheckCircle2 size={20} />
          <h3 className="text-lg font-extrabold">Your RFQ is ready to send</h3>
        </div>
        <p className="mt-2 text-sm text-emerald-900/80">
          Your mail app should have opened with a pre-filled message. If it did not open, use one of the
          options below — either one reaches our export team.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a href={mailto} className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-800">
            Open email again
          </a>
          <a
            href={waLink(compose())}
            data-loc="rfq-success"
            className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-emerald-800 ring-1 ring-emerald-300 hover:bg-emerald-100"
          >
            Send via WhatsApp
          </a>
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-sm font-bold text-slate-700 ring-1 ring-slate-300 hover:bg-slate-50"
          >
            <Copy size={14} /> {copied ? 'Copied' : 'Copy details'}
          </button>
        </div>
        <p className="mt-3 text-xs text-emerald-900/60">
          Typical first reply within 12 hours (Mon–Sat, GMT+8).
        </p>
      </div>
    );
  }

  return (
    <form id="rfq" onSubmit={submit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-extrabold text-slate-900">Request a quotation</h3>
      <p className="mt-1 text-xs text-slate-500">
        Fields marked * are required. Your message opens in your own mail app — no data is stored on this site.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {FIELDS.map((f) => (
          <label key={f.key} className="block">
            <span className="mb-1 block text-xs font-bold text-slate-700">{f.label}</span>
            <input
              type={f.type}
              required={f.required}
              placeholder={f.ph}
              value={form[f.key] || ''}
              onChange={set(f.key)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600"
            />
          </label>
        ))}
      </div>

      <label className="mt-3 block">
        <span className="mb-1 block text-xs font-bold text-slate-700">Message / specifications</span>
        <textarea
          rows={4}
          value={form.message || ''}
          onChange={set('message')}
          placeholder="Finish (chrome / matte black / gunmetal), packaging, target price..."
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600"
        />
      </label>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-800 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-900"
        >
          <Send size={16} /> Generate &amp; send RFQ
        </button>
        <a
          href={waLink()}
          data-loc="rfq-block"
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-700"
        >
          <MessageCircle size={16} /> Chat on WhatsApp
        </a>
      </div>
    </form>
  );
}
