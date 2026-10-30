import { motion } from 'framer-motion'
import { useImageFallback } from '../hooks/useImageFallback'
import './HeroSection.css'

export default function HeroSection() {
  const { src, failed, onError } = useImageFallback('/images/profile')

  return (
    <section className="hero-section">
      <motion.div
        className="hero-profile"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
      >
        <svg className="hero-balloon hero-balloon-left" viewBox="0 0 40 70" aria-hidden="true">
          <line x1="20" y1="30" x2="14" y2="68" stroke="rgba(253,226,237,0.5)" strokeWidth="1.2" />
          <ellipse cx="20" cy="17" rx="17" ry="19" fill="#ec4899" />
          <ellipse cx="15" cy="10" rx="5" ry="6" fill="rgba(255,255,255,0.25)" />
          <path d="M16 34 L20 40 L24 34 Z" fill="#ec4899" />
        </svg>
        <svg className="hero-balloon hero-balloon-right" viewBox="0 0 40 70" aria-hidden="true">
          <line x1="20" y1="30" x2="26" y2="68" stroke="rgba(253,226,237,0.5)" strokeWidth="1.2" />
          <ellipse cx="20" cy="17" rx="16" ry="18" fill="#fbbf24" />
          <ellipse cx="15" cy="10" rx="4.5" ry="5.5" fill="rgba(255,255,255,0.3)" />
          <path d="M16 33 L20 39 L24 33 Z" fill="#fbbf24" />
        </svg>
        <div className="hero-profile-ring">
          <div className="hero-profile-photo">
            {!failed ? (
              <img src={src} alt="بسمة" onError={onError} loading="eager" />
            ) : (
              <span className="hero-profile-fallback">♥</span>
            )}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="badge-pill"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <span className="badge-sparkle">✦</span>
        <span>يوم مولد أحلى أخت في الدنيا</span>
        <span className="badge-heart">🎂</span>
      </motion.div>

      <motion.h1
        className="hero-name"
        initial={{ opacity: 0, scale: 0.5, filter: 'blur(20px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.4, delay: 0.6, ease: 'easeOut' }}
      >
        بسمة
      </motion.h1>

      <motion.div
        className="hero-date"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        1 / 11 · عيد ميلادك
      </motion.div>

      <motion.div
        className="hero-divider"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        <span>🎉</span>
      </motion.div>

      <motion.p
        className="hero-quote"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.9 }}
      >
        كل سنة وانتي طيبة يا بسمة قلبي <span className="inline-heart">🎂</span><br /><br />
        أول سنة تعدي عليكي وانتي بعيدة عني، وحاسس إن المسافة كبيرة أوي،<br />
        بس حبيت أبعتلك حتة من قلبي توصلك مهما كانت بعيدة.<br />
        عملتلك المكان ده بإيدي عشان تحسّي إني جنبك النهارده،<br />
        وأقولك بجد وبصوت عالي: انتي أحلى وأغلى أخت في الدنيا كلها ❤️
      </motion.p>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.6 }}
      >
        <span>يلا بينا نشوف مفاجأتك</span>
        <div className="scroll-arrow">↓</div>
      </motion.div>
    </section>
  )
}
