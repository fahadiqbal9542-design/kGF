import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MessageCircle, X, Send } from 'lucide-react';

interface WhatsAppFloatProps {
  onDirectTrigger?: () => void;
}

export const WhatsAppFloat: React.FC<WhatsAppFloatProps> = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [quickMsg, setQuickMsg] = useState('Hi Sammy, I saw your portfolio and would like to discuss a project!');

  const handleStartChat = () => {
    const text = encodeURIComponent(quickMsg);
    window.open(`https://wa.me/${PERSONAL_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
    setOpenPopup(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Chat Popup */}
      {openPopup && (
        <div className="mb-3 w-80 max-w-[calc(100vw-3rem)] rounded-2xl bg-[#140e0b] border border-emerald-500/30 p-4 shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.54 2.021.849 3.226.85 3.179 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.769-5.767-5.769zm3.393 8.354c-.146.406-.733.743-1.019.789-.285.047-.648.064-1.895-.453-1.246-.516-2.029-1.782-2.091-1.865-.062-.083-.505-.672-.505-1.282 0-.61.319-.91.432-1.033.113-.123.247-.154.33-.154.083 0 .166.002.239.006.077.004.181-.03.283.216.103.247.352.858.383.921.031.063.052.137.01.22-.041.083-.062.134-.124.207-.062.073-.131.163-.187.219-.062.062-.127.129-.055.253.072.124.321.53 1.055 1.185.945.843 1.343.985 1.532 1.068.188.083.298.073.409-.052.112-.124.478-.557.605-.747.127-.19.255-.158.43-.093.175.064 1.11.523 1.301.618.19.095.318.142.365.222.046.08.046.467-.1 873zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.981-1.406C8.423 21.493 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.636 0-3.15-.494-4.42-1.34l-.317-.212-2.96.835.839-2.883-.232-.338C4.015 15.011 3.5 13.557 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z"/>
                  </svg>
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#140e0b]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Chat on WhatsApp</h4>
                <p className="text-[10px] text-emerald-400 font-medium">Online · Replies in ~15 mins</p>
              </div>
            </div>
            <button
              onClick={() => setOpenPopup(false)}
              className="p-1 rounded-md text-neutral-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="mb-3">
            <textarea
              rows={2}
              value={quickMsg}
              onChange={(e) => setQuickMsg(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
              placeholder="Type your message..."
            />
          </div>

          <button
            onClick={handleStartChat}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-900/30"
          >
            <span>Start WhatsApp Chat</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setOpenPopup(!openPopup)}
        aria-label="Open WhatsApp conversation"
        className="group relative flex items-center gap-2.5 p-3.5 sm:px-4 sm:py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white shadow-[0_8px_25px_rgba(16,185,129,0.4)] transition-all duration-300 cursor-pointer"
      >
        {/* Pulsing ring indicator */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 animate-ping opacity-75" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0c0908]" />

        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.54 2.021.849 3.226.85 3.179 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.769-5.767-5.769zm3.393 8.354c-.146.406-.733.743-1.019.789-.285.047-.648.064-1.895-.453-1.246-.516-2.029-1.782-2.091-1.865-.062-.083-.505-.672-.505-1.282 0-.61.319-.91.432-1.033.113-.123.247-.154.33-.154.083 0 .166.002.239.006.077.004.181-.03.283.216.103.247.352.858.383.921.031.063.052.137.01.22-.041.083-.062.134-.124.207-.062.073-.131.163-.187.219-.062.062-.127.129-.055.253.072.124.321.53 1.055 1.185.945.843 1.343.985 1.532 1.068.188.083.298.073.409-.052.112-.124.478-.557.605-.747.127-.19.255-.158.43-.093.175.064 1.11.523 1.301.618.19.095.318.142.365.222.046.08.046.467-.1 873zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.981-1.406C8.423 21.493 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.636 0-3.15-.494-4.42-1.34l-.317-.212-2.96.835.839-2.883-.232-.338C4.015 15.011 3.5 13.557 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z"/>
        </svg>

        <span className="hidden sm:inline text-xs font-bold tracking-tight">
          WhatsApp
        </span>
      </button>
    </div>
  );
};
