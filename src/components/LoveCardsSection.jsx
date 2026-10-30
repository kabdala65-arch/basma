import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './LoveCardsSection.css'

const cards = [
  { id: 1, icon: '🎂', title: 'كل سنة وانتي طيبة', message: 'يارب سنتك الجديدة تيجي مليانة فرح وصحة وخير وحاجات تفرّح القلب، وتفرّحك في غربتك' },
  { id: 2, icon: '✧', title: 'يا بسمة قلبي', message: 'كل ما بفتكر ضحكتك الدنيا بتحلو في عيني، مهما كنتي بعيدة' },
  { id: 3, icon: '🎁', title: 'وحشتيني', message: 'أول سنة بعيد عنك والبيت مش بيتكامل من غيرك، بس قلبي معاكي في أي مكان تروحيه' },
  { id: 4, icon: '✦', title: 'يا سندي', message: 'انتي ضهري وأماني، وعمري ما حسيت إني لوحدي وانتي في حياتي' },
  { id: 5, icon: '❀', title: 'يا فخري', message: 'فخور بيكي وبكل خطوة بتعمليها، وعارف إنك هتوصلي لأي حاجة نفسك فيها' },
  { id: 6, icon: '🎉', title: 'يا أغلى أخت', message: 'صدقيني مفيش حاجة في الدنيا تعوّضني عنك، وعيدك يستاهل كل خير الدنيا' },
]

export default function LoveCardsSection() {
  const [activeCard, setActiveCard] = useState(null)

  return (
    <section className="cards-section" id="cards">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">رسايل من قلبي</span>
        <h2 className="section-title">دوسي على الكروت وشوفي مفاجأة يوم مولدك</h2>
        <p className="section-subtitle">كل كرت فيه كلمة صادقة من قلبي ليكي بمناسبة يومك الحلو 🎂</p>
      </motion.div>

      <div className="cards-grid">
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            className="love-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCard(card)}
          >
            <span className="card-icon">{card.icon}</span>
            <span className="card-title">{card.title}</span>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeCard && (
          <motion.div
            className="card-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCard(null)}
          >
            <motion.div
              className="card-modal"
              initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
              transition={{ type: 'spring', damping: 20 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setActiveCard(null)}>×</button>
              <div className="modal-icon">{activeCard.icon}</div>
              <h3 className="modal-title">{activeCard.title}</h3>
              <p className="modal-message">{activeCard.message}</p>
              <div className="modal-heart">♥</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
