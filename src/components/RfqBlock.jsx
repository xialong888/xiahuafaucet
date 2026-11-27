import React, { useEffect, useState } from 'react';
import { Send, MessageCircle, CheckCircle2, Copy } from 'lucide-react';
import { BRAND, waLink, rfqMailto } from '../lib/site';
import { track } from '../lib/analytics';

const STRINGS = {
  en: {
    title: 'Request a quotation',
    hint: 'Fields marked * are required. Your message opens in your own mail app — no data is stored on this site.',
    labels: {
      name: 'Full Name *',
      email: 'Business Email *',
      company: 'Company',
      country: 'Country',
      whatsapp: 'WhatsApp / Phone',
      qty: 'Estimated Quantity (pcs)',
      message: 'Message / specifications',
    },
    ph: {
      name: 'Jane Doe',
      email: 'jane@company.com',
      company: 'Company Ltd.',
      country: 'Saudi Arabia',
      whatsapp: '+966 ...',
      qty: '10,000',
      message: 'Finish (chrome / matte black / gunmetal), packaging, target price...',
    },
    submit: 'Generate & send RFQ',
    whatsapp: 'Chat on WhatsApp',
    successTitle: 'Your RFQ is ready to send',
    successDesc:
      'Your mail app should have opened with a pre-filled message. If it did not open, use one of the options below — either one reaches our export team.',
    openAgain: 'Open email again',
    sendWa: 'Send via WhatsApp',
    copy: 'Copy details',
    copied: 'Copied',
    note: 'Typical first reply within 12 hours (Mon\u2013Sat, GMT+8).',
  },
  vi: {
    title: 'Yêu cầu báo giá',
    hint: 'Các trường có dấu * là bắt buộc. Nội dung sẽ mở trong ứng dụng email của bạn — trang này không lưu dữ liệu.',
    labels: {
      name: 'Họ và tên *',
      email: 'Email doanh nghiệp *',
      company: 'Công ty',
      country: 'Quốc gia',
      whatsapp: 'WhatsApp / Điện thoại',
      qty: 'Số lượng dự kiến (chiếc)',
      message: 'Nội dung / thông số kỹ thuật',
    },
    ph: {
      name: 'Nguyễn Văn A',
      email: 'a@congty.vn',
      company: 'Công ty TNHH ...',
      country: 'Việt Nam',
      whatsapp: '+84 ...',
      qty: '10.000',
      message: 'Bề mặt (mạ gương / đen mờ / gunmetal), đóng gói, giá mục tiêu...',
    },
    submit: 'Tạo và gửi RFQ',
    whatsapp: 'Trao đổi qua WhatsApp',
    successTitle: 'Yêu cầu của bạn đã sẵn sàng gửi',
    successDesc:
      'Ứng dụng email của bạn sẽ mở với nội dung đã điền sẵn. Nếu không mở, hãy dùng một trong các lựa chọn dưới đây — cách nào cũng đến được đội xuất khẩu.',
    openAgain: 'Mở lại email',
    sendWa: 'Gửi qua WhatsApp',
    copy: 'Sao chép nội dung',
    copied: 'Đã sao chép',
    note: 'Phản hồi đầu tiên thường trong 12 giờ (Thứ 2–Thứ 7, GMT+8).',
  },
};

const FIELD_ORDER = ['name', 'email', 'company', 'country', 'whatsapp', 'qty'];

/**
 * Zero-dependency RFQ block: composes a complete email in the visitor's mail client
 * and offers a WhatsApp fallback, so no enquiry is lost before a form endpoint exists.
 * Copy switches with the site language (en / vi) via <html lang>.
 */
