import { motion } from 'framer-motion'
import './PromiseSection.css'

export default function PromiseSection() {
  return (
    <section className="promise-section">
      <motion.div
        className="promise-block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <span className="section-tag">أمنيتي ليكي</span>
        <p className="promise-text">
          يارب يوم مولدك ده يبقى بداية سنة حلوة عليكي جدًا،
          مليانة صحة وضحك وخير وتوفيق في غربتك، وكل اللي قلبك بيتمناه يتحقق.
          وهفضل جنبك في كل حاجة يا رب، سندك وضهرك، مهما بعدت المسافات ♥
        </p>
      </motion.div>

      <motion.div
        className="poem-block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <span className="section-tag">كل سنة وانتي طيبة</span>
        <p className="poem-text">
          يارب كل سنة تعدي عليكي تيجي أحلى من اللي قبلها<br />
          ويارب تحققي كل حلم في قلبك، وتوصلي لكل اللي نفسك فيه ♥<br /><br />
          مهما الأيام اتغيّرت، ومهما سافرتي وبعدتي<br />
          هفضل شايفك زي ما انتي بالظبط، أختي وسندي وأغلى حد<br />
          وحتى لو بينا بلاد وبحار، هيفضل حبي ليكي زي ما هو، من غير ما يتغيّر حرف<br /><br />
          هفضل فخور إنك أختي، ومبسوط إن ربنا اداني إنسانة زيك<br />
          ومستنيكي أول ما ترجعي، وأول ما نتجمع تاني ♥<br /><br />
          مهما تعبنا، ومهما الدنيا قست علينا يوم<br />
          هفضل ماسك إيدك ومكمّلين سوا<br />
          لغاية ما نقعد قصاد بعض يوم<br />
          نفتكر كل ده ونضحك زي زمان<br /><br />
          كل سنة وانتي طيبة يا أغلى ما عندي، وكل سنة وانتي أقرب لكل حلمك<br />
          وهفضل حاسس إني أسعد واحد لأن ربنا اداني انتي أختي ♥♥♥
        </p>
      </motion.div>
    </section>
  )
}
