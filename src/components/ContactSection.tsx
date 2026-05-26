import React, { useState } from 'react';
import { motion } from 'motion/react';

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light tracking-wide mb-4 text-[#f5f5f5] uppercase">Trabajemos juntos</h2>
          <p className="text-[#a3a3a3]">Ponte en contacto con nosotros para tu próximo proyecto.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-[#cbcbcb] tracking-wide uppercase">Nombre</label>
              <input
                id="name"
                required
                type="text"
                className="w-full px-4 py-3 bg-[#111] text-[#f5f5f5] border border-[#333] focus:border-[#F27D26] focus:ring-0 outline-none transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-[#cbcbcb] tracking-wide uppercase">Email</label>
              <input
                id="email"
                required
                type="email"
                className="w-full px-4 py-3 bg-[#111] text-[#f5f5f5] border border-[#333] focus:border-[#F27D26] focus:ring-0 outline-none transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-[#cbcbcb] tracking-wide uppercase">Asunto</label>
            <input
              id="subject"
              required
              type="text"
              className="w-full px-4 py-3 bg-[#111] text-[#f5f5f5] border border-[#333] focus:border-[#F27D26] focus:ring-0 outline-none transition-colors"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-[#cbcbcb] tracking-wide uppercase">Mensaje</label>
            <textarea
              id="message"
              required
              rows={5}
              className="w-full px-4 py-3 bg-[#111] text-[#f5f5f5] border border-[#333] focus:border-[#F27D26] focus:ring-0 outline-none transition-colors resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            disabled={status === 'loading'}
            type="submit"
            className="w-full bg-[#f5f5f5] text-[#0a0a0a] hover:bg-[#F27D26] hover:text-white py-4 font-semibold tracking-wide uppercase disabled:opacity-70 transition-colors"
          >
            {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
          </motion.button>

          {status === 'success' && (
            <p className="text-center text-[#F27D26] bg-[#F27D26]/10 py-3 mt-4 border border-[#F27D26]/30">
              Gracias. Tu mensaje ha sido enviado a baez@hitster.page.
            </p>
          )}
          {status === 'error' && (
            <p className="text-center text-red-500 bg-red-500/10 py-3 mt-4 border border-red-500/30">
              Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