export default function RfqBlock({ model = '', intent = 'product', lang: langProp, message = '', onMessageChange }) {
  const [form, setForm] = useState({});
  const [sent, setSent] = useState(false);
  const [mailto, setMailto] = useState('');
  const [copied, setCopied] = useState(false);

  const docLang =
    langProp || (typeof document !== 'undefined' ? document.documentElement.lang : 'en') || 'en';
  const s = STRINGS[docLang] || STRINGS.en;

  // keep the textarea in sync when the configurator pushes a composed spec list
  useEffect(() => {
    if (typeof message === 'string' && message.length) {
      setForm((f) => (f.message === message ? f : { ...f, message }));
    }
  }, [message]);

  const set = (k) => (e) => {
    const v = e.target.value;
    setForm((f) => ({ ...f, [k]: v }));
    if (k === 'message' && onMessageChange) onMessageChange(v);
  };

  const compose = () => {
    const lines = [
      docLang === 'vi' ? 'Xin chào đội ngũ Xiahua,' : 'Hello Xiahua team,',
      '',
      docLang === 'vi'
        ? `Tôi muốn nhận báo giá${model ? ` cho mã ${model}` : ''}.`
        : `I would like a quotation${model ? ` for model ${model}` : ''}.`,
      '',
      `${s.labels.name.replace(' *', '')}: ${form.name || ''}`,
      `${s.labels.company}: ${form.company || ''}`,
      `${s.labels.country}: ${form.country || ''}`,
      `${s.labels.email.replace(' *', '')}: ${form.email || ''}`,
      `${s.labels.whatsapp}: ${form.whatsapp || ''}`,
      `${s.labels.qty}: ${form.qty || ''}`,
      '',
      `${s.labels.message}:`,
      form.message || '-',
      '',
      docLang === 'vi'
        ? 'Vui lòng phản hồi đơn giá, MOQ, phương án đóng gói và thời gian giao hàng.'
        : 'Please reply with unit price, MOQ, packaging options and lead time.',
      `${BRAND.siteUrl}`,
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
      language: docLang,
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
    } catch (err) {
      /* clipboard may be blocked */
    }
  };

  if (sent) {
    return (
      <div id="rfq" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
        <div className="flex items-center gap-2 text-emerald-800">
          <CheckCircle2 size={20} />
          <h3 className="text-lg font-extrabold">{s.successTitle}</h3>
        </div>
        <p className="mt-2 text-sm text-emerald-900/80">{s.successDesc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a href={mailto} className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-800">
            {s.openAgain}
          </a>
          <a
            href={waLink(compose())}
            data-loc="rfq-success"
            className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-emerald-800 ring-1 ring-emerald-300 hover:bg-emerald-100"
          >
            {s.sendWa}
          </a>
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-sm font-bold text-slate-700 ring-1 ring-slate-300 hover:bg-slate-50"
          >
            <Copy size={14} /> {copied ? s.copied : s.copy}
          </button>
        </div>
        <p className="mt-3 text-xs text-emerald-900/60">{s.note}</p>
      </div>
    );
  }

  return (
    <form id="rfq" onSubmit={submit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-extrabold text-slate-900">{s.title}</h3>
      <p className="mt-1 text-xs text-slate-500">{s.hint}</p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {FIELD_ORDER.map((key) => (
          <label key={key} className="block">
            <span className="mb-1 block text-xs font-bold text-slate-700">{s.labels[key]}</span>
            <input
              type={key === 'email' ? 'email' : 'text'}
              required={key === 'name' || key === 'email'}
              placeholder={s.ph[key]}
              value={form[key] || ''}
              onChange={set(key)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600"
            />
          </label>
        ))}
      </div>

      <label className="mt-3 block">
        <span className="mb-1 block text-xs font-bold text-slate-700">{s.labels.message}</span>
        <textarea
          rows={4}
          value={form.message || ''}
          onChange={set('message')}
          placeholder={s.ph.message}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600"
        />
      </label>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-800 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-900"
        >
          <Send size={16} /> {s.submit}
        </button>
        <a
          href={waLink()}
          data-loc="rfq-block"
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-700"
        >
          <MessageCircle size={16} /> {s.whatsapp}
        </a>
      </div>
    </form>
  );
}
