import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useIsMobile } from '../../hooks/useIsMobile';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: '-100px 0px' 
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_email: email,
          message: message,
          to_email: 'patricknguyen714@gmail.com'
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        alert('Message sent successfully!');
        setEmail('');
        setMessage('');
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={contactRef} id="contact" className={`
      ${isMobile ? 'min-h-screen px-5' : 'h-[50vh]'}
      relative flex justify-center
    `}>
      <div className={`
        ${isMobile ? 'mt-8' : 'absolute top-[-35vh]'}
        text-center transition-all duration-1000 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}
      `}>
        <div className={`
          ${isMobile ? 'text-[36px]' : 'text-[64px]'}
          leading-tight font-inria font-bold
        `}>
          Contact Me
        </div>
        <div className={`
          ${isMobile ? 'text-[16px] px-4' : 'text-[20px]'}
          font-inria mt-[3.37vh] whitespace-pre-line
        `}>
          Please reach out to me directly at{' '}
          <a 
            href="mailto:patricknguyen714@gmail.com?subject=Portfolio Contact&body=Hi Patrick,"
            className="underline hover:opacity-80"
          >
            patricknguyen714@gmail.com
          </a>
          {' '}or through this form
        </div>
        
        {/* Form Container */}
        <form onSubmit={handleSubmit} className={`
          mt-[3.37vh] flex flex-col items-center gap-[2vh]
          ${isMobile ? 'w-full' : ''}
        `}>
          <input 
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`
              ${isMobile ? 'w-full' : 'w-[25vw]'}
              h-[7vh] bg-[#FFFFFF] rounded-[15px] px-4 font-inria
            `}
          />
          
          <textarea 
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className={`
              ${isMobile ? 'w-full' : 'w-[25vw]'}
              h-[29vh] bg-[#FFFFFF] rounded-[15px] p-4 font-inria resize-none
            `}
          />

          {/* Submit Button */}
          <button 
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 bg-[#FFFFFF] px-6 py-2 rounded-[15px] font-inria hover:opacity-80 transition-opacity disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
            <img src="/submit.svg" alt="Submit" className="w-4 h-4" />
          </button>
        </form>
        
        {/* Social Links - Only on Mobile */}
        {isMobile && (
          <div className="mt-8 flex justify-center gap-6">
            <a
              href="https://linkedin.com/in/patricknguyen714"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/patrickhcnguyen"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/github.svg" alt="GitHub" className="w-8 h-8" />
            </a>
          </div>
        )}
        
        {/* Copyright text */}
        <div className={`
          ${isMobile ? 'mt-4 mb-8' : 'mt-8'}
          text-[12px] font-inria text-black/70
        `}>
          © Copyright 2024, Patrick Nguyen
        </div>
      </div>
    </div>
  );
};

export default Contact; 