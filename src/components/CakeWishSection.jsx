import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import './CakeWishSection.css'

const CANDLE_COUNT = 5

// صوت "نفخة" بسيط مركّب بالكود (مفيش حاجة تتحمّل، شغال فورًا)
function playBlowSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext
    const ctx = new AudioCtx()
    const bufferSize = ctx.sampleRate * 0.35
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize)
    }
    const noise = ctx.createBufferSource()
    noise.buffer = buffer

    const filter = ctx.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.value = 700
    filter.Q.value = 0.7

    const gain = ctx.createGain()
    gain.gain.setValueAtTime(0.5, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35)

    noise.connect(filter)
    filter.connect(gain)
    gain.connect(ctx.destination)
    noise.start()
    noise.stop(ctx.currentTime + 0.35)
  } catch {
    // متصفح مش مدعوم — تجاهلي بهدوء
  }
}

// نغمة احتفالية قصيرة (Ta-da) لحظة إطفاء آخر شمعة
function playCheerSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext
    const ctx = new AudioCtx()
    const notes = [523.25, 659.25, 783.99, 1046.5] // C5 E5 G5 C6
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'triangle'
      osc.frequency.value = freq
      const start = ctx.currentTime + i * 0.12
      gain.gain.setValueAtTime(0, start)
      gain.gain.linearRampToValueAtTime(0.25, start + 0.03)
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.5)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start(start)
      osc.stop(start + 0.55)
    })
  } catch {
    // تجاهلي بهدوء
  }
}

function fireCandleConfetti() {
  confetti({
    particleCount: 40,
    angle: 90,
    spread: 60,
    startVelocity: 28,
    origin: { x: 0.5, y: 0.75 },
    colors: ['#ec4899', '#f472b6', '#fbbf24', '#a855f7', '#ffffff'],
    scalar: 0.9,
  })
}

function fireBigConfetti() {
  const duration = 1800
  const end = Date.now() + duration
  const colors = ['#ec4899', '#f472b6', '#fbbf24', '#a855f7', '#ffffff']

  ;(function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 65,
      origin: { x: 0, y: 0.6 },
      colors,
    })
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 65,
      origin: { x: 1, y: 0.6 },
      colors,
    })
    if (Date.now() < end) requestAnimationFrame(frame)
  })()

  confetti({
    particleCount: 120,
    spread: 100,
    startVelocity: 45,
    origin: { x: 0.5, y: 0.5 },
    colors,
  })
}

export default function CakeWishSection() {
  const [lit, setLit] = useState(Array(CANDLE_COUNT).fill(true))
  const [revealed, setRevealed] = useState(false)

  const allOut = lit.every((v) => !v)

  const blowCandle = (index) => {
    if (!lit[index] || revealed) return
    playBlowSound()
    fireCandleConfetti()
    const next = [...lit]
    next[index] = false
    setLit(next)

    if (next.every((v) => !v)) {
      setTimeout(() => {
        playCheerSound()
        fireBigConfetti()
        setRevealed(true)
      }, 400)
    }
  }

  const resetCake = () => {
    setLit(Array(CANDLE_COUNT).fill(true))
    setRevealed(false)
  }

  return (
    <section className="cake-section" id="wish">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">لحظة الأمنية</span>
        <h2 className="section-title">اطفي الشمعات واتمني أمنية يا بسمة</h2>
        <p className="section-subtitle">دوسي على كل شمعة عشان تطفيها.. وبعد آخر واحدة في انتظارك مفاجأة حلوة ♥</p>
      </motion.div>

      <motion.div
        className="cake-wrapper"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
      >
        <div className="candles-row">
          {lit.map((isLit, i) => (
            <button
              key={i}
              className={`candle ${isLit ? 'lit' : 'out'}`}
              onClick={() => blowCandle(i)}
              aria-label={isLit ? 'اطفي الشمعة' : 'الشمعة مطفية'}
              disabled={!isLit}
            >
              <AnimatePresence>
                {isLit && (
                  <motion.span
                    className="flame"
                    initial={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
              <span className="candle-stick" />
            </button>
          ))}
        </div>

        <div className="cake-body">
          <div className="cake-layer cake-top" />
          <div className="cake-layer cake-middle" />
          <div className="cake-layer cake-bottom" />
        </div>

        <p className="cake-hint">
          {allOut ? '' : `فضل ${lit.filter(Boolean).length} من ${CANDLE_COUNT} شمعة`}
        </p>
      </motion.div>

      <AnimatePresence>
        {revealed && (
          <motion.div
            className="wish-reveal"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="wish-icon">🎁</span>
            <p className="wish-text">
              أمنيتي ليكي إنك تكوني سعيدة طول عمرك، وكل حلم في قلبك يتحقق قدامك،
              وإننا نتجمع قريب إن شاء الله ونحتفل بعيد ميلادك سوا،
              وأفضل جنبك في كل عيد ميلاد جاي بعد النهارده.<br /><br />
              كل سنة وانتي طيبة يا بسمة، يا أغلى حد في الدنيا كلها ♥
            </p>
            <button className="cake-reset-btn" onClick={resetCake}>
              رجّعي الشمعات تاني ↻
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
