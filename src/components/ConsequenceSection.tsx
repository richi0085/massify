import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ConsequenceSection = () => {
  const { t } = useLanguage();

  const consequences = [1, 2, 3].map((i) => ({
    metric: t(`consequence.${i}.metric`),
    label: t(`consequence.${i}.label`),
    detail: t(`consequence.${i}.detail`)
  }));

  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-foreground mb-4">
            {t("consequence.title1")} <span className="text-primary">{t("consequence.title2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-sans">{t("consequence.sub")}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {consequences.map((item, i) =>
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="text-center">
              <div className="text-4xl sm:text-5xl font-sans font-bold text-primary mb-3">{item.metric}</div>
              <h3 className="font-sans font-semibold text-foreground mb-2 text-sm uppercase tracking-wider">{item.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default ConsequenceSection;