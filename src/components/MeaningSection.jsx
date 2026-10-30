import { motion } from 'framer-motion'
import './MeaningSection.css'

const letters = [
  { l: 'ب', text: 'بسمتك بتنوّر أي مكان بتدخليه، وبتفرّحني حتى وانتي بعيدة عني' },
  { l: 'س', text: 'سندي وأماني، ومهما سافرتي وبعدتي هتفضلي أقرب حد لقلبي' },
  { l: 'م', text: 'ميّة سلامة عليكي في غربتك، ودعائي ليكي مش بيفارق لساني' },
  { l: 'ة', text: 'ختام الكلام إنك ابتسامة البيت كله، وكل سنة وانتي طيبة يا بسمة' },
]

export default function MeaningSection() {
  return (
    <section className="meaning-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">معنى اسمك</span>
        <h2 className="section-title">بسمة يعني ابتسامة.. وإنتي اسم على مسمى</h2>
        <p className="section-subtitle">
          كل حرف من اسمك ليه حكاية عندي، وانتي بتحتفلي بيوم مولدك.. من قلب أخوكي ♥
        </p>
      </motion.div>

      <div className="meaning-grid">
        {letters.map((item, i) => (
          <motion.div
            key={i}
            className="meaning-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <span className="meaning-letter">{item.l}</span>
            <span className="meaning-text">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
