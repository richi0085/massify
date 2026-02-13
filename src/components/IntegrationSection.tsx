import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const IntegrationSection = () => {
  const { t } = useLanguage();

  const steps = [
  { week: t("integration.w1"), title: t("integration.w1.title"), points: [t("integration.w1.1"), t("integration.w1.2"), t("integration.w1.3")] },
  { week: t("integration.w2"), title: t("integration.w2.title"), points: [t("integration.w2.1"), t("integration.w2.2"), t("integration.w2.3")] },
  { week: t("integration.w3"), title: t("integration.w3.title"), points: [t("integration.w3.1"), t("integration.w3.2"), t("integration.w3.3")] }];


  return (
    <section id="integration" className="py-24 bg-gradient-section-alt">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-foreground mb-4">
            {t("integration.title1")} <span className="text-primary">{t("integration.title2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-sans">{t("integration.sub")}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((step, i) =>
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="glass-card p-6 relative">
              <span className="text-xs font-sans font-bold text-accent tracking-[0.15em] uppercase">{step.week}</span>
              <h3 className="font-sans text-lg font-bold text-foreground mt-2 mb-4">{step.title}</h3>
              <ul className="space-y-2.5">
                {step.points.map((point) =>
              <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={16} />
                    {point}
                  </li>
              )}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default IntegrationSection;