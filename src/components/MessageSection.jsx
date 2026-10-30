import { motion } from 'framer-motion'
import './MessageSection.css'

export default function MessageSection() {
  return (
    <section className="message-section">
      <motion.div
        className="message-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="ring-glow-wrapper">
          <div className="ring-glow">
            <span className="ring-heart">🎂</span>
          </div>
        </div>

        <h2 className="message-title">
          <span className="message-lead">كل سنة وانتي طيبة يا أغلى أخت في حياتي...</span>
          <span className="signature">أخوكي عبدالله ❤️</span>
        </h2>

        <motion.p
          className="message-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          مش هعرف أعبّرلك بالكلام قد إيه انتي غالية عليا، بس حبيت أعملّك المكان ده بإيدي عشان تحسّي بيه في يومك، وإحنا بعاد عن بعض.<br /><br />
          ده أول عيد ميلاد ليكي من غير ما أكون جنبك، وأنا عارف إن الغربة تقيلة، وكان نفسي أقضي اليوم ده معاكي، أضحك معاكي وأطفي الشمع معاكي.
          بس صدقيني قلبي معاكي، وصوتك وضحكتك وحشاني أوي.<br /><br />
          انتي مش بس أختي، انتي سندي وصاحبتي وحتة من قلبي. كل يوم بيعدي بيأكدلي إن ربنا كرّمني بيكي.
          بسمتك بتفرحني، وكلامك بيطمّني، وأي يوم تقيل بيهون عليا لما بسمع صوتك.<br /><br />
          يارب السنة الجديدة دي تجيبلك كل اللي نفسك فيه، صحة وفرح وراحة بال وتوفيق في كل خطوة،
          ونتجمع قريب إن شاء الله، وهفضل جنبك في كل الظروف حلوة كانت ولا صعبة، وربنا يخليكي ليا يا رب.</motion.p>

        <motion.div
          className="message-signature-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />

        <motion.p
          className="message-from"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          كل سنة وانتي طيبة يا بسمة بجد من كل قلبي، وربنا يخليكي ليا ويفضل يضحكك طول عمرك 🎂❤️
        </motion.p>
      </motion.div>
    </section>
  )
}
