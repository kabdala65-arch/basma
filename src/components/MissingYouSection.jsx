import { motion } from 'framer-motion'
import './MissingYouSection.css'

const lines = [
  'إنك بتنشري الفرح لكل اللي حواليكي من غير ما تحسي بيه',
  'إن ابتسامتك بتنوّر أي مكان، وبتهوّن عليا أي يوم تقيل',
  'إنك سندي وقت التعب، وضهري في كل الأحوال، حتى وانتي بعيدة',
  'إن قلبك أبيض، وطيبتك دي مش موجودة عند حد تاني',
  'إنك بتحبي الناس اللي حواليكي بجد وبصدق، من غير حساب',
  'إنك قوية وبتتحمّلي الغربة وبتكمّلي، وأنا فخور بيكي أوي',
  'إنك تستاهلي كل حاجة حلوة موجودة في الدنيا دي',
  'إن وجودك في حياتي نعمة من ربنا، وربنا يخليكي ليا',
  'إن البيت من غيرك ناقص، وكل ركن فيه بيفكّرني بيكي',
  'إنك ببساطة أحلى وأغلى أخت ربنا كرّمني بيها',
]

export default function MissingYouSection() {
  return (
    <section className="missing-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">ليه تستاهلي كل ده</span>
        <h2 className="section-title">أسباب كتير أوي خلتني أحتفل بيكي النهارده</h2>
        <p className="section-subtitle">
          مش سبب واحد بس، دول كام سبب من كتير قوي.. خليكي معايا لحد آخرها ♥
        </p>
      </motion.div>

      <div className="missing-list">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className="missing-line"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
          >
            <span className="missing-heart">🎂</span>
            <span className="missing-word">تستاهلي</span>
            <span className="missing-text">{line}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="missing-closing"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        بس خلاصة الكلام كله.. كل سنة وانتي طيبة يا بسمة، بجد من كل قلبي 🎉♥
      </motion.p>
    </section>
  )
}
