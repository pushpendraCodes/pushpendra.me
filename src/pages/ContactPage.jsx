import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { FaWhatsapp, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { EMAIL, PHONE } from '../lib/tokens';

const WHATSAPP_NUMBER = '918516064332';

const SERVICES = [
  'Website Development',
  'Mobile App',
  'Custom Software',
  'Automation & AI',
  'UI/UX Design',
  'Digital Marketing',
  'SEO',
];

const inputClass =
  'w-full border border-[rgba(244,242,236,0.12)] bg-[#101010] px-4 py-3.5 font-sans text-sm text-[#F4F2EC] placeholder:text-[#6B6A63] outline-none transition-colors focus:border-[var(--accent)]';

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

const EMPTY_FORM = {
  name: '',
  email: '',
  business: '',
  service: SERVICES[0],
  message: '',
};

const ContactPage = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [honey, setHoney] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error | activation

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honey) return;
    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Name: form.name,
          Email: form.email,
          Business: form.business || '—',
          Service: form.service,
          'Project details': form.message || '—',
          _subject: `New enquiry: ${form.service} — ${form.name}`,
          _replyto: form.email,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (/activat/i.test(data.message || '')) {
        setStatus('activation');
        return;
      }
      if (!res.ok || String(data.success) !== 'true') throw new Error(data.message);
      setStatus('sent');
      setForm(EMPTY_FORM);
    } catch {
      setStatus('error');
    }
  };

  const sendOnWhatsApp = () => {
    const text = [
      `Hi One9 Tech, I'm ${form.name || '(name)'}${form.business ? ` from ${form.business}` : ''}.`,
      form.email ? `Email: ${form.email}` : '',
      `I'm interested in: ${form.service}.`,
      form.message ? `Project details: ${form.message}` : '',
    ]
      .filter(Boolean)
      .join('\n');
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <main className="bg-[#080808] pt-28 md:pt-36">
      <header className="mx-auto max-w-[1400px] px-5 md:px-10">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono-label flex items-center gap-2.5 text-[var(--accent)]"
        >
          <span className="pulse-dot" />
          INDEX — START HERE
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="font-display mt-8 text-6xl text-[#F4F2EC] md:text-[7.5rem]"
        >
          Tell us the <br />
          <span className="text-[#6B6A63]">problem.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-8 max-w-[56ch] font-sans text-base leading-relaxed text-[#8A8A8A] md:text-lg"
        >
          Fill the brief below and it lands straight in our inbox — we reply
          within a few hours. Prefer chat? Send the same brief on WhatsApp, or
          reach us directly through any channel.
        </motion.p>
      </header>

      <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 py-16 md:grid-cols-12 md:px-10 md:py-24">
        {/* ======== Brief form ======== */}
        <motion.form
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 md:col-span-7"
        >
          <span className="font-mono-label text-[#6B6A63]">PROJECT BRIEF</span>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="font-mono-label text-[#8A8A8A]">YOUR NAME *</span>
              <input
                type="text"
                required
                value={form.name}
                onChange={set('name')}
                placeholder="Full name"
                className={inputClass}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-mono-label text-[#8A8A8A]">EMAIL *</span>
              <input
                type="email"
                required
                value={form.email}
                onChange={set('email')}
                placeholder="you@company.com"
                autoComplete="email"
                className={inputClass}
              />
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <span className="font-mono-label text-[#8A8A8A]">BUSINESS / BRAND</span>
            <input
              type="text"
              value={form.business}
              onChange={set('business')}
              placeholder="Company or project name"
              className={inputClass}
            />
          </label>

          <input
            type="text"
            name="_honey"
            value={honey}
            onChange={(e) => setHoney(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <div className="flex flex-col gap-2">
            <span className="font-mono-label text-[#8A8A8A]">WHAT DO YOU NEED? *</span>
            <div className="flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setForm({ ...form, service: s })}
                  className={`border px-4 py-2.5 font-mono-label transition-colors ${
                    form.service === s
                      ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]'
                      : 'border-[rgba(244,242,236,0.12)] bg-[#101010] text-[#8A8A8A] hover:border-[rgba(244,242,236,0.3)] hover:text-[#F4F2EC]'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <label className="flex flex-col gap-2">
            <span className="font-mono-label text-[#8A8A8A]">PROJECT DETAILS</span>
            <textarea
              rows={5}
              value={form.message}
              onChange={set('message')}
              placeholder="What are you building? What problem should it solve? Any deadline?"
              className={`${inputClass} resize-none`}
            />
          </label>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2.5 bg-[var(--accent)] px-9 py-4 font-mono-label text-[#080808] transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === 'sending' ? 'Sending…' : 'Send enquiry'}{' '}
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={sendOnWhatsApp}
              className="inline-flex items-center gap-2.5 border border-[rgba(244,242,236,0.2)] px-7 py-4 font-mono-label text-[#F4F2EC] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Or WhatsApp <FaWhatsapp className="h-4 w-4" />
            </button>
          </div>

          <p
            role="status"
            aria-live="polite"
            className={`font-mono-label ${
              status === 'sent'
                ? 'text-[var(--accent)]'
                : status === 'error' || status === 'activation'
                  ? 'text-[#FF6B6B]'
                  : 'text-[#6B6A63]'
            }`}
          >
            {status === 'sent' &&
              'THANKS — YOUR BRIEF IS IN OUR INBOX. WE’LL REPLY WITHIN A FEW HOURS.'}
            {status === 'error' &&
              'COULDN’T SEND RIGHT NOW — PLEASE TRY WHATSAPP OR EMAIL US DIRECTLY.'}
            {status === 'activation' &&
              'FORM NOT ACTIVATED YET — CHECK THE ONE9TECH INBOX FOR THE “ACTIVATE FORM” EMAIL.'}
            {(status === 'idle' || status === 'sending') &&
              'YOUR BRIEF IS EMAILED DIRECTLY TO OUR TEAM — NEVER SHARED'}
          </p>
        </motion.form>

        {/* ======== Direct channels ======== */}
        <motion.aside
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col gap-px border border-[rgba(244,242,236,0.08)] bg-[rgba(244,242,236,0.08)] self-start md:col-span-5"
        >
          {[
            {
              label: 'WHATSAPP',
              value: PHONE,
              href: `https://wa.me/${WHATSAPP_NUMBER}`,
              note: 'FASTEST — USUALLY WITHIN HOURS',
            },
            {
              label: 'EMAIL',
              value: EMAIL,
              href: `mailto:${EMAIL}`,
              note: 'BRIEFS, DOCS & ATTACHMENTS',
            },
            {
              label: 'PHONE',
              value: PHONE,
              href: `tel:${PHONE.replace(/\s/g, '')}`,
              note: 'MON–SAT · 10AM–8PM IST',
            },
          ].map((ch) => (
            <a
              key={ch.label}
              href={ch.href}
              target={ch.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-4 bg-[#080808] p-6 transition-colors hover:bg-[#101010]"
            >
              <div>
                <p className="font-mono-label text-[#6B6A63]">{ch.label}</p>
                <p className="mt-2 font-sans text-base font-medium text-[#F4F2EC]">
                  {ch.value}
                </p>
                <p className="font-mono-label mt-2 text-[#6B6A63]">{ch.note}</p>
              </div>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#8A8A8A] transition-colors group-hover:text-[var(--accent)]" />
            </a>
          ))}

          <div className="bg-[#080808] p-6">
            <p className="font-mono-label text-[#6B6A63]">STUDIO</p>
            <p className="mt-2 font-sans text-base font-medium text-[#F4F2EC]">
              Remote-first studio
            </p>
            <p className="font-mono-label mt-2 text-[#6B6A63]">
              WORKING WITH CLIENTS WORLDWIDE
            </p>
          </div>

          <div className="flex items-center gap-5 bg-[#080808] p-6">
            <a
              href="https://github.com/pushpendraCodes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#8A8A8A] transition-colors hover:text-[var(--accent)]"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/1pushpendrapatel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#8A8A8A] transition-colors hover:text-[var(--accent)]"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/one9.tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#8A8A8A] transition-colors hover:text-[var(--accent)]"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
            <span className="font-mono-label ml-auto inline-flex items-center gap-2 text-[#8A8A8A]">
              <span className="pulse-dot" />
              SYSTEMS ONLINE
            </span>
          </div>
        </motion.aside>
      </section>

      {/* Marquee-style closing line */}
      <div className="border-t border-[rgba(244,242,236,0.08)]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-8 md:px-10">
          <span className="font-mono-label text-[#6B6A63]">
            NO RETAINERS REQUIRED · FIXED-SCOPE BUILDS WELCOME
          </span>
          <span className="font-mono-label hidden items-center gap-2 text-[#6B6A63] sm:inline-flex">
            IDEA <ArrowRight className="h-3 w-3" /> LIVE PRODUCT
          </span>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
