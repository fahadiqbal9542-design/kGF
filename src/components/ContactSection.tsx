import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Send, Check, Copy, MessageCircle, MapPin, Sparkles, PhoneCall } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full-Stack Web App',
    budget: '$1,000 - $3,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset form after 4 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          service: 'Full-Stack Web App',
          budget: '$1,000 - $3,000',
          message: '',
        });
      }, 4000);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello ${PERSONAL_INFO.name}, I'm interested in working together!\n\n` +
      `*Name:* ${formData.name || 'Visitor'}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Service:* ${formData.service}\n` +
      `*Budget:* ${formData.budget}\n` +
      `*Message:* ${formData.message || 'I have a web development project and would like to discuss it.'}`
    );
    window.open(`https://wa.me/${PERSONAL_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative">
      {/* Background glow */}
      <div 
        className="absolute bottom-0 right-10 w-96 h-96 bg-[#ff6724]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Direct Connect & Details */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-xs font-semibold text-[#ff6724] tracking-wider uppercase mb-2 block">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Let's Build Something Great Together
            </h2>
            <p className="mt-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
              Have a web project in mind? Looking for a full-stack React and Node.js developer?
              Send a message or reach out directly on WhatsApp for an immediate response.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="space-y-4">
            {/* Email Card with Copy button */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-3 rounded-xl bg-orange-500/10 text-[#ff6724] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs text-neutral-400 block">Direct Email</span>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-white hover:text-[#ff6724] transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-neutral-300 hover:text-white border border-white/10 transition-colors shrink-0"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Direct WhatsApp Action Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/25 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.54 2.021.849 3.226.85 3.179 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.769-5.767-5.769zm3.393 8.354c-.146.406-.733.743-1.019.789-.285.047-.648.064-1.895-.453-1.246-.516-2.029-1.782-2.091-1.865-.062-.083-.505-.672-.505-1.282 0-.61.319-.91.432-1.033.113-.123.247-.154.33-.154.083 0 .166.002.239.006.077.004.181-.03.283.216.103.247.352.858.383.921.031.063.052.137.01.22-.041.083-.062.134-.124.207-.062.073-.131.163-.187.219-.062.062-.127.129-.055.253.072.124.321.53 1.055 1.185.945.843 1.343.985 1.532 1.068.188.083.298.073.409-.052.112-.124.478-.557.605-.747.127-.19.255-.158.43-.093.175.064 1.11.523 1.301.618.19.095.318.142.365.222.046.08.046.467-.1 873zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.981-1.406C8.423 21.493 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.636 0-3.15-.494-4.42-1.34l-.317-.212-2.96.835.839-2.883-.232-.338C4.015 15.011 3.5 13.557 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-emerald-400 font-medium block">Instant Messaging</span>
                  <span className="text-sm font-semibold text-white">
                    {PERSONAL_INFO.whatsappDisplay}
                  </span>
                </div>
              </div>

              <button
                onClick={handleWhatsAppSend}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm whitespace-nowrap"
              >
                Chat Now
              </button>
            </div>

            {/* Location & Availability */}
            <div className="flex items-center gap-3 text-xs text-neutral-400 p-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for new freelance contracts &amp; full-time positions.</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-10 rounded-3xl bg-white/[0.025] border border-white/10 shadow-2xl backdrop-blur-md">
            
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-neutral-300 max-w-sm mb-6">
                  Thank you for reaching out. Sammy will review your inquiry and reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold text-neutral-300 bg-white/[0.08] hover:bg-white/[0.12] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-2">
                      Your Name <span className="text-[#ff6724]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#ff6724] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-2">
                      Your Email <span className="text-[#ff6724]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#ff6724] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-2">
                      Project Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1c1410] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff6724] transition-colors"
                    >
                      <option value="Full-Stack Web App">Full-Stack Web App (React + Node.js)</option>
                      <option value="React Frontend Engineering">React / Next.js Frontend</option>
                      <option value="Node.js Backend & API">Node.js / Express Backend &amp; APIs</option>
                      <option value="Figma Design to Code">Figma Design to Code</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-2">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1c1410] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff6724] transition-colors"
                    >
                      <option value="< $1,000">&lt; $1,000</option>
                      <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                      <option value="$3,000 - $8,000">$3,000 - $8,000</option>
                      <option value="$8,000+">$8,000+</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-2">
                    Project Details <span className="text-[#ff6724]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your web app goals, timeline, and requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#ff6724] transition-colors resize-none"
                  />
                </div>

                {/* Submit Row: Direct Send & WhatsApp Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#ff6724] hover:bg-[#ea580c] active:scale-95 transition-all shadow-[0_8px_20px_rgba(255,103,36,0.3)] disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/40 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.54 2.021.849 3.226.85 3.179 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.769-5.767-5.769zm3.393 8.354c-.146.406-.733.743-1.019.789-.285.047-.648.064-1.895-.453-1.246-.516-2.029-1.782-2.091-1.865-.062-.083-.505-.672-.505-1.282 0-.61.319-.91.432-1.033.113-.123.247-.154.33-.154.083 0 .166.002.239.006.077.004.181-.03.283.216.103.247.352.858.383.921.031.063.052.137.01.22-.041.083-.062.134-.124.207-.062.073-.131.163-.187.219-.062.062-.127.129-.055.253.072.124.321.53 1.055 1.185.945.843 1.343.985 1.532 1.068.188.083.298.073.409-.052.112-.124.478-.557.605-.747.127-.19.255-.158.43-.093.175.064 1.11.523 1.301.618.19.095.318.142.365.222.046.08.046.467-.1 873zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.981-1.406C8.423 21.493 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.636 0-3.15-.494-4.42-1.34l-.317-.212-2.96.835.839-2.883-.232-.338C4.015 15.011 3.5 13.557 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z"/>
                    </svg>
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
