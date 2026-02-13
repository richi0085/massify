import { motion } from "framer-motion";
import { Smartphone, Globe, GitMerge, Eye, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Smartphone, Globe, GitMerge, Eye, CheckCircle2];

const SolutionSection = () => {
  const { t } = useLanguage();

  const features = [1, 2, 3, 4, 5].map((i) => ({
    icon: icons[i - 1],
    title: t(`solution.${i}.title`),
    desc: t(`solution.${i}.desc`)
  }));

  const flowSteps = [t("solution.flow.1"), t("solution.flow.2"), t("solution.flow.3")];

  return (
    <section id="solution" className="py-24 bg-gradient-section relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
            {t("solution.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-foreground mb-4">
            {t("solution.title1")} <span className="text-primary">{t("solution.title2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-sans">{t("solution.sub")}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap items-center justify-center gap-3 mb-16 max-w-2xl mx-auto">
          {flowSteps.map((step, i) =>
          <div key={step} className="flex items-center gap-3">
              <span className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-sans font-medium">{step}</span>
              {i < 2 && <span className="text-accent font-bold">→</span>}
            </div>
          )}
          <span className="text-accent font-bold">→</span>
          <span className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-sans font-semibold shadow-navy">Massify</span>
          <span className="text-accent font-bold">→</span>
          <span className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-sans font-medium">{t("solution.flow.4")}</span>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {features.map((feature, i) =>
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass-card p-6 hover:border-glow transition-all duration-300">
              <feature.icon className="text-primary mb-4" size={24} />
              <h3 className="font-sans font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default SolutionSection;