import { motion } from "framer-motion";
import { MessageSquare, PenLine, RefreshCw, AlertTriangle, TrendingUp, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap = [MessageSquare, PenLine, RefreshCw, AlertTriangle, Clock, TrendingUp];

const PainSection = () => {
  const { t } = useLanguage();

  const pains = Array.from({ length: 6 }, (_, i) => ({
    icon: iconMap[i],
    title: t(`pain.${i + 1}.title`),
    desc: t(`pain.${i + 1}.desc`)
  }));

  return (
    <section id="pain" className="py-24 bg-gradient-section-alt">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-foreground mb-4">
            {t("pain.title1")} <span className="text-primary">{t("pain.title2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-sans">{t("pain.sub")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {pains.map((pain, i) =>
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass-card p-6 group hover:border-glow transition-all duration-300">
              <pain.icon className="text-primary mb-4" size={24} />
              <h3 className="font-sans font-semibold text-foreground mb-2">{pain.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pain.desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default PainSection;