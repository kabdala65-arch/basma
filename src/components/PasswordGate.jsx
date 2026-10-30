import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { useImageFallback } from '../hooks/useImageFallback'
import './PasswordGate.css'

const CORRECT_PASSWORD = 'basma'

function celebrateUnlock() {
  const colors = ['#ec4899', '#f472b6', '#fbbf24', '#a855f7', '#ffffff']
  confetti({
    particleCount: 100,
    spread: 90,
    startVelocity: 45,
    origin: { x: 0.5, y: 0.4 },
    colors,
  })
  setTimeout(() => {
    confetti({ particleCount: 60, angle: 60, spread: 70, origin: { x: 0, y: 0.5 }, colors })
    confetti({ particleCount: 60, angle: 120, spread: 70, origin: { x: 1, y: 0.5 }, colors })
  }, 250)
}

export default function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const { src, failed, onError } = useImageFallback('/images/profile')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.trim().toLowerCase() === CORRECT_PASSWORD.toLowerCase()) {
      celebrateUnlock()
      onUnlock()
    } else {
      setError(true)
      setTimeout(() => setError(false), 1500)
    }
  }

  return (
    <div className="gate-screen">
      <motion.div
        className="gate-card"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {!failed && (
          <div className="gate-profile">
            <img
              src={src}
              alt="بسمة"
              className="gate-profile-img"
              onError={onError}
            />
          </div>
        )}
        <span className="gate-heart">🎂</span>
        <h1 className="gate-title">لبسمة بس</h1>
        <p className="gate-subtitle">في مفاجأة حلوة قوي من أخوكي بمناسبة يومك.. اكتبي الباسورد عشان تشوفيها</p>

        <form className="gate-form" onSubmit={handleSubmit}>
          <input
            type="password"
            className={`gate-input ${error ? 'gate-input-error' : ''}`}
            placeholder="الباسورد"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoFocus
          />
          <button type="submit" className="gate-button">افتحي المفاجأة 🎂</button>
        </form>

        <AnimatePresence>
          {error && (
            <motion.p
              className="gate-error"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              الباسورد مش مظبوط.. جربي تاني يا قمر ♥
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
