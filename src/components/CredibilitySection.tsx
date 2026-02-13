import { motion } from "framer-motion";
import { Shield, Target, Building } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Shield, Target, Building];

const CredibilitySection = () => {
  const { t } = useLanguage();

  const pillars = [1, 2, 3].map((i) => ({
    icon: icons[i - 1],
    title: t(`credibility.${i}.title`),
    desc: t(`credibility.${i}.desc`)
  }));

  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-foreground mb-4">
            {t("credibility.title1")} <span className="text-primary">{t("credibility.title2")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {pillars.map((item, i) =>
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-5">
                <item.icon className="text-primary" size={30} />
              </div>
              <h3 className="font-sans text-lg font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default CredibilitySection;