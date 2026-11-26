import React from 'react';
import { CheckCircle2, Ruler, Package, Award, Clock } from 'lucide-react';
import PageShell from './PageShell';
import RfqBlock from '../components/RfqBlock';
import useSeo from '../lib/useSeo';
import { BRAND } from '../lib/site';

const CANONICAL = `${BRAND.siteUrl}/products/abs-faucet-handles/`;

const SPECS = [
  ['Base models', 'XH-ABS-101, XH-ABS-102, XH-SHSL-202, XH-ABSGQ-101'],
  ['Material', 'Premium virgin ABS (anti-corrosion, rust-free, lightweight)'],
  ['Finish options', '9-class mirror chrome · matte black (anti-scratch electrophoretic) · gunmetal grey'],
  ['Spline / fitting', 'Quick-install shower head socket (Ø 22–25 mm) · custom drawing accepted'],
  ['Packaging', '5-layer double-wall export carton · OEM colour box · neutral polybag'],
  ['MOQ', '5,000 pcs (plastic injection scale)'],
  ['Sampling', 'CAD / 3D drawing within 24 hours of requirement confirmation'],
  ['Quality control', '100% hydraulic & pneumatic leak test · salt-spray checked before packing'],
  ['Compliance', 'ISO 9001:2015 · Chinese national utility model patents'],
];

export default function ProductABSHandles() {
  useSeo({
    title: 'ABS Faucet Handle Manufacturer — OEM/ODM | Xiahua Sanitary',
    description:
      'ABS faucet handle manufacturer in Nan’an, China. Patented XH-ABS-101 / XH-ABS-102 lever handles, chrome, matte black and gunmetal finishes, MOQ 5,000 pcs, 24-hour CAD drawings.',
    canonical: CANONICAL,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'ABS Faucet Handle (XH-ABS-101 / XH-ABS-102)',
      description:
        'Patented ABS faucet lever handles with 9-class mirror chrome, matte black or gunmetal finish for OEM/ODM sanitary ware programmes.',
      brand: { '@type': 'Brand', name: 'Xiahua Sanitary' },
      manufacturer: { '@type': 'Organization', name: BRAND.legalName },
      image: [`${BRAND.siteUrl}/assets/products/xh-product-101-7.webp`],
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '0.70',
        offerCount: '4',
        availability: 'https://schema.org/InStock',
        url: CANONICAL,
      },
    },
  });

  return (
    <PageShell crumb="ABS Faucet Handles">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <img
            src="/assets/products/xh-product-101-7.webp"
            alt="Patented ABS faucet lever handle with mirror chrome finish"
            width="720"
            height="960"
            className="w-full rounded-2xl border border-slate-200 object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-800">Core product</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            ABS Faucet Handles — OEM/ODM Manufacturer
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Xiahua has produced ABS faucet handles since {BRAND.founded} in Luncang, Nan’an — the plumbing
            cluster of Fujian, China. Our lever handles are the original ABS design in this category and are
            covered by Chinese national utility model patents, so buyers can export without design-dispute risk.
          </p>

          <ul className="mt-5 space-y-2 text-sm text-slate-700">
            {[
              'Mirror chrome, matte black or gunmetal — one tool, three finishes',
              'Rust-free ABS body with brass-free construction, lower freight weight',
              'Patented design (ZL 2016 2 0363475.1 / ZL 2016 2 0363465.8)',
              '800,000 injection parts per month capacity',
              '24-hour CAD / 3D drawing turnaround before tooling',
            ].map((x) => (
              <li key={x} className="flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-600" />
                <span>{x}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid grid-cols-2 gap-3 text-xs sm:grid-cols-4">
            {[
              [Ruler, 'Spline', 'Ø 22–25 mm'],
              [Package, 'MOQ', '5,000 pcs'],
              [Clock, 'CAD', '24 hours'],
              [Award, 'QC', '100% tested'],
            ].map(([Icon, label, value]) => (
              <div key={label} className="rounded-xl border border-slate-200 bg-white p-3 text-center">
                <Icon size={16} className="mx-auto text-blue-800" />
                <p className="mt-1 font-bold text-slate-500">{label}</p>
                <p className="font-extrabold text-slate-900">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-extrabold text-slate-900">Technical specifications</h2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <tbody>
              {SPECS.map(([k, v], i) => (
                <tr key={k} className={i % 2 ? 'bg-slate-50' : ''}>
                  <th className="w-48 px-4 py-3 align-top font-bold text-slate-700">{k}</th>
                  <td className="px-4 py-3 text-slate-600">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Specifications shown are those published for the current catalogue. Confirmed dimensional drawings are
          issued per order before tooling.
        </p>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-3">
        {[
          ['Chrome', '/assets/products/xh-product-101-8.webp'],
          ['Matte black', '/assets/products/xh-product-101-9.webp'],
          ['Gunmetal', '/assets/products/xh-product-101-10.webp'],
        ].map(([label, src]) => (
          <figure key={label} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <img src={src} alt={`ABS faucet handle in ${label.toLowerCase()} finish`} width="480" height="640" decoding="async" className="h-64 w-full object-cover" />
            <figcaption className="px-4 py-3 text-xs font-bold text-slate-700">{label} finish</figcaption>
          </figure>
        ))}
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900">FAQ</h2>
          <div className="mt-4 space-y-3">
            {[
              [
                'Can you produce our own handle shape?',
                'Yes. Send a drawing, sample or reference photo; our engineering team returns a CAD/3D proposal and a tooling feasibility note within 24 hours.',
              ],
              [
                'Which finishes can be combined with ABS?',
                'Mirror chrome (9-class electroplating), anti-scratch electrophoretic matte black and gunmetal grey are the standard finishes on this platform.',
              ],
              [
                'What is the minimum order?',
                '5,000 pcs per model and finish for injection-scale production. Trial quantities can be discussed for stock colours.',
              ],
              [
                'Are the designs protected?',
                'The lever handle designs are covered by Chinese national utility model patents issued by SIPO/CNIPA, which protects buyers exporting to third markets.',
              ],
            ].map(([q, a]) => (
              <details key={q} className="rounded-xl border border-slate-200 bg-white p-4">
                <summary className="cursor-pointer text-sm font-bold text-slate-800">{q}</summary>
                <p className="mt-2 text-sm leading-6 text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
        <RfqBlock model="XH-ABS-101 / XH-ABS-102" intent="product" />
      </section>
    </PageShell>
  );
}
