import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './CounterSection.css'

const BIRTHDAY_MONTH = 11 // نوفمبر
const BIRTHDAY_DAY = 1

function getNextBirthday(now) {
  const year = now.getFullYear()
  let next = new Date(year, BIRTHDAY_MONTH - 1, BIRTHDAY_DAY, 0, 0, 0)
  if (next < now) {
    next = new Date(year + 1, BIRTHDAY_MONTH - 1, BIRTHDAY_DAY, 0, 0, 0)
  }
  return next
}

function isBirthdayToday(now) {
  return now.getMonth() === BIRTHDAY_MONTH - 1 && now.getDate() === BIRTHDAY_DAY
}

function getRemaining() {
  const now = new Date()
  const target = getNextBirthday(now)
  const diffMs = Math.max(0, target - now)

  const totalSeconds = Math.floor(diffMs / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds, today: isBirthdayToday(now) }
}

export default function CounterSection() {
  const [remaining, setRemaining] = useState(getRemaining())

  useEffect(() => {
    const interval = setInterval(() => setRemaining(getRemaining()), 1000)
    return () => clearInterval(interval)
  }, [])

  const units = [
    { label: 'يوم', value: remaining.days },
    { label: 'ساعة', value: remaining.hours },
    { label: 'دقيقة', value: remaining.minutes },
    { label: 'ثانية', value: remaining.seconds },
  ]

  return (
    <section className="counter-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">1 / 11</span>
        <h2 className="section-title">
          {remaining.today ? 'النهارده يوم مولدك يا بسمة 🎂' : 'العد التنازلي ليوم ميلادك يا بسمة'}
        </h2>
        <p className="section-subtitle">
          {remaining.today
            ? 'كل سنة وانتي طيبة يا أغلى أخت، النهارده يومك بجد وربنا يسعدك ويفرّح قلبك 🎉'
            : 'وكل ثانية بتعدي بتقرّبنا من يوم هو كله ليكي، ومهما بعدنا عن بعض قلبي معاكي ♥'}
        </p>
      </motion.div>

      <div className="counter-grid">
        {units.map((unit, i) => (
          <motion.div
            key={unit.label}
            className="counter-card"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <span className="counter-value">{unit.value}</span>
            <span className="counter-label">{unit.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
